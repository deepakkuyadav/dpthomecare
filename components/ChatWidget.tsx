"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Phone, MessageCircle, Sparkles } from "lucide-react";
import { site, whatsappLink, telLink } from "@/lib/site";
import { T, useLang } from "@/lib/lang";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! 👋 I'm the DP Shudh Dhulai Assistant. Ask me about our cleaning products, bulk supply, distributorship, or anything hygiene-related.",
};

const GREETING_HI =
  "नमस्ते! 👋 मैं DP Shudh Dhulai असिस्टेंट हूँ। हमारे सफाई उत्पादों, थोक सप्लाई, डिस्ट्रीब्यूटरशिप या हाइजीन से जुड़ा कोई भी सवाल मुझसे पूछें।";

const QUICK = [
  { en: "Which products do you make?", hi: "आप कौन-कौन से उत्पाद बनाते हैं?" },
  { en: "I want to become a distributor", hi: "मुझे डिस्ट्रीब्यूटर बनना है" },
  { en: "Do you supply in bulk?", hi: "क्या आप थोक में सप्लाई करते हैं?" },
  { en: "Best cleaner for my kitchen?", hi: "मेरी रसोई के लिए सबसे अच्छा क्लीनर?" },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      // Ensure the payload starts with a user message (API requirement).
      const firstUser = next.findIndex((m) => m.role === "user");
      const payload = next.slice(firstUser < 0 ? 0 : firstUser);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data.reply ||
            (lang === "hi" ? "क्षमा करें, कृपया फिर से प्रयास करें।" : "Sorry, please try again."),
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            lang === "hi"
              ? `क्षमा करें, अभी कुछ समस्या आ रही है। कृपया हमें ${site.phoneDisplay} पर WhatsApp करें।`
              : `Sorry, I'm having trouble. Please WhatsApp us at ${site.phoneDisplay}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:right-5">
          {/* Header */}
          <div className="flex items-center justify-between bg-brand-gradient px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold"><T en="DP Shudh Dhulai Assistant" hi="DP Shudh Dhulai असिस्टेंट" /></p>
                <p className="flex items-center gap-1 text-[11px] text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" /> <T en="Online now" hi="अभी ऑनलाइन" />
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label={lang === "hi" ? "चैट बंद करें" : "Close chat"} className="rounded-full p-1.5 hover:bg-white/15">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <span className="mr-2 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Bot className="h-4 w-4" />
                  </span>
                )}
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-brand-blue text-white"
                      : "rounded-bl-md border border-slate-100 bg-white text-ink-soft"
                  }`}
                >
                  {m === GREETING && lang === "hi" ? GREETING_HI : m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <span className="mr-2 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Bot className="h-4 w-4" />
                </span>
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" />
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q.en}
                    onClick={() => send(lang === "hi" ? q.hi : q.en)}
                    className="rounded-full border border-brand-blue/25 bg-white px-3 py-1.5 text-xs font-medium text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                  >
                    {lang === "hi" ? q.hi : q.en}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === "hi" ? "अपना संदेश लिखें…" : "Type your message…"}
              aria-label={lang === "hi" ? "चैट संदेश" : "Chat message"}
              className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label={lang === "hi" ? "संदेश भेजें" : "Send message"}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="bg-white pb-2 text-center text-[10px] text-ink-muted">
            <T en="Powered by AI · Responses may vary" hi="AI द्वारा संचालित · उत्तर भिन्न हो सकते हैं" />
          </p>
        </div>
      )}

      {/* Floating action stack */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:right-5">
        <a
          href={telLink()}
          aria-label={lang === "hi" ? `${site.phoneDisplay} पर कॉल करें` : `Call ${site.phoneDisplay}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 transition-transform hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={lang === "hi" ? "WhatsApp पर चैट करें" : "Chat on WhatsApp"}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={
            open
              ? lang === "hi" ? "AI असिस्टेंट बंद करें" : "Close AI assistant"
              : lang === "hi" ? "AI असिस्टेंट खोलें" : "Open AI assistant"
          }
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-xl shadow-brand-blue/40 transition-transform hover:scale-110"
        >
          {!open && <span className="absolute inset-0 animate-ping rounded-full bg-brand-blue opacity-30" />}
          {open ? <X className="relative h-6 w-6" /> : <Bot className="relative h-7 w-7" />}
          {!open && (
            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold">
              <Sparkles className="h-3 w-3" />
            </span>
          )}
        </button>
      </div>
    </>
  );
}
