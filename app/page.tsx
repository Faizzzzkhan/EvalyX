import { BenefitsSection } from "@/components/sections/benefits";
import { BuiltForSection } from "@/components/sections/built-for";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { Navbar } from "@/components/sections/navbar";
import { PricingSection } from "@/components/sections/pricing";
import { ProblemSection } from "@/components/sections/problem";
import { SampleReportSection } from "@/components/sections/sample-report";
import { SolutionSection } from "@/components/sections/solution";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SampleReportSection />
      <BuiltForSection />
      <BenefitsSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
