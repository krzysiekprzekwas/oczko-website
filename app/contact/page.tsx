import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "./ContactSection";
import { BannerPartners } from "../components/BannerPartners";

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
