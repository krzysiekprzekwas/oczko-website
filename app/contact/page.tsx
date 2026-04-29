import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "./ContactSection";
import { BannerPartners } from "../components/BannerPartners";

export const metadata: Metadata = {
  title: "Kontakt | OCZKO.workshops",
  description: "Napisz do nas na oczko.workshops@gmail.com lub znajdź nas na Instagramie i Facebooku. Chętnie odpowiemy na wszystkie pytania o warsztaty!",
  openGraph: {
    title: "Kontakt | OCZKO.workshops",
    description: "Napisz do nas — chętnie odpowiemy na wszystkie pytania o warsztaty!",
    url: "https://www.oczkoworkshops.pl/contact",
  },
};

export default function Contact() {
  return (
    <>
      <ContactSection />
      <BannerPartners/>
      <CTASection backgroundColor="bg-oczko-green-500" />
      <Banner />
      <Footer backgroundColor="bg-oczko-violet-200" color="oczko-green-1000"/>
    </>
  );
}
