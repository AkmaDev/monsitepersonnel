// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// export const supabase = createClient(supabaseUrl, supabaseKey);

// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// Détecte si on est côté serveur
const isServer = typeof window === "undefined";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = isServer
  ? process.env.SUPABASE_SERVICE_ROLE_KEY!   // Clé server-only pour API routes
  : process.env.NEXT_PUBLIC_SUPABASE_KEY!; // Clé publique pour le client

export const supabase = createClient(supabaseUrl, supabaseKey);
