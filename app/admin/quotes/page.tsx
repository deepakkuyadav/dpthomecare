import type { Metadata } from "next";
import { QuotesTable } from "@/components/QuotesTable";

export const metadata: Metadata = {
  title: "Admin — Form Submissions",
  robots: { index: false, follow: false },
};

export default function AdminQuotesPage() {
  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container-wide">
        <QuotesTable />
      </div>
    </section>
  );
}
