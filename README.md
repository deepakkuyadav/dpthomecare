# DPT Home Care — Power of Hygiene

Premium marketing website for **DPT Home Care**, a cleaning products manufacturer & supplier based in Jaunpur, Uttar Pradesh.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide React**.

## ✨ Features

- Fully responsive, premium, minimal design (blue `#0B4EA2` / green `#2EAF39` brand)
- 15 product catalogue with search, category filter, and detailed product pages
- 12 SEO-optimised blog articles
- 25+ FAQs, 12 testimonials, industries, process, gallery
- Distributor / dealer lead-generation forms (open pre-filled WhatsApp messages)
- Floating WhatsApp + call buttons, sticky transparent navbar
- Full SEO: metadata, Open Graph, Twitter cards, JSON-LD (Organization, LocalBusiness, WebSite, Breadcrumb, Product, FAQ, Article), `sitemap.xml`, `robots.txt`
- Smooth animations: fade/slide, scroll reveal, counter animations
- Fonts: Poppins (headings) + Inter (body)

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 🗂️ Project structure

```
app/                 # App Router pages (home, about, products, blog, contact, legal, 404, sitemap, robots)
  products/[slug]/   # dynamic product detail pages
  blog/[slug]/       # dynamic blog article pages
components/          # reusable UI (Header, Footer, forms, cards, sections, animations)
lib/                 # data + config (site, products, blog, faqs, testimonials, industries, seo, images)
public/logo-v2.png      # brand logo
```

## 🖼️ Images

All imagery uses royalty-free photos hotlinked from [Pexels](https://www.pexels.com) (free for commercial use, no attribution required). Swap freely in `lib/images.ts`.

## ✏️ Things to customise

- **Logo** — replace `public/logo-v2.png` (and `app/icon.png`, `app/apple-icon.png`).
- **Email** — set the real business email in `lib/site.ts` (`site.email`).
- **Social links** — add real URLs in `lib/site.ts` (`site.social`).
- **Domain** — update `site.url` in `lib/site.ts` for correct SEO/canonical URLs.

## 📞 Contact details (configured)

- **Address:** Ambedkar Tiraha, Jaunpur, Uttar Pradesh 222002
- **Phone / WhatsApp:** +91 94519 00062

---

© DPT Home Care. All rights reserved.
