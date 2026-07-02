"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { site, whatsappLink, telLink } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={telLink()}
        aria-label={`Call ${site.phoneDisplay}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
