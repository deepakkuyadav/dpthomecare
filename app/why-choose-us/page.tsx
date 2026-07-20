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
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Why Choose Us — The DP Shudh Dhulai Home Care Advantage",
  description:
    "Discover why homes, businesses and dealers trust DP Shudh Dhulai Home Care: powerful cleaning performance, concentrated formulas, strict quality control, long-lasting fragrance, safe ingredients and reliable bulk supply.",
  path: "/why-choose-us",
  keywords: ["why choose DP Shudh Dhulai Home Care", "best cleaning products", "quality cleaning products supplier"],
});

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Protection",
    titleHi: "भरोसेमंद सुरक्षा",
    text: "Our disinfectant formulas clean thoroughly and keep surfaces hygienic, protecting the health of your family, staff and customers.",
    textHi: "हमारे डिसइन्फेक्टेंट फॉर्मूले गहराई से सफाई करते हैं और सतहों को हाइजीनिक रखते हैं — आपके परिवार, स्टाफ और ग्राहकों की सेहत की सुरक्षा के लिए।",
  },
  {
    icon: FlaskConical,
    title: "Concentrated & Economical",
    titleHi: "कॉन्सेंट्रेटेड और किफायती",
    text: "Higher active concentration means you use less per wash — more cleaning power and better value from every bottle.",
    textHi: "ज़्यादा एक्टिव कॉन्सेंट्रेशन का मतलब है हर धुलाई में कम इस्तेमाल — हर बोतल से ज़्यादा सफाई और बेहतर वैल्यू।",
  },
  {
    icon: BadgeCheck,
    title: "Consistent Quality Control",
    titleHi: "हर बैच पर क्वालिटी कंट्रोल",
    text: "Every batch is tested for performance, pH, fragrance and safety, so you get the same trusted results each time.",
    textHi: "हर बैच की परफॉर्मेंस, pH, खुशबू और सुरक्षा की जांच होती है, ताकि आपको हर बार वही भरोसेमंद नतीजे मिलें।",
  },
  {
    icon: Sparkles,
    title: "Long-Lasting Fragrance",
    titleHi: "देर तक टिकने वाली खुशबू",
    text: "Premium fragrance oils leave spaces feeling fresh and welcoming for hours after cleaning.",
    textHi: "प्रीमियम फ्रेगरेंस ऑयल सफाई के घंटों बाद तक जगह को ताज़ा और खुशनुमा बनाए रखते हैं।",
  },
  {
    icon: Leaf,
    title: "Safe & Responsible",
    titleHi: "सुरक्षित और ज़िम्मेदार",
    text: "Balanced, skin-friendly formulations designed for confident everyday use around your family.",
    textHi: "संतुलित, त्वचा के अनुकूल फॉर्मूले, जिन्हें आप परिवार के आसपास रोज़ बेफिक्र होकर इस्तेमाल कर सकते हैं।",
  },
  {
    icon: Boxes,
    title: "Complete Product Range",
    titleHi: "संपूर्ण प्रोडक्ट रेंज",
    text: "15+ products for floors, bathrooms, kitchens, fabrics and personal care — everything from one trusted brand.",
    textHi: "फर्श, बाथरूम, किचन, कपड़ों और पर्सनल केयर के लिए 15+ प्रोडक्ट्स — सब कुछ एक भरोसेमंद ब्रांड से।",
  },
  {
    icon: Truck,
    title: "Reliable Bulk Supply",
    titleHi: "भरोसेमंद बल्क सप्लाई",
    text: "Dependable stock and timely delivery for institutions, retailers, wholesalers and cleaning agencies.",
    textHi: "संस्थानों, रिटेलरों, होलसेलरों और क्लीनिंग एजेंसियों के लिए भरोसेमंद स्टॉक और समय पर डिलीवरी।",
  },
  {
    icon: IndianRupee,
    title: "Honest, Fair Pricing",
    titleHi: "ईमानदार, उचित दाम",
    text: "Competitive rates for households and healthy margins for our dealers and distributors.",
    textHi: "घरों के लिए किफायती दाम और हमारे डीलरों-डिस्ट्रीब्यूटरों के लिए अच्छे मार्जिन।",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    titleHi: "तुरंत सपोर्ट",
    text: "A helpful team ready to assist with product advice, quotations and after-sales service.",
    textHi: "प्रोडक्ट सलाह, कोटेशन और आफ्टर-सेल्स सेवा में मदद के लिए हमेशा तैयार टीम।",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why-choose-us" }])} />
      <PageHero
        eyebrow={<T en="Why Choose Us" hi="हमें क्यों चुनें" />}
        title={<T en="The DP Shudh Dhulai Home Care Advantage" hi="DP Shudh Dhulai Home Care की खासियत" />}
        subtitle={
          <T
            en="Powerful performance, honest value and dependable service — the reasons thousands of homes and businesses trust us for their hygiene needs."
            hi="दमदार परफॉर्मेंस, ईमानदार वैल्यू और भरोसेमंद सेवा — यही वजह है कि हज़ारों घर और बिज़नेस अपनी हाइजीन ज़रूरतों के लिए हम पर भरोसा करते हैं।"
          />
        }
        image={IMG.sparkleKitchen}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Why Choose Us", nameHi: "हमें क्यों चुनें", path: "/why-choose-us" }]}
      />

      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Our Strengths" hi="हमारी ताकत" />}
            title={<T en="Nine Reasons to Choose DP Shudh Dhulai" hi="DP Shudh Dhulai चुनने की नौ वजहें" />}
            subtitle={
              <T
                en="We've built our reputation on doing the fundamentals exceptionally well."
                hi="हमने अपनी पहचान बुनियादी काम बेहतरीन ढंग से करके बनाई है।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy"><T en={r.title} hi={r.titleHi} /></h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted"><T en={r.text} hi={r.textHi} /></p>
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
              <Image src={IMG.dishwash} alt="DP Shudh Dhulai Home Care quality in action" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip-green"><T en="Our Promise" hi="हमारा वादा" /></span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              <T en="Quality You Can See, Value You Can Feel" hi="क्वालिटी जो दिखे, वैल्यू जो महसूस हो" />
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              <T
                en="We believe you shouldn't have to choose between products that work and products you can afford. Every DP Shudh Dhulai product is engineered to deliver visible, reliable results at a price that makes sense — whether you're cleaning a family home or running a large institution."
                hi="हमारा मानना है कि आपको असरदार प्रोडक्ट और किफायती प्रोडक्ट में से किसी एक को चुनना नहीं पड़ना चाहिए। हर DP Shudh Dhulai प्रोडक्ट साफ दिखने वाले, भरोसेमंद नतीजे सही दाम पर देने के लिए बनाया गया है — चाहे आप घर की सफाई कर रहे हों या कोई बड़ा संस्थान चला रहे हों।"
              />
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { en: "Same trusted performance in every batch", hi: "हर बैच में वही भरोसेमंद परफॉर्मेंस" },
                { en: "More washes per bottle thanks to concentration", hi: "कॉन्सेंट्रेशन की वजह से हर बोतल से ज़्यादा धुलाई" },
                { en: "A product for every cleaning need", hi: "हर सफाई की ज़रूरत के लिए एक प्रोडक्ट" },
                { en: "Bulk supply that never lets you down", hi: "बल्क सप्लाई जो कभी निराश नहीं करती" },
              ].map((t) => (
                <li key={t.en} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> <T en={t.en} hi={t.hi} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                <T en="Explore Products" hi="प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/become-distributor" className="btn-ghost">
                <T en="Partner With Us" hi="हमारे पार्टनर बनें" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
