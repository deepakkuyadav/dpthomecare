"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { products } from "@/lib/products";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/15";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "saving") return;
    setStatus("saving");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-green" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">Quote request received!</h3>
        <p className="mt-2 text-ink-soft">
          Thank you, {form.name.split(" ")[0] || "there"}. Our team will review your requirement and get back to
          you shortly with pricing and details.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(
              `Hi DPT Home Care, I just submitted a quote request for ${form.product || "your products"} (Qty: ${form.quantity || "NA"}). Name: ${form.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            <MessageCircle className="h-4 w-4" /> Also message on WhatsApp
          </a>
          <button
            onClick={() => {
              setForm({ name: "", phone: "", email: "", city: "", product: "", quantity: "", message: "" });
              setStatus("idle");
            }}
            className="btn-outline"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-2xl font-bold text-brand-navy">Request a Quote</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Fill in the details below. Fields marked <span className="text-brand-green">*</span> are required.
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
          <Field label="City / Town">
            <input value={form.city} onChange={update("city")} className={inputClass} placeholder="Your city" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Product">
            <select value={form.product} onChange={update("product")} className={inputClass}>
              <option value="">Select a product</option>
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Multiple / Full Range">Multiple / Full Range</option>
              <option value="Other">Other</option>
            </select>
          </Field>
          <Field label="Estimated Quantity">
            <input value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 50 litres / 100 bottles / monthly" />
          </Field>
        </div>
        <Field label="Message / Requirement">
          <textarea value={form.message} onChange={update("message")} rows={4} className={inputClass} placeholder="Tell us about your requirement, packing sizes, or delivery location…" />
        </Field>

        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            Something went wrong saving your request. Please try again, or WhatsApp us at {site.phoneDisplay}.
          </p>
        )}

        <button type="submit" disabled={status === "saving"} className="btn-primary w-full sm:w-auto">
          <Send className="h-4 w-4" /> {status === "saving" ? "Sending…" : "Get My Quote"}
        </button>
      </div>
    </form>
  );
}

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
