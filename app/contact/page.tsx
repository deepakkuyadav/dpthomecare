import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Contact Us — Get in Touch with DPT Home Care",
  description:
    "Contact DPT Home Care in Jaunpur, Uttar Pradesh. Call 9451900062, message us on WhatsApp, or send an enquiry for products, bulk supply and distributorship.",
  path: "/contact",
  keywords: ["contact DPT Home Care", "cleaning products Jaunpur contact", "bulk cleaning supply enquiry"],
});

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [site.address.line1, `${site.address.city}, ${site.address.state}`, site.address.pincode],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phoneDisplay, "Mon–Sat, 9 AM – 7 PM"],
    href: telLink(),
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon–Sat: 9 AM – 7 PM", "Sunday: 10 AM – 2 PM"],
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
        eyebrow="Contact Us"
        title="Let's Talk Hygiene"
        subtitle="Have a question about our products, need a bulk quote, or interested in a distributorship? We'd love to hear from you."
        image={IMG.cleaningProductsTable}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]}
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
                  <h3 className="mt-4 font-bold text-brand-navy">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-ink-muted">{l}</p>
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
                heading="Send Us a Message"
                subheading="Fill in the form and your enquiry opens in WhatsApp for an instant reply."
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
                  <h3 className="text-xl font-bold">Prefer to chat instantly?</h3>
                  <p className="mt-2 text-white/85">
                    Message us on WhatsApp or give us a call — we're quick to respond during working hours.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-white">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <a href={telLink()} className="btn inline-flex border-2 border-white/40 text-white hover:bg-white/10">
                      <Phone className="h-4 w-4" /> Call Now
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
