import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import WhatIsThisSection from "../components/sections/WhatIsThisSection";
import WhyAIScholarsLabSection from "../components/sections/WhyAIScholarsLabSection";
import GenZInnovationSection from "../components/sections/GenZInnovationSection";
import OutcomesSection from "../components/sections/OutcomesSection";
import WhoShouldApplySection from "../components/sections/WhoShouldApplySection";
import FinalCTASection from "../components/sections/FinalCTASection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <WhatIsThisSection />
      <WhyAIScholarsLabSection />
      <GenZInnovationSection />
      <OutcomesSection />
      <WhoShouldApplySection />
      <FinalCTASection />
    </MainLayout>
  );
}
