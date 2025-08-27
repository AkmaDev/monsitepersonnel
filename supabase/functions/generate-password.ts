//deno run --allow-read --allow-write generate-password.ts
const length = 20;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

function generateSecurePassword(length: number) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array); // aléatoire cryptographique
  return Array.from(array, x => chars[x % chars.length]).join('');
}

console.log("Mot de passe ultra sécurisé :", generateSecurePassword(length));
