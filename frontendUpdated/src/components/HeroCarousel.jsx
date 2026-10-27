import { useEffect, useRef, useState } from "react";

import Hero from "./Hero.jsx";
import InboxHero from "./InboxHero.jsx";
import Hero2 from "./Hero2.jsx";

const SLIDE_DURATION = 5000;

const heroes = [
  <Hero key="hero" />,
  <InboxHero key="inbox" />,
  <Hero2 key="hero2" />,
];

export default function HeroCarousel() {
  const [currentHero, setCurrentHero] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentHero((prev) => {
        if (prev === heroes.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) {
          // swipe left -> next
          setCurrentHero((prev) => (prev + 1) % heroes.length);
        } else {
          // swipe right -> prev
          setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
        }
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Hero slides */}
      <div className="relative min-h-[660px] sm:min-h-[620px] w-full lg:min-h-[600px]">
        {heroes.map((hero, index) => (
          <div
            key={index}
            aria-hidden={currentHero !== index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${
              currentHero === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="h-full [&>section]:flex [&>section]:h-full [&>section]:min-h-[660px] sm:[&>section]:min-h-[620px] [&>section]:items-center lg:[&>section]:min-h-[600px]">
              {hero}
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroes.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentHero(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 overflow-hidden rounded-full transition-all duration-300 ${
              currentHero === index
                ? "w-8 bg-brand-green-light"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {currentHero === index && (
              <span
                className={`block h-full origin-left bg-brand-green ${
                  isPaused
                    ? ""
                    : "animate-[progress_5s_linear_forwards]"
                }`}
                style={{
                  width: isPaused ? "100%" : undefined,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
