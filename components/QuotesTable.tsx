"use client";

import { useState } from "react";
import { Lock, RefreshCw, Download, Inbox } from "lucide-react";

interface QuoteRow {
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

export function QuotesTable() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<QuoteRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(k: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quote", { headers: { "x-admin-key": k } });
      if (res.status === 401) {
        setError("Incorrect password.");
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setRows(data.quotes || []);
      setAuthed(true);
    } catch {
      setError("Could not load. Is the server running?");
    } finally {
      setLoading(false);
    }
  }

  function exportCsv() {
    const header = ["Date", "Name", "Phone", "Email", "City", "Product", "Quantity", "Message"];
    const escape = (v: string) => `"${(v || "").replace(/"/g, '""')}"`;
    const lines = [
      header.join(","),
      ...rows.map((r) =>
        [new Date(r.createdAt).toLocaleString("en-IN"), r.name, r.phone, r.email, r.city, r.product, r.quantity, r.message]
          .map((v) => escape(String(v ?? "")))
          .join(",")
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dpt-quotes-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-brand-navy">Admin — Quote Requests</h1>
        <p className="mt-1 text-sm text-ink-muted">Enter the admin password to view submitted quote requests.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(key);
          }}
          className="mt-6 space-y-3"
        >
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin password"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Checking…" : "View Requests"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy">Quote Requests</h1>
          <p className="text-sm text-ink-muted">{rows.length} total</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => load(key)} className="btn-outline" disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
          <button onClick={exportCsv} className="btn-green" disabled={!rows.length}>
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 py-16 text-center">
          <Inbox className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-semibold text-brand-navy">No quote requests yet</p>
          <p className="text-sm text-ink-muted">New submissions from the Get a Quote page will appear here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-card">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                {["Date", "Name", "Phone", "City", "Product", "Quantity", "Message"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">
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
                  <td className="px-4 py-3 font-medium text-brand-navy">
                    {r.name}
                    {r.email && <span className="block text-xs font-normal text-ink-muted">{r.email}</span>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <a href={`tel:${r.phone}`} className="text-brand-blue hover:underline">
                      {r.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{r.city || "—"}</td>
                  <td className="px-4 py-3 text-ink-soft">{r.product || "—"}</td>
                  <td className="px-4 py-3 text-ink-soft">{r.quantity || "—"}</td>
                  <td className="max-w-xs px-4 py-3 text-ink-soft">{r.message || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
