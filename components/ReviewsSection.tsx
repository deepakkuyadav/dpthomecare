"use client";

import { useEffect, useState } from "react";
import { Star, Quote, Send, CheckCircle2, MessageSquarePlus } from "lucide-react";
import { T, useLang } from "@/lib/lang";

interface Review {
  id: string;
  createdAt: string;
  name: string;
  place: string;
  rating: number;
  text: string;
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/15";

export function ReviewsSection() {
  const { lang } = useLang();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/review")
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews || []))
      .catch(() => {});
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, place, rating, text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          lang === "hi"
            ? "कृपया नाम, रेटिंग और कम से कम 10 अक्षरों का रिव्यू लिखें।"
            : data.error || "Please fill your name, rating and a short review."
        );
        return;
      }
      if (data.review) setReviews((rs) => [data.review, ...rs]);
      setSent(true);
      setName("");
      setPlace("");
      setText("");
      setRating(5);
    } catch {
      setError(lang === "hi" ? "कुछ गड़बड़ हो गई — फिर से कोशिश करें।" : "Something went wrong — please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section bg-slate-50/60">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            <MessageSquarePlus className="h-4 w-4" />
            <T en="Your Review" hi="आपका रिव्यू" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-navy md:text-4xl">
            <T en="Share Your Experience" hi="अपना अनुभव साझा करें" />
          </h2>
          <p className="mt-3 text-ink-muted">
            <T
              en="Used our products? Your review helps other families and businesses choose better."
              hi="हमारे प्रोडक्ट्स इस्तेमाल किए हैं? आपका रिव्यू दूसरे परिवारों और कारोबारों की मदद करता है।"
            />
          </p>
        </div>

        {/* Review form */}
        <div className="mx-auto mt-10 max-w-2xl">
          {sent ? (
            <div className="rounded-3xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-brand-green" />
              <h3 className="mt-4 text-xl font-bold text-brand-navy">
                <T en="Thank you for your review!" hi="आपके रिव्यू के लिए धन्यवाद!" />
              </h3>
              <p className="mt-2 text-ink-soft">
                <T en="Your review is now live below." hi="आपका रिव्यू अब नीचे दिख रहा है।" />
              </p>
              <button onClick={() => setSent(false)} className="btn-outline mt-6">
                <T en="Write another review" hi="एक और रिव्यू लिखें" />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-navy">
                    <T en="Your Name" hi="आपका नाम" /> <span className="text-brand-green">*</span>
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder={lang === "hi" ? "आपका नाम" : "Your name"}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-brand-navy">
                    <T en="City (optional)" hi="शहर (वैकल्पिक)" />
                  </span>
                  <input
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className={inputClass}
                    placeholder={lang === "hi" ? "जैसे जौनपुर, UP" : "e.g. Jaunpur, UP"}
                  />
                </label>
              </div>

              <div className="mt-4">
                <span className="mb-1.5 block text-sm font-medium text-brand-navy">
                  <T en="Your Rating" hi="आपकी रेटिंग" /> <span className="text-brand-green">*</span>
                </span>
                <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-label={`${s} star`}
                      onClick={() => setRating(s)}
                      onMouseEnter={() => setHover(s)}
                      className="rounded-md p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          s <= (hover || rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-brand-navy">
                  <T en="Your Review" hi="आपका रिव्यू" /> <span className="text-brand-green">*</span>
                </span>
                <textarea
                  required
                  minLength={10}
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className={inputClass}
                  placeholder={
                    lang === "hi"
                      ? "कौन सा प्रोडक्ट इस्तेमाल किया? कैसा लगा? अपना अनुभव लिखें…"
                      : "Which product did you use? How was it? Share your experience…"
                  }
                />
              </label>

              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

              <button type="submit" disabled={sending} className="btn-primary mt-5 w-full sm:w-auto">
                <Send className="h-4 w-4" />
                {sending ? (
                  <T en="Submitting…" hi="भेजा जा रहा है…" />
                ) : (
                  <T en="Submit Review" hi="रिव्यू भेजें" />
                )}
              </button>
            </form>
          )}
        </div>

        {/* Visitor reviews */}
        {reviews.length > 0 && (
          <div className="mt-14">
            <h3 className="text-center font-heading text-2xl font-bold text-brand-navy">
              <T en="Recent Visitor Reviews" hi="हाल के विज़िटर रिव्यू" />
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <div key={r.id} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                  <Quote className="h-9 w-9 text-brand-blue/15" />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`h-4 w-4 ${s < r.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {r.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">{r.name}</p>
                      <p className="text-xs text-ink-muted">
                        {r.place ? `${r.place} · ` : ""}
                        {new Date(r.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
