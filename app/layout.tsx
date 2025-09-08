import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
