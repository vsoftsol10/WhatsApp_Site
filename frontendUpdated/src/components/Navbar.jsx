import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative w-full border-b border-gray-100 bg-white">
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-4
          py-4
          sm:px-6
          sm:py-5
          lg:px-6
          lg:py-6
        "
      >
        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center">
          <img
            src="/images/vatup-logo-light.png"
            alt="Vatup CRM"
            className="h-10 w-auto sm:h-12 lg:h-16"
          />
        </Link>


        {/* ================================================= */}
        {/* CENTER NAVIGATION - DESKTOP */}
        {/* ================================================= */}

        <ul
          className="
            hidden
            items-center
            gap-8
            lg:gap-11
            md:flex
          "
        >

          {/* FEATURES */}
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


          {/* PRICING */}
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
        {/* RIGHT ACTION: CTA & MOBILE MENU BUTTON */}
        {/* ================================================= */}

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/pricing"
            className="
              inline-flex
              h-[42px]
              items-center
              justify-center
              rounded-[11px]
              bg-brand-yellow
              px-4
              text-[14px]
              font-semibold
              text-gray-900
              shadow-md
              shadow-brand-yellow/20
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
              sm:h-[50px]
              sm:min-w-[145px]
              sm:rounded-[13px]
              sm:px-8
              sm:text-[16px]
              sm:hover:-translate-y-1
            "
          >
            Start a trial
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              text-gray-700
              transition-colors
              duration-200
              hover:bg-gray-100
              md:hidden
            "
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </nav>

      {/* ================================================= */}
      {/* MOBILE MENU DROPDOWN */}
      {/* ================================================= */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg md:hidden animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/#features"
                onClick={closeMenu}
                className="
                  block
                  py-2
                  text-[16px]
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:text-brand-green
                "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#how-it-works"
                onClick={closeMenu}
                className="
                  block
                  py-2
                  text-[16px]
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:text-brand-green
                "
              >
                How It Works
              </a>
            </li>
            <li>
              <Link
                to="/demo"
                onClick={closeMenu}
                className="
                  block
                  py-2
                  text-[16px]
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:text-brand-green
                "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                onClick={closeMenu}
                className="
                  block
                  py-2
                  text-[16px]
                  font-medium
                  text-gray-800
                  transition-colors
                  hover:text-brand-green
                "
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
