"use client";
import * as React from "react";

export type CarouselImage = {
  src: string;
  alt: string;
};

const defaultImages: CarouselImage[] = [
  {
    src: "/images/carousel-1.png",
    alt: "Workshop photo 1",
  },
  {
    src: "/images/carousel-2.png",
    alt: "Workshop photo 2",
  },
  {
    src: "/images/carousel-3.png",
    alt: "Workshop photo 3",
  },
];

export function PhotoCarousel({ images = defaultImages }: { images?: CarouselImage[] }) {
  const [active, setActive] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 40 && active > 0) setActive(active - 1);
    else if (diff < -40 && active < images.length - 1) setActive(active + 1);
    touchStartX.current = null;
  };

  return (
    <section className="w-full">
      {/* Mobile carousel */}
      <div className="block md:hidden relative w-full overflow-hidden">
        <div
          className="w-full h-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="w-full aspect-square object-cover transition-all duration-300"
          />
        </div>
        {/* Dot markers */}
        <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-4 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border border-white bg-white/70 transition-all ${active === idx ? 'opacity-100' : 'opacity-40'}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Desktop: show all images side by side */}
      <div className="hidden md:flex flex-row w-full">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-1/3 aspect-square object-cover"
          />
        ))}
      </div>
    </section>
  );
}
