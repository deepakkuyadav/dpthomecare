"use client";

import { useLang, type Lang } from "@/lib/lang";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "hi", label: "हिंदी" },
];

export function LanguageToggle({ solid = true }: { solid?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={`flex shrink-0 items-center rounded-full p-0.5 transition-colors ${
        solid ? "bg-slate-100" : "bg-white/15 ring-1 ring-white/25"
      }`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`rounded-full px-2.5 py-1 text-xs font-bold leading-none transition-colors ${
            lang === o.value
              ? "bg-brand-blue text-white shadow"
              : solid
              ? "text-ink-soft hover:text-brand-blue"
              : "text-white/85 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
