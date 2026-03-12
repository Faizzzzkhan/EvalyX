import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileStack,
  SearchCheck,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button-link";

const pipeline = [
  { label: "Resumes", icon: FileStack },
  { label: "EvalyX Screening", icon: SearchCheck },
  { label: "Qualified Candidates", icon: CheckCircle2 },
  { label: "Company Interview", icon: BriefcaseBusiness },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden section-shell pt-12 sm:pt-16">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div>
            <div className="inline-flex items-center rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-2 text-sm font-medium text-brand-primary">
              Structured technical screening for scaling teams
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-brand-ink sm:text-6xl">
              Interview-Ready Engineers. Without Resume Noise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              EvalyX screens technical candidates before they reach your team so
              you only interview people who are actually hireable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">Book a Demo</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                See How It Works
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-medium text-slate-500">
              Helping startups reduce first-round interview load by up to 70%
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative">
            <div className="absolute inset-x-12 top-8 h-36 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-hero-grid bg-[size:36px_36px] opacity-50" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                      Hiring Pipeline
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-brand-ink">
                      Clean signal before the interview.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-brand-accent/10 p-3 text-brand-accent">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {pipeline.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.label}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm"
                      >
                        <div className="rounded-2xl bg-slate-100 p-3 text-brand-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-500">Stage {index + 1}</p>
                          <p className="font-semibold text-brand-ink">{step.label}</p>
                        </div>
                        {index < pipeline.length - 1 ? (
                          <ArrowRight className="h-5 w-5 text-slate-300" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
