"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PositioningAndAudience from "../components/PositioningAndAudience";
import LaboratoryAndExplorer from "../components/LaboratoryAndExplorer";
import TriageAndWorkflow from "../components/TriageAndWorkflow";
import WhyAndAbout from "../components/WhyAndAbout";
import CtaAndContact from "../components/CtaAndContact";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (name: string) => {
    setSelectedService(name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#181D61]">
      {/* 0. Header / Navigation (Clean, sticky, persistent CTA) */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero — The Core Promise + 2. Quick Credibility Strip */}
        <Hero />

        {/* 3. The Problem / Brand Positioning + 4. Who We Help */}
        <PositioningAndAudience onSelectAudience={handleSelectService} />

        {/* 5. Veterinary Laboratory Core + 6. Diagnostic Service Explorer */}
        <LaboratoryAndExplorer onSelectService={handleSelectService} />

        {/* 7. Not Sure What Test You Need? + 8. How It Works */}
        <TriageAndWorkflow />

        {/* 9. Why VetBridge? + 10. Brand Story / About VetBridge */}
        <WhyAndAbout />

        {/* 11. Strong CTA / Enquiry Section + 12. Location / Contact */}
        <CtaAndContact initialServiceName={selectedService} />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
