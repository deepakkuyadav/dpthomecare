import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  Truck,
  Leaf,
  BadgeCheck,
  Star,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Counter } from "@/components/Counter";
import { Icon } from "@/components/Icon";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { CategoryRail } from "@/components/CategoryRail";
import { featuredProducts, categories } from "@/lib/products";
import { processSteps } from "@/lib/process";
import { industries } from "@/lib/industries";
import { testimonials } from "@/lib/testimonials";
import { allFaqs } from "@/lib/faqs";
import { blogPosts } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

const whyPoints = [
  {
    icon: "ShieldCheck",
    title: { en: "Trusted Protection", hi: "भरोसेमंद सुरक्षा" },
    text: {
      en: "Powerful, effective formulas that keep your home and workspace clean, fresh and hygienic.",
      hi: "शक्तिशाली, असरदार फॉर्मूले जो आपके घर और वर्कस्पेस को साफ, ताज़ा और स्वच्छ रखते हैं।",
    },
  },
  {
    icon: "FlaskConical",
    title: { en: "Concentrated Formulas", hi: "कंसन्ट्रेटेड फॉर्मूले" },
    text: {
      en: "A little goes a long way — more washes per bottle and better value for money.",
      hi: "थोड़ा ही काफी है — हर बोतल से ज़्यादा सफाई और पैसे की पूरी कीमत।",
    },
  },
  {
    icon: "BadgeCheck",
    title: { en: "Strict Quality Control", hi: "सख्त क्वालिटी कंट्रोल" },
    text: {
      en: "Every batch is tested for consistency, performance and safety before dispatch.",
      hi: "हर बैच डिस्पैच से पहले कंसिस्टेंसी, परफॉर्मेंस और सुरक्षा के लिए टेस्ट होता है।",
    },
  },
  {
    icon: "Sparkles",
    title: { en: "Long-Lasting Fragrance", hi: "देर तक टिकने वाली खुशबू" },
    text: {
      en: "Premium fragrances that leave your home fresh and welcoming for hours.",
      hi: "प्रीमियम खुशबू जो घर को घंटों तक ताज़ा और स्वागत-योग्य बनाए रखती है।",
    },
  },
  {
    icon: "Leaf",
    title: { en: "Safe & Skin-Friendly", hi: "सुरक्षित और त्वचा के अनुकूल" },
    text: {
      en: "Balanced, responsibly made formulas that are gentle in everyday use.",
      hi: "संतुलित, ज़िम्मेदारी से बने फॉर्मूले जो रोज़ाना के इस्तेमाल में सौम्य हैं।",
    },
  },
  {
    icon: "Truck",
    title: { en: "Bulk Supply & Fair Pricing", hi: "बल्क सप्लाई और सही कीमत" },
    text: {
      en: "Reliable stock and competitive rates for homes, institutions and dealers.",
      hi: "घरों, संस्थानों और डीलरों के लिए भरोसेमंद स्टॉक और प्रतिस्पर्धी रेट।",
    },
  },
];

const trustStrip = [
  { en: "Trusted Quality", hi: "भरोसेमंद क्वालिटी" },
  { en: "Concentrated & Economical", hi: "कंसन्ट्रेटेड और किफायती" },
  { en: "Quality Tested Batches", hi: "हर बैच क्वालिटी टेस्टेड" },
  { en: "Bulk Supply Available", hi: "बल्क सप्लाई उपलब्ध" },
  { en: "Trusted Across UP", hi: "पूरे UP में भरोसा" },
];

const heroSectors = [
  { en: "Homes", hi: "घर" },
  { en: "Hotels", hi: "होटल" },
  { en: "Hospitals", hi: "हॉस्पिटल" },
  { en: "Offices", hi: "ऑफिस" },
  { en: "Restaurants", hi: "रेस्टोरेंट" },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-gradient-soft pt-28 pb-20 md:pt-36 md:pb-28">
        <Image src={IMG.heroMopping} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-brand-navy/55" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl" />

        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/20">
                  <Sparkles className="h-3.5 w-3.5 text-brand-green-light" />{" "}
                  <T en="Cleaning Products Manufacturer & Supplier" hi="क्लीनिंग प्रोडक्ट्स निर्माता व सप्लायर" />
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl text-balance">
                  <T
                    en={
                      <>
                        Premium Hygiene for <span className="text-brand-green-light">Every Home</span> &amp; Business
                      </>
                    }
                    hi={
                      <>
                        <span className="text-brand-green-light">हर घर</span> और व्यवसाय के लिए प्रीमियम स्वच्छता
                      </>
                    }
                  />
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                  <T
                    en={
                      <>
                        From floors to fabrics, kitchens to washrooms — DPT Home Care manufactures a complete range of
                        powerful, safe and affordable cleaning products. This is the{" "}
                        <strong className="text-white">Power of Hygiene</strong>.
                      </>
                    }
                    hi={
                      <>
                        फर्श से कपड़ों तक, किचन से वॉशरूम तक — DPT Home Care शक्तिशाली, सुरक्षित और किफायती क्लीनिंग
                        प्रोडक्ट्स की पूरी रेंज बनाता है। यही है <strong className="text-white">Power of Hygiene</strong>।
                      </>
                    }
                  />
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/products" className="btn-white text-base">
                    <T en="Explore Products" hi="प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/become-distributor" className="btn-green text-base">
                    <T en="Become a Distributor" hi="डिस्ट्रीब्यूटर बनें" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
                  {heroSectors.map((t) => (
                    <span key={t.en} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-green-light" /> <T en={t.en} hi={t.hi} />
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Hero visual */}
            <Reveal direction="left" delay={0.2} className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/20">
                  <Image
                    src={IMG.cleaningProducts}
                    alt="DPT Home Care cleaning products range"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -left-4 bottom-8 rounded-2xl bg-white p-4 shadow-card sm:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                      <BadgeCheck className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-brand-navy">{site.stats.products}+</p>
                      <p className="text-xs text-ink-muted">
                        <T en="Quality products" hi="क्वालिटी प्रोडक्ट्स" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 top-8 rounded-2xl bg-white p-4 shadow-card sm:-right-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-ink-soft">
                    <T en="Loved by 1,200+ customers" hi="1,200+ ग्राहकों का भरोसा" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <div className="border-b border-slate-100 bg-white">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm font-semibold text-ink-soft">
          {trustStrip.map((t) => (
            <span key={t.en} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand-green" /> <T en={t.en} hi={t.hi} />
            </span>
          ))}
        </div>
      </div>

      {/* ================= CATEGORY RAIL ================= */}
      <CategoryRail />

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Best Sellers" hi="बेस्ट सेलर्स" />}
            title={<T en="Our Most Popular Products" hi="हमारे सबसे लोकप्रिय प्रोडक्ट्स" />}
            subtitle={
              <T
                en="Trusted favourites that deliver spotless results across homes and businesses every single day."
                hi="भरोसेमंद प्रोडक्ट्स जो हर दिन घरों और व्यवसायों में बेदाग सफाई देते हैं।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-outline">
              <T en="View All 15 Products" hi="सभी 15 प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Why DPT Home Care" hi="DPT Home Care ही क्यों" />}
            title={<T en="Cleaning Products You Can Trust" hi="क्लीनिंग प्रोडक्ट्स जिन पर आप भरोसा कर सकते हैं" />}
            subtitle={
              <T
                en="We combine powerful performance with everyday safety and honest value — the reasons thousands choose DPT."
                hi="दमदार परफॉर्मेंस, रोज़ाना की सुरक्षा और ईमानदार कीमत — यही वजह है कि हज़ारों लोग DPT चुनते हैं।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title.en} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                    <Icon name={point.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">
                    <T en={point.title.en} hi={point.title.hi} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    <T en={point.text.en} hi={point.text.hi} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Our Categories" hi="हमारी कैटेगरी" />}
            title={<T en="A Complete Hygiene Solution" hi="स्वच्छता का संपूर्ण समाधान" />}
            subtitle={
              <T
                en="Whatever the surface, whatever the space — there's a DPT product made to clean it beautifully."
                hi="सतह कोई भी हो, जगह कोई भी हो — उसे चमकाने के लिए एक DPT प्रोडक्ट बना है।"
              />
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <Link
                  href={`/products?category=${encodeURIComponent(c.name)}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-card-hover"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-navy">
                    <T en={c.name} hi={c.nameHi} />
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-muted">
                    <T en={c.description} hi={c.descriptionHi} />
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    <T en="Browse" hi="देखें" />{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src={IMG.warehouse}
                  alt="DPT Home Care manufacturing and warehouse"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brand-gradient p-6 text-white shadow-card sm:block">
                <p className="text-3xl font-extrabold">
                  <Counter value={site.stats.yearsExperience} suffix="+" />
                </p>
                <p className="text-sm text-white/80">
                  <T en="Years of trust" hi="सालों का भरोसा" />
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip">
              <T en="About DPT Home Care" hi="DPT Home Care के बारे में" />
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy text-balance">
              <T
                en={<>Built on the Promise of Hygiene, Safety &amp; Freshness</>}
                hi="स्वच्छता, सुरक्षा और ताज़गी के वादे पर बना ब्रांड"
              />
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              <T
                en="DPT Home Care is a dedicated manufacturer and supplier of household and institutional cleaning
              products based in Jaunpur, Uttar Pradesh. What began with a simple belief — that quality hygiene
              should be affordable for every family and business — has grown into a complete range trusted across
              homes, hotels, hospitals, restaurants, schools and offices."
                hi="DPT Home Care जौनपुर, उत्तर प्रदेश का समर्पित क्लीनिंग प्रोडक्ट्स निर्माता और सप्लायर है। एक साधारण सोच से शुरुआत हुई — कि अच्छी स्वच्छता हर परिवार और व्यवसाय के लिए किफायती होनी चाहिए — और आज यह घरों, होटलों, हॉस्पिटलों, रेस्टोरेंट, स्कूलों और ऑफिसों में भरोसेमंद पूरी रेंज बन चुकी है।"
              />
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { en: "15+ cleaning products under one trusted brand", hi: "एक भरोसेमंद ब्रांड में 15+ क्लीनिंग प्रोडक्ट्स" },
                { en: "Concentrated, high-performance formulations", hi: "कंसन्ट्रेटेड, हाई-परफॉर्मेंस फॉर्मूले" },
                { en: "Serving households, institutions and dealers alike", hi: "घर, संस्थान और डीलर — सबकी सेवा" },
                { en: "Reliable bulk supply and competitive pricing", hi: "भरोसेमंद बल्क सप्लाई और प्रतिस्पर्धी कीमतें" },
              ].map((item) => (
                <li key={item.en} className="flex items-start gap-3 text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>
                    <T en={item.en} hi={item.hi} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                <T en="Our Story" hi="हमारी कहानी" /> <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/why-choose-us" className="btn-ghost">
                <T en="Why Choose Us" hi="हमें क्यों चुनें" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="relative overflow-hidden bg-brand-gradient py-16 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-wide relative">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: site.stats.products, suffix: "+", label: { en: "Quality Products", hi: "क्वालिटी प्रोडक्ट्स" } },
              { value: site.stats.clients, suffix: "+", label: { en: "Happy Customers", hi: "खुश ग्राहक" } },
              { value: site.stats.citiesServed, suffix: "+", label: { en: "Cities Served", hi: "शहरों में सेवा" } },
              { value: 100, suffix: "%", label: { en: "Quality Checked", hi: "क्वालिटी चेक्ड" } },
            ].map((stat) => (
              <Reveal key={stat.label.en}>
                <div>
                  <p className="text-4xl font-extrabold text-white md:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/75">
                    <T en={stat.label.en} hi={stat.label.hi} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Our Process" hi="हमारी प्रक्रिया" />}
            title={<T en="From Raw Material to Your Doorstep" hi="कच्चे माल से आपके दरवाज़े तक" />}
            subtitle={
              <T
                en="Every DPT product follows a rigorous six-step journey engineered for consistent quality and performance."
                hi="हर DPT प्रोडक्ट छह कड़े चरणों से गुज़रता है — ताकि क्वालिटी और परफॉर्मेंस हर बार एक जैसी मिले।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                  <span className="absolute right-6 top-6 text-5xl font-extrabold text-brand-blue/5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <Icon name={step.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">
                    <T en={step.title} hi={step.titleHi} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    <T en={step.description} hi={step.descriptionHi} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Industries We Serve" hi="हमारे सेवा क्षेत्र" />}
            title={<T en="Trusted Across Every Sector" hi="हर सेक्टर में भरोसेमंद" />}
            subtitle={
              <T
                en="Tailored hygiene solutions for the unique needs of homes, businesses and institutions."
                hi="घरों, व्यवसायों और संस्थानों की अलग-अलग ज़रूरतों के लिए खास स्वच्छता समाधान।"
              />
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05}>
                <div className="group relative h-56 overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur">
                      <Icon name={ind.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      <T en={ind.name} hi={ind.nameHi} />
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/80">
                      <T en={ind.description} hi={ind.descriptionHi} />
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-outline">
              <T en="See All Industries" hi="सभी क्षेत्र देखें" /> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Testimonials" hi="ग्राहकों की राय" />}
            title={<T en="What Our Customers Say" hi="हमारे ग्राहक क्या कहते हैं" />}
            subtitle={
              <T
                en="Real feedback from the families, businesses and partners who trust DPT Home Care every day."
                hi="उन परिवारों, व्यवसायों और पार्टनर्स की सच्ची राय, जो हर दिन DPT Home Care पर भरोसा करते हैं।"
              />
            }
          />
          <div className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </section>

      {/* ================= DEALER CTA ================= */}
      <CTABand
        eyebrow={<T en="Business Opportunity" hi="बिज़नेस का अवसर" />}
        title={<T en="Grow With Us — Become a DPT Distributor" hi="हमारे साथ बढ़ें — DPT डिस्ट्रीब्यूटर बनें" />}
        text={
          <T
            en="Join our expanding network of distributors and dealers. Enjoy competitive pricing, reliable supply and a brand your customers will trust."
            hi="हमारे बढ़ते डिस्ट्रीब्यूटर और डीलर नेटवर्क से जुड़ें। प्रतिस्पर्धी कीमतें, भरोसेमंद सप्लाई और एक ऐसा ब्रांड पाएं जिस पर आपके ग्राहक भरोसा करेंगे।"
          />
        }
        image={IMG.warehouseAisle}
        primary={{ label: <T en="Become a Distributor" hi="डिस्ट्रीब्यूटर बनें" />, href: "/become-distributor" }}
      />

      {/* ================= FAQ ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={<T en="FAQs" hi="अक्सर पूछे सवाल" />}
              title={<T en="Frequently Asked Questions" hi="अक्सर पूछे जाने वाले सवाल" />}
              subtitle={
                <T
                  en="Quick answers to the questions we hear most. Can't find yours? Just reach out."
                  hi="सबसे ज़्यादा पूछे जाने वाले सवालों के छोटे जवाब। आपका सवाल नहीं मिला? हमसे संपर्क करें।"
                />
              }
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/faqs" className="btn-primary">
                <T en="View All FAQs" hi="सभी FAQs देखें" /> <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <PhoneCall className="h-4 w-4" /> <T en="Ask a Question" hi="सवाल पूछें" />
              </a>
            </div>
          </div>
          <FAQAccordion items={allFaqs.slice(0, 6)} defaultOpen={0} />
        </div>
      </section>

      {/* ================= BLOG PREVIEW ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="From Our Blog" hi="हमारे ब्लॉग से" />}
            title={<T en="Cleaning Tips & Hygiene Guides" hi="सफाई के टिप्स और स्वच्छता गाइड" />}
            subtitle={
              <T
                en="Practical advice to keep your home and business spotless, fresh and healthy."
                hi="घर और व्यवसाय को बेदाग, ताज़ा और स्वस्थ रखने की काम की सलाह।"
              />
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <article className="group card-surface overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                      {post.category}
                    </span>
                  </Link>
                  <div className="p-6">
                    <p className="text-xs text-ink-muted">{post.readTime}</p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-brand-navy">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-blue">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue"
                    >
                      <T en="Read more" hi="आगे पढ़ें" /> <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <CTABand
        eyebrow={<T en="Get in Touch" hi="संपर्क करें" />}
        title={<T en="Ready to Order or Have a Question?" hi="ऑर्डर करना है या कोई सवाल है?" />}
        text={
          <T
            en="Our team is here to help with product details, bulk quotations and quick support. Reach out today."
            hi="प्रोडक्ट की जानकारी, बल्क कोटेशन और तुरंत सपोर्ट के लिए हमारी टीम हाज़िर है। आज ही संपर्क करें।"
          />
        }
        image={IMG.cleaningProductsTable}
        primary={{ label: <T en="Contact Us" hi="संपर्क करें" />, href: "/contact" }}
      />
    </>
  );
}
