"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { T, useLang } from "@/lib/lang";

export function Newsletter() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <form onSubmit={submit} className="mt-4">
      <div className="flex overflow-hidden rounded-full bg-white/10 p-1 ring-1 ring-white/15 focus-within:ring-white/40">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={lang === "hi" ? "अपना ईमेल लिखें" : "Enter your email"}
          aria-label={lang === "hi" ? "न्यूज़लेटर के लिए ईमेल पता" : "Email address for newsletter"}
          className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
        <button
          type="submit"
          aria-label={lang === "hi" ? "सब्सक्राइब करें" : "Subscribe"}
          className="flex shrink-0 items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
        >
          {done ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        </button>
      </div>
      {done && (
        <p className="mt-2 text-sm text-brand-green-light">
          <T en="Thank you for subscribing!" hi="सब्सक्राइब करने के लिए धन्यवाद!" />
        </p>
      )}
    </form>
  );
}
