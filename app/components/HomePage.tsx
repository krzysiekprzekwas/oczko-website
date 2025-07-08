"use client";
import * as React from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { PhotoCarousel } from "./PhotoCarousel";
import { Banner } from "./Banner";
import { WorkshopsSection } from "./WorkshopsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhotoCarousel />
      <Banner />
      <WorkshopsSection />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/bfa5bee6d4f8cb3de63a21bdf8d206877ba3137d?placeholderIfAbsent=true"
        className="object-contain w-full aspect-[1.69] max-md:max-w-full"
        alt="Workshop scene"
      />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default HomePage;
