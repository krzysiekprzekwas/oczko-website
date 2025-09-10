import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PhotoCarousel } from "./components/PhotoCarousel";
import { Banner } from "./components/Banner";
import { WorkshopsSection } from "./components/WorkshopsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SocialsSection } from "./components/SocialsSection";
import { BannerItem, BannerWithImages } from "./components/BannerWithImages";
import { BannerPartners } from "./components/BannerPartners";

const items: BannerItem[] = [
  { type: "text", value: "DZIERGANIE" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
  { type: "text", value: "SPOTKANIA" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
  { type: "text", value: "WARSZTATY" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
  { type: "text", value: "ZABAWA" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerWithImages items={items} />
      <AboutSection />
      <PhotoCarousel />
      <Banner />
      <WorkshopsSection />
      <section className="max-md:hidden">
        <img
          src="./images/group.png"
          className="object-contain w-full max-md:max-w-full"
          alt="Workshop scene"
        />
      </section>
      <TestimonialsSection />
      <BannerPartners/>
      <CTASection />
      <SocialsSection />
      <Footer />
    </>
  );
}
