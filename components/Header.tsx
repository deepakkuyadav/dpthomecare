"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { site, telLink } from "@/lib/site";
import { T } from "@/lib/lang";
import { LanguageToggle } from "./LanguageToggle";
import { AnnouncementBar } from "./AnnouncementBar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // admin pages have a light background and no hero gradient, so the
  // transparent white-text header would be invisible there
  const solid = scrolled || mobileOpen || pathname.startsWith("/admin");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-[0_8px_30px_-12px_rgba(11,78,162,0.25)]" : "bg-transparent"
      }`}
    >
      <AnnouncementBar />
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <span
              className={`flex items-center justify-center overflow-hidden rounded-2xl transition-colors ${
                solid ? "bg-white" : "bg-white/95 shadow-md"
              }`}
            >
              <Image
                src={site.logo}
                alt={`${site.name} — ${site.tagline}`}
                width={120}
                height={120}
                className="h-12 w-12 md:h-14 md:w-14 rounded-2xl object-contain p-1"
                priority
              />
            </span>
            <span className="hidden sm:block leading-tight">
              <span
                className={`block whitespace-nowrap font-heading text-lg font-bold tracking-tight ${
                  solid ? "text-brand-navy" : "text-white"
                }`}
              >
                DP Shudh Dhulai <span className="text-brand-green">Home Care</span>
              </span>
              <span
                className={`block whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.08em] ${
                  solid ? "text-brand-green-dark" : "text-brand-green-light"
                }`}
              >
                {site.subTagline}
              </span>
              <span
                className={`block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] ${
                  solid ? "text-ink-muted" : "text-white/70"
                }`}
              >
                Power of Hygiene
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <button
                    className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                      solid ? "text-ink-soft hover:text-brand-blue" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <T en={link.label} hi={link.hi} />
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-56 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-card">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={(e) => {
                            // Hide the hover dropdown immediately after choosing an item;
                            // it re-arms once the cursor leaves the menu area.
                            const dd = e.currentTarget.closest(".absolute") as HTMLElement | null;
                            const group = dd?.parentElement;
                            if (dd && group) {
                              dd.style.display = "none";
                              group.addEventListener(
                                "mouseleave",
                                () => {
                                  dd.style.display = "";
                                },
                                { once: true }
                              );
                            }
                          }}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
                        >
                          <T en={child.label} hi={child.hi} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    pathname === link.href
                      ? solid
                        ? "text-brand-blue"
                        : "text-white"
                      : solid
                      ? "text-ink-soft hover:text-brand-blue"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <T en={link.label} hi={link.hi} />
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={telLink()}
              className={`hidden items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors xl:flex ${
                solid ? "text-brand-blue" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <LanguageToggle solid={solid} />
            <Link href="/get-a-quote" className="btn-primary whitespace-nowrap">
              <T en="Get a Quote" hi="कोटेशन पाएं" />
            </Link>
          </div>

          {/* Mobile: language + menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle solid={solid} />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                solid ? "text-brand-navy" : "text-white"
              }`}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-wide flex flex-col py-4">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-slate-50 py-1">
                  <button
                    onClick={() => setOpenGroup((g) => (g === link.label ? null : link.label))}
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-base font-medium text-ink"
                  >
                    <T en={link.label} hi={link.hi} />
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openGroup === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openGroup === link.label && (
                    <div className="flex flex-col pb-2 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:text-brand-blue"
                        >
                          <T en={child.label} hi={child.hi} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-slate-50 px-2 py-3 text-base font-medium text-ink hover:text-brand-blue"
                >
                  <T en={link.label} hi={link.hi} />
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-3">
              <a href={telLink()} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
              <Link href="/get-a-quote" className="btn-primary w-full">
                <T en="Get a Quote" hi="कोटेशन पाएं" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
