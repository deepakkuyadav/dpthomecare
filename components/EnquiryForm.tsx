"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { T, useLang } from "@/lib/lang";

export function EnquiryForm({
  productName,
  heading = <T en="Send an Enquiry" hi="पूछताछ भेजें" />,
  subheading = (
    <T
      en="Fill in your details and our team will get back to you shortly."
      hi="अपनी जानकारी भरें, हमारी टीम जल्द ही आपसे संपर्क करेगी।"
    />
  ),
}: {
  productName?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}) {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: productName ?? "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // save into the backend table first (best-effort), then open WhatsApp
    void fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "enquiry",
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: productName ?? form.subject,
        message: form.message,
      }),
    }).catch(() => {});
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
        <h3 className="mt-4 text-xl font-bold text-brand-navy">
          <T en="Thank you!" hi="धन्यवाद!" />
        </h3>
        <p className="mt-2 text-ink-soft">
          <T
            en={
              <>
                Your enquiry has been prepared in WhatsApp. Send the message and our team will respond quickly.
                You can also call us at{" "}
                <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">
                  {site.phoneDisplay}
                </a>
                .
              </>
            }
            hi={
              <>
                आपकी पूछताछ WhatsApp में तैयार है। मैसेज भेज दें, हमारी टीम जल्दी जवाब देगी। आप हमें{" "}
                <a href={`tel:${site.phoneIntl}`} className="font-semibold text-brand-blue">
                  {site.phoneDisplay}
                </a>{" "}
                पर कॉल भी कर सकते हैं।
              </>
            }
          />
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          <T en="Send another enquiry" hi="एक और पूछताछ भेजें" />
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
          <Field label={<T en="Full Name" hi="पूरा नाम" />} required>
            <input
              required
              value={form.name}
              onChange={update("name")}
              className={inputClass}
              placeholder={lang === "hi" ? "आपका नाम" : "Your name"}
            />
          </Field>
          <Field label={<T en="Phone Number" hi="फ़ोन नंबर" />} required>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              className={inputClass}
              placeholder={lang === "hi" ? "10 अंकों का मोबाइल नंबर" : "10-digit mobile number"}
            />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={<T en="Email (optional)" hi="ईमेल (वैकल्पिक)" />}>
            <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
          </Field>
          <Field label={<T en="Subject" hi="विषय" />}>
            <input
              value={form.subject}
              onChange={update("subject")}
              className={inputClass}
              placeholder={productName ?? (lang === "hi" ? "हम आपकी कैसे मदद कर सकते हैं?" : "How can we help?")}
              readOnly={!!productName}
            />
          </Field>
        </div>
        <Field label={<T en="Message" hi="संदेश" />} required>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            rows={4}
            className={inputClass}
            placeholder={
              lang === "hi"
                ? "अपनी ज़रूरत, मात्रा या सवाल के बारे में बताएं…"
                : "Tell us about your requirement, quantity or question…"
            }
          />
        </Field>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          <Send className="h-4 w-4" /> <T en="Send Enquiry" hi="पूछताछ भेजें" />
        </button>
        <p className="text-xs text-ink-muted">
          <T
            en="By submitting, your enquiry opens in WhatsApp for instant delivery to our team."
            hi="सबमिट करते ही आपकी पूछताछ WhatsApp में खुल जाएगी और तुरंत हमारी टीम तक पहुँचेगी।"
          />
        </p>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/15";

function Field({ label, required, children }: { label: React.ReactNode; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label} {required && <span className="text-brand-green">*</span>}
      </span>
      {children}
    </label>
  );
}
