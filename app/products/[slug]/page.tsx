import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldAlert,
  Sparkles,
  ListChecks,
  Droplets,
  Package,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, getRelatedProducts, products, categories } from "@/lib/products";
import { pageMetadata, breadcrumbSchema, productSchema, faqSchema } from "@/lib/seo";
import { site, whatsappLink, telLink } from "@/lib/site";
import { T } from "@/lib/lang";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return pageMetadata({ title: "Product Not Found", description: "Product not found." });
  return pageMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: product.keywords,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);
  const categoryHi = categories.find((c) => c.name === product.category)?.nameHi;
  // nameHi is display-only; breadcrumbSchema below reads `name` and stays English.
  const crumbs = [
    { name: "Home", nameHi: "होम", path: "/" },
    { name: "Products", nameHi: "प्रोडक्ट्स", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          productSchema(product),
          faqSchema(product.faqs),
        ]}
      />

      {/* Top: image + summary */}
      <section className="relative overflow-hidden bg-brand-gradient-soft pt-32 pb-16 md:pt-36">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-wide relative">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-white/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={800}
                  className="aspect-[5/4] w-full object-cover"
                  priority
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <T en={product.category} hi={categoryHi ?? product.category} />
                </span>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="text-white">
                <h1 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-brand-green-light">
                  <T en={product.tagline} hi={product.taglineHi ?? product.tagline} />
                </p>
                <p className="mt-5 text-white/85 leading-relaxed">
                  <T en={product.description} hi={product.descriptionHi ?? product.description} />
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {product.benefits.slice(0, 4).map((b, i) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-light" />
                      <span>
                        <T en={b} hi={product.benefitsHi?.[i] ?? b} />
                      </span>
                    </li>
                  ))}
                </ul>

                {product.fragrance && (
                  <p className="mt-5 text-sm text-white/70">
                    <span className="font-semibold text-white">
                      <T en="Fragrance:" hi="खुशबू:" />
                    </span>{" "}
                    <T en={product.fragrance} hi={product.fragranceHi ?? product.fragrance} />
                  </p>
                )}

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">
                    <T en="Available packing sizes" hi="उपलब्ध पैक साइज़" />
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.packingSizes.map((s) => (
                      <span key={s} className="rounded-full bg-white/15 px-3 py-1 text-sm text-white ring-1 ring-white/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappLink(`Hello DPT Home Care, I'm interested in ${product.name}. Please share pricing and packing details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                  >
                    <MessageCircle className="h-4 w-4" /> <T en="Enquire on WhatsApp" hi="WhatsApp पर पूछताछ करें" />
                  </a>
                  <a href={telLink()} className="btn-white">
                    <Phone className="h-4 w-4" /> {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {/* Benefits & Features */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-brand-blue">
                  <Sparkles className="h-5 w-5" />
                  <h2 className="text-lg font-bold text-brand-navy">
                    <T en="Key Benefits" hi="मुख्य फ़ायदे" />
                  </h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {product.benefits.map((b, i) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{" "}
                      <T en={b} hi={product.benefitsHi?.[i] ?? b} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-brand-blue">
                  <ListChecks className="h-5 w-5" />
                  <h2 className="text-lg font-bold text-brand-navy">
                    <T en="Features" hi="खूबियाँ" />
                  </h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {product.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{" "}
                      <T en={f} hi={product.featuresHi?.[i] ?? f} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-bold text-brand-navy">
                <T en="Specifications" hi="स्पेसिफिकेशन्स" />
              </h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((s, i) => (
                      <tr key={s.label} className={i % 2 ? "bg-slate-50/60" : "bg-white"}>
                        <th className="w-2/5 px-4 py-3 text-left font-semibold text-brand-navy">
                          <T en={s.label} hi={s.labelHi ?? s.label} />
                        </th>
                        <td className="px-4 py-3 text-ink-soft">
                          <T en={s.value} hi={s.valueHi ?? s.value} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Usage */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-2 text-brand-blue">
                <Droplets className="h-5 w-5" />
                <h2 className="text-lg font-bold text-brand-navy">
                  <T en="How to Use" hi="इस्तेमाल का तरीका" />
                </h2>
              </div>
              <ol className="mt-4 space-y-3">
                {product.usage.map((u, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">
                      <T en={u} hi={product.usageHi?.[i] ?? u} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Safety */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber-700">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="text-lg font-bold text-amber-800">
                  <T en="Safety Instructions" hi="सुरक्षा निर्देश" />
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {product.safety.map((s, i) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-amber-900/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />{" "}
                    <T en={s} hi={product.safetyHi?.[i] ?? s} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Product FAQ */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-brand-navy">
                <T en="Product FAQs" hi="प्रोडक्ट से जुड़े सवाल" />
              </h2>
              <FAQAccordion items={product.faqs} defaultOpen={0} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-brand-blue/[0.03] p-6">
                <div className="flex items-center gap-2 text-brand-blue">
                  <Package className="h-5 w-5" />
                  <h3 className="font-bold text-brand-navy">
                    <T en="Packing Options" hi="पैकिंग विकल्प" />
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.packingSizes.map((s) => (
                    <span key={s} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-navy ring-1 ring-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink-muted">
                  <T
                    en="Bulk and institutional quantities available. Contact us for wholesale pricing."
                    hi="थोक और संस्थागत मात्रा में भी उपलब्ध। होलसेल कीमत के लिए हमसे संपर्क करें।"
                  />
                </p>
                <a
                  href={whatsappLink(`Hello DPT Home Care, please share pricing for ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green mt-4 w-full"
                >
                  <MessageCircle className="h-4 w-4" /> <T en="Get Pricing" hi="कीमत जानें" />
                </a>
              </div>
              <EnquiryForm
                productName={product.name}
                heading={<T en="Quick Enquiry" hi="झटपट पूछताछ" />}
                subheading={
                  <T
                    en="Ask about this product and we'll respond fast."
                    hi="इस प्रोडक्ट के बारे में पूछें — हमारी टीम जल्दी जवाब देगी।"
                  />
                }
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Related products */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            eyebrow={<T en="You May Also Like" hi="आपको ये भी पसंद आ सकते हैं" />}
            title={<T en="Related Products" hi="मिलते-जुलते प्रोडक्ट्स" />}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-outline">
              <T en="View All Products" hi="सभी प्रोडक्ट्स देखें" /> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
