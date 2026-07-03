import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  breadcrumbs,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  image?: string;
  breadcrumbs: { name: string; nameHi?: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient-soft pt-32 pb-16 md:pt-40 md:pb-24">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority={false}
        />
      )}
      <div className="absolute inset-0 bg-brand-navy/50" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-wide relative">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] text-white text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
