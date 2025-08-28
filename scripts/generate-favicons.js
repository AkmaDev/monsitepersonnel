// scripts/generate-favicons.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

const sizes = [16, 32, 48, 64, 96, 128, 256]; // tailles standards
const input = path.join(process.cwd(), "public", "favicon.png");
const outputDir = path.join(process.cwd(), "public", "favicons");

// Crée le dossier si nécessaire
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

sizes.forEach(async (size) => {
  const output = path.join(outputDir, `favicon-${size}x${size}.png`);
  await sharp(input).resize(size, size).toFile(output);
  console.log(`Generated ${output}`);
});

console.log("Favicons generated!");
