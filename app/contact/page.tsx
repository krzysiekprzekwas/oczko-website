import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "./ContactSection";
import { BannerPartners, PartnerImage } from "../components/BannerPartners";

const items: PartnerImage[] = [
  { src: "/images/przyjeciele_kawy.png", alt: "Przyjaciele kawy" },
  { src: "/images/yope.png", alt: "Yope" },
  { src: "/images/salt_wave.png", alt: "Salt Wave" },
  { src: "/images/eye-1.png", alt: "Eye" },
  { src: "/images/eye-1.png", alt: "Eye" },
  { src: "/images/eye-1.png", alt: "Eye" },
  { src: "/images/eye-1.png", alt: "Eye" },
  { src: "/images/eye-1.png", alt: "Eye" },
];

export default function Contact() {
  return (
    <main>
      <Navigation />
      <ContactSection />
      <BannerPartners items={items}/>
      <CTASection />
      <Banner />
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
