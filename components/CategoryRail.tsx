import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/lang";

const BLUE = "#0B4EA2";
const GREEN = "#2EAF39";

function IconBox({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const productHref = (category: string) => `/products?category=${encodeURIComponent(category)}`;

const categories: { label: string; hi: string; href: string; icon: ReactNode }[] = [
  {
    label: "Home Cleaning", hi: "घर की सफाई",
    href: "/products",
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M4.5 11 12 4.5 19.5 11M6.5 9.5V19a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9.5" />
        <path stroke={BLUE} d="M10 20v-5h4v5" />
        <path stroke={GREEN} d="M19 3.5v3M17.5 5h3" />
      </IconBox>
    ),
  },
  {
    label: "Kitchen Cleaning", hi: "किचन की सफाई",
    href: productHref("Kitchen & Dishwash"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M5 11h14v5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16z" />
        <path stroke={BLUE} d="M3 11h18M9 11V9.5a3 3 0 0 1 6 0V11" />
        <path stroke={GREEN} d="M9.5 3c-.6.8-.6 1.7 0 2.5M12.5 2.2c-.6.8-.6 1.7 0 2.5M15.5 3c-.6.8-.6 1.7 0 2.5" />
      </IconBox>
    ),
  },
  {
    label: "Bathroom Cleaning", hi: "बाथरूम की सफाई",
    href: productHref("Bathroom & Toilet"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M4 12.5h16V15a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
        <path stroke={BLUE} d="M6 12.5V6a2 2 0 0 1 4 0M7 19l-.8 2M17 19l.8 2" />
        <circle cx="14" cy="8.5" r="1.1" stroke={GREEN} />
        <circle cx="17.3" cy="6.8" r="0.8" stroke={GREEN} />
        <circle cx="15.8" cy="4.6" r="0.6" stroke={GREEN} />
      </IconBox>
    ),
  },
  {
    label: "Floor Cleaning", hi: "फर्श की सफाई",
    href: productHref("Floor Care"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M4.5 13.5h9.5L13 20.5H5.5z" />
        <path stroke={BLUE} d="M5.5 13.5a4 4 0 0 1 7.5 0" />
        <path stroke={GREEN} d="M18.5 3v9.5M16.5 12.5h4M16.8 12.5l-.6 4.5M18.5 12.5V17M20.2 12.5l.6 4.5" />
      </IconBox>
    ),
  },
  {
    label: "Hand Wash", hi: "हैंड वॉश",
    href: productHref("Personal Care"),
    icon: (
      <IconBox>
        <path
          stroke={BLUE}
          d="M7.5 12.5V7a1.4 1.4 0 0 1 2.8 0v4.5M10.3 11V5.6a1.4 1.4 0 0 1 2.8 0V11M13.1 11.2V6.6a1.4 1.4 0 0 1 2.8 0v7.9a6.4 6.4 0 0 1-6.4 6.4c-2.4 0-3.9-1-5.3-2.9l-1.5-2.2c-.7-1-.2-2.3 1-2.3.7 0 1.2.3 1.8 1.1l1 1.2"
        />
        <path stroke={GREEN} d="M20 3.2c.9 1.2 1.5 2 1.5 2.9a1.7 1.7 0 1 1-3.4 0c0-.9.7-1.7 1.9-2.9z" />
      </IconBox>
    ),
  },
  {
    label: "Glass & Surface", hi: "ग्लास व सरफेस",
    href: productHref("Glass & Surface"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M11 5h4.5v3H11zM11 6.2H8.2M8.2 6.2 7 8.8" />
        <path stroke={BLUE} d="M11 8l-1.6 4v6.5A1.5 1.5 0 0 0 10.9 20h4.2a1.5 1.5 0 0 0 1.5-1.5V12L15 8" />
        <path stroke={GREEN} d="M4.8 3.6l-1-.7M3.6 6.6l-1.2-.2M4.6 9.4l-1 .7" />
      </IconBox>
    ),
  },
  {
    label: "Fabric Care", hi: "फैब्रिक केयर",
    href: productHref("Fabric Care"),
    icon: (
      <IconBox>
        <path
          stroke={BLUE}
          d="m9.3 3.5-4.5 2 1.7 3.6 2-.8V20h7V8.3l2 .8 1.7-3.6-4.5-2c-.4 1.2-1.4 2-2.7 2s-2.3-.8-2.7-2z"
        />
        <path stroke={GREEN} d="M12 11.5v3M10.5 13h3" />
      </IconBox>
    ),
  },
  {
    label: "Air Freshening", hi: "एयर फ्रेशनर",
    href: productHref("Air Care"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M8.5 8.5h6V19a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 8.5 19zM9.8 8.5V6.3h3.4v2.2M11.5 6.3V4.5" />
        <path stroke={GREEN} d="M17.5 7.5c1 1.2 1 3 0 4.2M20 5.5c1.8 2.1 1.8 5.2 0 7.3" />
      </IconBox>
    ),
  },
  {
    label: "Auto Care", hi: "ऑटो केयर",
    href: productHref("Auto Care"),
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M4 16.5v-3l1.8-4A2 2 0 0 1 7.6 8.3h8.8a2 2 0 0 1 1.8 1.2l1.8 4v3M4 13.5h16" />
        <circle cx="7.7" cy="16.7" r="1.6" stroke={BLUE} />
        <circle cx="16.3" cy="16.7" r="1.6" stroke={BLUE} />
        <circle cx="8.5" cy="4" r="1" stroke={GREEN} />
        <circle cx="12.2" cy="3.2" r="1.2" stroke={GREEN} />
        <circle cx="15.8" cy="4.2" r="0.8" stroke={GREEN} />
      </IconBox>
    ),
  },
  {
    label: "Hotel Cleaning", hi: "होटल की सफाई",
    href: "/industries#hotels",
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M5.5 20V5.5A1.5 1.5 0 0 1 7 4h7a1.5 1.5 0 0 1 1.5 1.5V20M3.5 20h17" />
        <path stroke={BLUE} d="M9 20v-3.5h3V20" />
        <path stroke={GREEN} d="M15.5 6.5h4l-1.2 1.5 1.2 1.5h-4M8 7.5h1.5M11.5 7.5H13M8 11h1.5M11.5 11H13" />
      </IconBox>
    ),
  },
  {
    label: "Hospital Cleaning", hi: "हॉस्पिटल की सफाई",
    href: "/industries#hospitals",
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M4.5 20V8A1.5 1.5 0 0 1 6 6.5h12A1.5 1.5 0 0 1 19.5 8v12M3 20h18M12 6.5V4" />
        <path stroke={GREEN} d="M12 9.5v5M9.5 12h5" />
      </IconBox>
    ),
  },
  {
    label: "Office Cleaning", hi: "ऑफिस की सफाई",
    href: "/industries#offices",
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4H12a1.5 1.5 0 0 1 1.5 1.5V20M13.5 20V9.5H18A1.5 1.5 0 0 1 19.5 11v9M3.5 20h17" />
        <path stroke={GREEN} d="M7.5 7.5H11M7.5 10.5H11M7.5 13.5H11M15.7 12.5h1.6M15.7 15.5h1.6" />
      </IconBox>
    ),
  },
  {
    label: "Sanitization", hi: "सैनिटाइज़ेशन",
    href: "/products/sanitizer",
    icon: (
      <IconBox>
        <path stroke={BLUE} d="M12 2.8 19 5.3v5.2c0 4.4-2.9 7.7-7 9.2-4.1-1.5-7-4.8-7-9.2V5.3z" />
        <path stroke={GREEN} d="m8.8 12 2.2 2.2 4.2-4.2" />
      </IconBox>
    ),
  },
];

export function CategoryRail() {
  return (
    <section aria-label="Product categories" className="border-b border-slate-100 bg-white py-8">
      <div className="container-wide">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
            <T en="Shop by Category" hi="कैटेगरी से चुनें" />
          </p>
          <div className="mt-5 flex snap-x gap-3 overflow-x-auto pb-2 lg:gap-2 lg:overflow-visible lg:pb-0 xl:gap-2.5">
            {categories.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group flex w-[96px] shrink-0 snap-start flex-col items-center justify-start gap-2 rounded-2xl border border-slate-100 bg-white px-2 py-3.5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-card lg:w-auto lg:min-w-0 lg:flex-1 lg:shrink lg:px-1"
              >
                {c.icon}
                <span className="text-[11px] font-semibold leading-tight text-ink-soft transition-colors group-hover:text-brand-blue">
                  <T en={c.label} hi={c.hi} />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
