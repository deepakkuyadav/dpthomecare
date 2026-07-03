import { CheckCircle2, Clock, ShieldCheck, IndianRupee, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Get a Quote — Request Pricing for Cleaning Products",
  description:
    "Request a free quote from DPT Home Care for bulk and retail cleaning products. Fast response with competitive pricing for homes, institutions, dealers and distributors.",
  path: "/get-a-quote",
  keywords: ["cleaning products quote", "bulk cleaning products price", "request quote", "wholesale cleaning products"],
});

const perks = [
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    titleHi: "किफ़ायती कीमतें",
    text: "Honest rates for retail and bulk, with healthy margins for dealers.",
    textHi: "रिटेल और बल्क के लिए ईमानदार रेट, डीलरों के लिए अच्छे मार्जिन के साथ।",
  },
  {
    icon: Clock,
    title: "Fast Response",
    titleHi: "तेज़ जवाब",
    text: "Our team gets back to you quickly with pricing and packing options.",
    textHi: "हमारी टीम कीमतों और पैकिंग विकल्पों के साथ जल्दी जवाब देती है।",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation",
    titleHi: "कोई बाध्यता नहीं",
    text: "Requesting a quote is free and commits you to nothing.",
    textHi: "कोटेशन मांगना बिल्कुल मुफ़्त है — आप पर कोई बाध्यता नहीं।",
  },
];

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }])} />
      <PageHero
        eyebrow={<T en="Get a Quote" hi="कोटेशन पाएं" />}
        title={<T en="Request Your Free Quote" hi="अपना मुफ़्त कोटेशन पाएं" />}
        subtitle={
          <T
            en="Tell us what you need and we'll send you competitive pricing for your home, business or distribution requirement."
            hi="हमें बताएं कि आपको क्या चाहिए — घर, व्यवसाय या डिस्ट्रीब्यूशन की ज़रूरत के लिए हम आपको किफ़ायती कीमतें भेजेंगे।"
          />
        }
        image={IMG.cleaningProducts}
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Get a Quote", nameHi: "कोटेशन पाएं", path: "/get-a-quote" },
        ]}
      />

      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: perks + contact */}
          <Reveal direction="right">
            <span className="chip">
              <T en="Why request a quote" hi="कोटेशन क्यों मांगें" />
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-brand-navy">
              <T en="Pricing Tailored to Your Requirement" hi="आपकी ज़रूरत के हिसाब से कीमतें" />
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              <T
                en="We don't believe in one-size-fits-all pricing. Share your products, quantities and location, and we'll give you a quote that fits — whether you're buying for your home or stocking a business."
                hi="हम सबके लिए एक जैसी कीमत में विश्वास नहीं रखते। अपने उत्पाद, मात्रा और लोकेशन बताएं — चाहे आप घर के लिए खरीद रहे हों या व्यवसाय के लिए स्टॉक कर रहे हों, हम आपको सही कोटेशन देंगे।"
              />
            </p>

            <div className="mt-8 space-y-4">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">
                      <T en={p.title} hi={p.titleHi} />
                    </h3>
                    <p className="text-sm text-ink-muted">
                      <T en={p.text} hi={p.textHi} />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold text-brand-navy">
                <T en="Prefer to talk directly?" hi="सीधे बात करना चाहते हैं?" />
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={whatsappLink("Hi DPT Home Care, I'd like a quote for your products.")} target="_blank" rel="noopener noreferrer" className="btn-green">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={telLink()} className="btn-outline">
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> <T en="Retail & bulk quantities" hi="रिटेल और बल्क मात्रा" /></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> <T en="Dealer & distributor pricing" hi="डीलर और डिस्ट्रीब्यूटर कीमतें" /></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> <T en="Institutional supply" hi="संस्थानों के लिए सप्लाई" /></li>
              </ul>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal direction="left">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
