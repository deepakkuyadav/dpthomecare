import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simple file-backed "table" of quote requests. Works when the app runs on a
// persistent server (npm start on your machine/VPS). For serverless hosting
// (e.g. Vercel), swap this for a hosted database — the API shape stays the same.
const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "quotes.json");

const ADMIN_KEY = process.env.ADMIN_KEY || "dpt-admin-2026";

export interface QuoteRow {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  quantity: string;
  message: string;
}

async function readQuotes(): Promise<QuoteRow[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw) as QuoteRow[];
  } catch {
    return [];
  }
}

async function writeQuotes(rows: QuoteRow[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// POST — insert a new quote request into the table
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = str(body.name, 120);
  const phone = str(body.phone, 20);
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const row: QuoteRow = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    phone,
    email: str(body.email, 160),
    city: str(body.city, 120),
    product: str(body.product, 160),
    quantity: str(body.quantity, 120),
    message: str(body.message, 1000),
  };

  try {
    const rows = await readQuotes();
    rows.push(row);
    await writeQuotes(rows);
    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    console.error("Quote save error:", err);
    return NextResponse.json({ error: "Could not save. Please try WhatsApp or call." }, { status: 500 });
  }
}

// GET — admin: list all quote requests (requires x-admin-key header)
export async function GET(req: Request) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const rows = await readQuotes();
  rows.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return NextResponse.json({ quotes: rows, count: rows.length });
}
