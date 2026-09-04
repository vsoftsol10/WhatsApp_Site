

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
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

        <Link
          to="/"
          className="flex items-center gap-2.5"
        >
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-[10px]
              bg-brand-green
            "
          >
            <img
              src="/images/whatsapp-icon.svg"
              alt="WhatsApp"
              className="h-6 w-6"
            />
          </span>

          <span
            className="
              text-[20px]
              font-bold
              tracking-[-0.3px]
              text-gray-900
            "
          >
            Whatsapp{" "}
            <span className="text-brand-green">
              CRM
            </span>
          </span>
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


          {/* PRICING → SEPARATE PAGE */}
          <li>
            <Link
              to="/pricing"
              className="
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

