import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { NoodleWorkshopsSection } from "./NoodleWorkshopsSection";
import { BannerPartners } from "../components/BannerPartners";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { WorkshopActivitiesSection } from "./WorkshopActivitiesSection";
import { B2BSection } from "./B2BSection";
import { AccessoriesWorkshopsSection } from "./AccessoriesWorkshopsSection";

export default function Workshops() {
  return (
    <>
      <NoodleWorkshopsSection />
      <Banner />
      <AccessoriesWorkshopsSection />
      <BannerPartners />
      <PhotoCarousel />
      <WorkshopActivitiesSection />
      <B2BSection/>
      <Footer backgroundColor="bg-oczko-orange-400" color="oczko-green-1000"/>
    </>
  );
}
