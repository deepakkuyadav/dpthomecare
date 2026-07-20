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
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Our Process — How We Manufacture Quality",
  description:
    "See how DP Shudh Dhulai Home Care manufactures cleaning products through a rigorous six-step process — from raw material sourcing and formulation to quality control, packaging and dispatch.",
  path: "/our-process",
  keywords: ["cleaning products manufacturing process", "quality control", "how cleaning products are made"],
});

const qualityChecks = [
  { en: "Raw material inspection on arrival", hi: "आते ही कच्चे माल का निरीक्षण" },
  { en: "Accurate formulation and dosing", hi: "सटीक फॉर्मूलेशन और मात्रा" },
  { en: "pH and viscosity verification", hi: "pH और विस्कोसिटी की पुष्टि" },
  { en: "Fragrance and appearance checks", hi: "खुशबू और रंग-रूप की जांच" },
  { en: "Cleaning performance testing", hi: "क्लीनिंग परफॉर्मेंस टेस्टिंग" },
  { en: "Final packaging and seal inspection", hi: "फाइनल पैकेजिंग और सील की जांच" },
];

export default function OurProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Our Process", path: "/our-process" }])} />
      <PageHero
        eyebrow={<T en="Our Process" hi="हमारी प्रक्रिया" />}
        title={<T en="From Raw Material to Your Doorstep" hi="कच्चे माल से आपके दरवाज़े तक" />}
        subtitle={
          <T
            en="Consistent quality doesn't happen by chance. It's the result of a disciplined, six-step process behind every DP Shudh Dhulai product."
            hi="एक जैसी क्वालिटी संयोग से नहीं आती। यह हर DP Shudh Dhulai प्रोडक्ट के पीछे चलने वाली अनुशासित, छह-चरणों की प्रक्रिया का नतीजा है।"
          />
        }
        image={IMG.warehousePallet}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Our Process", nameHi: "हमारी प्रक्रिया", path: "/our-process" }]}
      />

      {/* Timeline */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Six Steps to Quality" hi="क्वालिटी के छह कदम" />}
            title={<T en="How We Make Every Product" hi="हम हर प्रोडक्ट कैसे बनाते हैं" />}
          />
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
                        <h3 className="mt-5 text-xl font-bold text-brand-navy"><T en={step.title} hi={step.titleHi} /></h3>
                        <p className="mt-2 leading-relaxed text-ink-muted"><T en={step.description} hi={step.descriptionHi} /></p>
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
            eyebrow={<T en="Quality Control" hi="क्वालिटी कंट्रोल" />}
            title={<T en="Every Batch, Thoroughly Checked" hi="हर बैच की पूरी जांच" />}
            subtitle={
              <T
                en="Before any product leaves our facility, it passes a series of quality checks to ensure it performs exactly as promised."
                hi="कोई भी प्रोडक्ट हमारी फैसिलिटी से निकलने से पहले कई क्वालिटी जांचों से गुज़रता है, ताकि वह ठीक वैसा ही काम करे जैसा वादा किया गया है।"
              />
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {qualityChecks.map((c, i) => (
              <Reveal key={c.en} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-green" />
                  <span className="font-medium text-brand-navy"><T en={c.en} hi={c.hi} /></span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="btn-primary">
              <T en="Explore Our Products" hi="हमारे प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
