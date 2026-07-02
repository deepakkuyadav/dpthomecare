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
import { featuredProducts, categories } from "@/lib/products";
import { processSteps } from "@/lib/process";
import { industries } from "@/lib/industries";
import { testimonials } from "@/lib/testimonials";
import { allFaqs } from "@/lib/faqs";
import { blogPosts } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";

const whyPoints = [
  { icon: "ShieldCheck", title: "Kills 99.9% Germs", text: "Powerful disinfectant formulas that protect your family and keep spaces hygienic." },
  { icon: "FlaskConical", title: "Concentrated Formulas", text: "A little goes a long way — more washes per bottle and better value for money." },
  { icon: "BadgeCheck", title: "Strict Quality Control", text: "Every batch is tested for consistency, performance and safety before dispatch." },
  { icon: "Sparkles", title: "Long-Lasting Fragrance", text: "Premium fragrances that leave your home fresh and welcoming for hours." },
  { icon: "Leaf", title: "Safe & Skin-Friendly", text: "Balanced, responsibly made formulas that are gentle in everyday use." },
  { icon: "Truck", title: "Bulk Supply & Fair Pricing", text: "Reliable stock and competitive rates for homes, institutions and dealers." },
];

const trustStrip = [
  "99.9% Germ Protection",
  "Concentrated & Economical",
  "Quality Tested Batches",
  "Bulk Supply Available",
  "Trusted Across UP",
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
                  <Sparkles className="h-3.5 w-3.5 text-brand-green-light" /> Cleaning Products Manufacturer & Supplier
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl text-balance">
                  Premium Hygiene for <span className="text-brand-green-light">Every Home</span> &amp; Business
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                  From floors to fabrics, kitchens to washrooms — DPT Home Care manufactures a complete range of
                  powerful, safe and affordable cleaning products. This is the <strong className="text-white">Power of Hygiene</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/products" className="btn-white text-base">
                    Explore Products <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/become-distributor" className="btn-green text-base">
                    Become a Distributor
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
                  {["Homes", "Hotels", "Hospitals", "Offices", "Restaurants"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-green-light" /> {t}
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
                      <ShieldCheck className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-brand-navy">99.9%</p>
                      <p className="text-xs text-ink-muted">Germ protection</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 top-8 rounded-2xl bg-white p-4 shadow-card sm:-right-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-ink-soft">Loved by 1,200+ customers</p>
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
            <span key={t} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand-green" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Best Sellers"
            title="Our Most Popular Products"
            subtitle="Trusted favourites that deliver spotless results across homes and businesses every single day."
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
              View All 15 Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why DPT Home Care"
            title="Cleaning Products You Can Trust"
            subtitle="We combine powerful performance with everyday safety and honest value — the reasons thousands choose DPT."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                    <Icon name={point.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.text}</p>
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
            eyebrow="Our Categories"
            title="A Complete Hygiene Solution"
            subtitle="Whatever the surface, whatever the space — there's a DPT product made to clean it beautifully."
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
                  <h3 className="mt-4 font-bold text-brand-navy">{c.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-muted">{c.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    Browse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <p className="text-sm text-white/80">Years of trust</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip">About DPT Home Care</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy text-balance">
              Built on the Promise of Hygiene, Safety &amp; Freshness
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              DPT Home Care is a dedicated manufacturer and supplier of household and institutional cleaning
              products based in Jaunpur, Uttar Pradesh. What began with a simple belief — that quality hygiene
              should be affordable for every family and business — has grown into a complete range trusted across
              homes, hotels, hospitals, restaurants, schools and offices.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "15+ cleaning products under one trusted brand",
                "Concentrated, high-performance formulations",
                "Serving households, institutions and dealers alike",
                "Reliable bulk supply and competitive pricing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/why-choose-us" className="btn-ghost">
                Why Choose Us
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
              { value: site.stats.products, suffix: "+", label: "Quality Products" },
              { value: site.stats.clients, suffix: "+", label: "Happy Customers" },
              { value: site.stats.citiesServed, suffix: "+", label: "Cities Served" },
              { value: 99, suffix: ".9%", label: "Germ Protection" },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <p className="text-4xl font-extrabold text-white md:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/75">{stat.label}</p>
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
            eyebrow="Our Process"
            title="From Raw Material to Your Doorstep"
            subtitle="Every DPT product follows a rigorous six-step journey engineered for consistent quality and performance."
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
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
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
            eyebrow="Industries We Serve"
            title="Trusted Across Every Sector"
            subtitle="Tailored hygiene solutions for the unique needs of homes, businesses and institutions."
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
                    <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/80">{ind.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-outline">
              See All Industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Real feedback from the families, businesses and partners who trust DPT Home Care every day."
          />
          <div className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </section>

      {/* ================= DEALER CTA ================= */}
      <CTABand
        eyebrow="Business Opportunity"
        title="Grow With Us — Become a DPT Distributor"
        text="Join our expanding network of distributors and dealers. Enjoy competitive pricing, reliable supply and a brand your customers will trust."
        image={IMG.warehouseAisle}
        primary={{ label: "Become a Distributor", href: "/become-distributor" }}
      />

      {/* ================= FAQ ================= */}
      <section className="section bg-slate-50">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              subtitle="Quick answers to the questions we hear most. Can't find yours? Just reach out."
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/faqs" className="btn-primary">
                View All FAQs <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <PhoneCall className="h-4 w-4" /> Ask a Question
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
            eyebrow="From Our Blog"
            title="Cleaning Tips & Hygiene Guides"
            subtitle="Practical advice to keep your home and business spotless, fresh and healthy."
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
                      Read more <ArrowRight className="h-4 w-4" />
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
        eyebrow="Get in Touch"
        title="Ready to Order or Have a Question?"
        text="Our team is here to help with product details, bulk quotations and quick support. Reach out today."
        image={IMG.cleaningProductsTable}
        primary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
