import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { site, telLink } from "@/lib/site";

export function CTABand({
  eyebrow,
  title,
  text,
  image,
  primary,
  showCall = true,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  image?: string;
  primary: { label: string; href: string };
  showCall?: boolean;
}) {
  return (
    <section className="section">
      <div className="container-wide">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 md:px-16 md:py-20">
          {image && (
            <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-15" />
          )}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-green/20 blur-2xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{text}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={primary.href} className="btn-white">
                {primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {showCall && (
                <a href={telLink()} className="btn inline-flex border-2 border-white/40 text-white hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
