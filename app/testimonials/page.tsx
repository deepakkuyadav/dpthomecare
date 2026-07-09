import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
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
    "Read genuine reviews from homeowners, hotels, hospitals, restaurants, retailers and distributors who trust DPT Home Care cleaning products.",
  path: "/testimonials",
  keywords: ["DPT Home Care reviews", "cleaning products testimonials", "customer feedback"],
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
            en="Don't just take our word for it — hear from the families, businesses and partners who rely on DPT Home Care every day."
            hi="सिर्फ हमारी बात न मानें — उन परिवारों, बिज़नेस और पार्टनर्स से सुनें जो हर दिन DPT Home Care पर भरोसा करते हैं।"
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

      {/* Grid */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                  <Quote className="h-9 w-9 text-brand-blue/15" />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`h-4 w-4 ${s < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    “<T en={t.quote} hi={t.quoteHi ?? t.quote} />”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">{t.name}</p>
                      <p className="text-xs text-ink-muted">
                        <T en={t.role} hi={t.roleHi ?? t.role} /> · <T en={t.location} hi={t.locationHi ?? t.location} />
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor review form + live visitor reviews */}
      <ReviewsSection />

      <CTABand
        eyebrow={<T en="Join Them" hi="आप भी जुड़ें" />}
        title={<T en="Experience the Power of Hygiene" hi="हाइजीन की ताकत का अनुभव करें" />}
        text={
          <T
            en="Discover why thousands trust DPT Home Care. Explore our products or reach out for bulk supply."
            hi="जानें क्यों हज़ारों लोग DPT Home Care पर भरोसा करते हैं। हमारे उत्पाद देखें या बल्क सप्लाई के लिए संपर्क करें।"
          />
        }
        image={IMG.sparkleKitchen}
        primary={{ label: <T en="Explore Products" hi="उत्पाद देखें" />, href: "/products" }}
      />
    </>
  );
}
