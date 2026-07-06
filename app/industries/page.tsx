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
import { T } from "@/lib/lang";

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
        eyebrow={<T en="Industries We Serve" hi="हम किन सेक्टरों की सेवा करते हैं" />}
        title={<T en="Hygiene Solutions for Every Sector" hi="हर सेक्टर के लिए हाइजीन समाधान" />}
        subtitle={
          <T
            en="From family homes to large institutions, our products are trusted across a wide range of industries — each with its own hygiene priorities."
            hi="पारिवारिक घरों से लेकर बड़े संस्थानों तक, हमारे प्रोडक्ट्स कई इंडस्ट्री में भरोसे के साथ इस्तेमाल होते हैं — हर एक की अपनी हाइजीन प्राथमिकताएं हैं।"
          />
        }
        image={IMG.hospital}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Industries We Serve", nameHi: "हम किन सेक्टरों की सेवा करते हैं", path: "/industries" }]}
      />

      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Who We Serve" hi="हम किनकी सेवा करते हैं" />}
            title={<T en="Tailored for Your Environment" hi="आपके माहौल के हिसाब से" />}
            subtitle={
              <T
                en="Different spaces need different hygiene solutions. Here's how DPT Home Care supports each sector."
                hi="अलग-अलग जगहों को अलग-अलग हाइजीन समाधान चाहिए। जानिए DPT Home Care हर सेक्टर की मदद कैसे करता है।"
              />
            }
          />
          <div className="mt-12 space-y-8">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.03}>
                <div id={ind.slug} className={`grid scroll-mt-28 items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative h-56 bg-white md:h-full md:min-h-[260px]">
                    <Image src={ind.image} alt={ind.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                  </div>
                  <div className="p-7 md:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Icon name={ind.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-brand-navy"><T en={ind.name} hi={ind.nameHi} /></h3>
                    <p className="mt-2 text-ink-soft leading-relaxed"><T en={ind.description} hi={ind.descriptionHi} /></p>
                    <ul className="mt-4 space-y-2">
                      {ind.points.map((p, j) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> <T en={p} hi={ind.pointsHi?.[j] ?? p} />
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
        eyebrow={<T en="Bulk & Institutional Supply" hi="बल्क और संस्थागत सप्लाई" />}
        title={<T en="Need Reliable Supply for Your Business?" hi="अपने बिज़नेस के लिए भरोसेमंद सप्लाई चाहिए?" />}
        text={
          <T
            en="We provide dependable bulk supply and competitive pricing tailored to institutions, retailers and agencies. Let's discuss your requirements."
            hi="हम संस्थानों, रिटेलरों और एजेंसियों के लिए भरोसेमंद बल्क सप्लाई और प्रतिस्पर्धी कीमतें देते हैं। आइए, आपकी ज़रूरतों पर बात करें।"
          />
        }
        image={IMG.warehouse}
        primary={{ label: <T en="Get a Quote" hi="कोटेशन पाएं" />, href: "/contact" }}
      />
    </>
  );
}
