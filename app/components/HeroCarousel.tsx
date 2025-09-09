"use client";
import * as React from "react";

export type HeroCarouselImage = {
  src: string;
  alt: string;
};

const defaultHeroImages: HeroCarouselImage[] = [
  { src: "/images/hero_1.png", alt: "Hero image 1" },
  { src: "/images/hero_1.png", alt: "Hero image 2" },
  { src: "/images/hero_1.png", alt: "Hero image 3" },
];

export function HeroCarousel({ images = defaultHeroImages }: { images?: HeroCarouselImage[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoDirection, setAutoDirection] = React.useState(1); // 1 forward, -1 backward
  const autoScrollRef = React.useRef<NodeJS.Timeout | null>(null);
  const interactionRef = React.useRef(false);

  React.useEffect(() => {
    if (interactionRef.current) return;
    autoScrollRef.current = setTimeout(() => {
      setActiveIndex((previous) => {
        if (previous === images.length - 1) {
          setAutoDirection(-1);
          return previous - 1;
        } else if (previous === 0) {
          setAutoDirection(1);
          return previous + 1;
        }
        return previous + autoDirection;
      });
    }, 5000);
    return () => {
      if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    };
  }, [activeIndex, images.length, autoDirection]);

  const handleUserInteraction = (callback: () => void) => {
    interactionRef.current = true;
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    callback();
    setTimeout(() => {
      interactionRef.current = false;
    }, 7000);
  };

  const goToSlide = (index: number) => handleUserInteraction(() => setActiveIndex(index));

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden w-full h-full">
        <div 
          className="flex w-full h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full w-full h-full flex-shrink-0 bg-black">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center block"
                style={{ imageRendering: 'auto' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-2 z-10 pointer-events-none">
        {images.map((_, index) => (
          <button
            key={index}
            className="relative w-6 h-6 flex items-center justify-center bg-transparent pointer-events-auto"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === activeIndex ? (
              <span className="block w-4 h-4 rounded-full bg-oczko-gray-100" />
            ) : (
              <span className="block w-4 h-4 rounded-full border border-[0.5px] border-oczko-gray-100" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}


