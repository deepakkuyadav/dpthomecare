"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { QA } from "@/lib/types";

export function FAQAccordion({ items, defaultOpen = -1 }: { items: QA[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-brand-blue/30 bg-brand-blue/[0.03]" : "border-slate-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-brand-navy">{item.question}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
