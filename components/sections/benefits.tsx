import { Gauge, Layers3, TimerReset, UserRoundCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Reduce Interview Load",
    description:
      "Save engineering hours spent filtering weak candidates.",
    icon: TimerReset,
  },
  {
    title: "Consistent Candidate Evaluation",
    description:
      "Every candidate evaluated with the same framework.",
    icon: Layers3,
  },
  {
    title: "Faster Hiring",
    description: "Shortlist technically capable candidates faster.",
    icon: Gauge,
  },
  {
    title: "Better Junior Engineers",
    description:
      "Focus on candidates with real practical thinking.",
    icon: UserRoundCheck,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-shell">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Benefits"
            title="Hiring teams get time back and better candidate quality"
            description="EvalyX is designed to remove low-signal interviews while improving consistency across candidate evaluation."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <FadeIn key={benefit.title} delay={index * 0.06}>
                <div className="glass-card h-full p-6">
                  <div className="inline-flex rounded-2xl bg-brand-accent/10 p-3 text-brand-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
