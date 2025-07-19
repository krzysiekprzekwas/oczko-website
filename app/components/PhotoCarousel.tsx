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
  const [autoDirection, setAutoDirection] = React.useState(1); // 1 for forward, -1 for backward
  const autoScrollRef = React.useRef<NodeJS.Timeout | null>(null);
  const interactionRef = React.useRef(false);
  const startX = React.useRef(0);
  const threshold = 50; // Minimum swipe distance

  // Auto-scroll effect
  React.useEffect(() => {
    if (interactionRef.current) return; // Pause auto-scroll on interaction
    autoScrollRef.current = setTimeout(() => {
      setActive(prev => {
        if (prev === images.length - 1) {
          setAutoDirection(-1);
          return prev - 1;
        } else if (prev === 0) {
          setAutoDirection(1);
          return prev + 1;
        }
        return prev + autoDirection;
      });
    }, 5000);
    return () => {
      if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    };
  }, [active, images.length, autoDirection]);

  // Helper to handle user interaction and pause auto-scroll
  const handleUserInteraction = (callback: () => void) => {
    interactionRef.current = true;
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    callback();
    setTimeout(() => {
      interactionRef.current = false;
    }, 7000); // Resume auto-scroll after 7s
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleUserInteraction(() => {
      startX.current = e.touches[0].clientX;
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleUserInteraction(() => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && active < images.length - 1) {
          // Swipe left - next image
          setActive(active + 1);
        } else if (diff < 0 && active > 0) {
          // Swipe right - previous image
          setActive(active - 1);
        }
      }
    });
  };

  const goToSlide = (index: number) => {
    handleUserInteraction(() => setActive(index));
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Image container */}
      <div 
        className="overflow-hidden bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover flex-shrink-0"
              draggable={false}
            />
          ))}
        </div>
        {/* Navigation dots overlayed on image */}
        <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-2 z-10 pointer-events-none">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border border-white bg-white/70 transition-all ${active === idx ? 'opacity-100' : 'opacity-40'} pointer-events-auto`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Arrow navigation for larger screens */}
      <button
        onClick={() => active > 0 && goToSlide(active - 1)}
        disabled={active === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center disabled:opacity-30 hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={() => active < images.length - 1 && goToSlide(active + 1)}
        disabled={active === images.length - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center disabled:opacity-30 hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}