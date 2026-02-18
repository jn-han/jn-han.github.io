"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";

export function HomePage() {
  return (
    <div className="text-ink">
      <Header />

      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
