"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { T, useLang } from "@/lib/lang";

// `value` is what gets sent in the WhatsApp message and must stay English; `hi` is only the displayed label.
const businessTypes = [
  { value: "Distributor", hi: "डिस्ट्रीब्यूटर" },
  { value: "Wholesaler", hi: "होलसेलर" },
  { value: "Retailer", hi: "रिटेलर" },
  { value: "Cleaning Agency", hi: "क्लीनिंग एजेंसी" },
  { value: "Institutional Buyer", hi: "संस्थागत खरीदार" },
  { value: "New to this business", hi: "इस व्यवसाय में नया/नई" },
];

const investmentRanges = [
  { value: "Below ₹50,000", hi: "₹50,000 से कम" },
  { value: "₹50,000 – ₹1,00,000", hi: "₹50,000 – ₹1,00,000" },
  { value: "₹1,00,000 – ₹3,00,000", hi: "₹1,00,000 – ₹3,00,000" },
  { value: "₹3,00,000 – ₹5,00,000", hi: "₹3,00,000 – ₹5,00,000" },
  { value: "Above ₹5,00,000", hi: "₹5,00,000 से अधिक" },
];

export function DistributorForm() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Uttar Pradesh",
    businessType: businessTypes[0].value,
    investment: investmentRanges[1].value,
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // save into the backend table first (best-effort), then open WhatsApp
    void fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "distributor",
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        state: form.state,
        businessType: form.businessType,
        investment: form.investment,
        message: form.message,
      }),
    }).catch(() => {});
    const lines = [
      `Distributor / Dealer enquiry — ${site.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Location: ${form.city}, ${form.state}`,
      `Business type: ${form.businessType}`,
      `Investment capacity: ${form.investment}`,
      form.message ? `Message: ${form.message}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-green" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">
          <T en="Application received!" hi="आवेदन मिल गया!" />
        </h3>
        <p className="mt-2 text-ink-soft">
          <T
            en="Your distributor enquiry is ready in WhatsApp — send it and our partnership team will contact you within 1–2 business days."
            hi="आपकी डिस्ट्रीब्यूटर पूछताछ WhatsApp में तैयार है — उसे भेज दें, हमारी पार्टनरशिप टीम 1–2 कार्यदिवसों में आपसे संपर्क करेगी।"
          />
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          <T en="Submit another" hi="एक और भेजें" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-2xl font-bold text-brand-navy">
        <T en="Become a Partner" hi="पार्टनर बनें" />
      </h3>
      <p className="mt-1 text-sm text-ink-muted">
        <T
          en="Tell us about yourself and your business. Fields marked * are required."
          hi="अपने और अपने व्यवसाय के बारे में बताएं। * वाले फ़ील्ड ज़रूरी हैं।"
        />
      </p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={lang === "hi" ? "पूरा नाम" : "Full Name"} required>
            <input required value={form.name} onChange={update("name")} className={inputClass} placeholder={lang === "hi" ? "आपका नाम" : "Your name"} />
          </Field>
          <Field label={lang === "hi" ? "फ़ोन नंबर" : "Phone Number"} required>
            <input required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder={lang === "hi" ? "10 अंकों का मोबाइल नंबर" : "10-digit mobile number"} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={lang === "hi" ? "ईमेल (वैकल्पिक)" : "Email (optional)"}>
            <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
          </Field>
          <Field label={lang === "hi" ? "शहर / कस्बा" : "City / Town"} required>
            <input required value={form.city} onChange={update("city")} className={inputClass} placeholder={lang === "hi" ? "आपका शहर" : "Your city"} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={lang === "hi" ? "राज्य" : "State"} required>
            <input required value={form.state} onChange={update("state")} className={inputClass} />
          </Field>
          <Field label={lang === "hi" ? "व्यवसाय का प्रकार" : "Business Type"} required>
            <select value={form.businessType} onChange={update("businessType")} className={inputClass}>
              {businessTypes.map((b) => (
                <option key={b.value} value={b.value}>
                  {lang === "hi" ? b.hi : b.value}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label={lang === "hi" ? "निवेश क्षमता" : "Investment Capacity"} required>
          <select value={form.investment} onChange={update("investment")} className={inputClass}>
            {investmentRanges.map((r) => (
              <option key={r.value} value={r.value}>
                {lang === "hi" ? r.hi : r.value}
              </option>
            ))}
          </select>
        </Field>
        <Field label={lang === "hi" ? "संदेश (वैकल्पिक)" : "Message (optional)"}>
          <textarea value={form.message} onChange={update("message")} rows={3} className={inputClass} placeholder={lang === "hi" ? "अपने व्यवसाय के अनुभव या अपने क्षेत्र के बारे में बताएं…" : "Tell us about your business experience or the area you cover…"} />
        </Field>
        <button type="submit" className="btn-green w-full sm:w-auto">
          <Send className="h-4 w-4" /> <T en="Submit Application" hi="आवेदन भेजें" />
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/15";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label} {required && <span className="text-brand-green">*</span>}
      </span>
      {children}
    </label>
  );
}
