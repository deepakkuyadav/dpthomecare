import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import { IMG } from "@/lib/images";
import { T } from "@/lib/lang";

export const metadata = pageMetadata({
  title: "Blog — Cleaning Tips, Hygiene Guides & Advice",
  description:
    "Practical cleaning tips and hygiene guides from DPT Home Care — how to clean your bathroom, kitchen and floors, remove tough stains, keep your home fresh and more.",
  path: "/blog",
  keywords: ["cleaning tips", "hygiene blog", "home cleaning guide", "cleaning advice India"],
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow={<T en="Our Blog" hi="हमारा ब्लॉग" />}
        title={<T en="Cleaning Tips & Hygiene Guides" hi="सफाई के टिप्स और हाइजीन गाइड" />}
        subtitle={
          <T
            en="Expert advice to keep your home and business spotless, fresh and healthy — from the DPT Home Care team."
            hi="अपने घर और बिज़नेस को साफ, फ्रेश और हेल्दी रखने के लिए एक्सपर्ट सलाह — DPT Home Care टीम की ओर से।"
          />
        }
        image={IMG.cozyHome}
        breadcrumbs={[{ name: "Home", nameHi: "होम", path: "/" }, { name: "Blog", nameHi: "ब्लॉग", path: "/blog" }]}
      />

      {/* Featured */}
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <T en="Featured" hi="फ़ीचर्ड" />
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  <T en={featured.category} hi={featured.categoryHi ?? featured.category} />
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold text-brand-navy md:text-3xl">
                  <T en={featured.title} hi={featured.titleHi ?? featured.title} />
                </h2>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  <T en={featured.excerpt} hi={featured.excerptHi ?? featured.excerpt} />
                </p>
                <div className="mt-5 flex items-center gap-4 text-sm text-ink-muted">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> <T en={featured.readTime} hi={featured.readTimeHi ?? featured.readTime} /></span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-blue">
                  <T en="Read Article" hi="लेख पढ़ें" /> <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <article className="group card-surface flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
                      <T en={post.category} hi={post.categoryHi ?? post.category} />
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-muted">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> <T en={post.readTime} hi={post.readTimeHi ?? post.readTime} /></span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold text-brand-navy">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-blue">
                        <T en={post.title} hi={post.titleHi ?? post.title} />
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-muted">
                      <T en={post.excerpt} hi={post.excerptHi ?? post.excerpt} />
                    </p>
                    <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      <T en="Read more" hi="आगे पढ़ें" /> <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
