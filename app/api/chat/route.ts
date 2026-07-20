import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { products, categories } from "@/lib/products";
import { allFaqs } from "@/lib/faqs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

// Default model can be overridden with CHAT_MODEL in .env.local.
// For a simple FAQ-style website assistant, claude-haiku-4-5 is dramatically
// cheaper and plenty capable — set CHAT_MODEL=claude-haiku-4-5 to switch.
const MODEL = process.env.CHAT_MODEL || "claude-opus-4-8";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(): string {
  const productList = products
    .map((p) => `- ${p.name} (${p.category}): ${p.tagline}. Packs: ${p.packingSizes.join(", ")}.`)
    .join("\n");
  const categoryList = categories.map((c) => c.name).join(", ");
  const faqText = allFaqs
    .slice(0, 18)
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `You are "DP Shudh Dhulai Assistant", the friendly virtual assistant for ${site.name} — a cleaning products manufacturer and supplier based in ${site.address.city}, ${site.address.state}, India. Tagline: "${site.tagline}".

Your job is to help website visitors: answer questions about products, guide home users, hotels, hospitals, restaurants, offices and institutions, and help potential dealers/distributors. Be warm, concise and helpful. You may reply in English or Hindi/Hinglish depending on how the user writes.

COMPANY DETAILS:
- Business: Cleaning products manufacturer & supplier
- Address: ${site.address.full}
- Phone / WhatsApp: ${site.phoneDisplay} (${site.phoneIntl})
- Working hours: Mon–Sat 9 AM–7 PM, Sun 10 AM–2 PM
- Product categories: ${categoryList}

PRODUCTS (${products.length} total):
${productList}

KEY FACTS & FAQs:
${faqText}

GUIDELINES:
- Keep answers short and clear (2–5 sentences). Use simple language.
- We do NOT publish fixed prices online. For pricing, bulk orders or quotations, ask the visitor to request a quote or contact us on WhatsApp/phone. Never invent specific prices.
- For dealer/distributor interest, encourage them to visit the "Become a Distributor" page or share their details.
- For product usage/safety, give brief, sensible guidance based on the product info above.
- If asked something unrelated to cleaning, hygiene, or the company, gently steer back.
- When useful, suggest contacting us: WhatsApp ${site.phoneDisplay} or the contact page.
- Never claim to take orders or payments directly — you only provide information and capture interest.`;
}

export async function POST(req: Request) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages = (body.messages ?? [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12);

  if (messages.length === 0) {
    return NextResponse.json({ error: "No messages provided" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Graceful fallback so the widget still works before a key is configured.
    return NextResponse.json({
      reply:
        `The AI assistant isn't fully set up yet. For quick help, please message us on WhatsApp at ${site.phoneDisplay} or call us — our team will be happy to assist you!`,
      configured: false,
    });
  }

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json({
        reply: `I'm not able to help with that. For anything about our cleaning products, please ask away — or reach us on WhatsApp at ${site.phoneDisplay}.`,
      });
    }

    const reply = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return NextResponse.json({
      reply: reply || `Sorry, I couldn't generate a reply. Please try again or WhatsApp us at ${site.phoneDisplay}.`,
      configured: true,
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      {
        reply: `Sorry, I'm having trouble right now. Please message us on WhatsApp at ${site.phoneDisplay} and we'll help you directly.`,
        error: true,
      },
      { status: 200 }
    );
  }
}
