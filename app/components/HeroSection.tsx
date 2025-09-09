"use client";
import * as React from "react";
import { HeroCarousel, HeroCarouselImage } from "./HeroCarousel";

const heroImages: HeroCarouselImage[] = [
  { src: "/images/hero_1.png", alt: "Hero image 1" },
  { src: "/images/hero_2.png", alt: "Hero image 2" },
  { src: "/images/hero_3.png", alt: "Hero image 3" },
];

export function HeroSection() {
  return (
    <section className="relative w-full h-[85vh]">
      <HeroCarousel images={heroImages} />
      <h1
        className="absolute left-10 right-10 bottom-10 flex items-center justify-center text-white pointer-events-none select-none text-center p-4 font-salted w-auto max-w-full"
        style={{ fontSize: 'clamp(2rem, 12vw, 12rem)', lineHeight: 1.4 }}
      >
        OCZKO.WORKSHOPS
      </h1>
    </section>
  );
}
