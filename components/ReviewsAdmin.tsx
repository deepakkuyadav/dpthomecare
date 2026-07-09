"use client";

import { useEffect, useState } from "react";
import { Star, RefreshCw, Trash2, Inbox } from "lucide-react";

interface Review {
  id: string;
  createdAt: string;
  name: string;
  place: string;
  rating: number;
  text: string;
}

// Admin view of visitor reviews: everything is editable inline (name, city,
// stars, text — saved on blur / star click) and a review can be deleted.
export function ReviewsAdmin({ adminKey }: { adminKey: string }) {
  const [rows, setRows] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/review");
      const data = await res.json();
      setRows(data.reviews || []);
    } catch {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // optimistic update; re-synced on Refresh
  async function patch(id: string, changes: Partial<Pick<Review, "name" | "place" | "rating" | "text">>) {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...changes } : r)));
    try {
      await fetch("/api/review", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ id, ...changes }),
      });
    } catch {}
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this review? It will disappear from the website.")) return;
    setRows((rs) => rs.filter((r) => r.id !== id));
    try {
      await fetch(`/api/review?id=${id}`, { method: "DELETE", headers: { "x-admin-key": adminKey } });
    } catch {}
  }

  const avg = rows.length ? (rows.reduce((s, r) => s + r.rating, 0) / rows.length).toFixed(1) : "—";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy">Visitor Reviews</h1>
          <p className="text-sm text-ink-muted">
            {rows.length} total · average rating {avg} — shown live on the Testimonials page
          </p>
        </div>
        <button onClick={load} className="btn-outline" disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
        </button>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 py-16 text-center">
          <Inbox className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-semibold text-brand-navy">No reviews yet</p>
          <p className="text-sm text-ink-muted">Reviews submitted on the Testimonials page will appear here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-card">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                {["Date", "Rating", "Name", "City", "Review", ""].map((h, i) => (
                  <th key={i} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.id} className="align-top hover:bg-slate-50/60">
                  <td className="whitespace-nowrap px-4 py-3 text-ink-muted">
                    {new Date(r.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          aria-label={`set ${s} stars`}
                          onClick={() => patch(r.id, { rating: s })}
                          className="transition-transform hover:scale-110"
                        >
                          <Star className={`h-5 w-5 ${s <= r.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      defaultValue={r.name}
                      onBlur={(e) => {
                        if (e.target.value !== r.name && e.target.value.trim().length >= 2)
                          patch(r.id, { name: e.target.value.trim() });
                      }}
                      className="w-36 rounded-lg border border-transparent bg-slate-50 px-2.5 py-1.5 text-sm font-medium text-brand-navy focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      defaultValue={r.place}
                      placeholder="City"
                      onBlur={(e) => {
                        if (e.target.value !== r.place) patch(r.id, { place: e.target.value.trim() });
                      }}
                      className="w-32 rounded-lg border border-transparent bg-slate-50 px-2.5 py-1.5 text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <textarea
                      defaultValue={r.text}
                      rows={2}
                      onBlur={(e) => {
                        if (e.target.value !== r.text && e.target.value.trim().length >= 10)
                          patch(r.id, { text: e.target.value.trim() });
                      }}
                      className="w-full min-w-[300px] rounded-lg border border-transparent bg-slate-50 px-2.5 py-1.5 text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <button
                      onClick={() => remove(r.id)}
                      aria-label="Delete review"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
