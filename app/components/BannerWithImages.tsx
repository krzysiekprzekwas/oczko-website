"use client";
import * as React from "react";

export type BannerItem =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt?: string };

interface BannerWithImagesProps {
  items: BannerItem[];
}

export function BannerWithImages({ items }: BannerWithImagesProps) {
  const marqueeItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 py-7 w-full text-4xl tracking-tighter leading-none text-oczko-violet-600 bg-oczko-violet-200 max-md:bg-oczko-green-100 border-solid border-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-container flex">
          {marqueeItems.map((item, idx) =>
            item.type === "text" ? (
              <span
                key={`text-${idx}`}
                className="inline-block px-10 font-salted"
              >
                {item.value}
              </span>
            ) : (
              <img
                key={`img-${idx}`}
                src={item.src}
                alt={item.alt || ""}
                className="inline-block h-10 mx-4 align-middle"
                draggable={false}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
} 