import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button-link";

export function FinalCtaSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-ink px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Stop Interviewing Unprepared Candidates
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Let EvalyX handle technical screening so your team focuses on
                the best candidates.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="mailto:hello@evalyx.com?subject=Schedule%20Demo"
                  className="bg-white text-brand-ink hover:bg-slate-100"
                >
                  Schedule Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
