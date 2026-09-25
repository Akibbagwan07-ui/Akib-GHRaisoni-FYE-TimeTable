import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Create crisp, high-contrast SVG
const svgStandard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#ca8a04" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  
  <!-- Rounded Base -->
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <rect x="12" y="12" width="488" height="488" rx="100" fill="none" stroke="url(#borderGrad)" stroke-width="6"/>

  <!-- Calendar Card Outline -->
  <g transform="translate(96, 80)">
    <!-- Calendar Top Bar -->
    <rect x="0" y="30" width="320" height="290" rx="36" fill="#27272a" stroke="#3f3f46" stroke-width="4"/>
    <path d="M0 66 C0 46.1 16.1 30 36 30 L284 30 C303.9 30 320 46.1 320 66 L320 100 L0 100 Z" fill="url(#accent)"/>
    
    <!-- Calendar Rings -->
    <rect x="65" y="10" width="22" height="40" rx="11" fill="#fef08a"/>
    <rect x="233" y="10" width="22" height="40" rx="11" fill="#fef08a"/>
    
    <!-- Time Table Grid Blocks inside calendar -->
    <rect x="40" y="130" width="70" height="60" rx="12" fill="#eab308" fill-opacity="0.9"/>
    <rect x="125" y="130" width="70" height="60" rx="12" fill="#52525b"/>
    <rect x="210" y="130" width="70" height="60" rx="12" fill="#52525b"/>
    
    <rect x="40" y="210" width="70" height="60" rx="12" fill="#52525b"/>
    <rect x="125" y="210" width="70" height="60" rx="12" fill="#eab308" fill-opacity="0.9"/>
    <rect x="210" y="210" width="70" height="60" rx="12" fill="#52525b"/>
  </g>

  <!-- Typography: FYE & GHRCEM -->
  <text x="256" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#facc15" text-anchor="middle" letter-spacing="4">FYE TIMETABLE</text>
  <text x="256" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#a1a1aa" text-anchor="middle" letter-spacing="2">G H RAISONI JALGAON</text>
</svg>`;

// 2. Maskable SVG: Icon content placed within central 75% safe-zone with generous dark background bleed
const svgMaskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="accentMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  </defs>
  
  <!-- Full Bleed Square (Android will mask/crop this safely) -->
  <rect width="512" height="512" fill="url(#bgMask)"/>

  <!-- Centered Safe Zone Content (Scaled to 75% inside 512x512) -->
  <g transform="translate(256, 256) scale(0.72) translate(-256, -256)">
    <!-- Calendar Card Outline -->
    <g transform="translate(96, 75)">
      <rect x="0" y="30" width="320" height="290" rx="36" fill="#27272a" stroke="#3f3f46" stroke-width="4"/>
      <path d="M0 66 C0 46.1 16.1 30 36 30 L284 30 C303.9 30 320 46.1 320 66 L320 100 L0 100 Z" fill="url(#accentMask)"/>
      
      <!-- Calendar Rings -->
      <rect x="65" y="10" width="22" height="40" rx="11" fill="#fef08a"/>
      <rect x="233" y="10" width="22" height="40" rx="11" fill="#fef08a"/>
      
      <!-- Time Table Grid Blocks -->
      <rect x="40" y="130" width="70" height="60" rx="12" fill="#eab308"/>
      <rect x="125" y="130" width="70" height="60" rx="12" fill="#52525b"/>
      <rect x="210" y="130" width="70" height="60" rx="12" fill="#52525b"/>
      
      <rect x="40" y="210" width="70" height="60" rx="12" fill="#52525b"/>
      <rect x="125" y="210" width="70" height="60" rx="12" fill="#eab308"/>
      <rect x="210" y="210" width="70" height="60" rx="12" fill="#52525b"/>
    </g>

    <text x="256" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#facc15" text-anchor="middle" letter-spacing="4">FYE TIMETABLE</text>
    <text x="256" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#a1a1aa" text-anchor="middle" letter-spacing="2">G H RAISONI JALGAON</text>
  </g>
</svg>`;

async function generate() {
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgStandard);
  console.log('Created public/icon.svg');

  const standardBuf = Buffer.from(svgStandard);
  const maskableBuf = Buffer.from(svgMaskable);

  // 192x192 PNG
  await sharp(standardBuf).resize(192, 192).png().toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Created public/pwa-192x192.png');

  // 512x512 PNG
  await sharp(standardBuf).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Created public/pwa-512x512.png');

  // Maskable 512x512 PNG
  await sharp(maskableBuf).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Created public/pwa-maskable-512x512.png');

  // Apple touch icon 180x180 PNG
  await sharp(standardBuf).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png');

  // Favicon 64x64 PNG
  await sharp(standardBuf).resize(64, 64).png().toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created public/favicon.png');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
