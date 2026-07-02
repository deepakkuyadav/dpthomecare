import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { galleryItems, galleryCategories } from "@/lib/gallery";
import { IMG } from "@/lib/images";

export const metadata = pageMetadata({
  title: "Gallery — Our Products, Facility & Hygiene in Action",
  description:
    "Browse the DPT Home Care gallery — our cleaning product range, hygiene in action, warehouse facility and commercial applications across homes and institutions.",
  path: "/gallery",
  keywords: ["cleaning products gallery", "DPT Home Care photos", "hygiene products images"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="Hygiene in Action"
        subtitle="A closer look at our products, our facility and the spotless results we help create every day."
        image={IMG.cleaningProducts}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]}
      />

      <section className="section">
        <div className="container-wide">
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      <CTABand
        title="Like What You See?"
        text="Explore our full product range or get in touch for bulk supply and distributorship."
        image={IMG.cleaningProductsTable}
        primary={{ label: "View Products", href: "/products" }}
      />
    </>
  );
}
