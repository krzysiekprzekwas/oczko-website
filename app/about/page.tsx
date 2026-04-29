import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { CarouselImage, PhotoCarousel } from "../components/PhotoCarousel";
import { CofoundersSection } from "./CofoundersSection";

export const metadata: Metadata = {
  title: "O nas | OCZKO.workshops",
  description: "Poznaj Werę i Justę — twórczynie OCZKO.workshops. Dowiedz się, skąd wzięła się miłość do dziergania i czemu warto dołączyć do naszych warsztatów.",
  openGraph: {
    title: "O nas | OCZKO.workshops",
    description: "Poznaj Werę i Justę — twórczynie OCZKO.workshops.",
    url: "https://www.oczkoworkshops.pl/about",
  },
};

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
