import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { T } from "@/lib/lang";

export function Breadcrumbs({ items }: { items: { name: string; nameHi?: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const label = <T en={item.name} hi={item.nameHi ?? item.name} />;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-white">{label}</span>
              ) : (
                <Link href={item.path} className="hover:text-white transition-colors">
                  {label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-4 w-4 text-white/50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
