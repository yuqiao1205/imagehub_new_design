// scripts/convert-heic-to-jpg.mjs
// Convert all .heic images inside ~/Downloads/waiting (or $WAITING_DIR) to .jpg.

import { readdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import convert from "heic-convert";

const DIR = process.env.WAITING_DIR ?? path.join(os.homedir(), "Downloads", "waiting");

function toSafeJpgName(filename) {
  const base = path.parse(filename).name;

  const safeBase = base
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");

  return `${safeBase || "image"}.jpg`;
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function uniqueOutputPath(dir, desiredName) {
  const parsed = path.parse(desiredName);
  let candidate = desiredName;
  let i = 2;
  while (await exists(path.join(dir, candidate))) {
    candidate = `${parsed.name}-${i}${parsed.ext}`;
    i += 1;
  }
  return { outputName: candidate, outputPath: path.join(dir, candidate) };
}

async function convertOneHeic(file) {
  const inputPath = path.join(DIR, file);
  const desiredName = toSafeJpgName(file);
  const { outputName, outputPath } = await uniqueOutputPath(DIR, desiredName);

  const inputBuffer = await readFile(inputPath);

  const outputArrayBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 1,
  });

  const nodeBuffer = Buffer.isBuffer(outputArrayBuffer)
    ? outputArrayBuffer
    : Buffer.from(outputArrayBuffer);

  await writeFile(outputPath, nodeBuffer);
  console.log(`Converted: ${file} -> ${outputName}`);

  return { inputPath, outputPath, outputName };
}

async function main() {
  const files = await readdir(DIR);
  const heicFiles = files.filter((f) => /\.heic$/i.test(f));

  if (heicFiles.length === 0) {
    console.log("No .heic files found in", DIR);
    return;
  }

  const results = [];
  for (const file of heicFiles) {
    try {
      results.push(await convertOneHeic(file));
    } catch (err) {
      console.error("Failed to convert", file, err);
    }
  }

  console.log("Done. Converted files:", results.map((r) => r.outputName));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
