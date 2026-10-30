import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/config/navigation";

export default function HomePage() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-foreground">Programas de Algebra Linear</h1>
          <p className="text-muted-foreground">
            Ferramentas para explorar conceitos de Álgebra Linear.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="h-full flex flex-col gap-2 p-5 rounded-md border border-border bg-card shadow-sm hover:border-primary transition-colors"
              >
                <h2 className="font-semibold text-card-foreground">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
