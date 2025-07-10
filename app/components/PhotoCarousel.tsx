"use client";
import * as React from "react";

export function PhotoCarousel() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <img
        src="/images/carousel-1.png"
        className="w-full md:w-1/3 aspect-square object-cover"
        alt="Workshop photo 1"
      />
      <img
        src="/images/carousel-2.png"
        className="w-full md:w-1/3 aspect-square object-cover"
        alt="Workshop photo 2"
      />
      <img
        src="/images/carousel-3.png"
        className="w-full md:w-1/3 aspect-square object-cover"
        alt="Workshop photo 3"
      />
    </section>
  );
}
