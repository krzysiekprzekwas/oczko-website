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
  const [progress, setProgress] = React.useState(0); // 0 to 1 for progress ring
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

  // Progress ring effect for active dot
  React.useEffect(() => {
    if (interactionRef.current) return;
    setProgress(0);
    let start: number | null = null;
    let frame: number;
    const duration = 5000;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      setProgress(Math.min(elapsed / duration, 1));
      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, autoDirection]);

  // Helper to handle user interaction and pause auto-scroll
  const handleUserInteraction = (callback: () => void) => {
    interactionRef.current = true;
    if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    setProgress(0); // Reset progress ring
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
    <>
      {/* Mobile: Carousel */}
      <div className="block md:hidden">
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
              {images.map((_, idx) => {
                // Progress ring parameters
                const size = 24;
                const stroke = 3;
                const radius = (size - stroke) / 2;
                const circumference = 2 * Math.PI * radius;
                const offset = idx === active ? circumference * (1 - progress) : circumference;
                return (
                  <button
                    key={idx}
                    className={`relative w-6 h-6 flex items-center justify-center bg-transparent pointer-events-auto`}
                    style={{ opacity: active === idx ? 1 : 0.4, transition: 'opacity 0.2s' }}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {/* Progress ring SVG */}
                    <svg width={size} height={size} className="absolute top-0 left-0" style={{ pointerEvents: 'none' }}>
                      <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={stroke}
                        opacity={0.5}
                      />
                      <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#4C3D93"
                        strokeWidth={stroke}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: idx === active ? 'stroke-dashoffset 0.1s linear' : 'none' }}
                      />
                    </svg>
                    <span className="block w-4 h-4 rounded-full border border-white bg-white/70 z-10" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Static row */}
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
    </>
  );
}