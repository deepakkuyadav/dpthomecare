import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/types";
import { whatsappLink } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group card-surface overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue backdrop-blur">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-brand-navy">
          <Link href={`/products/${product.slug}`} className="transition-colors hover:text-brand-blue">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-green-dark">{product.tagline}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(`Hello DPT Home Care, I'm interested in ${product.name}. Please share details and pricing.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 px-4 py-2 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-green hover:text-white hover:border-brand-green"
          >
            <MessageCircle className="h-4 w-4" /> Enquiry
          </a>
        </div>
      </div>
    </article>
  );
}
