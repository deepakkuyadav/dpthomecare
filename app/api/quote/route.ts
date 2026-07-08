import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simple file-backed "table" of every website form submission: quote requests,
// contact/product enquiries and distributor applications. Works when the app
// runs on a persistent server (npm start on your machine/VPS). For serverless
// hosting (e.g. Vercel), swap this for a hosted database — the API shape stays
// the same.
const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "quotes.json");

const ADMIN_KEY = process.env.ADMIN_KEY || "dpt-admin-2026";

const TYPES = ["quote", "enquiry", "distributor", "newsletter"] as const;
export type LeadType = (typeof TYPES)[number];

const STATUSES = ["new", "contacted", "won", "closed"] as const;
export type LeadStatus = (typeof STATUSES)[number];

export interface LeadRow {
  id: string;
  createdAt: string;
  type: LeadType;
  name: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  quantity: string;
  message: string;
  // enquiry-only
  subject: string;
  // distributor-only
  state: string;
  businessType: string;
  investment: string;
  // admin-side follow-up tracking
  status: LeadStatus;
  note: string;
}

async function readLeads(): Promise<LeadRow[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const rows = JSON.parse(raw) as Partial<LeadRow>[];
    // older rows were written before `type` and the extra fields existed
    return rows.map((r) => ({
      id: r.id ?? crypto.randomUUID(),
      createdAt: r.createdAt ?? "",
      type: TYPES.includes(r.type as LeadType) ? (r.type as LeadType) : "quote",
      name: r.name ?? "",
      phone: r.phone ?? "",
      email: r.email ?? "",
      city: r.city ?? "",
      product: r.product ?? "",
      quantity: r.quantity ?? "",
      message: r.message ?? "",
      subject: r.subject ?? "",
      state: r.state ?? "",
      businessType: r.businessType ?? "",
      investment: r.investment ?? "",
      status: STATUSES.includes(r.status as LeadStatus) ? (r.status as LeadStatus) : "new",
      note: r.note ?? "",
    }));
  } catch {
    return [];
  }
}

async function writeLeads(rows: LeadRow[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// POST — insert a new form submission into the table
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const type: LeadType = TYPES.includes(body.type as LeadType) ? (body.type as LeadType) : "quote";
  const name = str(body.name, 120);
  const phone = str(body.phone, 20);
  const email = str(body.email, 160);
  // newsletter signups only have an email; every other form needs name + phone
  if (type === "newsletter") {
    if (!email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
  } else if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const row: LeadRow = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    type,
    name,
    phone,
    email,
    city: str(body.city, 120),
    product: str(body.product, 160),
    quantity: str(body.quantity, 120),
    message: str(body.message, 1000),
    subject: str(body.subject, 200),
    state: str(body.state, 120),
    businessType: str(body.businessType, 120),
    investment: str(body.investment, 120),
    status: "new",
    note: "",
  };

  try {
    const rows = await readLeads();
    rows.push(row);
    await writeLeads(rows);
    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    console.error("Lead save error:", err);
    return NextResponse.json({ error: "Could not save. Please try WhatsApp or call." }, { status: 500 });
  }
}

// PATCH — admin: update a lead's follow-up status / note (requires x-admin-key header)
export async function PATCH(req: Request) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const id = str(body.id, 64);
  const rows = await readLeads();
  const row = rows.find((r) => r.id === id);
  if (!row) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }
  if (typeof body.status === "string" && STATUSES.includes(body.status as LeadStatus)) {
    row.status = body.status as LeadStatus;
  }
  if (typeof body.note === "string") {
    row.note = body.note.trim().slice(0, 500);
  }
  try {
    await writeLeads(rows);
    return NextResponse.json({ ok: true, lead: row });
  } catch (err) {
    console.error("Lead update error:", err);
    return NextResponse.json({ error: "Could not save." }, { status: 500 });
  }
}

// GET — admin: list all submissions (requires x-admin-key header)
export async function GET(req: Request) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const rows = await readLeads();
  rows.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return NextResponse.json({ quotes: rows, count: rows.length });
}
