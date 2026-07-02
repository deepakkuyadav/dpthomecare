"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";

export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="no-scrollbar flex flex-wrap justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === c ? "bg-brand-gradient text-white shadow-sm" : "bg-slate-100 text-ink-soft hover:bg-slate-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.button
              key={item.image}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-green-light">{item.category}</span>
                <p className="font-semibold text-white">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/85 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl"
            >
              <Image
                src={lightbox.image.replace("w=1200", "w=1600")}
                alt={lightbox.title}
                width={1600}
                height={1200}
                className="h-auto w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-green-light">{lightbox.category}</span>
                <p className="text-lg font-semibold text-white">{lightbox.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
