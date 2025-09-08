import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { CofoundersSection } from "./CofoundersSection";

export default function About() {
  return (
    <>
      <CofoundersSection />
      <Banner />
      <PhotoCarousel />
      <Footer />
    </>
  );
}
