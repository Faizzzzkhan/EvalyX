import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-brand-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-secondary"
      : "border border-slate-300 bg-white text-brand-ink hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50";

  const classes = `${base} ${styles} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <Link href={href} className={classes}>{children}</Link>;
}
