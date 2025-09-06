"use client";
import * as React from "react";

export type PartnerImage = {
  src: string;
  alt?: string;
};

interface BannerPartnersProps {
  items: PartnerImage[];
}

export function BannerPartners({ items }: BannerPartnersProps) {
  // Create multiple copies of images for seamless marquee effect
  const marqueeImages = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 w-full text-4xl text-oczko-violet-600 bg-oczko-violet-200 max-md:bg-oczko-green-100 border-solid border-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="flex items-center w-full h-full">
        <div className="flex-shrink-0 px-10 font-salted">
          <span className="text-2xl">Zaufali nam: </span>
        </div>
        
        {/* Marquee images section */}
        <div className="marquee whitespace-nowrap flex items-center flex-1 overflow-hidden">
          <div className="marquee-container flex">
            {marqueeImages.map((image, idx) => (
              <img
                key={`img-${idx}`}
                src={image.src}
                alt={image.alt || ""}
                className="inline-block h-10 mx-4 align-middle"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
