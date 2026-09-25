import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const subDir = path.resolve(distDir, 'Akib-GHRaisoni-FYE-TimeTable');

if (fs.existsSync(distDir)) {
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }
  const items = fs.readdirSync(distDir);
  for (const item of items) {
    if (item === 'Akib-GHRaisoni-FYE-TimeTable') continue;
    const srcPath = path.join(distDir, item);
    const destPath = path.join(subDir, item);
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  }
  console.log('[prepare-android] Successfully mirrored dist into dist/Akib-GHRaisoni-FYE-TimeTable for Capacitor and GitHub Pages');
}
