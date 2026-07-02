/* Composite each bottle (currently on white) onto a soft bright background + shadow.
   Reads from .scratch/white, writes to public/products. Run: node scripts/add-bg.cjs */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, ".scratch", "white");
const OUT = path.join(ROOT, "public", "products");
const W = 1000, H = 750;
const WHITE = { r: 255, g: 255, b: 255 };

async function buildBg() {
  const base = await sharp(path.join(ROOT, ".scratch", "bg-src.jpg"))
    .resize(W, H, { fit: "cover" })
    .blur(22)
    .modulate({ brightness: 1.12, saturation: 0.9 })
    .toBuffer();
  // Lighten with a translucent white wash so bottles pop and labels read clearly.
  const wash = await sharp({ create: { width: W, height: H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0.45 } } }).png().toBuffer();
  return await sharp(base).composite([{ input: wash }]).flatten({ background: WHITE }).png().toBuffer();
}

// Flood-fill from the border over near-white pixels → marks the outside background.
function floodOutside(data, w, h, ch, T) {
  const outside = new Uint8Array(w * h);
  const stack = [];
  const isWhite = (idx) => { const i = idx * ch; return data[i] >= T && data[i + 1] >= T && data[i + 2] >= T; };
  const push = (x, y) => { const idx = y * w + x; if (!outside[idx] && isWhite(idx)) { outside[idx] = 1; stack.push(idx); } };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
  while (stack.length) {
    const idx = stack.pop(); const x = idx % w, y = (idx - x) / w;
    if (x > 0) push(x - 1, y); if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1); if (y < h - 1) push(x, y + 1);
  }
  return outside;
}

async function process(slug, bg) {
  const { data, info } = await sharp(path.join(SRC, `${slug}.png`)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height, ch = info.channels;
  const outside = floodOutside(data, w, h, ch, 243);
  const subjCount = w * h - outside.reduce((a, v) => a + v, 0);
  // Safety: if flood ate almost everything (white bottle leak), fall back to keeping the white version.
  if (subjCount < w * h * 0.06) {
    fs.copyFileSync(path.join(SRC, `${slug}.png`), path.join(OUT, `${slug}.png`));
    console.log("KEPT white (flood leak):", slug);
    return;
  }
  const subj = Buffer.from(data);
  const mask = Buffer.alloc(w * h);
  for (let p = 0; p < w * h; p++) {
    const a = outside[p] ? 0 : 255;
    subj[p * 4 + 3] = a;
    mask[p] = a;
  }
  const subjPng = await sharp(subj, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
  const shadowMask = await sharp(mask, { raw: { width: w, height: h, channels: 1 } }).blur(15).toBuffer();
  const sh = Buffer.alloc(w * h * 4);
  for (let p = 0; p < w * h; p++) { sh[p * 4 + 3] = Math.round(shadowMask[p] * 0.28); }
  const shadowPng = await sharp(sh, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();

  await sharp(bg)
    .composite([{ input: shadowPng, top: 20, left: 8 }, { input: subjPng, top: 0, left: 0 }])
    .flatten({ background: WHITE })
    .png()
    .toFile(path.join(OUT, `${slug}.png`));
  console.log("bg-composited", slug);
}

(async () => {
  const bg = await buildBg();
  const slugs = fs.readdirSync(SRC).filter((f) => f.endsWith(".png")).map((f) => f.replace(".png", ""));
  for (const s of slugs) await process(s, bg);

  // montage
  const cols = 5, tw = 260, th = 195, pad = 8;
  const rows = Math.ceil(slugs.length / cols);
  const comp = [];
  for (let i = 0; i < slugs.length; i++) {
    const buf = await sharp(path.join(OUT, `${slugs[i]}.png`)).resize(tw, th, { fit: "cover" }).png().toBuffer();
    comp.push({ input: buf, left: (i % cols) * (tw + pad) + pad, top: Math.floor(i / cols) * (th + pad) + pad });
  }
  await sharp({ create: { width: cols * (tw + pad) + pad, height: rows * (th + pad) + pad, channels: 3, background: { r: 226, g: 232, b: 240 } } })
    .composite(comp).png().toFile(path.join(ROOT, "scratch-montage.png"));
  console.log("done:", slugs.join(", "));
})();
