import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarClock,
  Globe,
  MousePointerClick,
  Receipt,
  Send,
  ShoppingCart,
} from "lucide-react";

/* lucide-react no longer ships brand icons, so WhatsApp / Facebook /
   Instagram are small inline SVGs. */
function WhatsAppGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.94 9.94 0 1 0 12.04 2Zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.07-1.17.1-1.9-.12a17 17 0 0 1-1.72-.64c-3-1.3-4.95-4.32-5.1-4.52-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.52.25.6.85 2.07.92 2.22.08.15.13.32.03.52-.1.2-.15.32-.3.5l-.45.52c-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.05 1.13 1 2.1 1.32 2.4 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.82 2.02.97.3.15.5.22.57.35.07.12.07.72-.18 1.4Z" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.45-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.15-2.4-.15-2.5 0-4.1 1.5-4.1 4.2v2.45H7.6v3.3h2.8V22h3.1Z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    title: "CTA Button",
    description:
      "Add a WhatsApp button to your website so visitors can start a conversation instantly, and every enquiry lands in your CRM.",
    icon: <MousePointerClick size={24} strokeWidth={2} />,
    accent: "#f5a623",
    tile: "linear-gradient(135deg,#ffc83d,#f5a623)",
  },
  {
    title: "Website",
    description:
      "Turn website forms and visitors into leads automatically. New enquiries sync straight into your CRM, ready for quick follow-up.",
    icon: <Globe size={24} strokeWidth={2} />,
    accent: "#4a8cf0",
    tile: "linear-gradient(135deg,#6aa6ff,#3b7be8)",
  },
  {
    title: "E-commerce",
    description:
      "Connect your online store to share order confirmations, shipping updates and abandoned-cart nudges with customers on WhatsApp.",
    icon: <ShoppingCart size={24} strokeWidth={2} />,
    accent: "#9b5de5",
    tile: "linear-gradient(135deg,#b583f2,#8a4fe0)",
  },
  {
    title: "Billing Software",
    description:
      "Send invoices, payment links and due-date reminders over WhatsApp, so customers pay faster and your team chases less.",
    icon: <Receipt size={24} strokeWidth={2} />,
    accent: "#1fb89a",
    tile: "linear-gradient(135deg,#3fd3b0,#16a98c)",
  },
  {
    title: "WhatsApp",
    description:
      "Connect your WhatsApp number and handle every customer conversation from one shared inbox, with chat history and assignments for your team.",
    icon: <WhatsAppGlyph />,
    accent: "#25d366",
    tile: "linear-gradient(135deg,#3ee07d,#1fb956)",
  },
  {
    title: "Facebook",
    description:
      "Bring Facebook leads and Messenger enquiries into one place, so no lead is missed and every reply is tracked.",
    icon: <FacebookGlyph />,
    accent: "#1877f2",
    tile: "linear-gradient(135deg,#3b8dff,#1264e0)",
  },
  {
    title: "Instagram",
    description:
      "Route Instagram DMs and story replies to your team, and move social conversations into WhatsApp to close them faster.",
    icon: <InstagramGlyph />,
    accent: "#e1306c",
    tile: "linear-gradient(45deg,#f9a03f,#e1306c 55%,#8a3ab9)",
  },
  {
    title: "Campaigns",
    description:
      "Create and send bulk WhatsApp campaigns to targeted customer groups in a few clicks, with templates, personalization and delivery tracking built in.",
    icon: <Send size={23} strokeWidth={2} />,
    accent: "#f26b3a",
    tile: "linear-gradient(135deg,#ff9a5c,#f0562a)",
  },
  {
    title: "Message Scheduler",
    description:
      "Plan offers, reminders and follow-ups ahead of time. Pick the date and time and messages go out automatically, even when your team is offline.",
    icon: <CalendarClock size={24} strokeWidth={2} />,
    accent: "#e83e8c",
    tile: "linear-gradient(135deg,#f46fae,#e0287a)",
  },
];

const AUTOPLAY_MS = 2400; // how long each card stays in focus
const TRANSITION = "700ms cubic-bezier(0.22, 1, 0.36, 1)";

/* Per-distance look of the coverflow: how far a card sits from the
   centre, how much it shrinks, fades, blurs and tilts. */
const LOOK = {
  desktop: {
    x: [0, 290, 445, 580, 680],
    scale: [1, 0.8, 0.7, 0.62, 0.55],
    opacity: [1, 1, 0.65, 0.35, 0],
    blur: [0, 0, 1, 2, 3],
    tilt: [0, 10, 14, 16, 18],
  },
  mobile: {
    x: [0, 215, 300, 300, 300],
    scale: [1, 0.78, 0.65, 0.65, 0.65],
    opacity: [1, 0.55, 0, 0, 0],
    blur: [0, 1, 2, 2, 2],
    tilt: [0, 12, 16, 16, 16],
  },
};

function FeaturesCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef(null);
  const count = features.length;

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 639px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setIsMobile(mqMobile.matches);
      setReduceMotion(mqMotion.matches);
    };
    sync();
    mqMobile.addEventListener("change", sync);
    mqMotion.addEventListener("change", sync);
    return () => {
      mqMobile.removeEventListener("change", sync);
      mqMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, count]);

  const look = isMobile ? LOOK.mobile : LOOK.desktop;
  const cardW = isMobile ? 280 : 340;
  const cardH = isMobile ? 330 : 330;

  const go = (delta) => setActive((i) => (i + delta + count) % count);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <section id="features" className="w-full overflow-hidden bg-[#f8f8f8] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading — same shared classes as the other sections */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="section-eyebrow">Powerful Features</p>
          <h2 className="section-heading">Everything You Need to Grow on WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] sm:text-[16px] leading-7 text-gray-500">
            One platform to manage campaigns, conversations and integrations.
          </p>
        </div>

        {/* Coverflow */}
        <div
          className="relative mx-auto w-full max-w-full select-none"
          style={{ height: cardH + 70, perspective: 1400 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Platform features"
          tabIndex={0}
        >
          {features.map((f, i) => {
            // shortest signed distance on the circular list
            let d = i - active;
            if (d > count / 2) d -= count;
            if (d < -count / 2) d += count;

            const abs = Math.min(Math.abs(d), 4);
            const dir = d === 0 ? 0 : d > 0 ? 1 : -1;
            const isActive = d === 0;

            const transform = `translate(-50%, -50%) translateX(${dir * look.x[abs]}px) rotateY(${-dir * look.tilt[abs]
              }deg) scale(${look.scale[abs]})`;

            return (
              <div
                key={f.title}
                onClick={() => !isActive && setActive(i)}
                aria-hidden={!isActive}
                className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center rounded-[22px] bg-white px-6 sm:px-7 text-center max-w-[calc(100vw-32px)]"
                style={{
                  width: cardW,
                  height: cardH,
                  transform,
                  opacity: look.opacity[abs],
                  filter: look.blur[abs] ? `blur(${look.blur[abs]}px)` : "none",
                  zIndex: 10 - abs,
                  cursor: isActive ? "default" : "pointer",
                  pointerEvents: abs > 3 ? "none" : "auto",
                  border: `1.5px solid ${isActive ? f.accent : "#e5e7eb"}`,
                  boxShadow: isActive
                    ? `0 24px 40px -18px ${f.accent}66, 0 6px 18px rgba(0,0,0,0.06)`
                    : "0 6px 16px rgba(0,0,0,0.05)",
                  transition: `transform ${TRANSITION}, opacity ${TRANSITION}, filter ${TRANSITION}, border-color ${TRANSITION}, box-shadow ${TRANSITION}`,
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md"
                  style={{ background: f.tile }}
                >
                  {f.icon}
                </div>

                <h3 className="mb-2 text-[19px] sm:text-[20px] font-semibold text-gray-950">{f.title}</h3>

                <p className="text-[14px] sm:text-[15px] leading-6 text-gray-500">{f.description}</p>

                <Link
                  to="/pricing"
                  tabIndex={isActive ? 0 : -1}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1fc96a] to-[#16a652] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(31,171,92,0.6)] hover:brightness-105"
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    transition: `opacity ${TRANSITION}`,
                  }}
                >
                  Try now <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesCarousel;
