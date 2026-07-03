import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about DPT Home Care, a trusted cleaning products manufacturer in Jaunpur, UP. Our story, mission, vision, core values, manufacturing standards and quality commitment.",
  path: "/about",
  keywords: ["about DPT Home Care", "cleaning products manufacturer", "hygiene company Jaunpur"],
});

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    titleHi: "क्वालिटी सबसे पहले",
    text: "We never compromise on the performance and safety of our products — every batch is tested and trusted.",
    textHi: "हम अपने प्रोडक्ट्स के प्रदर्शन और सुरक्षा से कभी समझौता नहीं करते — हर बैच टेस्टेड और भरोसेमंद होता है।",
  },
  {
    icon: HeartHandshake,
    title: "Customer Trust",
    titleHi: "ग्राहकों का भरोसा",
    text: "We earn loyalty by delivering consistent results and honest value, order after order.",
    textHi: "हम हर ऑर्डर के साथ एक जैसे नतीजे और ईमानदार वैल्यू देकर ग्राहकों का भरोसा कमाते हैं।",
  },
  {
    icon: Award,
    title: "Integrity",
    titleHi: "ईमानदारी",
    text: "Fair pricing, transparent dealings and reliable supply define how we do business.",
    textHi: "उचित दाम, पारदर्शी व्यवहार और भरोसेमंद सप्लाई — यही हमारे बिज़नेस करने का तरीका है।",
  },
  {
    icon: Factory,
    title: "Continuous Improvement",
    titleHi: "निरंतर सुधार",
    text: "We keep refining our formulations and processes to serve you better every day.",
    textHi: "हम अपने फॉर्मूलों और प्रोसेस को लगातार बेहतर बनाते रहते हैं, ताकि आपको हर दिन बेहतर सेवा मिले।",
  },
];

const standards = [
  { en: "Careful selection and inspection of raw materials", hi: "कच्चे माल का सावधानी से चयन और निरीक्षण" },
  { en: "Controlled batch blending with accurate dosing", hi: "सटीक मात्रा के साथ नियंत्रित बैच ब्लेंडिंग" },
  { en: "Testing for pH, viscosity, fragrance and cleaning performance", hi: "pH, विस्कोसिटी, खुशबू और क्लीनिंग परफॉर्मेंस की जांच" },
  { en: "Hygienic, leak-proof filling and sealing", hi: "हाइजीनिक, लीक-प्रूफ फिलिंग और सीलिंग" },
  { en: "Clear labelling with usage and safety instructions", hi: "उपयोग और सुरक्षा निर्देशों के साथ स्पष्ट लेबलिंग" },
  { en: "Safe storage and prompt, careful dispatch", hi: "सुरक्षित भंडारण और समय पर, सावधानी से डिस्पैच" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <PageHero
        eyebrow={<T en="About Us" hi="हमारे बारे में" />}
        title={<T en="The Story Behind the Power of Hygiene" hi="Power of Hygiene के पीछे की कहानी" />}
        subtitle={
          <T
            en="A trusted manufacturer and supplier of premium cleaning products, dedicated to making quality hygiene affordable for every home and business."
            hi="प्रीमियम क्लीनिंग प्रोडक्ट्स का भरोसेमंद निर्माता और सप्लायर — हर घर और बिज़नेस के लिए क्वालिटी हाइजीन को किफायती बनाने के लिए समर्पित।"
          />
        }
        image={IMG.warehouse}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "About Us", nameHi: "हमारे बारे में", path: "/about" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={IMG.cleaningProducts} alt="DPT Home Care product range" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="chip"><T en="Our Story" hi="हमारी कहानी" /></span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              <T en="From a Simple Belief to a Complete Hygiene Brand" hi="एक सरल विश्वास से एक संपूर्ण हाइजीन ब्रांड तक" />
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
              <p>
                <T
                  en={
                    <>
                      DPT Home Care was founded in {site.founded} in Jaunpur, Uttar Pradesh, on a simple belief: that
                      effective, safe hygiene shouldn't be a luxury. Too many families and businesses were forced to
                      choose between products that worked and products they could afford. We set out to remove that
                      compromise.
                    </>
                  }
                  hi={
                    <>
                      DPT Home Care की शुरुआत {site.founded} में जौनपुर, उत्तर प्रदेश में एक सरल विश्वास के साथ हुई:
                      असरदार और सुरक्षित स्वच्छता कोई लग्ज़री नहीं होनी चाहिए। बहुत से परिवारों और बिज़नेस को असरदार
                      प्रोडक्ट और किफायती प्रोडक्ट में से किसी एक को चुनना पड़ता था। हमने इसी समझौते को खत्म करने की ठानी।
                    </>
                  }
                />
              </p>
              <p>
                <T
                  en="Starting with a handful of essential cleaners, we listened closely to our customers and grew our range steadily. Today, DPT Home Care manufactures over 15 household and institutional cleaning products — from floor and toilet cleaners to dishwash, hand wash, sanitizers and more."
                  hi="कुछ ज़रूरी क्लीनर्स से शुरुआत करके, हमने अपने ग्राहकों की बात ध्यान से सुनी और अपनी रेंज लगातार बढ़ाई। आज DPT Home Care 15 से अधिक घरेलू और संस्थागत क्लीनिंग प्रोडक्ट्स बनाता है — फ्लोर और टॉयलेट क्लीनर से लेकर डिशवॉश, हैंड वॉश, सैनिटाइज़र और भी बहुत कुछ।"
                />
              </p>
              <p>
                <T
                  en="Our products now keep homes, hotels, hospitals, restaurants, schools and offices spotless across the region, supported by a growing network of loyal dealers and distributors who trust our quality and value."
                  hi="आज हमारे प्रोडक्ट्स पूरे क्षेत्र में घरों, होटलों, हॉस्पिटलों, रेस्टोरेंट, स्कूलों और ऑफिसों को बेदाग रखते हैं — और हमारी क्वालिटी व वैल्यू पर भरोसा करने वाले डीलरों और डिस्ट्रीब्यूटरों का नेटवर्क लगातार बढ़ रहा है।"
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-slate-50">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand-navy"><T en="Our Mission" hi="हमारा मिशन" /></h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                <T
                  en="To make high-quality hygiene accessible to every home and business by manufacturing effective, safe and affordable cleaning products — and to deliver them with reliability and integrity."
                  hi="असरदार, सुरक्षित और किफायती क्लीनिंग प्रोडक्ट्स बनाकर हर घर और बिज़नेस तक हाई-क्वालिटी हाइजीन पहुंचाना — और उन्हें भरोसे और ईमानदारी के साथ डिलीवर करना।"
                />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand-navy"><T en="Our Vision" hi="हमारा विज़न" /></h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                <T
                  en="To become one of the most trusted names in cleaning and hygiene across India — recognised for product quality, customer care and a lasting commitment to healthier living spaces."
                  hi="पूरे भारत में क्लीनिंग और हाइजीन के सबसे भरोसेमंद नामों में से एक बनना — प्रोडक्ट क्वालिटी, कस्टमर केयर और स्वस्थ रहने की जगहों के प्रति स्थायी प्रतिबद्धता के लिए पहचाना जाना।"
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="Core Values" hi="हमारे मूल्य" />}
            title={<T en="The Principles That Guide Us" hi="वे सिद्धांत जो हमें राह दिखाते हैं" />}
            subtitle={
              <T
                en="Our values shape every product we make and every relationship we build."
                hi="हमारे मूल्य हमारे हर प्रोडक्ट और हर रिश्ते को आकार देते हैं।"
              />
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-navy"><T en={v.title} hi={v.titleHi} /></h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted"><T en={v.text} hi={v.textHi} /></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="section bg-slate-50">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="chip-green"><T en="Manufacturing Standards" hi="मैन्युफैक्चरिंग स्टैंडर्ड" /></span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              <T en="Consistent Quality in Every Bottle" hi="हर बोतल में एक जैसी क्वालिटी" />
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              <T
                en="Great cleaning products start with great manufacturing discipline. Our production follows a controlled, quality-checked process from start to finish, so you get the same trusted performance every time."
                hi="बेहतरीन क्लीनिंग प्रोडक्ट्स की शुरुआत बेहतरीन मैन्युफैक्चरिंग अनुशासन से होती है। हमारा उत्पादन शुरू से अंत तक एक नियंत्रित, क्वालिटी-चेक्ड प्रोसेस से गुज़रता है, ताकि आपको हर बार वही भरोसेमंद प्रदर्शन मिले।"
              />
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {standards.map((s) => (
                <li key={s.en} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span><T en={s.en} hi={s.hi} /></span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={IMG.warehousePallet} alt="DPT Home Care quality control and packaging" width={900} height={720} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Policy & Commitment */}
      <section className="section">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-blue/15 bg-brand-blue/[0.03] p-8">
              <h3 className="text-2xl font-bold text-brand-navy"><T en="Our Quality Policy" hi="हमारी क्वालिटी नीति" /></h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                <T
                  en="We are committed to manufacturing cleaning products that meet high standards of effectiveness and safety. Through careful sourcing, controlled production and batch-wise testing, we ensure that every DPT product performs exactly as promised — protecting the health and satisfaction of the people who use it."
                  hi="हम ऐसे क्लीनिंग प्रोडक्ट्स बनाने के लिए प्रतिबद्ध हैं जो असर और सुरक्षा के ऊंचे मानकों पर खरे उतरें। सावधानी से सोर्सिंग, नियंत्रित उत्पादन और बैच-दर-बैच टेस्टिंग के ज़रिए हम सुनिश्चित करते हैं कि हर DPT प्रोडक्ट ठीक वैसा ही काम करे जैसा वादा किया गया है — और इस्तेमाल करने वालों की सेहत और संतुष्टि सुरक्षित रहे।"
                />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-brand-green/20 bg-brand-green/[0.04] p-8">
              <h3 className="text-2xl font-bold text-brand-navy"><T en="Our Commitment to You" hi="आपसे हमारा वादा" /></h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                <T
                  en="Behind every bottle is a promise: dependable quality, honest pricing and responsive service. Whether you're a family buying a single bottle or a distributor ordering in bulk, we're committed to earning your trust with every interaction — and keeping it for the long term."
                  hi="हर बोतल के पीछे एक वादा है: भरोसेमंद क्वालिटी, ईमानदार दाम और तुरंत सेवा। चाहे आप एक बोतल खरीदने वाला परिवार हों या बल्क में ऑर्डर करने वाले डिस्ट्रीब्यूटर — हम हर बार आपका भरोसा जीतने और उसे लंबे समय तक बनाए रखने के लिए प्रतिबद्ध हैं।"
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-16">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-wide relative">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { value: site.stats.products, suffix: "+", label: "Products", labelHi: "प्रोडक्ट्स" },
              { value: site.stats.clients, suffix: "+", label: "Customers", labelHi: "ग्राहक" },
              { value: site.stats.citiesServed, suffix: "+", label: "Cities Served", labelHi: "शहरों में सेवा" },
              { value: site.stats.yearsExperience, suffix: "+", label: "Years of Trust", labelHi: "वर्षों का भरोसा" },
            ].map((s) => (
              <Reveal key={s.label}>
                <p className="text-4xl font-extrabold text-white md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/75"><T en={s.label} hi={s.labelHi} /></p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-white">
              <T en="Explore Our Products" hi="हमारे प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
