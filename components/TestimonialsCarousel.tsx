"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { T } from "@/lib/lang";
import type { Testimonial } from "@/lib/types";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const maxStart = Math.max(0, items.length - perView);
  const clamped = Math.min(index, maxStart);
  const visible = items.slice(clamped, clamped + perView);

  const next = () => setIndex((i) => (i >= maxStart ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxStart : i - 1));

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((t) => (
            <motion.div
              key={t.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card"
            >
              <Quote className="h-9 w-9 text-brand-blue/15" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                  />
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
