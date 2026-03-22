import {
  ClipboardCheck,
  FileBadge2,
  LayoutPanelTop,
  ShieldCheck,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Structured Technical Interviews",
    description:
      "Real engineers evaluate candidates using standardized frameworks.",
    icon: LayoutPanelTop,
  },
  {
    title: "Practical Problem Testing",
    description:
      "Candidates are evaluated through real technical scenarios.",
    icon: ClipboardCheck,
  },
  {
    title: "Detailed Evaluation Reports",
    description:
      "Each candidate includes technical scorecards and notes.",
    icon: FileBadge2,
  },
  {
    title: "Only Qualified Candidates Reach You",
    description:
      "Your team meets candidates who already passed technical validation.",
    icon: ShieldCheck,
  },
];

export function SolutionSection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="The Solution"
            title="EvalyX Filters The Noise"
            description="A structured pre-screening layer that gives hiring managers clean candidate signal before internal interviews start."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.06}>
                <div className="glass-card h-full p-6 transition duration-200 hover:-translate-y-1">
                  <div className="inline-flex rounded-2xl bg-brand-secondary/10 p-3 text-brand-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
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
