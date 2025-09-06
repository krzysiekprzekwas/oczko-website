import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { NoodleWorkshopsSection } from "./NoodleWorkshopsSection";
import { BannerPartners, PartnerImage } from "../components/BannerPartners";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { WorkshopActivitiesSection } from "./WorkshopActivitiesSection";
import { B2BSection } from "./B2BSection";

const items: PartnerImage[] = [
  { src: "/images/przyjeciele_kawy.png", alt: "Przyjaciele kawy" },
  { src: "/images/yope.png", alt: "Yope" },
  { src: "/images/salt_wave.png", alt: "Salt Wave" },
];

export default function Workshops() {
  return (
    <main>
      <Navigation />
      <NoodleWorkshopsSection />
      <Banner />
      <NoodleWorkshopsSection />
      <BannerPartners items={items} />
      <PhotoCarousel />
      <WorkshopActivitiesSection />
      <B2BSection/>
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
