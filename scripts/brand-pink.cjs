const sharp = require("sharp");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, ".scratch", "pink-src.jpg");
const LOGO = path.join(ROOT, "public", "logo.png");
const OUT = path.join(ROOT, "public", "brand", "cleaning-products.png");

(async () => {
  const base = sharp(SRC);
  const { width: W, height: H } = await base.metadata();
  // white rounded label with the DPT logo on it -> looks like product branding
  const LW = Math.round(W * 0.205), LH = Math.round(LW * 0.82);
  const card = await sharp(Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${LW}" height="${LH}"><rect x="2" y="2" width="${LW - 4}" height="${LH - 4}" rx="18" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/></svg>`
  )).png().toBuffer();
  const logo = await sharp(LOGO).resize(Math.round(LW * 0.82)).png().toBuffer();
  const lm = await sharp(logo).metadata();
  const label = await sharp(card)
    .composite([{ input: logo, left: Math.round((LW - lm.width) / 2), top: Math.round((LH - lm.height) / 2) }])
    .png().toBuffer();

  // place label on the big pink bottle's front (tuned for this photo)
  const left = Math.round(W * 0.335);
  const top = Math.round(H * 0.19);
  await base
    .composite([{ input: label, left, top }])
    .jpeg({ quality: 90 })
    .toFile(OUT.replace(".png", ".jpg"));
  // also save a small preview montage
  console.log("wrote", OUT.replace(".png", ".jpg"), `label ${LW}x${LH} at ${left},${top}`);
})();
