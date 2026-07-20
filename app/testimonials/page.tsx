import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Counter } from "@/components/Counter";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsSection } from "@/components/ReviewsSection";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Testimonials — What Our Customers Say",
  description:
    "Read genuine reviews from homeowners, hotels, hospitals, restaurants, retailers and distributors who trust DP Shudh Dhulai Home Care cleaning products.",
  path: "/testimonials",
  keywords: ["DP Shudh Dhulai Home Care reviews", "cleaning products testimonials", "customer feedback"],
});

const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])} />
      <PageHero
        eyebrow={<T en="Testimonials" hi="ग्राहकों की राय" />}
        title={<T en="Trusted by Thousands" hi="हज़ारों का भरोसा" />}
        subtitle={
          <T
            en="Don't just take our word for it — hear from the families, businesses and partners who rely on DP Shudh Dhulai Home Care every day."
            hi="सिर्फ हमारी बात न मानें — उन परिवारों, बिज़नेस और पार्टनर्स से सुनें जो हर दिन DP Shudh Dhulai Home Care पर भरोसा करते हैं।"
          />
        }
        image={IMG.family}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Testimonials", nameHi: "ग्राहकों की राय", path: "/testimonials" }]}
      />

      {/* Rating summary */}
      <section className="pt-16">
        <div className="container-wide">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-[2rem] bg-brand-gradient p-8 text-center text-white sm:flex-row sm:justify-center sm:gap-12">
            <div>
              <p className="text-5xl font-extrabold">{avg}</p>
              <div className="mt-1 flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <p className="mt-1 text-sm text-white/80">
                <T en="Average rating" hi="औसत रेटिंग" />
              </p>
            </div>
            <div className="h-px w-24 bg-white/20 sm:h-16 sm:w-px" />
            <div>
              <p className="text-5xl font-extrabold">
                <Counter value={1200} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-white/80">
                <T en={<>Happy customers &amp; partners</>} hi="खुश ग्राहक और पार्टनर" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial grid (visitor reviews appear at the top) + review form */}
      <ReviewsSection testimonials={testimonials} />

      <CTABand
        eyebrow={<T en="Join Them" hi="आप भी जुड़ें" />}
        title={<T en="Experience the Power of Hygiene" hi="हाइजीन की ताकत का अनुभव करें" />}
        text={
          <T
            en="Discover why thousands trust DP Shudh Dhulai Home Care. Explore our products or reach out for bulk supply."
            hi="जानें क्यों हज़ारों लोग DP Shudh Dhulai Home Care पर भरोसा करते हैं। हमारे उत्पाद देखें या बल्क सप्लाई के लिए संपर्क करें।"
          />
        }
        image={IMG.sparkleKitchen}
        primary={{ label: <T en="Explore Products" hi="उत्पाद देखें" />, href: "/products" }}
      />
    </>
  );
}
