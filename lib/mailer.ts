import nodemailer from "nodemailer";
import path from "path";
import { site } from "@/lib/site";

// Sends two emails when a form is submitted:
//   1. a branded bilingual thank-you to the visitor (if they gave an email)
//   2. a new-lead alert to the business owner
// Configure SMTP in .env.local (see .env.example). Without SMTP_USER/SMTP_PASS
// everything is silently skipped — forms keep working, nothing is sent.

const HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const PORT = Number(process.env.SMTP_PORT || 465);
const USER = process.env.SMTP_USER;
const PASS = process.env.SMTP_PASS;
const NOTIFY = process.env.ADMIN_NOTIFY_EMAIL || USER;

export const mailEnabled = Boolean(USER && PASS);

interface LeadLike {
  type: "quote" | "enquiry" | "distributor" | "newsletter";
  name: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  quantity: string;
  message: string;
  subject: string;
  state: string;
  businessType: string;
  investment: string;
}

const BLUE = "#0B4EA2";
const GREEN = "#2EAF39";
const NAVY = "#0A2C5A";

const INTRO: Record<LeadLike["type"], { en: string; hi: string; subject: string }> = {
  quote: {
    subject: "Thank you! We received your quote request — DP Shudh Dhulai Home Care",
    en: "We have received your quote request. Our team will contact you within 24 hours with our best prices.",
    hi: "आपकी कोटेशन रिक्वेस्ट हमें मिल गई है। हमारी टीम 24 घंटे के अंदर बेहतरीन दामों के साथ आपसे संपर्क करेगी।",
  },
  enquiry: {
    subject: "Thank you! We received your enquiry — DP Shudh Dhulai Home Care",
    en: "We have received your enquiry. Our team will get back to you shortly.",
    hi: "आपकी पूछताछ हमें मिल गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।",
  },
  distributor: {
    subject: "Thank you for your distributor application — DP Shudh Dhulai Home Care",
    en: "Thank you for applying to become a DP Shudh Dhulai Home Care partner. Our partnership team will contact you within 1–2 business days.",
    hi: "DP Shudh Dhulai Home Care का पार्टनर बनने के लिए आवेदन करने हेतु धन्यवाद। हमारी पार्टनरशिप टीम 1–2 कार्यदिवसों में आपसे संपर्क करेगी।",
  },
  newsletter: {
    subject: "Welcome! You are subscribed — DP Shudh Dhulai Home Care",
    en: "Thank you for subscribing! You will now receive our latest offers, new products and hygiene tips.",
    hi: "सब्सक्राइब करने के लिए धन्यवाद! अब आपको हमारे नए ऑफ़र, नए प्रोडक्ट्स और सफाई के टिप्स मिलते रहेंगे।",
  },
};

const TYPE_LABEL: Record<LeadLike["type"], string> = {
  quote: "Quote Request",
  enquiry: "Enquiry",
  distributor: "Distributor Application",
  newsletter: "Newsletter Signup",
};

function detailRows(lead: LeadLike): [string, string][] {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["City", [lead.city, lead.state].filter(Boolean).join(", ")],
    ["Product / Subject", lead.product || lead.subject],
    ["Business Type", lead.businessType],
    ["Quantity / Investment", lead.quantity || lead.investment],
    ["Message", lead.message],
  ];
  return rows.filter(([, v]) => v);
}

function detailsTable(lead: LeadLike): string {
  const rows = detailRows(lead)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;font-size:13px;color:#64748b;white-space:nowrap;vertical-align:top;">${k}</td>` +
        `<td style="padding:8px 12px;font-size:13px;color:${NAVY};font-weight:600;">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  if (!rows) return "";
  return `<table cellpadding="0" cellspacing="0" width="100%" style="background:#f8fafc;border-radius:12px;margin:20px 0;">${rows}</table>`;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function button(href: string, label: string, color: string): string {
  return (
    `<a href="${href}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;` +
    `font-size:14px;font-weight:700;padding:12px 26px;border-radius:999px;margin:0 6px 10px 6px;">${label}</a>`
  );
}

function shell(inner: string): string {
  return (
    `<div style="background:#eef2f7;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;">` +
    `<table cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">` +
    `<tr><td style="padding:28px 24px 8px 24px;text-align:center;">` +
    `<img src="cid:dptlogo" alt="${site.name}" width="140" style="display:inline-block;max-width:140px;height:auto;" />` +
    `</td></tr>` +
    inner +
    `<tr><td style="background:${NAVY};padding:20px 24px;text-align:center;">` +
    `<p style="margin:0;color:#ffffff;font-size:14px;font-weight:700;">${site.name} — Power of Hygiene</p>` +
    `<p style="margin:6px 0 0 0;color:#94a3b8;font-size:12px;">${site.address.full}</p>` +
    `<p style="margin:6px 0 0 0;color:#94a3b8;font-size:12px;">📞 ${site.phoneDisplay} &nbsp;|&nbsp; ✉️ ${site.email}</p>` +
    `</td></tr></table></div>`
  );
}

function visitorHtml(lead: LeadLike): string {
  const intro = INTRO[lead.type];
  const greetName = lead.name ? escapeHtml(lead.name) : "";
  return shell(
    `<tr><td style="padding:8px 24px 0 24px;text-align:center;">` +
      `<h1 style="margin:12px 0 4px 0;font-size:26px;color:${BLUE};">Thank You! <span style="color:${GREEN};">धन्यवाद!</span></h1>` +
      `<p style="margin:0;color:#64748b;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Thank you for visiting ${site.name}</p>` +
      `</td></tr>` +
      `<tr><td style="padding:20px 28px 8px 28px;">` +
      `<p style="margin:0 0 10px 0;font-size:15px;color:${NAVY};">Namaste${greetName ? " <b>" + greetName + "</b>" : ""},</p>` +
      `<p style="margin:0 0 8px 0;font-size:14px;color:#334155;line-height:1.6;">${intro.en}</p>` +
      `<p style="margin:0 0 8px 0;font-size:14px;color:#334155;line-height:1.6;">${intro.hi}</p>` +
      detailsTable(lead) +
      `</td></tr>` +
      `<tr><td style="padding:4px 24px 26px 24px;text-align:center;">` +
      button(`https://wa.me/${site.whatsapp}`, "WhatsApp Us", GREEN) +
      button(`tel:${site.phoneIntl}`, "Call Now", BLUE) +
      button(site.url, "Visit Website", NAVY) +
      `</td></tr>`
  );
}

function ownerHtml(lead: LeadLike): string {
  return shell(
    `<tr><td style="padding:8px 24px 0 24px;text-align:center;">` +
      `<h1 style="margin:12px 0 4px 0;font-size:22px;color:${BLUE};">🔔 New ${TYPE_LABEL[lead.type]}</h1>` +
      `<p style="margin:0;color:#64748b;font-size:13px;">A visitor just submitted a form on ${site.domain}</p>` +
      `</td></tr>` +
      `<tr><td style="padding:16px 28px 8px 28px;">` +
      detailsTable(lead) +
      `<p style="margin:0 0 16px 0;font-size:13px;color:#64748b;">Open the admin panel to update its status and add follow-up notes.</p>` +
      `</td></tr>` +
      `<tr><td style="padding:4px 24px 26px 24px;text-align:center;">` +
      (lead.phone ? button(`tel:${lead.phone}`, "Call " + escapeHtml(lead.name || "Lead"), GREEN) : "") +
      button(`${site.url}/admin/quotes`, "Open Admin Panel", BLUE) +
      `</td></tr>`
  );
}

export async function sendLeadEmails(lead: LeadLike): Promise<void> {
  if (!mailEnabled) {
    console.log("[mail] SMTP not configured (set SMTP_USER / SMTP_PASS in .env.local) — skipping emails");
    return;
  }
  const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: PORT === 465,
    auth: { user: USER, pass: PASS },
  });
  const logo = {
    filename: "dpt-logo.png",
    path: path.join(process.cwd(), "public", "logo-v2.png"),
    cid: "dptlogo",
  };
  const from = `"${site.name}" <${USER}>`;

  // thank-you to the visitor
  if (lead.email) {
    try {
      await transporter.sendMail({
        from,
        to: lead.email,
        subject: INTRO[lead.type].subject,
        html: visitorHtml(lead),
        attachments: [logo],
      });
      console.log(`[mail] thank-you sent to ${lead.email}`);
    } catch (err) {
      console.error("[mail] visitor email failed:", err);
    }
  }

  // new-lead alert to the owner
  if (NOTIFY) {
    try {
      await transporter.sendMail({
        from,
        to: NOTIFY,
        subject: `🔔 New ${TYPE_LABEL[lead.type]}: ${lead.name || lead.email || lead.phone}`,
        html: ownerHtml(lead),
        attachments: [logo],
      });
      console.log(`[mail] owner alert sent to ${NOTIFY}`);
    } catch (err) {
      console.error("[mail] owner email failed:", err);
    }
  }
}
