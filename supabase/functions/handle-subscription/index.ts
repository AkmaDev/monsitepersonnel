import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const resend = new Resend(resendApiKey);

interface SubscriptionRequest {
  email: string;
  action: 'subscribe' | 'unsubscribe';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, action }: SubscriptionRequest = await req.json();

    if (!email || !action) {
      return new Response(
        JSON.stringify({ error: "Email and action are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (action === 'subscribe') {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from("subscribers")
        .select("*")
        .eq("email", email)
        .single();

      if (existingSubscriber) {
        if (existingSubscriber.status === 'active') {
          return new Response(
            JSON.stringify({ 
              success: true, 
              message: 'Tu es déjà inscrit à la liste ! 🎉',
              alreadySubscribed: true 
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            }
          );
        } else {
          // Reactivate subscription if it was disabled
          const { error: updateError } = await supabase
            .from("subscribers")
            .update({ 
              status: 'active',
              unsubscribed_at: null 
            })
            .eq("email", email);

          if (updateError) {
            console.error("Error updating subscription:", updateError);
            throw updateError;
          }
        }
      } else {
        // Create new subscription
        const { error: insertError } = await supabase
          .from("subscribers")
          .insert([{ email, status: 'active' }]);

        if (insertError) {
          // Handle unique constraint violation
          if (insertError.code === '23505') {
            return new Response(
              JSON.stringify({ 
                success: true, 
                message: 'Tu es déjà inscrit à la liste ! 🎉',
                alreadySubscribed: true 
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json", ...corsHeaders },
              }
            );
          }
          console.error("Error creating subscription:", insertError);
          throw insertError;
        }
      }

      // Envoyer email de confirmation
      try {
        await resend.emails.send({
          from: "Mail Reach Notify <notifications@resend.dev>",
          to: [email],
          subject: "✅ Inscription confirmée !",
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
              <div style="background: linear-gradient(135deg, #c084fc, #a855f7); padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 2rem; font-weight: bold;">🎉 Bienvenue !</h1>
              </div>
              
              <div style="background: white; padding: 2rem; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #374151; margin-top: 0;">Merci de vous être inscrit !</h2>
                
                <p style="color: #6b7280; line-height: 1.6;">
                  Votre inscription à <strong>Mail Reach Notify</strong> a été confirmée avec succès. 
                  Vous serez parmi les premiers à être informés lors du lancement officiel !
                </p>
                
                <div style="background: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                  <p style="margin: 0; color: #374151; font-size: 1rem;">
                    <strong>🚀 Ce qui vous attend :</strong><br/>
                    • Notifications en temps réel<br/>
                    • Accès prioritaire aux nouvelles fonctionnalités<br/>
                    • Contenu exclusif pour les early adopters
                  </p>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0;" />
                
                <div style="color: #9ca3af; font-size: 0.875rem; text-align: center;">
                  <p>Vous recevez cet email suite à votre inscription volontaire.</p>
                  <p>Si vous changez d'avis, vous pourrez vous désabonner à tout moment.</p>
                </div>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
        // Ne pas faire échouer la requête si l'email échoue
      }

      return new Response(
        JSON.stringify({ 
          success: true,
          message: "Successfully subscribed", 
          email,
          status: 'active'
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );

    } else if (action === 'unsubscribe') {
      // Désabonner l'utilisateur
      const { error: updateError } = await supabase
        .from("subscribers")
        .update({ 
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString()
        })
        .eq("email", email);

      if (updateError) {
        console.error("Error unsubscribing:", updateError);
        throw updateError;
      }

      return new Response(
        JSON.stringify({ 
          message: "Successfully unsubscribed", 
          email,
          status: 'unsubscribed'
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use 'subscribe' or 'unsubscribe'" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Error in handle-subscription function:", error);
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errMsg }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);