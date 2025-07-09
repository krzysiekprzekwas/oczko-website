import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PhotoCarousel } from "./components/PhotoCarousel";
import { Banner } from "./components/Banner";
import { WorkshopsSection } from "./components/WorkshopsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SocialsSection } from "./components/SocialsSection";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhotoCarousel />
      <Banner />
      <WorkshopsSection />
      <section>
        <img
        src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/bfa5bee6d4f8cb3de63a21bdf8d206877ba3137d?placeholderIfAbsent=true"
          className="object-contain w-full max-md:max-w-full"
          alt="Workshop scene"
        />
      </section>
      <TestimonialsSection />
      <CTASection />
      <SocialsSection />
      <Footer />
      <Analytics/>
    </main>
  );
}
