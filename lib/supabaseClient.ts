// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// export const supabase = createClient(supabaseUrl, supabaseKey);

// lib/supabase.ts — stub (projets Supabase inaccessibles depuis juin 2024)
// Proxy infiniment chainable, résout avec des données vides. Ne crash pas au build.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeBuilder(): any {
  const resolved = Promise.resolve({ data: [] as unknown[], count: 0, error: null });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Proxy(resolved as any, {
    get(target, prop) {
      if (prop === "then" || prop === "catch" || prop === "finally") {
        return target[prop].bind(target);
      }
      // Toute autre méthode (select, insert, update, eq, order, limit…)
      return () => makeBuilder();
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase: any = {
  from: () => makeBuilder(),
  functions: {
    invoke: async () => ({ data: null, error: null }),
  },
};
