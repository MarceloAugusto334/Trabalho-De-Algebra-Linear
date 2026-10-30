"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/config/navigation";

export default function AppHeader() {
  const pathname = usePathname();

  const isActive = (href: string): boolean =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="h-14 shrink-0 flex items-center gap-8 px-6 border-b border-border bg-background">
      <Link href="/" className="text-lg font-bold text-foreground">
        Vetorize
      </Link>

      <nav className="flex items-center gap-6">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              isActive(item.href) ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
