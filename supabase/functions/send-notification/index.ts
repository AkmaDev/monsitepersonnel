// import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
// import { Resend } from "npm:resend@2.0.0";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers":
//     "authorization, x-client-info, apikey, content-type",
// };

// const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
// const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
// const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

// const supabase = createClient(supabaseUrl, supabaseServiceKey);
// const resend = new Resend(resendApiKey);

// interface NotificationRequest {
//   subject: string;
//   content: string;
//   fromEmail?: string;
//   fromName?: string;
// }

// const handler = async (req: Request): Promise<Response> => {
//   // Handle CORS preflight requests
//   if (req.method === "OPTIONS") {
//     return new Response(null, { headers: corsHeaders });
//   }

//   try {
//     const { subject, content, fromEmail = "notifications@resend.dev", fromName = "Mail Reach Notify" }: NotificationRequest = await req.json();

//     // Récupérer tous les abonnés actifs
//     const { data: subscribers, error: fetchError } = await supabase
//       .from("subscribers")
//       .select("email")
//       .eq("status", "active");

//     if (fetchError) {
//       console.error("Error fetching subscribers:", fetchError);
//       throw fetchError;
//     }

//     if (!subscribers || subscribers.length === 0) {
//       return new Response(
//         JSON.stringify({ message: "No active subscribers found" }),
//         {
//           status: 200,
//           headers: { "Content-Type": "application/json", ...corsHeaders },
//         }
//       );
//     }

//     console.log(`Sending notification to ${subscribers.length} subscribers`);

//     // Envoyer l'email à tous les abonnés
//     const emailPromises = subscribers.map(async (subscriber) => {
//       try {
//         const emailResponse = await resend.emails.send({
//           from: `${fromName} <${fromEmail}>`,
//           to: [subscriber.email],
//           subject: subject,
//           html: `
//             <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
//               <div style="background: linear-gradient(135deg, #c084fc, #a855f7); padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
//                 <h1 style="color: white; margin: 0; font-size: 2rem; font-weight: bold;">🎉 Bonne nouvelle !</h1>
//               </div>
              
//               <div style="background: white; padding: 2rem; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
//                 <div style="margin-bottom: 2rem;">
//                   ${content}
//                 </div>
                
//                 <div style="text-align: center; margin: 2rem 0;">
//                   <a href="https://lovable.app" 
//                      style="background: linear-gradient(135deg, #c084fc, #a855f7); 
//                             color: white; 
//                             padding: 1rem 2rem; 
//                             text-decoration: none; 
//                             border-radius: 8px; 
//                             font-weight: bold;
//                             display: inline-block;">
//                     Découvrir maintenant
//                   </a>
//                 </div>
                
//                 <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0;" />
                
//                 <div style="color: #64748b; font-size: 0.875rem; text-align: center;">
//                   <p>Vous recevez cet email car vous vous êtes inscrit à nos notifications.</p>
//                   <p>Si vous ne souhaitez plus recevoir ces emails, 
//                      <a href="#" style="color: #c084fc; text-decoration: none;">cliquez ici pour vous désabonner</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           `,
//         });

//         return { email: subscriber.email, success: true, response: emailResponse };
//       } catch (error) {
//   console.error(`Failed to send email to ${subscriber.email}:`, error);
//   const errMsg = error instanceof Error ? error.message : "Unknown error";
//   return { email: subscriber.email, success: false, error: errMsg };
// }
//     });

//     const results = await Promise.allSettled(emailPromises);
    
//     const successful = results.filter(result => 
//       result.status === 'fulfilled' && result.value.success
//     ).length;
    
//     const failed = results.length - successful;

//     console.log(`Notification sent: ${successful} successful, ${failed} failed`);

//     return new Response(
//       JSON.stringify({
//         message: "Notification campaign completed",
//         successful,
//         failed,
//         total: subscribers.length
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json", ...corsHeaders },
//       }
//     );

//   } catch (error) {
//   console.error("Error in send-notification function:", error);
//   const errMsg = error instanceof Error ? error.message : "Unknown error";
//   return new Response(
//     JSON.stringify({ error: errMsg }),
//     {
//       status: 500,
//       headers: { "Content-Type": "application/json", ...corsHeaders },
//     }
//   );
// }
// };

// serve(handler);



import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(resendApiKey);

interface NotificationRequest {
  subject: string;
  content: string;
  fromEmail?: string;
  fromName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, content, fromEmail = "notifications@resend.dev", fromName = "Mail Reach Notify" }: NotificationRequest = await req.json();

    // Récupérer tous les abonnés actifs
    const { data: subscribers, error: fetchError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("status", "active");

    if (fetchError) {
      console.error("Error fetching subscribers:", fetchError);
      throw fetchError;
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ message: "No active subscribers found" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Sending notification to ${subscribers.length} subscribers`);

    // Envoyer l'email à tous les abonnés
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        const emailResponse = await resend.emails.send({
          from: `${fromName} <${fromEmail}>`,
          to: [subscriber.email],
          subject: subject,
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
              <div style="background: linear-gradient(135deg, #c084fc, #a855f7); padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 2rem; font-weight: bold;">🎉 Bonne nouvelle !</h1>
              </div>
              
              <div style="background: white; padding: 2rem; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="margin-bottom: 2rem;">
                  ${content}
                </div>
                
                <div style="text-align: center; margin: 2rem 0;">
                  <a href="https://lovable.app" 
                     style="background: linear-gradient(135deg, #c084fc, #a855f7); 
                            color: white; 
                            padding: 1rem 2rem; 
                            text-decoration: none; 
                            border-radius: 8px; 
                            font-weight: bold;
                            display: inline-block;">
                    Découvrir maintenant
                  </a>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0;" />
                
                <div style="color: #64748b; font-size: 0.875rem; text-align: center;">
                  <p>Vous recevez cet email car vous vous êtes inscrit à nos notifications.</p>
                  <p>Si vous ne souhaitez plus recevoir ces emails, 
                     <a href="#" style="color: #c084fc; text-decoration: none;">cliquez ici pour vous désabonner</a>
                  </p>
                </div>
              </div>
            </div>
          `,
        });

        return { email: subscriber.email, success: true, response: emailResponse };
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        return { email: subscriber.email, success: false, error: errMsg };
      }
    });

    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter(result => 
      result.status === 'fulfilled' && result.value.success
    ).length;
    
    const failed = results.length - successful;

    console.log(`Notification sent: ${successful} successful, ${failed} failed`);

    return new Response(
      JSON.stringify({
        message: "Notification campaign completed",
        successful,
        failed,
        total: subscribers.length
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Error in send-notification function:", error);
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