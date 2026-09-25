import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceIcon = path.resolve(__dirname, '../public/pwa-512x512.png');
const sourceMaskable = path.resolve(__dirname, '../public/pwa-maskable-512x512.png');
const resDir = path.resolve(__dirname, '../android/app/src/main/res');

const iconSizes = [
  { dir: 'mipmap-mdpi', size: 48 },
  { dir: 'mipmap-hdpi', size: 72 },
  { dir: 'mipmap-xhdpi', size: 96 },
  { dir: 'mipmap-xxhdpi', size: 144 },
  { dir: 'mipmap-xxxhdpi', size: 192 },
];

async function generate() {
  if (!fs.existsSync(sourceIcon)) {
    console.error('Source icon not found at', sourceIcon);
    return;
  }

  for (const { dir, size } of iconSizes) {
    const targetDir = path.join(resDir, dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Square Launcher icon
    await sharp(sourceIcon)
      .resize(size, size)
      .toFile(path.join(targetDir, 'ic_launcher.png'));

    // Round launcher icon
    await sharp(sourceMaskable || sourceIcon)
      .resize(size, size)
      .toFile(path.join(targetDir, 'ic_launcher_round.png'));

    // Foreground icon for adaptive icons (scaled ~72% within 108dp base canvas)
    const fgSize = Math.round(size * 1.5);
    await sharp(sourceIcon)
      .resize(fgSize, fgSize, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 0 } })
      .toFile(path.join(targetDir, 'ic_launcher_foreground.png'));

    console.log(`Generated icons for ${dir} (${size}x${size})`);
  }

  // Also generate splash screen drawables in drawable-port-* directories
  const splashSizes = [
    { dir: 'drawable-port-mdpi', width: 320, height: 480 },
    { dir: 'drawable-port-hdpi', width: 480, height: 800 },
    { dir: 'drawable-port-xhdpi', width: 720, height: 1280 },
    { dir: 'drawable-port-xxhdpi', width: 960, height: 1600 },
    { dir: 'drawable-port-xxxhdpi', width: 1280, height: 1920 },
  ];

  for (const { dir, width, height } of splashSizes) {
    const targetDir = path.join(resDir, dir);
    if (fs.existsSync(targetDir)) {
      const iconDimension = Math.min(width, height) * 0.4;
      const resizedIcon = await sharp(sourceIcon)
        .resize(Math.round(iconDimension), Math.round(iconDimension))
        .toBuffer();

      await sharp({
        create: {
          width,
          height,
          channels: 4,
          background: { r: 10, g: 10, b: 10, alpha: 1 }, // Theme dark color #0a0a0a
        },
      })
        .composite([{ input: resizedIcon, gravity: 'center' }])
        .png()
        .toFile(path.join(targetDir, 'splash.png'));

      console.log(`Generated splash for ${dir}`);
    }
  }

  console.log('All Android icons and splash assets successfully generated!');
}

generate().catch(console.error);
