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
import { AccessoriesWorkshopsSection } from "./AccessoriesWorkshopsSection";

export default function Workshops() {
  return (
    <main>
      <Navigation />
      <NoodleWorkshopsSection />
      <Banner />
      <AccessoriesWorkshopsSection />
      <BannerPartners />
      <PhotoCarousel />
      <WorkshopActivitiesSection />
      <B2BSection/>
      <Footer backgroundColor="oczko-orange-400" color="oczko-green-100"/>
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
