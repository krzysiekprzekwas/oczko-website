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
import { BannerItem, BannerWithImages } from "./components/BannerWithImages";
import { SpeedInsights } from "@vercel/speed-insights/next";

const items: BannerItem[] = [
  { type: "text", value: "DZIERGANIE" },
  { type: "image", src: "/images/eye-1.png", alt: "Eye" },
  { type: "text", value: "SPOTKANIA" },
  { type: "image", src: "/images/eye-1.png", alt: "Eye" },
  { type: "text", value: "WARSZTATY" },
  { type: "image", src: "/images/eye-1.png", alt: "Eye" },
  { type: "text", value: "ZABAWA" },
  { type: "image", src: "/images/eye-1.png", alt: "Eye" },
];

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <BannerWithImages items={items} />
      <AboutSection />
      <PhotoCarousel />
      <Banner />
      <WorkshopsSection />
      <section className="max-md:hidden">
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
      <SpeedInsights/>
    </main>
  );
}
