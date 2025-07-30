"use client";
import * as React from "react";
import { CarouselImage, PhotoCarousel } from "./PhotoCarousel";

const heroImages: CarouselImage[] = [
  {
    src: "/images/hero_carousel_3.png",
    alt: "Hero photo 3",
  },
  {
    src: "/images/hero_carousel_1.png",
    alt: "Hero photo 1",
  },
  {
    src: "/images/hero_carousel_2.png",
    alt: "Hero photo 2",
  },
];

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="block md:hidden">
        <PhotoCarousel images={heroImages}/>
      </div>
      <div className="hidden md:block relative w-full">
        <img
          src="/images/hero.png"
          className="object-contain w-full max-md:max-w-full block"
          alt="Hero image showcasing knitting workshops"
        />
        <h1
          className="absolute left-10 right-10 bottom-10 flex items-center justify-center text-white pointer-events-none select-none text-center p-4 font-salted w-auto max-w-full"
          style={{ fontSize: 'clamp(2rem, 12vw, 12rem)', lineHeight: 1.4 }}
        >
          OCZKO.WORKSHOPS
        </h1>
      </div>
    </section>
  );
}
