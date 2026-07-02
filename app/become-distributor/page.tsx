import { TrendingUp, IndianRupee, Boxes, Headphones, Megaphone, ShieldCheck, Check, Handshake } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DistributorForm } from "@/components/DistributorForm";
import { Counter } from "@/components/Counter";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Become a Distributor — DPT Home Care Dealership",
  description:
    "Partner with DPT Home Care. Enjoy competitive pricing, reliable stock, marketing support and strong margins as a distributor or dealer of premium cleaning products. Apply today.",
  path: "/become-distributor",
  keywords: ["cleaning products distributor", "cleaning products dealership", "become a distributor", "wholesale cleaning products"],
});

const benefits = [
  { icon: IndianRupee, title: "Attractive Margins", text: "Pricing structured to give dealers and distributors healthy, sustainable profits." },
  { icon: Boxes, title: "Reliable Stock", text: "Consistent product availability so you never miss a sale or disappoint a customer." },
  { icon: ShieldCheck, title: "Trusted Brand Quality", text: "Sell products backed by strict quality control and growing customer loyalty." },
  { icon: Megaphone, title: "Marketing Support", text: "Product information and promotional material to help you grow faster." },
  { icon: Headphones, title: "Dedicated Support", text: "A responsive partnership team to assist with orders, queries and after-sales." },
  { icon: TrendingUp, title: "Growing Demand", text: "Hygiene is an everyday essential — a category with steady, repeat demand." },
];

const requirements = [
  "A genuine interest in building a cleaning-products business",
  "Adequate storage space for stock (as per volume)",
  "A working investment for initial inventory",
  "Basic local market knowledge and distribution reach",
  "Commitment to serving customers reliably",
];

export default function BecomeDistributorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Become a Distributor", path: "/become-distributor" }])} />
      <PageHero
        eyebrow="Business Opportunity"
        title="Partner With DPT Home Care"
        subtitle="Join our growing network of distributors and dealers. Build a profitable business with a trusted hygiene brand behind you."
        image={IMG.warehouseAisle}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Become a Distributor", path: "/become-distributor" }]}
      />

      {/* Opportunity intro */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">The Opportunity</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy text-balance">
              A Business Built on Everyday Essentials
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Cleaning and hygiene products are used every single day in every home and business — making them one
              of the most dependable, repeat-purchase categories in retail. As a DPT Home Care partner, you tap
              into this steady demand with a complete product range, trusted quality and pricing that keeps your
              business profitable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 rounded-[2rem] bg-brand-gradient p-8 text-center text-white md:grid-cols-4 md:p-12">
            {[
              { value: site.stats.products, suffix: "+", label: "Products to Sell" },
              { value: site.stats.citiesServed, suffix: "+", label: "Cities Served" },
              { value: site.stats.clients, suffix: "+", label: "Existing Customers" },
              { value: 100, suffix: "%", label: "Repeat-Use Category" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading eyebrow="Partner Benefits" title="Why Partner With Us" subtitle="Everything you need to build and grow a successful distribution business." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="chip">What You Need</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">Requirements to Get Started</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We keep our partnership requirements simple and transparent. If the points below describe you, we'd
              love to hear from you.
            </p>
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> {r}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] p-5">
              <Handshake className="h-9 w-9 shrink-0 text-brand-blue" />
              <p className="text-sm text-ink-soft">
                Territories are opening across Uttar Pradesh and beyond. Apply now to check availability in your
                area — our team responds within 1–2 business days.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <DistributorForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
