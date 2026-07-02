import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { faqGroups, allFaqs } from "@/lib/faqs";
import { site, whatsappLink, telLink } from "@/lib/site";
import { IMG } from "@/lib/images";

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
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our products, orders, partnerships and more. Can't find your answer? We're just a message away."
        image={IMG.handWash}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }]}
      />

      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sidebar help card */}
          <div>
            <div className="sticky top-28 rounded-3xl border border-slate-100 bg-slate-50 p-7">
              <h2 className="text-xl font-bold text-brand-navy">Still have questions?</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Our team is happy to help with any product, order or partnership query.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-green w-full">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a href={telLink()} className="btn-outline w-full">
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-ghost w-full">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>

          {/* Grouped FAQs */}
          <div className="space-y-12">
            {faqGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.04}>
                <div>
                  <h2 className="mb-4 text-xl font-bold text-brand-navy">{group.category}</h2>
                  <FAQAccordion items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
