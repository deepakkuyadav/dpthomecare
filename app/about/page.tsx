import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about DPT Home Care, a trusted cleaning products manufacturer in Jaunpur, UP. Our story, mission, vision, core values, manufacturing standards and quality commitment.",
  path: "/about",
  keywords: ["about DPT Home Care", "cleaning products manufacturer", "hygiene company Jaunpur"],
});

const values = [
  { icon: ShieldCheck, title: "Quality First", text: "We never compromise on the performance and safety of our products — every batch is tested and trusted." },
  { icon: HeartHandshake, title: "Customer Trust", text: "We earn loyalty by delivering consistent results and honest value, order after order." },
  { icon: Award, title: "Integrity", text: "Fair pricing, transparent dealings and reliable supply define how we do business." },
  { icon: Factory, title: "Continuous Improvement", text: "We keep refining our formulations and processes to serve you better every day." },
];

const standards = [
  "Careful selection and inspection of raw materials",
  "Controlled batch blending with accurate dosing",
  "Testing for pH, viscosity, fragrance and germ-kill performance",
  "Hygienic, leak-proof filling and sealing",
  "Clear labelling with usage and safety instructions",
  "Safe storage and prompt, careful dispatch",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <PageHero
        eyebrow="About Us"
        title="The Story Behind the Power of Hygiene"
        subtitle="A trusted manufacturer and supplier of premium cleaning products, dedicated to making quality hygiene affordable for every home and business."
        image={IMG.warehouse}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={IMG.cleaningProducts} alt="DPT Home Care product range" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              From a Simple Belief to a Complete Hygiene Brand
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
              <p>
                DPT Home Care was founded in {site.founded} in Jaunpur, Uttar Pradesh, on a simple belief: that
                effective, safe hygiene shouldn't be a luxury. Too many families and businesses were forced to
                choose between products that worked and products they could afford. We set out to remove that
                compromise.
              </p>
              <p>
                Starting with a handful of essential cleaners, we listened closely to our customers and grew our
                range steadily. Today, DPT Home Care manufactures over 15 household and institutional cleaning
                products — from floor and toilet cleaners to dishwash, hand wash, sanitizers and more.
              </p>
              <p>
                Our products now keep homes, hotels, hospitals, restaurants, schools and offices spotless across
                the region, supported by a growing network of loyal dealers and distributors who trust our
                quality and value.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-slate-50">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand-navy">Our Mission</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                To make high-quality hygiene accessible to every home and business by manufacturing effective,
                safe and affordable cleaning products — and to deliver them with reliability and integrity.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand-navy">Our Vision</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                To become one of the most trusted names in cleaning and hygiene across India — recognised for
                product quality, customer care and a lasting commitment to healthier living spaces.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading eyebrow="Core Values" title="The Principles That Guide Us" subtitle="Our values shape every product we make and every relationship we build." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="section bg-slate-50">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="chip-green">Manufacturing Standards</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              Consistent Quality in Every Bottle
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Great cleaning products start with great manufacturing discipline. Our production follows a
              controlled, quality-checked process from start to finish, so you get the same trusted performance
              every time.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {standards.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={IMG.warehousePallet} alt="DPT Home Care quality control and packaging" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Policy & Commitment */}
      <section className="section">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-blue/15 bg-brand-blue/[0.03] p-8">
              <h3 className="text-2xl font-bold text-brand-navy">Our Quality Policy</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                We are committed to manufacturing cleaning products that meet high standards of effectiveness and
                safety. Through careful sourcing, controlled production and batch-wise testing, we ensure that
                every DPT product performs exactly as promised — protecting the health and satisfaction of the
                people who use it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-brand-green/20 bg-brand-green/[0.04] p-8">
              <h3 className="text-2xl font-bold text-brand-navy">Our Commitment to You</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                Behind every bottle is a promise: dependable quality, honest pricing and responsive service. Whether
                you're a family buying a single bottle or a distributor ordering in bulk, we're committed to
                earning your trust with every interaction — and keeping it for the long term.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-16">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-wide relative">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: site.stats.products, suffix: "+", label: "Products" },
              { value: site.stats.clients, suffix: "+", label: "Customers" },
              { value: site.stats.citiesServed, suffix: "+", label: "Cities Served" },
              { value: site.stats.yearsExperience, suffix: "+", label: "Years of Trust" },
            ].map((s) => (
              <Reveal key={s.label}>
                <p className="text-4xl font-extrabold text-white md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/75">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-white">
              Explore Our Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
