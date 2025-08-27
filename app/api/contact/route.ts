// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { createClient } from "@supabase/supabase-js";
// import { z } from "zod";
// import crypto from "node:crypto";

// /** ---------- Config depuis .env ---------- */
// const {
//   RESEND_API_KEY,
//   SUPABASE_URL,
//   SUPABASE_SERVICE_ROLE_KEY,
//   CONTACT_FROM,             // ex: notifications@contact.manasseakpovi.com
//   CONTACT_ADMIN_EMAIL,      // ex: manews193@gmail.com
//   ALLOWED_ORIGINS,          // ex: https://manasseakpovi.com,https://www.manasseakpovi.com,http://localhost:3000
// } = process.env as Record<string, string>;

// const resend = new Resend(RESEND_API_KEY);
// const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// /** ---------- Validation ---------- */
// const ContactSchema = z.object({
//   name: z.string().min(2).max(100),
//   email: z.string().email().max(200),
//   subject: z.string().min(2).max(200),
//   message: z.string().min(10).max(5000),
//   // honeypot optionnel (ne DOIT PAS être rempli)
//   company: z.string().optional().default(""),
// });

// /** ---------- CORS (facultatif si même domaine) ---------- */
// const allowed = new Set(
//   (ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean)
// );

// function corsHeaders(origin: string | null) {
//   const base: Record<string, string> = {
//     "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
//     "Access-Control-Allow-Methods": "POST, OPTIONS",
//   };
//   if (origin && (allowed.size === 0 || allowed.has(origin))) {
//     base["Access-Control-Allow-Origin"] = origin;
//   }
//   return base;
// }

// /** ---------- Rate limit basique (en mémoire) ---------- */
// const BUCKET = new Map<string, { tokens: number; ts: number }>();
// const LIMIT = 5;           // 5 req
// const WINDOW_MS = 60_000;  // par minute

// function rateLimit(key: string) {
//   const now = Date.now();
//   const b = BUCKET.get(key) ?? { tokens: LIMIT, ts: now };
//   const refill = Math.floor((now - b.ts) / WINDOW_MS) * LIMIT;
//   const tokens = Math.min(LIMIT, b.tokens + refill);
//   const ok = tokens > 0;
//   BUCKET.set(key, { tokens: ok ? tokens - 1 : tokens, ts: now });
//   return ok;
// }

// /** ---------- Utils ---------- */
// function getClientIP(req: NextRequest) {
//   // Vercel/Proxies
//   const fwd = req.headers.get("x-forwarded-for");
//   if (fwd) return fwd.split(",")[0].trim();
//   return "unknown";
// }

// function textConfirm(name: string, subject: string, message: string) {
//   const preview = message.length > 200 ? `${message.slice(0, 200)}...` : message;
//   return `Bonjour ${name},

// Nous avons bien reçu votre message concernant: "${subject}"

// Récapitulatif:
// "${preview}"

// Temps de réponse: 24-48h.
// Vous recevrez notre réponse sur cette adresse.

// — Mail Reach Notify`;
// }

// function htmlConfirm(name: string, subject: string, message: string) {
//   const preview = message.length > 200 ? `${message.slice(0, 200)}...` : message;
//   return `
//   <div style="max-width:600px;margin:0 auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial;">
//     <div style="background:#7c3aed; background:linear-gradient(135deg,#c084fc,#a855f7);padding:20px;border-radius:10px 10px 0 0;color:#fff;text-align:center;">
//       <h1 style="margin:0;font-size:22px;">Message reçu</h1>
//     </div>
//     <div style="background:#fff;padding:20px;border-radius:0 0 10px 10px;border:1px solid #eee;border-top:0;">
//       <p>Bonjour <strong>${name}</strong>,</p>
//       <p>Nous avons bien reçu votre message concernant <strong>"${subject}"</strong>.</p>
//       <div style="background:#f8fafc;padding:12px 14px;border-left:4px solid #c084fc;border-radius:6px;margin:16px 0;">
//         <div style="color:#334155;font-size:14px;white-space:pre-wrap;">"${preview}"</div>
//       </div>
//       <p style="color:#475569;font-size:14px;">
//         <strong>Temps de réponse :</strong> 24–48h.<br/>
//         <strong>Suivi :</strong> Vous recevrez notre réponse sur cette adresse.
//       </p>
//       <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
//       <p style="color:#64748b;font-size:12px;text-align:center;margin:0;">
//         Cet email confirme la réception de votre message.<br/>
//         Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.
//       </p>
//     </div>
//   </div>`;
// }

// function htmlAdmin(name: string, email: string, subject: string, message: string) {
//   return `
//   <div style="max-width:600px;margin:0 auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial;">
//     <div style="background:#111827; background:linear-gradient(135deg,#1f2937,#374151);padding:18px;border-radius:10px 10px 0 0;color:#fff;text-align:center;">
//       <h1 style="margin:0;font-size:18px;">Nouveau message de contact</h1>
//     </div>
//     <div style="background:#fff;padding:20px;border-radius:0 0 10px 10px;border:1px solid #eee;border-top:0;">
//       <p style="margin:0 0 8px;"><strong>Expéditeur :</strong> ${name}</p>
//       <p style="margin:0 0 16px;"><strong>Email :</strong> ${email}</p>
//       <p style="margin:0 0 8px;"><strong>Sujet :</strong> ${subject}</p>
//       <div style="background:#f9fafb;padding:14px;border-left:4px solid #c084fc;border-radius:6px;margin:14px 0;">
//         <div style="white-space:pre-wrap;color:#334155;font-size:14px;">${message}</div>
//       </div>
//       <div style="text-align:center;margin-top:14px;">
//         <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
//            style="display:inline-block;padding:10px 16px;border-radius:8px;text-decoration:none;background:#a855f7;color:#fff;">
//            Répondre directement
//         </a>
//       </div>
//     </div>
//   </div>`;
// }

// /** ---------- OPTIONS ---------- */
// export async function OPTIONS(req: NextRequest) {
//   const origin = req.headers.get("origin");
//   return new NextResponse(null, { headers: corsHeaders(origin) });
// }

// /** ---------- POST ---------- */
// export async function POST(req: NextRequest) {
//   const origin = req.headers.get("origin");
//   const headers = corsHeaders(origin);

//   // CORS strict si whitelist fournie
//   if (origin && allowed.size > 0 && !allowed.has(origin)) {
//     return NextResponse.json({ error: "Origin not allowed" }, { status: 403, headers });
//   }

//   // Rate limit (clé = IP)
//   const ip = getClientIP(req);
//   if (!rateLimit(ip)) {
//     return NextResponse.json({ error: "Too many requests" }, { status: 429, headers });
//   }

//   // Parse + validation
//   let payload: z.infer<typeof ContactSchema>;
//   try {
//     payload = ContactSchema.parse(await req.json());
//   } catch (err) {
//     return NextResponse.json({ error: "Invalid payload", details: (err as Error).message }, { status: 400, headers });
//   }

//   const { name, email, subject, message, company } = payload;

//   // Honeypot (bots)
//   if (company && company.trim().length > 0) {
//     // On fait comme si tout allait bien (pour ne pas aider le bot)
//     return NextResponse.json({ message: "Ok" }, { status: 200, headers });
//   }

//   // Dédoublonnage simple : hash du contenu
//   const fingerprint = crypto.createHash("sha256").update(`${name}|${email}|${subject}|${message}`).digest("hex");

//   // Enregistrement DB (service role => bypass RLS)
//   const { error: dbError } = await supabase.from("contacts").insert({
//     name,
//     email,
//     subject,
//     message,
//     status: "unread",
//     ip,
//     user_agent: req.headers.get("user-agent") ?? null,
//     fingerprint,
//   });

//   if (dbError) {
//     // On n’arrête pas l’utilisateur pour un souci DB, mais on log l’erreur
//     console.error("[contacts.insert] error:", dbError);
//   }

//   // Envois d’emails (on isole les erreurs)
//   try {
//     // 1) Confirmation à l’expéditeur
//     await resend.emails.send({
//       from: `Mail Reach Notify <${CONTACT_FROM}>`,
//       to: [email],
//       subject: "✅ Message reçu - Nous vous répondrons bientôt",
//       text: textConfirm(name, subject, message),
//       html: htmlConfirm(name, subject, message),
//       headers: {
//         "List-Unsubscribe": `<mailto:${CONTACT_FROM}?subject=unsubscribe>`,
//       },
//     });
//   } catch (e) {
//     console.error("[resend:to-user] error:", e);
//   }

//   try {
//     // 2) Notification admin (avec Reply-To = utilisateur)
//     await resend.emails.send({
//       from: `Mail Reach Notify <${CONTACT_FROM}>`,
//       to: [CONTACT_ADMIN_EMAIL],
//       replyTo: [email],
//       subject: `🔔 Nouveau message de contact : ${subject}`,
//       text:
//         `De: ${name} <${email}>\nSujet: ${subject}\n\n${message}\n\nRépondre: ${email}`,
//       html: htmlAdmin(name, email, subject, message),
//     });
//   } catch (e) {
//     console.error("[resend:to-admin] error:", e);
//   }

//   return NextResponse.json(
//     { message: "Message sent successfully", status: "received" },
//     { status: 200, headers }
//   );
// }



// app/api/contact/route.ts ou pages/api/contact.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import crypto from "node:crypto";

const {
  RESEND_API_KEY,
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  CONTACT_FROM,
  CONTACT_ADMIN_EMAIL,
  ALLOWED_ORIGINS,
} = process.env as Record<string, string>;

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
  company: z.string().optional().default(""), // honeypot
});

const allowed = new Set(
  (ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean)
);

function corsHeaders(origin: string | null) {
  const base: Record<string, string> = {
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  if (origin && (allowed.size === 0 || allowed.has(origin))) {
    base["Access-Control-Allow-Origin"] = origin;
  }
  return base;
}

function getClientIP(req: NextRequest) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return "unknown";
}

const LIMIT = 5;
const WINDOW_MS = 60_000;
const BUCKET = new Map<string, { tokens: number; ts: number }>();

function rateLimit(key: string) {
  const now = Date.now();
  const b = BUCKET.get(key) ?? { tokens: LIMIT, ts: now };
  const refill = Math.floor((now - b.ts) / WINDOW_MS) * LIMIT;
  const tokens = Math.min(LIMIT, b.tokens + refill);
  BUCKET.set(key, { tokens: tokens > 0 ? tokens - 1 : tokens, ts: now });
  return tokens > 0;
}

/** ---------- OPTIONS ---------- */
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { headers: corsHeaders(origin) });
}

/** ---------- POST ---------- */
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (origin && allowed.size > 0 && !allowed.has(origin)) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403, headers });
  }

  const ip = getClientIP(req);
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers });
  }

  let payload: z.infer<typeof ContactSchema>;
  try {
    payload = ContactSchema.parse(await req.json());
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid payload", details: (err as Error).message },
      { status: 400, headers }
    );
  }

  const { name, email, subject, message, company } = payload;

  // Honeypot
  if (company && company.trim().length > 0) {
    return NextResponse.json({ message: "Ok" }, { status: 200, headers });
  }

  const fingerprint = crypto
    .createHash("sha256")
    .update(`${name}|${email}|${subject}|${message}`)
    .digest("hex");

  // DB insert
  try {
    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      subject,
      message,
      status: "unread",
      ip,
      user_agent: req.headers.get("user-agent") ?? null,
      fingerprint,
    });
    if (error) console.error("[contacts.insert] error:", error);
  } catch (e) {
    console.error("[contacts.insert] unexpected error:", e);
  }

  // Emails
  try {
    // 1️⃣ Confirmation à l'utilisateur
    await resend.emails.send({
      from: `Mail Reach Notify <${CONTACT_FROM}>`,
      to: [email],
      subject: "✅ Message reçu - Nous vous répondrons bientôt",
      text: `Bonjour ${name},\n\nNous avons bien reçu votre message concernant "${subject}".\n\nMessage: ${message.slice(
        0,
        200
      )}...\n\nTemps de réponse: 24-48h.\n`,
      html: `<p>Bonjour <strong>${name}</strong>,</p><p>Message reçu: ${message.slice(0, 200)}...</p>`,
      headers: {
        "List-Unsubscribe": `<mailto:${CONTACT_FROM}?subject=unsubscribe>`,
      },
    });
  } catch (e) {
    console.error("[resend:to-user] error:", e);
  }

  try {
    // 2️⃣ Notification admin
    await resend.emails.send({
      from: `Mail Reach Notify <${CONTACT_FROM}>`,
      to: [CONTACT_ADMIN_EMAIL],
      replyTo: [email], // ✅ camelCase
      subject: `🔔 Nouveau message de contact : ${subject}`,
      text: `De: ${name} <${email}>\nSujet: ${subject}\n\n${message}\n\nRépondre: ${email}`,
      html: `<p>De: ${name} &lt;${email}&gt;</p><p>Sujet: ${subject}</p><p>${message}</p>`,
    });
  } catch (e) {
    console.error("[resend:to-admin] error:", e);
  }

  return NextResponse.json(
    { message: "Message sent successfully", status: "received" },
    { status: 200, headers }
  );
}
