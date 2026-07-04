/* Generate clean branded DPT bottle mockups for products without a photo,
   composited onto the same soft background. Run: node scripts/gen-bottles.cjs */
const sharp = require("sharp");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "products");
const LOGO = path.join(ROOT, "public", "logo-v2.png");
const BGSRC = path.join(ROOT, ".scratch", "bg-src.jpg");
const CW = 1000, CH = 750, WHITE = { r: 255, g: 255, b: 255 };

// bottle canvas
const BW = 620, BH = 880;

function esc(s) { return s.replace(/&/g, "&amp;"); }

function label(name, sub, size, textDark) {
  // name may be 1-2 lines
  const lines = name.split("\n");
  const nameSvg = lines
    .map((l, i) => `<text x="310" y="${470 + i * 52}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="46" fill="${textDark}">${esc(l)}</text>`)
    .join("");
  const subY = 470 + lines.length * 52 + 10;
  return `
    <rect x="150" y="245" width="320" height="445" rx="26" fill="#ffffff"/>
    <rect x="150" y="245" width="320" height="445" rx="26" fill="none" stroke="#e5e7eb" stroke-width="2"/>
    ${nameSvg}
    <rect x="205" y="${subY}" width="210" height="40" rx="20" fill="${textDark}"/>
    <text x="310" y="${subY + 27}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="21" fill="#ffffff">${esc(sub)}</text>
    <text x="310" y="655" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="${textDark}">${esc(size)}</text>`;
}

function grad(id, c1, c2) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="${c1}"/><stop offset="0.5" stop-color="${c2}"/><stop offset="1" stop-color="${c1}"/></linearGradient>`;
}

function pumpBottle(o) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${BW}" height="${BH}" viewBox="0 0 ${BW} ${BH}">
    <defs>${grad("g", o.light, o.dark)}</defs>
    <rect x="285" y="18" width="52" height="80" rx="10" fill="${o.cap}"/>
    <rect x="250" y="40" width="150" height="34" rx="17" fill="${o.cap}"/>
    <rect x="382" y="46" width="66" height="22" rx="11" fill="${o.cap}"/>
    <rect x="250" y="96" width="120" height="44" rx="10" fill="${o.cap}"/>
    <path d="M175 175 Q175 140 310 140 Q445 140 445 175 L462 770 Q462 830 310 830 Q158 830 158 770 Z" fill="url(#g)"/>
    <rect x="205" y="200" width="34" height="560" rx="17" fill="#ffffff" opacity="0.20"/>
    ${label(o.name, o.sub, o.size, o.textDark)}
  </svg>`;
}

function jugBottle(o) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${BW}" height="${BH}" viewBox="0 0 ${BW} ${BH}">
    <defs>${grad("g", o.light, o.dark)}</defs>
    <rect x="250" y="30" width="130" height="70" rx="12" fill="${o.cap}"/>
    <rect x="240" y="92" width="150" height="40" rx="10" fill="${o.cap}"/>
    <path d="M150 175 Q150 140 300 140 Q450 140 450 175 L470 780 Q470 835 300 835 Q140 835 140 780 Z" fill="url(#g)"/>
    <path d="M470 250 q95 10 95 130 q0 120 -95 130 l0 -60 q40 -10 40 -70 q0 -60 -40 -70 Z" fill="url(#g)"/>
    <rect x="185" y="205" width="32" height="580" rx="16" fill="#ffffff" opacity="0.20"/>
    ${label(o.name, o.sub, o.size, o.textDark)}
  </svg>`;
}

function canBottle(o) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${BW}" height="${BH}" viewBox="0 0 ${BW} ${BH}">
    <defs>${grad("g", o.light, o.dark)}</defs>
    <rect x="255" y="20" width="110" height="46" rx="10" fill="${o.cap}"/>
    <rect x="240" y="60" width="140" height="70" rx="14" fill="${o.cap}"/>
    <rect x="360" y="74" width="40" height="22" rx="6" fill="${o.cap}"/>
    <rect x="185" y="150" width="250" height="690" rx="40" fill="url(#g)"/>
    <rect x="210" y="185" width="30" height="620" rx="15" fill="#ffffff" opacity="0.20"/>
    ${label(o.name, o.sub, o.size, o.textDark)}
  </svg>`;
}

const products = [
  { slug: "sanitizer", shape: pumpBottle, light: "#4FC3F7", dark: "#1976D2", cap: "#0D47A1", textDark: "#0B4EA2", name: "SANITIZER", sub: "70% Alcohol", size: "500 ml" },
  { slug: "liquid-soap", shape: pumpBottle, light: "#66BB6A", dark: "#2E7D32", cap: "#1B5E20", textDark: "#22862c", name: "LIQUID SOAP", sub: "Gentle Care", size: "500 ml" },
  { slug: "fabric-conditioner", shape: jugBottle, light: "#B085E0", dark: "#7B3FBF", cap: "#5E2E9E", textDark: "#5E2E9E", name: "FABRIC\nCONDITIONER", sub: "Blossom Soft", size: "1 Ltr." },
  { slug: "car-shampoo", shape: jugBottle, light: "#EF5350", dark: "#C62828", cap: "#0B4EA2", textDark: "#C62828", name: "CAR\nSHAMPOO", sub: "High Foam Wash", size: "500 ml" },
  { slug: "room-freshener", shape: canBottle, light: "#9575CD", dark: "#5E35B1", cap: "#4527A0", textDark: "#5E35B1", name: "ROOM\nFRESHENER", sub: "Lavender", size: "250 ml" },
];

async function buildBg() {
  const base = await sharp(BGSRC).resize(CW, CH, { fit: "cover" }).blur(22).modulate({ brightness: 1.12, saturation: 0.9 }).toBuffer();
  const wash = await sharp({ create: { width: CW, height: CH, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0.45 } } }).png().toBuffer();
  return sharp(base).composite([{ input: wash }]).flatten({ background: WHITE }).png().toBuffer();
}

(async () => {
  const bg = await buildBg();
  const logo = await sharp(LOGO).resize(168).png().toBuffer();
  // ground shadow (soft ellipse)
  const shadow = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}"><ellipse cx="500" cy="700" rx="200" ry="30" fill="#0b2b40" opacity="0.22"/></svg>`)).blur(12).png().toBuffer();

  for (const p of products) {
    const svg = p.shape(p);
    const bottle = await sharp(Buffer.from(svg), { density: 200 })
      .resize(BW, BH)
      .composite([{ input: logo, top: 262, left: Math.round((BW - 168) / 2) }])
      .png()
      .toBuffer();
    // scale bottle to fit canvas height
    const targetH = 660;
    const scaled = await sharp(bottle).resize({ height: targetH }).png().toBuffer();
    const meta = await sharp(scaled).metadata();
    const left = Math.round((CW - meta.width) / 2);
    const top = CH - targetH - 30;
    await sharp(bg)
      .composite([{ input: shadow }, { input: scaled, top, left }])
      .flatten({ background: WHITE })
      .png()
      .toFile(path.join(OUT, `${p.slug}-v2.png`));
    console.log("generated", p.slug);
  }

  // montage
  const cols = 5, tw = 260, th = 195, pad = 8;
  const comp = [];
  for (let i = 0; i < products.length; i++) {
    const buf = await sharp(path.join(OUT, `${products[i].slug}-v2.png`)).resize(tw, th, { fit: "cover" }).png().toBuffer();
    comp.push({ input: buf, left: (i % cols) * (tw + pad) + pad, top: Math.floor(i / cols) * (th + pad) + pad });
  }
  await sharp({ create: { width: cols * (tw + pad) + pad, height: Math.ceil(products.length / cols) * (th + pad) + pad, channels: 3, background: { r: 226, g: 232, b: 240 } } })
    .composite(comp).png().toFile(path.join(ROOT, "scratch-montage.png"));
  console.log("done");
})();
