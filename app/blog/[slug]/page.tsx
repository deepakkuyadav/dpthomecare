import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User, ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPost, getRelatedPosts, blogPosts } from "@/lib/blog";
import { pageMetadata, breadcrumbSchema, articleSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import type { BlogBlock } from "@/lib/types";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Article Not Found", description: "Article not found." });
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    keywords: post.keywords,
    type: "article",
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 mb-4 text-2xl font-bold text-brand-navy md:text-3xl">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 mb-3 text-xl font-bold text-brand-navy">{block.text}</h3>;
    case "p":
      return <p className="mb-5 text-[17px] leading-8 text-ink-soft">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-brand-green bg-brand-green/[0.05] p-6 text-lg font-medium italic text-brand-navy">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-[17px] leading-7 text-ink-soft">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" /> {it}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-6 space-y-3">
          {block.items.map((it, i) => (
            <li key={it} className="flex gap-3 text-[17px] leading-7 text-ink-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                {i + 1}
              </span>
              <span className="pt-0.5">{it}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(post)]} />

      {/* Header */}
      <section className="relative overflow-hidden bg-brand-gradient-soft pt-32 pb-14 md:pt-36">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-wide relative max-w-4xl">
          <Breadcrumbs items={crumbs} />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl text-balance">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image src={post.image} alt={post.title} width={1200} height={700} className="aspect-[16/9] w-full object-cover" priority />
            </div>
          </Reveal>

          <div className="mt-10">
            <p className="mb-8 text-xl font-medium leading-relaxed text-brand-navy">{post.excerpt}</p>
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Keywords */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            {post.keywords.map((k) => (
              <span key={k} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-soft">
                #{k.replace(/\s+/g, "")}
              </span>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-brand-gradient p-7 text-center text-white sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold">Need quality cleaning products?</h3>
              <p className="mt-1 text-white/80">Explore our complete range or send a quick enquiry.</p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <Link href="/products" className="btn-white">Shop Products</Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn inline-flex border-2 border-white/40 text-white hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> Enquire
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-brand-blue">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section bg-slate-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-brand-navy">Related Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <article key={p.slug} className="group card-surface overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                <Link href={`/blog/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{p.category}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-brand-navy">
                    <Link href={`/blog/${p.slug}`} className="transition-colors hover:text-brand-blue">{p.title}</Link>
                  </h3>
                  <Link href={`/blog/${p.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
