import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { CofoundersSection } from "./CofoundersSection";

export default function About() {
  return (
    <main>
      <Navigation />
      <CofoundersSection />
      <Banner />
      <PhotoCarousel />
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
