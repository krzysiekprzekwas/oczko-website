import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { CTASection } from "../components/CTASection";

export default function Contact() {
  return (
    <main>
      <Navigation />
      Kontakt
      <CTASection />
      <Banner />
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
