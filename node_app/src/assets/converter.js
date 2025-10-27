import webp from "webp-converter";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// эмуляция __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "./images/clients");
const outputDir = path.join(__dirname, "./images/clients");

// создаём выходную папку, если нет
fs.mkdirSync(outputDir, { recursive: true });

// список всех PNG
const files = fs.readdirSync(inputDir).filter((f) => f.toLowerCase().endsWith(".png"));

if (!files.length) {
  console.log("❌ PNG-файлы не найдены в:", inputDir);
  process.exit(0);
}

// конвертация
for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.png$/i, ".webp"));

  try {
    await webp.cwebp(inputPath, outputPath, "-q 90");
    console.log(`✅ ${file} → ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`❌ Ошибка при обработке ${file}:`, err);
  }
}
