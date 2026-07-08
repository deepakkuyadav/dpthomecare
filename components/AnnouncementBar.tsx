"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { T } from "@/lib/lang";

const KEY = `dpt-announcement-dismissed:${site.announcement.id}`;

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  // decided client-side so a visitor's earlier dismissal is respected
  useEffect(() => {
    if (!site.announcement.enabled) return;
    try {
      setVisible(localStorage.getItem(KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-brand-gradient text-white">
      <Link
        href={site.announcement.href}
        className="block px-10 py-2 text-center text-xs font-semibold sm:text-sm hover:underline"
      >
        <Sparkles className="mr-1.5 inline h-3.5 w-3.5 -translate-y-px" />
        <T en={site.announcement.en} hi={site.announcement.hi} />
      </Link>
      <button
        aria-label="Close announcement"
        onClick={() => {
          try {
            localStorage.setItem(KEY, "1");
          } catch {}
          setVisible(false);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/80 hover:bg-white/15 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
