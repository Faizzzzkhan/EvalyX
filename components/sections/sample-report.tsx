import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const scores = [
  { label: "Technical Fundamentals", value: "24/30" },
  { label: "Practical Testing", value: "28/35" },
  { label: "Tools Knowledge", value: "10/15" },
  { label: "Communication", value: "16/20" },
];

export function SampleReportSection() {
  return (
    <section id="sample-report" className="section-shell">
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Sample Report"
            title="Candidate evaluation that hiring teams can act on quickly"
            description="Structured scorecards make it easy to see what a candidate can handle before your internal team spends time on interviews."
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="glass-card overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Candidate</p>
                  <h3 className="text-2xl font-semibold text-brand-ink">
                    Rahul Sharma
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Experience: 2 Years QA
                  </p>
                </div>
                <div className="rounded-2xl bg-brand-accent/10 px-4 py-3 text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                    Overall Score
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-brand-ink">
                    78/100
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 px-6 py-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {scores.map((score) => (
                  <div
                    key={score.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <p className="text-sm text-slate-500">{score.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-brand-ink">
                      {score.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-brand-primary/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
                  Recommendation
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Strong logical tester with good negative case coverage.
                  Recommended for internal round.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
