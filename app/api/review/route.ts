import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// File-backed "table" of visitor reviews shown on /testimonials.
// Reviews publish immediately; a bad one can be removed with
// DELETE /api/review?id=<id> using the x-admin-key header.
const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "reviews.json");

const ADMIN_KEY = process.env.ADMIN_KEY || "dpt-admin-2026";

export interface ReviewRow {
  id: string;
  createdAt: string;
  name: string;
  place: string;
  rating: number;
  text: string;
}

async function readReviews(): Promise<ReviewRow[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    return JSON.parse(raw) as ReviewRow[];
  } catch {
    return [];
  }
}

async function writeReviews(rows: ReviewRow[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// GET — public: newest reviews first (shown on the testimonials page)
export async function GET() {
  const rows = await readReviews();
  rows.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return NextResponse.json({ reviews: rows, count: rows.length });
}

// POST — public: a visitor submits a review
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = str(body.name, 80);
  const place = str(body.place, 80);
  const text = str(body.text, 600);
  const rating = Math.round(Number(body.rating));

  if (name.length < 2 || text.length < 10 || !(rating >= 1 && rating <= 5)) {
    return NextResponse.json(
      { error: "Please give your name, a rating and a review of at least 10 characters." },
      { status: 400 }
    );
  }

  const rows = await readReviews();
  // ignore an accidental double-submit of the same review
  if (rows.some((r) => r.name === name && r.text === text)) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const row: ReviewRow = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    place,
    rating,
    text,
  };

  try {
    rows.push(row);
    await writeReviews(rows);
    return NextResponse.json({ ok: true, review: row });
  } catch (err) {
    console.error("Review save error:", err);
    return NextResponse.json({ error: "Could not save your review. Please try again." }, { status: 500 });
  }
}

// DELETE — admin: remove a review (moderation), /api/review?id=<id>
export async function DELETE(req: Request) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const id = new URL(req.url).searchParams.get("id") || "";
  const rows = await readReviews();
  const next = rows.filter((r) => r.id !== id);
  if (next.length === rows.length) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }
  await writeReviews(next);
  return NextResponse.json({ ok: true });
}
