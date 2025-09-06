import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Banner } from "../components/Banner";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "./ContactSection";

export default function Contact() {
  return (
    <main>
      <Navigation />
      <ContactSection />
      Partners Banner
      <CTASection />
      <Banner />
      <Footer />
      <Analytics/>
      <SpeedInsights/>
    </main>
  );
}
