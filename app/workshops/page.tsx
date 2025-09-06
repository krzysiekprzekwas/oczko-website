import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { NoodleWorkshopsSection } from "./NoodleWorkshopsSection";
import { BannerPartners } from "../components/BannerPartners";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { WorkshopActivitiesSection } from "./WorkshopActivitiesSection";
import { B2BSection } from "./B2BSection";

export default function Workshops() {
  return (
    <main>
      <Navigation />
      <NoodleWorkshopsSection />
      <Banner />
      <NoodleWorkshopsSection />
      <BannerPartners />
      <PhotoCarousel />
      <WorkshopActivitiesSection />
      <B2BSection/>
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
