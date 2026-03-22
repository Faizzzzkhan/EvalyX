import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

const navItems = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="#hero"
            className="text-lg font-semibold tracking-tight text-brand-ink"
            aria-label="EvalyX home"
          >
            EvalyX
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href="#contact" className="hidden sm:inline-flex">
            Book a Demo
          </ButtonLink>
        </div>
        <nav
          className="mt-4 flex gap-4 overflow-x-auto pb-1 md:hidden"
          aria-label="Primary mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
