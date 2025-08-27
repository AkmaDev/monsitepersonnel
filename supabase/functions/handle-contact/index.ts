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

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
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

    // Sauvegarder le message de contact dans la base de données
    const { error: dbError } = await supabase
      .from("contacts")
      .insert([{
        name,
        email,
        subject,
        message,
        status: 'unread'
      }]);

    if (dbError) {
      console.error("Error saving contact message:", dbError);
      throw dbError;
    }

    // Envoyer email de confirmation à l'expéditeur
    try {
      await resend.emails.send({
        from: "Mail Reach Notify <notifications@contact.manasseakpovi.com>",
        to: [email],
        subject: "Confirmation de réception de votre message",
        text: `Bonjour ${name},

Nous avons bien reçu votre message concernant : "${subject}"

Récapitulatif de votre message :
"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"

Temps de réponse : Nous nous efforçons de répondre dans les 24-48h.
Suivi : Vous recevrez notre réponse directement à cette adresse email.

Cet email confirme la réception de votre message.
Si vous n'avez pas envoyé ce message, veuillez l'ignorer.

Cordialement,
L'équipe Mail Reach Notify`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="background: linear-gradient(135deg, #c084fc, #a855f7); padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 2rem; font-weight: bold;">Message reçu</h1>
            </div>
            
            <div style="background: white; padding: 2rem; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #374151; margin-top: 0;">Bonjour ${name},</h2>
              
              <p style="color: #6b7280; line-height: 1.6;">
                Nous avons bien reçu votre message concernant : 
                <strong>"${subject}"</strong>
              </p>
              
              <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #c084fc;">
                <h3 style="margin-top: 0; color: #374151;">Récapitulatif de votre message</h3>
                <p style="margin: 0; color: #6b7280; font-style: italic;">
                  "${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"
                </p>
              </div>
              
              <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <p style="margin: 0; color: #475569; line-height: 1.6;">
                  <strong>Temps de réponse :</strong> Nous nous efforçons de répondre dans les 24-48 heures.<br/>
                  <strong>Suivi :</strong> Vous recevrez notre réponse directement à cette adresse email.
                </p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0;" />
              
              <div style="color: #64748b; font-size: 0.875rem; text-align: center;">
                <p style="margin: 0.5rem 0;">Cet email confirme la réception de votre message.</p>
                <p style="margin: 0.5rem 0;">Si vous n'avez pas envoyé ce message, veuillez l'ignorer.</p>
                <p style="margin: 1rem 0; font-weight: 500;">Cordialement, L'équipe Mail Reach Notify</p>
              </div>
            </div>
          </div>
        `,
      });

      // Envoyer notification à l'administrateur
      await resend.emails.send({
        from: "Mail Reach Notify <notifications@contact.manasseakpovi.com>",
        to: ["manews193@gmail.com"], // Remplacer par votre email admin
        subject: `Nouveau message de contact - ${subject}`,
        text: `Nouveau message de contact reçu

De : ${name} (${email})
Sujet : ${subject}

Message :
${message}

Pour répondre directement : mailto:${email}?subject=Re: ${subject}`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="background: linear-gradient(135deg, #1f2937, #374151); padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 1.5rem; font-weight: bold;">Nouveau message de contact</h1>
            </div>
            
            <div style="background: white; padding: 2rem; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <div style="margin-bottom: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 6px;">
                <strong style="color: #374151;">Expéditeur :</strong> ${name}<br/>
                <strong style="color: #374151;">Email :</strong> ${email}
              </div>
              
              <div style="margin-bottom: 1.5rem; padding: 1rem; background: #f1f5f9; border-radius: 6px;">
                <strong style="color: #374151;">Sujet :</strong> ${subject}
              </div>
              
              <div style="background: #fefefe; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #c084fc; margin: 1.5rem 0;">
                <strong style="color: #374151; display: block; margin-bottom: 0.5rem;">Message :</strong>
                <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 2rem; text-align: center;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="background: linear-gradient(135deg, #c084fc, #a855f7); 
                          color: white; 
                          padding: 12px 24px; 
                          text-decoration: none; 
                          border-radius: 6px; 
                          font-weight: 500;
                          display: inline-block;
                          font-size: 14px;">
                  Répondre directement
                </a>
              </div>
            </div>
          </div>
        `,
      });

    } catch (emailError) {
      console.error("Error sending confirmation emails:", emailError);
      // Ne pas faire échouer la requête si l'email échoue
    }

    console.log(`New contact message from ${name} (${email}): ${subject}`);

    return new Response(
      JSON.stringify({ 
        message: "Message sent successfully",
        status: 'received'
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Error in handle-contact function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);