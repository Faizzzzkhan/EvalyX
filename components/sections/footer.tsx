import Link from "next/link";

const footerLinks = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#contact", label: "Contact" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-brand-ink">
            EvalyX
          </p>
          <a
            href="mailto:hello@evalyx.com"
            className="mt-3 inline-block text-sm text-slate-600 transition hover:text-brand-ink"
          >
            hello@evalyx.com
          </a>
          <p className="mt-4 text-sm text-slate-500">
            © 2026 EvalyX. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-slate-600" aria-label="Footer">
          {footerLinks.map((link) => (
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-brand-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-brand-ink"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </footer>
  );
}
