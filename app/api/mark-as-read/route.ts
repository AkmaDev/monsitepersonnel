// // app/api/mark-as-read/route.ts
// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function POST(req: Request) {
//   const { contactId } = await req.json();
//   try {
//     const { data, error } = await supabase
//       .from("contacts")
//       .update({ status: "read" })
//       .eq("id", contactId)
//       .select();

//     if (error) throw error;
//     if (!data || data.length === 0)
//       return NextResponse.json({ error: "Contact introuvable" }, { status: 404 });

//     return NextResponse.json({ message: "Message marqué comme lu" });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Impossible de mettre à jour le contact" }, { status: 500 });
//   }
// }


import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { contactId } = await req.json();

  try {
    const { data, error } = await supabase
      .from("contacts")
      .update({ status: "read" })
      .eq("id", contactId)
      .select();

    if (error) throw error;
    if (!data || data.length === 0)
      return NextResponse.json({ error: "Contact introuvable" }, { status: 404 });

    return NextResponse.json({ message: "Message marqué comme lu" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible de mettre à jour le contact" },
      { status: 500 }
    );
  }
}
