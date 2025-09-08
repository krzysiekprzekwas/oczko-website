import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const salted = localFont({
  src: "../public/fonts/fonnts.com-Salted_Regular.otf",
  variable: "--font-salted",
  display: "swap",
  weight: "400",
  style: "normal",
});

const syne = localFont({
  src: "../public/fonts/Syne-VariableFont_wght.ttf",
  variable: "--font-syne",
  display: "swap",
  weight: "100 900",
  style: "normal",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "OCZKO.workshops",
  description: "Warsztaty dziewiastwa i szydełkowania",
  metadataBase: new URL("https://www.oczkoworkshops.pl"),
  openGraph: {
    title: "OCZKO.workshops",
    description: "Warsztaty dziewiastwa i szydełkowania",
    url: "https://www.oczkoworkshops.pl",
    siteName: "OCZKO.workshops",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "OCZKO.workshops hero image",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCZKO.workshops",
    description: "Warsztaty dziewiastwa i szydełkowania",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${salted.variable} ${syne.variable} antialiased`}
      >
        <main>
          <Navigation />
          {children}
          <Analytics/>
          <SpeedInsights/>
        </main>
      </body>
    </html>
  );
}
