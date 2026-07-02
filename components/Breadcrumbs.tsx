import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-white">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.name}
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
