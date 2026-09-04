import { useEffect, useState } from "react";

import Hero from "./Hero.jsx";
import InboxHero from "./InboxHero.jsx";
import Hero2 from "./Hero2.jsx";

export default function HeroCarousel() {
  const [currentHero, setCurrentHero] = useState(0);

  const heroes = [
    <Hero key="hero" />,
    <InboxHero key="inbox" />,
    <Hero2 key="hero2" />,
  ];

  // Automatically change hero every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroes.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Current Hero */}
      <div
        key={currentHero}
        className="animate-fadeIn"
      >
        {heroes[currentHero]}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {heroes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentHero === index
                ? "w-8 bg-green-500"
                : "w-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}