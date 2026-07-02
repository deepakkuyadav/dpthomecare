"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const businessTypes = [
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Cleaning Agency",
  "Institutional Buyer",
  "New to this business",
];

const investmentRanges = [
  "Below ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
];

export function DistributorForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Uttar Pradesh",
    businessType: businessTypes[0],
    investment: investmentRanges[1],
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
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
        <h3 className="mt-4 text-xl font-bold text-brand-navy">Application received!</h3>
        <p className="mt-2 text-ink-soft">
          Your distributor enquiry is ready in WhatsApp — send it and our partnership team will contact you
          within 1–2 business days.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-2xl font-bold text-brand-navy">Become a Partner</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Tell us about yourself and your business. Fields marked * are required.
      </p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" />
          </Field>
          <Field label="Phone Number" required>
            <input required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="10-digit mobile number" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email (optional)">
            <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
          </Field>
          <Field label="City / Town" required>
            <input required value={form.city} onChange={update("city")} className={inputClass} placeholder="Your city" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="State" required>
            <input required value={form.state} onChange={update("state")} className={inputClass} />
          </Field>
          <Field label="Business Type" required>
            <select value={form.businessType} onChange={update("businessType")} className={inputClass}>
              {businessTypes.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Investment Capacity" required>
          <select value={form.investment} onChange={update("investment")} className={inputClass}>
            {investmentRanges.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
        <Field label="Message (optional)">
          <textarea value={form.message} onChange={update("message")} rows={3} className={inputClass} placeholder="Tell us about your business experience or the area you cover…" />
        </Field>
        <button type="submit" className="btn-green w-full sm:w-auto">
          <Send className="h-4 w-4" /> Submit Application
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
