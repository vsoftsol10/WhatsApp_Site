import { useEffect, useRef, useState } from "react";
import {
  Clock,
  CreditCard,
  Globe,
  HeartHandshake,
  Megaphone,
  MessageSquareText,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Left column content                                                 */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    title: "More Leads Into Sales",
    description: "Follow up with prospects and reduce missed opportunities.",
    icon: TrendingUp,
    tile: "linear-gradient(135deg,#34d67f,#17b35c)",
  },
  {
    title: "Save Time Every Day",
    description: "Reduce repetitive manual work and simplify team workflows.",
    icon: Clock,
    tile: "linear-gradient(135deg,#2fd1b0,#12a58a)",
  },
  {
    title: "One Place for Every Conversation",
    description: "Give your team better visibility into customer interactions.",
    icon: Users,
    tile: "linear-gradient(135deg,#b6ec3c,#6cc92a)",
  },
  {
    title: "Build Better Customer Relationships",
    description: "Deliver timely replies and more consistent customer support.",
    icon: HeartHandshake,
    tile: "linear-gradient(135deg,#1f9d5a,#0e6b3a)",
  },
];

/* ------------------------------------------------------------------ */
/* Right column: hub diagram                                           */
/* ------------------------------------------------------------------ */

function FacebookGlyph() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.45-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.15-2.4-.15-2.5 0-4.1 1.5-4.1 4.2v2.45H7.6v3.3h2.8V22h3.1Z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg
      width="38"
      height="38"
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

// Stage is a 600 x 570 canvas that is scaled to fit its column.
const STAGE_W = 600;
const STAGE_H = 570;
const HUB = { x: 300, y: 285 };

// x / y are offsets of the icon-tile centre from the hub centre.
const nodes = [
  {
    key: "broadcast",
    label: "Broadcast",
    dx: 0,
    dy: -246,
    line: "#e5483a",
    tile: "linear-gradient(135deg,#ff8a4c,#ef5a24)",
    icon: <Megaphone size={32} strokeWidth={2} />,
    delay: "0s",
  },
  {
    key: "facebook",
    label: "Facebook",
    dx: 234,
    dy: -131,
    line: "#2f6fe4",
    tile: "linear-gradient(135deg,#3b8dff,#1264e0)",
    icon: <FacebookGlyph />,
    delay: "0.5s",
  },
  {
    key: "instagram",
    label: "Instagram",
    dx: 234,
    dy: 105,
    line: "#c2185b",
    tile: "linear-gradient(45deg,#f9a03f,#e1306c 55%,#7b2fb5)",
    icon: <InstagramGlyph />,
    delay: "1s",
  },
  {
    key: "billing",
    label: "Billing Software",
    dx: 0,
    dy: 191,
    line: "#e0a100",
    tile: "linear-gradient(135deg,#ffd45a,#f2b01e)",
    icon: <CreditCard size={32} strokeWidth={2} />,
    delay: "1.5s",
  },
  {
    key: "automation",
    label: "Automation",
    dx: -234,
    dy: 104,
    line: "#0f9b7a",
    tile: "linear-gradient(135deg,#43e0bd,#14ae92)",
    icon: <Settings size={32} strokeWidth={2} />,
    delay: "2s",
  },
  {
    key: "website",
    label: "Website",
    dx: -234,
    dy: -128,
    line: "#7c3aed",
    tile: "linear-gradient(135deg,#a77bff,#7d44e6)",
    icon: <Globe size={32} strokeWidth={2} />,
    delay: "2.5s",
  },
];

function HubDiagram() {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / STAGE_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="mx-auto w-full min-w-0 max-w-[560px] overflow-hidden">
      <div
        className="mx-auto"
        style={{ width: STAGE_W * scale, height: STAGE_H * scale }}
      >
        <div
          className="relative origin-top-left"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `scale(${scale})`,
          }}
        >
          {/* soft green glow behind everything */}
          <div
            className="absolute rounded-full"
            style={{
              left: HUB.x - 270,
              top: HUB.y - 270,
              width: 540,
              height: 540,
              background:
                "radial-gradient(circle, rgba(34,212,111,0.20) 0%, rgba(34,212,111,0.08) 45%, rgba(34,212,111,0) 70%)",
            }}
          />

          {/* dashed connector lines (flow toward the hub) */}
          <svg
            className="absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
          >
            {nodes.map((n) => (
              <line
                key={n.key}
                x1={HUB.x + n.dx}
                y1={HUB.y + n.dy}
                x2={HUB.x}
                y2={HUB.y}
                stroke={n.line}
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeLinecap="round"
                className="crm-line-flow"
              />
            ))}
          </svg>

          {/* hub halo rings */}
          <div
            className="crm-hub-halo absolute rounded-full"
            style={{
              left: HUB.x - 140,
              top: HUB.y - 140,
              width: 280,
              height: 280,
              background: "rgba(34,212,111,0.14)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              left: HUB.x - 125,
              top: HUB.y - 125,
              width: 250,
              height: 250,
              background: "rgba(34,212,111,0.22)",
            }}
          />

          {/* hub */}
          <div
            className="absolute flex flex-col items-center justify-center gap-2 rounded-full text-white"
            style={{
              left: HUB.x - 107,
              top: HUB.y - 107,
              width: 214,
              height: 214,
              background: "linear-gradient(145deg,#2ae27c,#16b657)",
              boxShadow:
                "0 20px 45px -12px rgba(22,182,87,0.55), inset 0 2px 0 rgba(255,255,255,0.25)",
            }}
          >
            <MessageSquareText size={46} strokeWidth={1.9} />
            <span className="text-[19px] font-semibold leading-tight">WhatsApp CRM</span>
          </div>

          {/* orbiting nodes */}
          {nodes.map((n) => (
            <div
              key={n.key}
              className="crm-node-float absolute flex flex-col items-center"
              style={{
                left: HUB.x + n.dx - 60,
                top: HUB.y + n.dy - 36,
                width: 120,
                animationDelay: n.delay,
              }}
            >
              <div
                className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] text-white"
                style={{
                  background: n.tile,
                  boxShadow: "0 12px 24px -8px rgba(15,60,40,0.35)",
                }}
              >
                {n.icon}
              </div>
              <span className="mt-2 whitespace-nowrap text-[15px] font-medium text-gray-900">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

function CoreBenefits() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading — shared section styles */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-heading">Turn Conversations Into Business Growth</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] sm:text-[16px] leading-7 text-gray-500">
            Everything works together to help your team sell smarter and serve faster.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10">
          {/* LEFT: benefits panel + banner */}
          <div className="mx-auto w-full min-w-0 max-w-[620px] lg:max-w-none">
            <div className="rounded-3xl bg-[#eef8f2] px-5 py-2 sm:px-8 sm:py-3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className={`flex items-center gap-4 py-5 sm:gap-5 sm:py-6 ${
                      i > 0 ? "border-t border-[#d9ece1]" : ""
                    }`}
                  >
                    <div
                      className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
                      style={{ background: b.tile }}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[17px] sm:text-[19px] font-semibold text-[#0d4a2a]">
                        {b.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] leading-6 text-gray-500">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-3xl bg-[#e3f4ea] px-5 py-6 sm:px-6 sm:py-7 text-center">
              <h3 className="mb-1.5 text-[18px] sm:text-[20px] font-semibold text-[#0d4a2a]">
                Less Manual Work. More Meaningful Growth.
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-6 text-gray-500">
                Bring your customer communication into one connected workflow.
              </p>
            </div>
          </div>

          {/* RIGHT: animated hub */}
          <HubDiagram />
        </div>
      </div>
    </section>
  );
}

export default CoreBenefits;
