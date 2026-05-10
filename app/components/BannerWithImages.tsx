import React from "react";
import Image from "next/image";

export type BannerItem =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt?: string };

interface BannerWithImagesProps {
  items: BannerItem[];
}

export function BannerWithImages({ items }: BannerWithImagesProps) {
  const marqueeItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 w-full text-4xl text-oczko-violet-600 bg-oczko-violet-200 max-md:bg-oczko-green-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-track flex">
          {marqueeItems.map((item, idx) =>
            item.type === "text" ? (
              <span key={`text-${idx}`} className="inline-block px-10 font-salted">
                {item.value}
              </span>
            ) : (
              <Image
                key={`img-${idx}`}
                src={item.src}
                alt={item.alt || ""}
                width={48}
                height={44}
                className="inline-block h-10 w-auto mx-4 align-middle"
                draggable={false}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
