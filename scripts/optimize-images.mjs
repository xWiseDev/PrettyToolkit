import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const inputRoot = path.resolve('assets/screenshots');
const outputRoot = path.resolve('public/screenshots');
const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff']);

const screenshotWidth = Number(process.env.SCREENSHOT_WIDTH || 720);
const webpQuality = Number(process.env.WEBP_QUALITY || 78);

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectImages(directory) {
  if (!(await exists(directory))) {
    return [];
  }

  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      images.push(...await collectImages(entryPath));
      continue;
    }

    if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

function outputPaths(sourcePath) {
  const relativePath = path.relative(inputRoot, sourcePath);
  const parsed = path.parse(relativePath);
  const outputDirectory = path.join(outputRoot, parsed.dir);

  return {
    outputDirectory,
    webp: path.join(outputDirectory, `${parsed.name}.webp`),
    png: path.join(outputDirectory, `${parsed.name}.png`),
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function optimizeImage(sourcePath) {
  const outputs = outputPaths(sourcePath);
  await mkdir(outputs.outputDirectory, { recursive: true });

  const pipeline = sharp(sourcePath)
    .rotate()
    .resize({
      width: screenshotWidth,
      withoutEnlargement: true,
    });

  await pipeline
    .clone()
    .webp({
      quality: webpQuality,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputs.webp);

  await pipeline
    .clone()
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false,
    })
    .toFile(outputs.png);

  const [sourceStats, webpStats, pngStats] = await Promise.all([
    stat(sourcePath),
    stat(outputs.webp),
    stat(outputs.png),
  ]);

  return {
    source: path.relative(process.cwd(), sourcePath),
    webp: path.relative(process.cwd(), outputs.webp),
    png: path.relative(process.cwd(), outputs.png),
    sourceSize: sourceStats.size,
    webpSize: webpStats.size,
    pngSize: pngStats.size,
  };
}

const images = await collectImages(inputRoot);

if (images.length === 0) {
  console.log(`No source screenshots found in ${path.relative(process.cwd(), inputRoot)}/`);
  console.log('Add originals under assets/screenshots/<app-slug>/, then run npm run optimize:images.');
  process.exit(0);
}

const results = [];

for (const image of images) {
  results.push(await optimizeImage(image));
}

for (const result of results) {
  console.log(`${result.source}`);
  console.log(`  webp ${formatBytes(result.webpSize)} -> ${result.webp}`);
  console.log(`  png  ${formatBytes(result.pngSize)} -> ${result.png}`);
  console.log(`  original ${formatBytes(result.sourceSize)}`);
}

console.log(`Optimized ${results.length} image${results.length === 1 ? '' : 's'}.`);
