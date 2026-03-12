import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const companies = [
  "SaaS Startups",
  "Product Companies",
  "Gaming Studios",
  "Tech Agencies",
];

export function BuiltForSection() {
  return (
    <section className="section-shell bg-brand-mist">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Built For"
            title="Built for Product Teams"
            align="center"
          />
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company, index) => (
            <FadeIn key={company} delay={index * 0.06}>
              <div className="glass-card flex min-h-32 items-center justify-center p-6 text-center text-lg font-semibold text-brand-ink">
                {company}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
