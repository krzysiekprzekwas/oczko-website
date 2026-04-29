import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { NoodleWorkshopsSection } from "./NoodleWorkshopsSection";
import { BannerPartners } from "../components/BannerPartners";
import { CarouselImage, PhotoCarousel } from "../components/PhotoCarousel";
import { WorkshopActivitiesSection } from "./WorkshopActivitiesSection";
import { B2BSection } from "./B2BSection";
import { AccessoriesWorkshopsSection } from "./AccessoriesWorkshopsSection";

export const metadata: Metadata = {
  title: "Warsztaty | OCZKO.workshops",
  description: "Noodle Scarf, SpOCZKO akcesoria i warsztaty B2B — znajdź warsztat dla siebie. Nauka dziergania i szydełkowania dla każdego poziomu zaawansowania.",
  openGraph: {
    title: "Warsztaty | OCZKO.workshops",
    description: "Noodle Scarf, SpOCZKO akcesoria i warsztaty B2B — znajdź warsztat dla siebie.",
    url: "https://www.oczkoworkshops.pl/workshops",
  },
};

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
