import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { faqGroups, allFaqs, type FaqGroup } from "@/lib/faqs";
import { site, whatsappLink, telLink } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "FAQs — Frequently Asked Questions",
  description:
    "Answers to common questions about DPT Home Care cleaning products, orders, bulk supply, distributorship, usage, safety and delivery.",
  path: "/faqs",
  keywords: ["DPT Home Care FAQ", "cleaning products questions", "distributor FAQ"],
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }]),
          faqSchema(allFaqs),
        ]}
      />
      <PageHero
        eyebrow={<T en="Help Center" hi="सहायता केंद्र" />}
        title={<T en="Frequently Asked Questions" hi="अक्सर पूछे जाने वाले सवाल" />}
        subtitle={
          <T
            en="Everything you need to know about our products, orders, partnerships and more. Can't find your answer? We're just a message away."
            hi="हमारे उत्पादों, ऑर्डर, पार्टनरशिप और बाकी हर चीज़ की पूरी जानकारी। जवाब नहीं मिला? हम बस एक मैसेज दूर हैं।"
          />
        }
        image={IMG.handWash}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "FAQs", nameHi: "सवाल-जवाब", path: "/faqs" }]}
      />

      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sidebar help card */}
          <div>
            <div className="sticky top-28 rounded-3xl border border-slate-100 bg-slate-50 p-7">
              <h2 className="text-xl font-bold text-brand-navy">
                <T en="Still have questions?" hi="अब भी कोई सवाल है?" />
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                <T
                  en="Our team is happy to help with any product, order or partnership query."
                  hi="उत्पाद, ऑर्डर या पार्टनरशिप से जुड़े हर सवाल में हमारी टीम आपकी मदद के लिए तैयार है।"
                />
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-green w-full">
                  <MessageCircle className="h-4 w-4" /> <T en="Chat on WhatsApp" hi="व्हाट्सऐप पर चैट करें" />
                </a>
                <a href={telLink()} className="btn-outline w-full">
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-ghost w-full">
                  <T en="Contact Page" hi="संपर्क पेज" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grouped FAQs */}
          <div className="space-y-12">
            {faqGroups.map((group, i) => {
              const categoryHi = (group as FaqGroup & { categoryHi?: string }).categoryHi;
              return (
                <Reveal key={group.category} delay={i * 0.04}>
                  <div>
                    <h2 className="mb-4 text-xl font-bold text-brand-navy">
                      <T en={group.category} hi={categoryHi ?? group.category} />
                    </h2>
                    <FAQAccordion items={group.items} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
