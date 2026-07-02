import Link from "next/link";
import { Home, ArrowLeft, Search, SprayCan } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-brand-gradient-soft py-24">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl" />
      <div className="container-wide relative text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-white ring-1 ring-white/20">
          <SprayCan className="h-10 w-10" />
        </div>
        <p className="mt-8 font-heading text-7xl font-extrabold text-white md:text-8xl">404</p>
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">This page couldn't be found</h1>
        <p className="mx-auto mt-3 max-w-md text-white/80">
          The page you're looking for may have been moved or no longer exists. Let's get you back to a clean start.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-white">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/products" className="btn-green">
            <Search className="h-4 w-4" /> Browse Products
          </Link>
          <Link href="/contact" className="btn inline-flex border-2 border-white/40 text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
