"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Product, Category } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function ProductsExplorer({
  products,
  categories,
  initialCategory = "All",
}: {
  products: Product[];
  categories: Category[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(initialCategory);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = active === "All" || p.category === active;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [products, query, active]);

  const cats = ["All", ...categories.map((c) => c.name)];

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          <SlidersHorizontal className="h-4 w-4" />
          <span>
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>
        </div>
      </div>

      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === c
                ? "bg-brand-gradient text-white shadow-sm"
                : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-dashed border-slate-200 py-16 text-center">
          <p className="text-lg font-semibold text-brand-navy">No products found</p>
          <p className="mt-1 text-ink-muted">Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
