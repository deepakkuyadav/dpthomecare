import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { galleryItems, galleryCategories } from "@/lib/gallery";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Gallery — Our Products, Facility & Hygiene in Action",
  description:
    "Browse the DP Shudh Dhulai Home Care gallery — our cleaning product range, hygiene in action, warehouse facility and commercial applications across homes and institutions.",
  path: "/gallery",
  keywords: ["cleaning products gallery", "DP Shudh Dhulai Home Care photos", "hygiene products images"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow={<T en="Gallery" hi="गैलरी" />}
        title={<T en="Hygiene in Action" hi="एक्शन में हाइजीन" />}
        subtitle={
          <T
            en="A closer look at our products, our facility and the spotless results we help create every day."
            hi="हमारे उत्पादों, हमारी फैसिलिटी और हर दिन बनने वाली चमकदार सफाई पर एक करीबी नज़र।"
          />
        }
        image={IMG.cleaningProducts}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Gallery", nameHi: "गैलरी", path: "/gallery" }]}
      />

      <section className="section">
        <div className="container-wide">
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      <CTABand
        title={<T en="Like What You See?" hi="पसंद आया?" />}
        text={
          <T
            en="Explore our full product range or get in touch for bulk supply and distributorship."
            hi="हमारी पूरी प्रोडक्ट रेंज देखें या बल्क सप्लाई और डिस्ट्रीब्यूटरशिप के लिए संपर्क करें।"
          />
        }
        image={IMG.cleaningProductsTable}
        primary={{ label: <T en="View Products" hi="उत्पाद देखें" />, href: "/products" }}
      />
    </>
  );
}
