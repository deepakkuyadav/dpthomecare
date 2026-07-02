import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { processSteps } from "@/lib/process";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Our Process — How We Manufacture Quality",
  description:
    "See how DPT Home Care manufactures cleaning products through a rigorous six-step process — from raw material sourcing and formulation to quality control, packaging and dispatch.",
  path: "/our-process",
  keywords: ["cleaning products manufacturing process", "quality control", "how cleaning products are made"],
});

const qualityChecks = [
  "Raw material inspection on arrival",
  "Accurate formulation and dosing",
  "pH and viscosity verification",
  "Fragrance and appearance checks",
  "Germ-kill performance testing",
  "Final packaging and seal inspection",
];

export default function OurProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Our Process", path: "/our-process" }])} />
      <PageHero
        eyebrow="Our Process"
        title="From Raw Material to Your Doorstep"
        subtitle="Consistent quality doesn't happen by chance. It's the result of a disciplined, six-step process behind every DPT product."
        image={IMG.warehousePallet}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Our Process", path: "/our-process" }]}
      />

      {/* Timeline */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading eyebrow="Six Steps to Quality" title="How We Make Every Product" />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-blue to-brand-green lg:left-1/2 lg:block" />
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div className={`lg:flex lg:items-center lg:gap-8 ${i % 2 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="lg:w-1/2">
                      <div className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                        <span className="absolute right-6 top-6 text-5xl font-extrabold text-brand-blue/5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                          <Icon name={step.icon} className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-brand-navy">{step.title}</h3>
                        <p className="mt-2 leading-relaxed text-ink-muted">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality checks */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Quality Control"
            title="Every Batch, Thoroughly Checked"
            subtitle="Before any product leaves our facility, it passes a series of quality checks to ensure it performs exactly as promised."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {qualityChecks.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-green" />
                  <span className="font-medium text-brand-navy">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="btn-primary">
              Explore Our Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
