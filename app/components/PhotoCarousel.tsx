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
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  // Handle swipe/drag
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - touchStartX.current);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    let newActive = active;
    if (diff > 60 && active > 0) newActive = active - 1;
    else if (diff < -60 && active < images.length - 1) newActive = active + 1;
    setActive(newActive);
    setDragOffset(0);
    setIsDragging(false);
    touchStartX.current = null;
  };

  // Calculate transform for real-time dragging
  const getTransform = () => {
    const base = -active * 100;
    const percentOffset = (dragOffset / window.innerWidth) * 100;
    return `translateX(calc(${base}% + ${percentOffset}vw))`;
  };

  return (
    <section className="w-full">
      {/* Mobile carousel */}
      <div className="block md:hidden relative w-full overflow-hidden">
        <div
          className="w-full h-auto touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            className="flex transition-transform duration-300"
            style={{
              width: `${images.length * 100}%`,
              transform: getTransform(),
              transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>
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
