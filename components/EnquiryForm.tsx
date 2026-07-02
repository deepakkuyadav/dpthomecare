"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export function EnquiryForm({
  productName,
  heading = "Send an Enquiry",
  subheading = "Fill in your details and our team will get back to you shortly.",
}: {
  productName?: string;
  heading?: string;
  subheading?: string;
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: productName ?? "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `New enquiry — ${site.name}`,
      productName ? `Product: ${productName}` : form.subject ? `Subject: ${form.subject}` : "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Message: ${form.message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-green" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">Thank you!</h3>
        <p className="mt-2 text-ink-soft">
          Your enquiry has been prepared in WhatsApp. Send the message and our team will respond quickly.
          You can also call us at{" "}
          <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-bold text-brand-navy">{heading}</h3>
      <p className="mt-1 text-sm text-ink-muted">{subheading}</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" />
          </Field>
          <Field label="Phone Number" required>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              className={inputClass}
              placeholder="10-digit mobile number"
            />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email (optional)">
            <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
          </Field>
          <Field label="Subject">
            <input
              value={form.subject}
              onChange={update("subject")}
              className={inputClass}
              placeholder={productName ?? "How can we help?"}
              readOnly={!!productName}
            />
          </Field>
        </div>
        <Field label="Message" required>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            rows={4}
            className={inputClass}
            placeholder="Tell us about your requirement, quantity or question…"
          />
        </Field>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          <Send className="h-4 w-4" /> Send Enquiry
        </button>
        <p className="text-xs text-ink-muted">
          By submitting, your enquiry opens in WhatsApp for instant delivery to our team.
        </p>
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
