// app/api/contact/route.ts ou pages/api/contact.ts
// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { createClient } from "@supabase/supabase-js";
// import { z } from "zod";
// import crypto from "node:crypto";

// const {
//   RESEND_API_KEY,
//   SUPABASE_URL,
//   SUPABASE_SERVICE_ROLE_KEY,
//   CONTACT_FROM,
//   CONTACT_ADMIN_EMAIL,
//   ALLOWED_ORIGINS,
// } = process.env as Record<string, string>;

// const resend = new Resend(RESEND_API_KEY);
// const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { z } from "zod";
import crypto from "node:crypto";
import { supabase } from "@/lib/supabaseClient";

const {
  RESEND_API_KEY,
  CONTACT_FROM,
  CONTACT_ADMIN_EMAIL,
  ALLOWED_ORIGINS,
} = process.env as Record<string, string>;

const resend = new Resend(RESEND_API_KEY);

// ... ton code existant (validation, CORS, rate-limit, emails, etc.)

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
