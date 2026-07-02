/* Build clean 4:3 product images (bottle centered on white) into public/products.
   Auto-detects each bottle's bounding box from the catalog sheet.
   Run: node scripts/crop-products.cjs  */
const sharp = require("sharp");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SHEET = path.join(ROOT, "ChatGPT Image Jul 2, 2026, 01_42_48 PM.png");
const OUT = path.join(ROOT, "public", "products");
const W = 1000, H = 750;
const WHITE = { r: 255, g: 255, b: 255 };

// Row bands (y ranges) that contain the bottles, above the text labels.
const BAND1 = { top: 12, bottom: 418 };
const BAND2 = { top: 476, bottom: 852 };

// Which detected column-segment (left→right, 0-indexed) maps to which product slug.
const ROW1_MAP = { 4: "toilet-cleaner", 5: "floor-cleaner" };
const ROW2_MAP = {
  0: "glass-cleaner",
  2: "liquid-detergent",
  3: "phenyl",
  4: "bathroom-cleaner",
  5: "multi-purpose-cleaner",
  6: "kitchen-cleaner",
};

const individuals = [
  { slug: "hand-wash", file: path.join(ROOT, "handwash image.png") },
  { slug: "dish-wash-liquid", file: path.join(ROOT, "diswash.png") },
];

async function rawBand(band) {
  const height = band.bottom - band.top;
  const { data, info } = await sharp(SHEET)
    .extract({ left: 0, top: band.top, width: 1536, height })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height, channels: info.channels };
}

// Detect vertical bottle segments (column ranges) in a band.
function detectSegments({ data, w, h, channels }) {
  const inkCol = new Array(w).fill(0);
  for (let x = 0; x < w; x++) {
    let count = 0;
    for (let y = 0; y < h; y++) {
      const i = (y * w + x) * channels;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      // "ink" = noticeably not-white (catches coloured bottles + outlines of white bottles)
      if (r < 238 || g < 238 || b < 238) count++;
    }
    inkCol[x] = count;
  }
  const OCC = 14; // column counts as occupied if this many ink pixels
  const GAP = 22; // white gap (px) that separates two bottles
  const MINW = 45; // ignore slivers narrower than this
  const segments = [];
  let start = -1, gap = 0;
  for (let x = 0; x < w; x++) {
    const occupied = inkCol[x] >= OCC;
    if (occupied) {
      if (start < 0) start = x;
      gap = 0;
    } else if (start >= 0) {
      gap++;
      if (gap >= GAP) {
        const end = x - gap;
        if (end - start >= MINW) segments.push([start, end]);
        start = -1;
        gap = 0;
      }
    }
  }
  if (start >= 0 && w - start >= MINW) segments.push([start, w - 1]);
  return { segments, inkCol };
}

// Tight vertical extent of ink within a column range of a band.
function vExtent({ data, w, h, channels }, x0, x1) {
  let top = h, bottom = 0;
  for (let y = 0; y < h; y++) {
    let count = 0;
    for (let x = x0; x <= x1; x++) {
      const i = (y * w + x) * channels;
      if (data[i] < 238 || data[i + 1] < 238 || data[i + 2] < 238) count++;
    }
    if (count >= 6) {
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
  return { top, bottom };
}

async function finish(box, slug) {
  await sharp(SHEET)
    .extract(box)
    .resize(W, H, { fit: "contain", background: WHITE })
    .flatten({ background: WHITE })
    .png()
    .toFile(path.join(OUT, `${slug}.png`));
  console.log("wrote", slug, JSON.stringify(box));
}

async function processBand(band, map) {
  const raw = await rawBand(band);
  const { segments } = detectSegments(raw);
  console.log(`band ${band.top}-${band.bottom}: ${segments.length} segments`, segments.map((s) => `${s[0]}-${s[1]}`).join(" | "));
  const done = [];
  for (let idx = 0; idx < segments.length; idx++) {
    const slug = map[idx];
    if (!slug) continue;
    const [x0, x1] = segments[idx];
    const { top, bottom } = vExtent(raw, x0, x1);
    const pad = 14;
    const left = Math.max(0, x0 - pad);
    const topAbs = Math.max(0, band.top + top - pad);
    const width = Math.min(1536 - left, x1 - x0 + pad * 2);
    const height = Math.min(1024 - topAbs, bottom - top + pad * 2);
    await finish({ left, top: topAbs, width, height }, slug);
    done.push(slug);
  }
  return done;
}

(async () => {
  const a = await processBand(BAND1, ROW1_MAP);
  const b = await processBand(BAND2, ROW2_MAP);
  for (const i of individuals) {
    await sharp(i.file).trim({ background: "#ffffff", threshold: 25 }).resize(W, H, { fit: "contain", background: WHITE }).flatten({ background: WHITE }).png().toFile(path.join(OUT, `${i.slug}.png`));
    console.log("wrote", i.slug, "(individual)");
  }

  // montage for verification
  const all = [...a, ...b, ...individuals.map((i) => i.slug)];
  const cols = 5, tw = 260, th = 195, pad = 8;
  const rows = Math.ceil(all.length / cols);
  const comp = [];
  for (let idx = 0; idx < all.length; idx++) {
    const buf = await sharp(path.join(OUT, `${all[idx]}.png`)).resize(tw, th, { fit: "contain", background: WHITE }).flatten({ background: WHITE }).png().toBuffer();
    comp.push({ input: buf, left: (idx % cols) * (tw + pad) + pad, top: Math.floor(idx / cols) * (th + pad) + pad });
  }
  await sharp({ create: { width: cols * (tw + pad) + pad, height: rows * (th + pad) + pad, channels: 3, background: { r: 226, g: 232, b: 240 } } })
    .composite(comp).png().toFile(path.join(ROOT, "scratch-montage.png"));
  console.log("ALL:", all.join(", "));
})();
