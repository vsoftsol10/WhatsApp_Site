import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Adds a soft shadow once the page has scrolled, so the fixed bar
  // separates cleanly from the content passing underneath it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
          : "border-gray-100"
      }`}
    >
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-4
          py-5
          sm:px-6
          lg:px-6
          lg:py-6
        "
      >
        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <Link to="/" className="flex shrink-0 items-center">
          <img
            src="/images/vatup-logo-light.png"
            alt="Vatup CRM"
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </Link>


        {/* ================================================= */}
        {/* CENTER NAVIGATION */}
        {/* ================================================= */}

        <ul
          className="
            hidden
            items-center
            gap-11
            md:flex
          "
        >

          {/* FEATURES → WHO IT'S FOR */}
          <li>
            <a
              href="/#features"
              className="
                link-underline
                text-[16px]
                font-medium
                text-gray-700
                transition-colors
                duration-200
                hover:text-brand-green
              "
            >
              Features
            </a>
          </li>


          {/* HOW IT WORKS */}
          <li>
            <a
              href="/#how-it-works"
              className="
                link-underline
                text-[16px]
                font-medium
                text-gray-700
                transition-colors
                duration-200
                hover:text-brand-green
              "
            >
              How It Works
            </a>
          </li>

          <li>
            <Link
              to="/demo"
              className="
                link-underline
                text-[16px]
                font-medium
                text-gray-700
                transition-colors
                duration-200
                hover:text-brand-green
              "
            >
              Contact
            </Link>
          </li>


          {/* PRICING → SEPARATE PAGE */}
          <li>
            <Link
              to="/pricing"
              className="
                link-underline
                text-[16px]
                font-medium
                text-gray-700
                transition-colors
                duration-200
                hover:text-brand-green
              "
            >
              Pricing
            </Link>
          </li>

        </ul>


        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <a
          href="/pricing"
          className="
            inline-flex
            h-[50px]
            min-w-[145px]
            items-center
            justify-center
            rounded-[13px]
            bg-brand-yellow
            px-8
            text-[16px]
            font-semibold
            text-gray-900
            shadow-md
            shadow-brand-yellow/20
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          Start a trial
        </a>

      </nav>
    </header>
  );
}