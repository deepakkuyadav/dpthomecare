import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { industries } from "@/lib/industries";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Industries We Serve — Homes, Hotels, Hospitals & More",
  description:
    "DPT Home Care supplies cleaning and hygiene products to homes, hotels, hospitals, restaurants, schools, offices, retail stores, wholesalers, distributors and cleaning agencies.",
  path: "/industries",
  keywords: ["industries served", "commercial cleaning products", "institutional cleaning supplies", "bulk hygiene supplier"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries We Serve", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries We Serve"
        title="Hygiene Solutions for Every Sector"
        subtitle="From family homes to large institutions, our products are trusted across a wide range of industries — each with its own hygiene priorities."
        image={IMG.hospital}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Industries We Serve", path: "/industries" }]}
      />

      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Tailored for Your Environment"
            subtitle="Different spaces need different hygiene solutions. Here's how DPT Home Care supports each sector."
          />
          <div className="mt-12 space-y-8">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.03}>
                <div id={ind.slug} className={`grid scroll-mt-28 items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative h-56 md:h-full md:min-h-[260px]">
                    <Image src={ind.image} alt={ind.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-7 md:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Icon name={ind.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-brand-navy">{ind.name}</h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">{ind.description}</p>
                    <ul className="mt-4 space-y-2">
                      {ind.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Bulk & Institutional Supply"
        title="Need Reliable Supply for Your Business?"
        text="We provide dependable bulk supply and competitive pricing tailored to institutions, retailers and agencies. Let's discuss your requirements."
        image={IMG.warehouse}
        primary={{ label: "Get a Quote", href: "/contact" }}
      />
    </>
  );
}
