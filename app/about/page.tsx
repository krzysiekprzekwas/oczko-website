import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { CarouselImage, PhotoCarousel } from "../components/PhotoCarousel";
import { CofoundersSection } from "./CofoundersSection";

const aboutImages: CarouselImage[] = [
  {
    src: "/images/about_carousel_1.png",
    alt: "O nas photo 1",
  },
  {
    src: "/images/about_carousel_2.png",
    alt: "O nas photo 2",
  },
  {
    src: "/images/about_carousel_3.png",
    alt: "O nas photo 3",
  },
];

export default function About() {
  return (
    <>
      <CofoundersSection />
      <Banner />
      <PhotoCarousel images={aboutImages}/>
      <Footer />
    </>
  );
}
