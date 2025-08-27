// app/api/stats/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // clé serveur, jamais exposée au client

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
  try {
    // Compter les abonnés actifs
    const { count: subscribersCount, error: subsError } = await supabase
      .from("subscribers")
      .select("*", { count: "exact", head: true })
      .eq("status", "active");

    if (subsError) throw subsError;

    // Compter tous les contacts
    const { count: contactsCount, error: contactsError } = await supabase
      .from("contacts")
      .select("*", { count: "exact", head: true });

    if (contactsError) throw contactsError;

    // Compter les contacts non lus
    const { count: unreadContactsCount, error: unreadError } = await supabase
      .from("contacts")
      .select("*", { count: "exact", head: true })
      .eq("status", "unread");

    if (unreadError) throw unreadError;

    return NextResponse.json({
      subscribers: subscribersCount || 0,
      contacts: contactsCount || 0,
      unreadContacts: unreadContactsCount || 0,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Impossible de récupérer les stats" }, { status: 500 });
  }
}
