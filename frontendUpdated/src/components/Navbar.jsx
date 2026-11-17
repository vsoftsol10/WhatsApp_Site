// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   // Adds a soft shadow once the page has scrolled, so the fixed bar
//   // separates cleanly from the content passing underneath it.
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
//         scrolled
//           ? "border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
//           : "border-gray-100"
//       }`}
//     >
//       <nav
//         className="
//           mx-auto
//           flex
//           max-w-7xl
//           items-center
//           justify-between
//           px-4
//           py-5
//           sm:px-6
//           lg:px-6
//           lg:py-6
//         "
//       >
//         {/* ================================================= */}
//         {/* LOGO */}
//         {/* ================================================= */}

//         <Link to="/" className="flex shrink-0 items-center">
//           <img
//             src="/images/vatup-logo-light.png"
//             alt="Vatup CRM"
//             className="h-12 w-auto sm:h-14 lg:h-16"
//           />
//         </Link>


//         {/* ================================================= */}
//         {/* CENTER NAVIGATION */}
//         {/* ================================================= */}

//         <ul
//           className="
//             hidden
//             items-center
//             gap-11
//             md:flex
//           "
//         >

//           {/* FEATURES → WHO IT'S FOR */}
//           <li>
//             <a
//               href="/#features"
//               className="
//                 link-underline
//                 text-[16px]
//                 font-medium
//                 text-gray-700
//                 transition-colors
//                 duration-200
//                 hover:text-brand-green
//               "
//             >
//               Features
//             </a>
//           </li>


//           {/* HOW IT WORKS */}
//           <li>
//             <a
//               href="/#how-it-works"
//               className="
//                 link-underline
//                 text-[16px]
//                 font-medium
//                 text-gray-700
//                 transition-colors
//                 duration-200
//                 hover:text-brand-green
//               "
//             >
//               How It Works
//             </a>
//           </li>

//           <li>
//             <Link
//               to="/demo"
//               className="
//                 link-underline
//                 text-[16px]
//                 font-medium
//                 text-gray-700
//                 transition-colors
//                 duration-200
//                 hover:text-brand-green
//               "
//             >
//               Contact
//             </Link>
//           </li>


//           {/* PRICING → SEPARATE PAGE */}
//           <li>
//             <Link
//               to="/pricing"
//               className="
//                 link-underline
//                 text-[16px]
//                 font-medium
//                 text-gray-700
//                 transition-colors
//                 duration-200
//                 hover:text-brand-green
//               "
//             >
//               Pricing
//             </Link>
//           </li>

//         </ul>


//         {/* ================================================= */}
//         {/* CTA */}
//         {/* ================================================= */}

//         <a
//           href="/pricing"
//           className="
//             inline-flex
//             h-[50px]
//             min-w-[145px]
//             items-center
//             justify-center
//             rounded-[13px]
//             bg-brand-yellow
//             px-8
//             text-[16px]
//             font-semibold
//             text-gray-900
//             shadow-md
//             shadow-brand-yellow/20
//             transition-all
//             duration-200
//             hover:-translate-y-1
//             hover:shadow-lg
//           "
//         >
//           Start a trial
//         </a>

//       </nav>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/#features", type: "anchor" },
  { label: "How It Works", href: "/#how-it-works", type: "anchor" },
  { label: "Contact", href: "/demo", type: "route" },
  { label: "Pricing", href: "/pricing", type: "route" },
];

const desktopLinkClass =
  "link-underline text-[16px] font-medium text-gray-700 transition-colors duration-200 hover:text-brand-green";

export default function Navbar() {
  // Adds a soft shadow once the page has scrolled, so the fixed bar
  // separates cleanly from the content passing underneath it.
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route / hash changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close on Escape, and lock page scroll while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // If the viewport grows to desktop size, make sure the menu is closed
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled || open
          ? "border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
          : "border-gray-100"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-6 lg:py-6">
        {/* LOGO */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src="/images/vatup-logo-light.png"
            alt="Vatup CRM"
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </Link>

        {/* CENTER NAVIGATION (desktop / tablet) */}
        <ul className="hidden items-center gap-11 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                <Link to={item.href} className={desktopLinkClass}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className={desktopLinkClass}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* CTA (desktop / tablet) */}
          <a
            href="/pricing"
            className="hidden h-[50px] min-w-[145px] items-center justify-center rounded-[13px] bg-brand-yellow px-8 text-[16px] font-semibold text-gray-900 shadow-md shadow-brand-yellow/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg lg:inline-flex"
          >
            Start a trial
          </a>

          {/* HAMBURGER (mobile only, right side) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-800 transition-colors hover:bg-gray-100 active:bg-gray-200 lg:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

    </header>

    {/* BACKDROP */}
    <div
      onClick={() => setOpen(false)}
      aria-hidden="true"
      className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />

    {/* RIGHT SIDE DRAWER */}
    <aside
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      aria-hidden={!open}
      className={`fixed right-0 top-0 z-[70] flex h-full w-[80%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <img
          src="/images/vatup-logo-light.png"
          alt="Vatup CRM"
          className="h-10 w-auto"
        />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-800 transition-colors hover:bg-gray-100 active:bg-gray-200"
        >
          <X size={26} />
        </button>
      </div>

      <ul className="flex flex-1 flex-col overflow-y-auto px-5 py-2">
        {NAV_LINKS.map((item) => (
          <li key={item.label} className="border-b border-gray-100 last:border-0">
            {item.type === "route" ? (
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[17px] font-medium text-gray-800 hover:text-brand-green"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[17px] font-medium text-gray-800 hover:text-brand-green"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-100 p-5">
        <a
          href="/pricing"
          onClick={() => setOpen(false)}
          className="flex h-[50px] w-full items-center justify-center rounded-[13px] bg-brand-yellow text-[16px] font-semibold text-gray-900 shadow-md shadow-brand-yellow/20"
        >
          Start a trial
        </a>
      </div>
    </aside>
    </>
  );
}