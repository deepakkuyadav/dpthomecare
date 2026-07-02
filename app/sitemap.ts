import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/our-process", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/become-distributor", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}
