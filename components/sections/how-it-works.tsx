import { ClipboardList, MessagesSquare, Send } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    step: "Step 1",
    title: "Send us your job requirement.",
    icon: Send,
  },
  {
    step: "Step 2",
    title: "EvalyX screens candidates through structured interviews.",
    icon: MessagesSquare,
  },
  {
    step: "Step 3",
    title: "You interview only the top candidates.",
    icon: ClipboardList,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-shell bg-brand-mist">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="A faster route from applicants to interview-ready candidates"
            description="A lightweight workflow for hiring teams that need stronger signal without adding process overhead."
            align="center"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.step} delay={index * 0.08}>
                <div className="glass-card relative h-full p-6">
                  <div className="absolute right-6 top-6 text-5xl font-semibold text-slate-100">
                    0{index + 1}
                  </div>
                  <div className="relative">
                    <div className="inline-flex rounded-2xl bg-white p-3 text-brand-primary shadow-sm ring-1 ring-slate-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
                      {item.step}
                    </p>
                    <h3 className="mt-3 max-w-xs text-xl font-semibold text-brand-ink">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
