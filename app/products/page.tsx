import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { products, categories } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Our Products — Complete Cleaning Products Range",
  description:
    "Explore DPT Home Care's complete range of cleaning products: floor cleaner, toilet cleaner, glass cleaner, dish wash liquid, hand wash, phenyl, sanitizer, detergent and more. Search, filter and enquire.",
  path: "/products",
  keywords: products.flatMap((p) => p.keywords).slice(0, 20),
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const initialCategory =
    params.category && categories.some((c) => c.name === params.category) ? params.category : "All";

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <PageHero
        eyebrow={<T en="Our Products" hi="हमारे प्रोडक्ट्स" />}
        title={
          <T
            en="A Complete Range of Premium Cleaning Products"
            hi="प्रीमियम सफाई प्रोडक्ट्स की पूरी रेंज"
          />
        }
        subtitle={
          <T
            en="16 powerful, safe and affordable products for every surface and every space — for homes, institutions and businesses."
            hi="हर सतह और हर जगह के लिए 16 दमदार, सुरक्षित और किफ़ायती प्रोडक्ट्स — घरों, संस्थानों और कारोबारों के लिए।"
          />
        }
        image={IMG.cleaningProductsTable}
        breadcrumbs={[
          { name: "Home", nameHi: "होम", path: "/" },
          { name: "Products", nameHi: "प्रोडक्ट्स", path: "/products" },
        ]}
      />

      <section className="section">
        <div className="container-wide">
          <ProductsExplorer products={products} categories={categories} initialCategory={initialCategory} />
        </div>
      </section>

      {/* Bulk enquiry band */}
      <section className="pb-20">
        <div className="container-wide">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-slate-100 bg-slate-50 px-6 py-10 text-center md:flex-row md:px-12 md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">
                <T en="Need bulk quantities or a custom quote?" hi="थोक मात्रा या कस्टम कोटेशन चाहिए?" />
              </h2>
              <p className="mt-2 text-ink-muted">
                <T
                  en="We supply retailers, wholesalers, institutions and cleaning agencies in bulk at competitive prices."
                  hi="हम रिटेलर्स, होलसेलर्स, संस्थानों और क्लीनिंग एजेंसियों को किफ़ायती दामों पर थोक में सप्लाई करते हैं।"
                />
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <a href={whatsappLink("Hello DPT Home Care, I would like a bulk quotation for your products.")} target="_blank" rel="noopener noreferrer" className="btn-green">
                <MessageCircle className="h-4 w-4" /> <T en="Bulk Enquiry" hi="थोक पूछताछ" />
              </a>
              <Link href="/contact" className="btn-outline">
                <T en="Contact Us" hi="संपर्क करें" /> <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
