import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { NoodleWorkshopsSection } from "./NoodleWorkshopsSection";
import { BannerPartners } from "../components/BannerPartners";
import { CarouselImage, PhotoCarousel } from "../components/PhotoCarousel";
import { WorkshopActivitiesSection } from "./WorkshopActivitiesSection";
import { B2BSection } from "./B2BSection";
import { AccessoriesWorkshopsSection } from "./AccessoriesWorkshopsSection";

const workshopsImages: CarouselImage[] = [
  {
    src: "/images/workshops_carousel_1.png",
    alt: "Workshops photo 1",
  },
  {
    src: "/images/workshops_carousel_2.png",
    alt: "Workshops photo 2",
  },
  {
    src: "/images/workshops_carousel_3.png",
    alt: "Workshops photo 3",
  },
];


export default function Workshops() {
  return (
    <>
      <NoodleWorkshopsSection />
      <Banner />
      <AccessoriesWorkshopsSection />
      <BannerPartners />
      <PhotoCarousel images={workshopsImages}/>
      <WorkshopActivitiesSection />
      <B2BSection/>
      <Footer backgroundColor="bg-oczko-orange-400" color="oczko-green-1000"/>
    </>
  );
}
