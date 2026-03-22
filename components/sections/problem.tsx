import { CircleAlert, Clock3, Files } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const problems = [
  {
    title: "Too Many Resumes",
    description:
      "Hiring teams receive hundreds of applications with little signal.",
    icon: Files,
  },
  {
    title: "Weak Technical Screening",
    description: "Most candidates fail basic fundamentals.",
    icon: CircleAlert,
  },
  {
    title: "Engineering Time Wasted",
    description:
      "Senior engineers spend hours interviewing unprepared candidates.",
    icon: Clock3,
  },
];

export function ProblemSection() {
  return (
    <section className="section-shell bg-brand-mist">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="The Problem"
            title="Hiring Junior Engineers Shouldn't Take 20 Interviews"
            description="Technical hiring breaks down when application volume grows faster than evaluation quality."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <FadeIn key={problem.title} delay={index * 0.08}>
                <div className="glass-card h-full p-6">
                  <div className="inline-flex rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {problem.description}
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
