import Image from "next/image";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PhotoCarousel } from "./components/PhotoCarousel";
import { Banner } from "./components/Banner";
import { WorkshopsSection } from "./components/WorkshopsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
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
