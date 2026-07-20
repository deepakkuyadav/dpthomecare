import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Contact Us — Get in Touch with DP Shudh Dhulai Home Care",
  description:
    "Contact DP Shudh Dhulai Home Care in Jaunpur, Uttar Pradesh. Call 9451900062, message us on WhatsApp, or send an enquiry for products, bulk supply and distributorship.",
  path: "/contact",
  keywords: ["contact DP Shudh Dhulai Home Care", "cleaning products Jaunpur contact", "bulk cleaning supply enquiry"],
});

const cards: {
  icon: typeof MapPin;
  title: string;
  titleHi: string;
  lines: { en: string; hi?: string }[];
  href?: string;
}[] = [
  {
    icon: MapPin,
    title: "Visit Us",
    titleHi: "हमसे मिलें",
    lines: [
      { en: site.address.line1 },
      { en: `${site.address.city}, ${site.address.state}` },
      { en: site.address.pincode },
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    titleHi: "कॉल करें",
    lines: [
      { en: site.phoneDisplay },
      { en: "Mon–Sat, 9 AM – 7 PM", hi: "सोम–शनि, सुबह 9 – शाम 7 बजे" },
    ],
    href: telLink(),
  },
  {
    icon: Mail,
    title: "Email Us",
    titleHi: "ईमेल करें",
    lines: [{ en: site.email }],
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    titleHi: "कार्य समय",
    lines: [
      { en: "Mon–Sat: 9 AM – 7 PM", hi: "सोम–शनि: सुबह 9 – शाम 7 बजे" },
      { en: "Sunday: 10 AM – 2 PM", hi: "रविवार: सुबह 10 – दोपहर 2 बजे" },
    ],
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.pincode}`
  )}&output=embed`;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }])} />
      <PageHero
        eyebrow={<T en="Contact Us" hi="संपर्क करें" />}
        title={<T en="Let's Talk Hygiene" hi="आइए स्वच्छता की बात करें" />}
        subtitle={
          <T
            en="Have a question about our products, need a bulk quote, or interested in a distributorship? We'd love to hear from you."
            hi="हमारे उत्पादों के बारे में कोई सवाल है, बल्क कोटेशन चाहिए, या डिस्ट्रीब्यूटरशिप में रुचि है? हमें आपसे बात करके खुशी होगी।"
          />
        }
        image={IMG.cleaningProductsTable}
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Contact Us", nameHi: "संपर्क करें", path: "/contact" },
        ]}
      />

      {/* Info cards */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => {
              const inner = (
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-navy">
                    <T en={c.title} hi={c.titleHi} />
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l.en} className="mt-1 text-sm text-ink-muted">
                      <T en={l.en} hi={l.hi ?? l.en} />
                    </p>
                  ))}
                </div>
              );
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  {c.href ? (
                    <a href={c.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Form + map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal direction="right">
              <EnquiryForm
                heading={<T en="Send Us a Message" hi="हमें संदेश भेजें" />}
                subheading={
                  <T
                    en="Fill in the form and your enquiry opens in WhatsApp for an instant reply."
                    hi="फ़ॉर्म भरें — आपकी पूछताछ तुरंत जवाब के लिए WhatsApp में खुल जाएगी।"
                  />
                }
              />
            </Reveal>
            <Reveal direction="left">
              <div className="flex h-full flex-col gap-6">
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-card">
                  <iframe
                    title={`${site.name} location map`}
                    src={mapSrc}
                    className="h-72 w-full lg:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="rounded-3xl bg-brand-gradient p-7 text-white">
                  <h3 className="text-xl font-bold">
                    <T en="Prefer to chat instantly?" hi="तुरंत चैट करना चाहते हैं?" />
                  </h3>
                  <p className="mt-2 text-white/85">
                    <T
                      en="Message us on WhatsApp or give us a call — we're quick to respond during working hours."
                      hi="WhatsApp पर मैसेज करें या हमें कॉल करें — कार्य समय में हम जल्दी जवाब देते हैं।"
                    />
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-white">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <a href={telLink()} className="btn inline-flex border-2 border-white/40 text-white hover:bg-white/10">
                      <Phone className="h-4 w-4" /> <T en="Call Now" hi="अभी कॉल करें" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
