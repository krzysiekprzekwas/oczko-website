"use client";
import * as React from "react";

export function HeroSection() {
  return (
    <section className="relative w-full">
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
    </section>
  );
}
