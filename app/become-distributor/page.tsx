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
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Become a Distributor — DPT Home Care Dealership",
  description:
    "Partner with DPT Home Care. Enjoy competitive pricing, reliable stock, marketing support and strong margins as a distributor or dealer of premium cleaning products. Apply today.",
  path: "/become-distributor",
  keywords: ["cleaning products distributor", "cleaning products dealership", "become a distributor", "wholesale cleaning products"],
});

const benefits = [
  {
    icon: IndianRupee,
    title: "Attractive Margins",
    titleHi: "आकर्षक मार्जिन",
    text: "Pricing structured to give dealers and distributors healthy, sustainable profits.",
    textHi: "डीलरों और डिस्ट्रीब्यूटरों को अच्छा और टिकाऊ मुनाफ़ा देने के लिए बनाई गई कीमतें।",
  },
  {
    icon: Boxes,
    title: "Reliable Stock",
    titleHi: "भरोसेमंद स्टॉक",
    text: "Consistent product availability so you never miss a sale or disappoint a customer.",
    textHi: "हमेशा उत्पाद उपलब्ध — ताकि न कोई बिक्री छूटे, न कोई ग्राहक निराश हो।",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brand Quality",
    titleHi: "भरोसेमंद ब्रांड क्वालिटी",
    text: "Sell products backed by strict quality control and growing customer loyalty.",
    textHi: "सख्त क्वालिटी कंट्रोल और बढ़ते ग्राहक विश्वास वाले उत्पाद बेचें।",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    titleHi: "मार्केटिंग सपोर्ट",
    text: "Product information and promotional material to help you grow faster.",
    textHi: "तेज़ी से आगे बढ़ने में मदद के लिए उत्पाद जानकारी और प्रचार सामग्री।",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    titleHi: "समर्पित सपोर्ट",
    text: "A responsive partnership team to assist with orders, queries and after-sales.",
    textHi: "ऑर्डर, सवालों और आफ्टर-सेल्स में मदद के लिए हमेशा तैयार पार्टनरशिप टीम।",
  },
  {
    icon: TrendingUp,
    title: "Growing Demand",
    titleHi: "बढ़ती मांग",
    text: "Hygiene is an everyday essential — a category with steady, repeat demand.",
    textHi: "स्वच्छता रोज़ की ज़रूरत है — एक ऐसी कैटेगरी जिसकी मांग लगातार बनी रहती है।",
  },
];

const requirements = [
  {
    en: "A genuine interest in building a cleaning-products business",
    hi: "क्लीनिंग प्रोडक्ट्स का व्यवसाय खड़ा करने में सच्ची रुचि",
  },
  {
    en: "Adequate storage space for stock (as per volume)",
    hi: "स्टॉक के लिए पर्याप्त स्टोरेज जगह (वॉल्यूम के अनुसार)",
  },
  {
    en: "A working investment for initial inventory",
    hi: "शुरुआती इन्वेंटरी के लिए ज़रूरी निवेश",
  },
  {
    en: "Basic local market knowledge and distribution reach",
    hi: "स्थानीय बाज़ार की बुनियादी समझ और डिस्ट्रीब्यूशन पहुंच",
  },
  {
    en: "Commitment to serving customers reliably",
    hi: "ग्राहकों को भरोसेमंद सेवा देने की प्रतिबद्धता",
  },
];

export default function BecomeDistributorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Become a Distributor", path: "/become-distributor" }])} />
      <PageHero
        eyebrow={<T en="Business Opportunity" hi="व्यापार का अवसर" />}
        title={<T en="Partner With DPT Home Care" hi="DPT Home Care के पार्टनर बनें" />}
        subtitle={
          <T
            en="Join our growing network of distributors and dealers. Build a profitable business with a trusted hygiene brand behind you."
            hi="हमारे बढ़ते डिस्ट्रीब्यूटर और डीलर नेटवर्क से जुड़ें। एक भरोसेमंद हाइजीन ब्रांड के साथ मुनाफ़े वाला व्यवसाय बनाएं।"
          />
        }
        image={IMG.warehouseAisle}
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Become a Distributor", nameHi: "डिस्ट्रीब्यूटर बनें", path: "/become-distributor" },
        ]}
      />

      {/* Opportunity intro */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip">
              <T en="The Opportunity" hi="अवसर" />
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy text-balance">
              <T en="A Business Built on Everyday Essentials" hi="रोज़मर्रा की ज़रूरतों पर बना व्यवसाय" />
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              <T
                en="Cleaning and hygiene products are used every single day in every home and business — making them one of the most dependable, repeat-purchase categories in retail. As a DPT Home Care partner, you tap into this steady demand with a complete product range, trusted quality and pricing that keeps your business profitable."
                hi="सफाई और स्वच्छता के उत्पाद हर घर और हर व्यवसाय में रोज़ इस्तेमाल होते हैं — इसीलिए यह रिटेल की सबसे भरोसेमंद, बार-बार बिकने वाली कैटेगरी में से एक है। DPT Home Care के पार्टनर के रूप में आपको मिलती है पूरी प्रोडक्ट रेंज, भरोसेमंद क्वालिटी और ऐसी कीमतें जो आपके व्यवसाय को मुनाफ़े में रखती हैं।"
              />
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 rounded-[2rem] bg-brand-gradient p-8 text-center text-white md:grid-cols-4 md:p-12">
            {[
              { value: site.stats.products, suffix: "+", label: "Products to Sell", labelHi: "बेचने के लिए उत्पाद" },
              { value: site.stats.citiesServed, suffix: "+", label: "Cities Served", labelHi: "शहरों तक पहुंच" },
              { value: site.stats.clients, suffix: "+", label: "Existing Customers", labelHi: "मौजूदा ग्राहक" },
              { value: 100, suffix: "%", label: "Repeat-Use Category", labelHi: "बार-बार बिकने वाली कैटेगरी" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/80">
                  <T en={s.label} hi={s.labelHi} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Partner Benefits" hi="पार्टनर के फ़ायदे" />}
            title={<T en="Why Partner With Us" hi="हमारे साथ पार्टनरशिप क्यों करें" />}
            subtitle={
              <T
                en="Everything you need to build and grow a successful distribution business."
                hi="सफल डिस्ट्रीब्यूशन व्यवसाय बनाने और बढ़ाने के लिए जो चाहिए, सब कुछ।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">
                    <T en={b.title} hi={b.titleHi} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    <T en={b.text} hi={b.textHi} />
                  </p>
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
            <span className="chip">
              <T en="What You Need" hi="आपको क्या चाहिए" />
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              <T en="Requirements to Get Started" hi="शुरुआत के लिए ज़रूरी बातें" />
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              <T
                en="We keep our partnership requirements simple and transparent. If the points below describe you, we'd love to hear from you."
                hi="हम पार्टनरशिप की शर्तें आसान और पारदर्शी रखते हैं। अगर नीचे दी गई बातें आप पर लागू होती हैं, तो हमें आपसे बात करके खुशी होगी।"
              />
            </p>
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r.en} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> <T en={r.en} hi={r.hi} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] p-5">
              <Handshake className="h-9 w-9 shrink-0 text-brand-blue" />
              <p className="text-sm text-ink-soft">
                <T
                  en="Territories are opening across Uttar Pradesh and beyond. Apply now to check availability in your area — our team responds within 1–2 business days."
                  hi="उत्तर प्रदेश और उसके बाहर नए क्षेत्र खुल रहे हैं। अपने क्षेत्र में उपलब्धता जानने के लिए अभी आवेदन करें — हमारी टीम 1–2 कार्यदिवसों में जवाब देती है।"
                />
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
