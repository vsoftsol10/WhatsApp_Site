import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Check,
  Play,
  Send,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Illustration (built with HTML/CSS so it stays sharp + animatable)   */
/* ------------------------------------------------------------------ */

const STAGE_W = 650;
const STAGE_H = 425;

const chats = [
  { initial: "P", name: "Priya Sharma", msg: "Message sent", time: "9:41", bg: "#f4a3a8" },
  { initial: "R", name: "Rahul Kumar", msg: "Message sent", time: "9:42", bg: "#9cc4f2" },
  { initial: "A", name: "Anjali Verma", msg: "Looks amazing! 🔥", time: "9:44", bg: "#f2b98a" },
  { initial: "V", name: "Vikram Singh", msg: "Can I get more details?", time: "9:43", bg: "#b8a4ea" },
];

function Phone() {
  return (
    <div
      className="cta-float"
      style={{
        position: "absolute",
        left: 205,
        top: 38,
        width: 180,
        height: 372,
        zIndex: 2,
        "--r": "9deg",
        "--d": "0.6s",
      }}
    >
      {/* bezel */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[30px] bg-[#0e6b45]"
        style={{ boxShadow: "0 24px 40px -14px rgba(10,80,50,0.45)", padding: 6 }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-1.5 z-10 h-[11px] w-[54px] -translate-x-1/2 rounded-full bg-[#0b3d28]" />

          {/* header */}
          <div className="flex items-center gap-2 bg-[#0e6b45] px-3 pb-2.5 pt-7 text-white">
            <span className="absolute left-3.5 top-1.5 text-[8px] font-bold">9:41</span>
            <div className="h-5 w-5 rounded-full bg-white" />
            <span className="text-[9px] font-semibold">Sunrise Retail Co.</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#5cf29a]" />
          </div>

          {/* promo bubble */}
          <div className="mx-2.5 mt-2.5 rounded-lg bg-[#dff5e8] px-2.5 py-1.5">
            <p className="text-[8px] font-bold leading-tight text-[#0d4a2a]">
              Special <br />
              Summer Sale!
            </p>
            <p className="mt-1 text-[7px] leading-tight text-gray-500">
              Hi there! 👋 <br /> Get up to 50% OFF on your
            </p>
          </div>

          {/* chat list */}
          <div className="mt-2 space-y-1.5 px-2.5">
            {chats.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-1.5 rounded-lg bg-white px-1.5 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
                  style={{ background: c.bg }}
                >
                  {c.initial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8px] font-bold leading-tight text-gray-800">
                    {c.name}
                  </p>
                  <p className="truncate text-[6.5px] leading-tight text-gray-400">{c.msg}</p>
                </div>
                <div className="text-right">
                  <p className="text-[6px] text-gray-400">{c.time}</p>
                  <Check size={8} strokeWidth={3} className="ml-auto text-[#1fab5c]" />
                </div>
              </div>
            ))}
          </div>

          {/* input */}
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
            <span className="text-[6.5px] text-gray-400">Type a message...</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1fab5c] text-white">
              <Send size={7} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration() {
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
    <div ref={wrapRef} className="w-full min-w-0 overflow-hidden">
      <div className="mx-auto" style={{ width: STAGE_W * scale, height: STAGE_H * scale }}>
        <div
          className="relative origin-top-left"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
        >
          {/* pale blob behind the phone */}
          <div
            className="absolute rounded-full"
            style={{
              left: 100,
              top: 50,
              width: 520,
              height: 320,
              background: "rgba(255,255,255,0.35)",
            }}
          />

          {/* sparkles */}
          {[
            { left: 130, top: 48, rot: 20 },
            { left: 118, top: 205, rot: -20 },
          ].map((s, i) => (
            <svg
              key={i}
              className="absolute"
              style={{ left: s.left, top: s.top, transform: `rotate(${s.rot}deg)` }}
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
              stroke="#1fab5c"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M13 3v6M4 10l5 3M22 6l-5 4" />
            </svg>
          ))}

          {/* dashed path + paper plane */}
          <svg
            className="absolute"
            style={{ left: 440, top: 0 }}
            width="200"
            height="110"
            viewBox="0 0 200 110"
            fill="none"
          >
            <path
              d="M0 82 Q 55 66 100 32"
              stroke="#1fab5c"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="cta-plane absolute"
            style={{ left: 520, top: 8 }}
            width="46"
            height="40"
            viewBox="0 0 46 40"
          >
            <path d="M44 2 2 17l15 6 4 15 8-10 11 8z" fill="#10893f" />
            <path d="M44 2 17 23l4 15 8-10z" fill="#0b6b34" />
          </svg>

          {/* WhatsApp tile */}
          <div
            className="cta-float absolute flex items-center justify-center rounded-[28px]"
            style={{
              left: 108,
              top: 245,
              width: 120,
              height: 120,
              "--r": "-12deg",
              "--d": "1.2s",
              zIndex: 4,
              background: "linear-gradient(145deg,#43dd85,#17a557)",
              boxShadow: "0 22px 32px -12px rgba(16,137,63,0.5)",
            }}
          >
            <svg width="78" height="78" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2.4a9.5 9.5 0 0 0-8.2 14.3L2.4 21.6l5-1.3A9.5 9.5 0 1 0 12 2.4Z" />
              <path
                d="M16.7 15.1c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.2-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.4l-.4.5c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.8 1 .9 1.8 1.1 2.1 1.3.3.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l1.8.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z"
                fill="#1fab5c"
              />
            </svg>
          </div>

          <Phone />

          {/* Campaign Sending */}
          <div
            className="cta-float absolute rounded-2xl bg-white px-4 py-3.5"
            style={{
              left: 79,
              top: 76,
              width: 222,
              "--r": "-7deg",
              "--d": "0.2s",
              boxShadow: "0 14px 28px -10px rgba(15,70,45,0.25)",
              zIndex: 5,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#139d52] text-white">
                <Send size={16} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[13px] font-bold leading-tight text-gray-900">
                  Campaign Sending...
                </p>
                <p className="mt-0.5 text-[10px] text-gray-500">Sending to 2,436 customers</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[68%] rounded-full bg-[#139d52]" />
              </div>
              <span className="text-[11px] font-bold text-gray-800">68%</span>
            </div>
          </div>

          {/* Campaign Complete */}
          <div
            className="cta-float absolute flex items-center gap-3 rounded-2xl bg-white px-4"
            style={{
              left: 432,
              top: 72,
              width: 220,
              height: 54,
              "--r": "0deg",
              "--d": "0.9s",
              boxShadow: "0 14px 28px -10px rgba(15,70,45,0.25)",
              zIndex: 5,
            }}
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#139d52] text-white">
              <Check size={17} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[12px] font-bold leading-tight text-gray-900">Campaign Complete</p>
              <p className="text-[8.5px] text-gray-500">2,436 messages sent successfully</p>
            </div>
          </div>

          {/* Total Recipients */}
          <div
            className="cta-float absolute rounded-2xl bg-white px-4 py-3.5"
            style={{
              left: 432,
              top: 182,
              width: 208,
              "--r": "0deg",
              "--d": "1.5s",
              boxShadow: "0 14px 28px -10px rgba(15,70,45,0.25)",
              zIndex: 5,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#139d52] text-white">
                <Users size={17} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[9.5px] leading-tight text-gray-500">Total Recipients</p>
                <p className="text-[21px] font-bold leading-tight text-gray-900">2,436</p>
              </div>
            </div>
            <div className="mt-2.5 space-y-[5px]">
              {[
                ["Sent", "2,280", "#139d52"],
                ["Delivered", "2,198", "#4cc486"],
                ["Read", "1,542", "#a3d94a"],
                ["Failed", "48", "#ef4444"],
              ].map(([label, value, color]) => (
                <div key={label} className="flex items-center justify-between text-[10px]">
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                    {label}
                  </span>
                  <span className="font-bold text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-16">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#bfe6cf] px-4 py-8 sm:px-10 lg:grid-cols-[46%_54%] lg:gap-6 lg:px-12 lg:py-12"
        style={{ background: "linear-gradient(120deg,#cdeedb 0%,#e0f5e8 45%,#eaf8ef 100%)" }}
      >
        <Illustration />

        <div className="min-w-0 text-center lg:pl-6 lg:text-left">
          <h2 className="text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.15] sm:leading-[1.12] tracking-[-1px] text-[#0f1f17]">
            Stop losing leads in <span className="text-[#12894f]">WhatsApp.</span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-[520px] text-[15px] sm:text-[17px] leading-7 text-gray-600 lg:mx-0 mx-auto">
            Bring conversations, customers, leads, and follow-ups into one simple CRM.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:gap-4">
            <Link
              to="/pricing"
              className="hover-lift inline-flex h-[50px] sm:h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#12894f] px-6 sm:px-7 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_10px_22px_-8px_rgba(18,137,79,0.7)] hover:bg-[#0f7a46]"
            >
              <Play size={15} fill="currentColor" strokeWidth={0} />
              Get Started Free
              <ArrowRight size={18} strokeWidth={2.3} />
            </Link>

            <Link
              to="/demo"
              className="hover-lift inline-flex h-[50px] sm:h-[52px] items-center justify-center gap-2.5 rounded-full border border-[#12894f] bg-white px-6 sm:px-7 text-[15px] sm:text-[16px] font-semibold text-[#12894f] hover:bg-[#f1fbf5]"
            >
              <Calendar size={18} strokeWidth={2} />
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
