// generate-admin-hash.ts
//deno run --allow-read --allow-write generate-admin-hash.ts
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

const password = prompt("Entrez le mot de passe admin :") || "";
if (!password) Deno.exit(1);

const hash = await hashPassword(password);
console.log("✅ Hash SHA-256 généré pour ADMIN_PASSWORD_HASH :");
console.log(hash);
