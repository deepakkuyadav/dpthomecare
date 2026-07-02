import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FlaskConical,
  BadgeCheck,
  Sparkles,
  Leaf,
  Truck,
  IndianRupee,
  Headphones,
  Boxes,
  Check,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Why Choose Us — The DPT Home Care Advantage",
  description:
    "Discover why homes, businesses and dealers trust DPT Home Care: 99.9% germ protection, concentrated formulas, strict quality control, long-lasting fragrance, safe ingredients and reliable bulk supply.",
  path: "/why-choose-us",
  keywords: ["why choose DPT Home Care", "best cleaning products", "quality cleaning products supplier"],
});

const reasons = [
  { icon: ShieldCheck, title: "Proven Germ Protection", text: "Our disinfectant formulas eliminate 99.9% of germs and bacteria, protecting the health of your family, staff and customers." },
  { icon: FlaskConical, title: "Concentrated & Economical", text: "Higher active concentration means you use less per wash — more cleaning power and better value from every bottle." },
  { icon: BadgeCheck, title: "Consistent Quality Control", text: "Every batch is tested for performance, pH, fragrance and safety, so you get the same trusted results each time." },
  { icon: Sparkles, title: "Long-Lasting Fragrance", text: "Premium fragrance oils leave spaces feeling fresh and welcoming for hours after cleaning." },
  { icon: Leaf, title: "Safe & Responsible", text: "Balanced, skin-friendly formulations designed for confident everyday use around your family." },
  { icon: Boxes, title: "Complete Product Range", text: "15+ products for floors, bathrooms, kitchens, fabrics and personal care — everything from one trusted brand." },
  { icon: Truck, title: "Reliable Bulk Supply", text: "Dependable stock and timely delivery for institutions, retailers, wholesalers and cleaning agencies." },
  { icon: IndianRupee, title: "Honest, Fair Pricing", text: "Competitive rates for households and healthy margins for our dealers and distributors." },
  { icon: Headphones, title: "Responsive Support", text: "A helpful team ready to assist with product advice, quotations and after-sales service." },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why-choose-us" }])} />
      <PageHero
        eyebrow="Why Choose Us"
        title="The DPT Home Care Advantage"
        subtitle="Powerful performance, honest value and dependable service — the reasons thousands of homes and businesses trust us for their hygiene needs."
        image={IMG.sparkleKitchen}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why-choose-us" }]}
      />

      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Strengths"
            title="Nine Reasons to Choose DPT"
            subtitle="We've built our reputation on doing the fundamentals exceptionally well."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / promise */}
      <section className="section bg-slate-50">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={IMG.dishwash} alt="DPT Home Care quality in action" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip-green">Our Promise</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              Quality You Can See, Value You Can Feel
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We believe you shouldn't have to choose between products that work and products you can afford. Every
              DPT product is engineered to deliver visible, reliable results at a price that makes sense — whether
              you're cleaning a family home or running a large institution.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Same trusted performance in every batch",
                "More washes per bottle thanks to concentration",
                "A product for every cleaning need",
                "Bulk supply that never lets you down",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/become-distributor" className="btn-ghost">
                Partner With Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
