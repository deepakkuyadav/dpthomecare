import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { footerNav } from "@/lib/nav";
import { products } from "@/lib/products";
import { Newsletter } from "./Newsletter";

const socials = [
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Ready to experience the Power of Hygiene?</h3>
            <p className="mt-1 text-white/70">
              Talk to our team about products, bulk supply or distributorship.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-green">
              Chat on WhatsApp
            </a>
            <a href={telLink()} className="btn-white">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative container-wide grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center rounded-2xl bg-white p-1">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={120}
                height={120}
                className="h-14 w-14 object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-xl font-bold">
                DPT <span className="text-brand-green-light">Home Care</span>
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Power of Hygiene
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.shortDesc}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-green hover:text-white"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-brand-green-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Our Products</h4>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
            {products.slice(0, 10).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-white/70 transition-colors hover:text-brand-green-light"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Link href="/products" className="font-semibold text-brand-green-light hover:underline">
                View all products →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-light" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-light" />
              <a href={telLink()} className="hover:text-white">{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-light" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-light" />
              <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h4>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerNav.company.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
