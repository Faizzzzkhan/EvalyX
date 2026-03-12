import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  "Pre-screened candidates",
  "Technical interview reports",
  "Structured evaluation framework",
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell bg-brand-mist">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing Preview"
            title="Simple engagement model for focused hiring sprints"
            description="Start with a dedicated EvalyX hiring pod and scale screening volume as your pipeline grows."
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.08} className="mx-auto mt-12 max-w-xl">
          <div className="glass-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              EvalyX Hiring Pod
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">
              Screening support without bloated recruitment overhead
            </p>
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-accent/10 p-1 text-brand-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <ButtonLink href="#contact" className="mt-8 w-full">
              Book a Call
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
