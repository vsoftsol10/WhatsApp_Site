
// import {
//   MessageSquare,
//   FileText,
//   Send,
//   Files,
// } from "lucide-react";

// const benefits = [
//   {
//     title: "Conversations",
//     description:
//       "All your WhatsApp chats in a single shared inbox — no more switching phones or losing threads.",
//     icon: MessageSquare,
//   },
//   {
//     title: "Organize Leads",
//     description:
//       "Tag, segment and pipeline your contacts so nothing falls through the cracks.",
//     icon: FileText,
//   },
//   {
//     title: "Campaigns",
//     description:
//       "Reach more customers with targeted WhatsApp campaigns. Engage, nurture, and convert leads at scale.",
//     icon: Send,
//   },
//   {
//     title: "Templates",
//     description:
//       "Create ready-to-use WhatsApp messages for every occasion. Save time and communicate faster with consistency.",
//     icon: Files,
//   },
// ];

// function CoreBenefits() {
//   return (
//     <section className="w-full bg-white px-6 py-20">
//       <div className="mx-auto max-w-7xl">

//         {/* ================================================= */}
//         {/* SECTION HEADING */}
//         {/* ================================================= */}

//         <div className="mb-12 text-center">

//           {/* Section Label */}
//           <p className="section-eyebrow">
//             Core Benefits
//           </p>

//           {/* Section Title */}
//           <h2
//             className="section-heading"
//           >
//             Turn conversations into organized customer relationships.
//           </h2>

//         </div>


//         {/* ================================================= */}
//         {/* MAIN CONTENT */}
//         {/* ================================================= */}

//         <div
//           className="
//             grid
//             items-center
//             gap-8
//             lg:grid-cols-[48%_52%]
//             lg:gap-4
//           "
//         >

//           {/* ================================================= */}
//           {/* LEFT SIDE - BENEFITS */}
//           {/* ================================================= */}

//           <div className="space-y-7">

//             {benefits.map((benefit) => {
//               const Icon = benefit.icon;

//               return (
//                 <div
//                   key={benefit.title}
//                   className="flex gap-5"
//                 >

//                   {/* Icon */}
//                   <div
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       flex-shrink-0
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-brand-green-light
//                     "
//                   >
//                     <Icon
//                       size={24}
//                       strokeWidth={2}
//                       className="text-brand-green"
//                     />
//                   </div>


//                   {/* Text */}
//                   <div className="pt-0.5">

//                     {/* Benefit Title */}
//                     <h3
//                       className="
//                         mb-2
//                         text-[19px]
//                         font-semibold
//                         text-gray-950
//                       "
//                     >
//                       {benefit.title}
//                     </h3>


//                     {/* Benefit Description */}
//                     <p
//                       className="
//                         max-w-[440px]
//                         text-[15px]
//                         leading-6
//                         text-gray-500
//                       "
//                     >
//                       {benefit.description}
//                     </p>

//                   </div>

//                 </div>
//               );
//             })}

//           </div>


//           {/* ================================================= */}
//           {/* RIGHT SIDE - IMAGE */}
//           {/* ================================================= */}

//           <div className="flex justify-center lg:justify-end">

//             <div className="relative w-full max-w-[700px]">

//               <img
//                 src="/images/aboutInLanding.png"
//                 alt="WhatsApp CRM integrations"
//                 className="
//                   h-auto
//                   w-full
//                   object-contain
//                   transition-transform
//                   duration-500
//                   hover:scale-[1.02]
//                 "
//               />

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default CoreBenefits;

import { useEffect, useState } from "react";
import {
  MessageSquare,
  FileText,
  Send,
  Files,
  Share2,
  Megaphone,
} from "lucide-react";

/* lucide-react no longer ships brand/logo icons, so Instagram and
   Facebook are small inline SVGs styled to match the other icons. */
function InstagramIcon({ size = 22, strokeWidth = 2, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 22, strokeWidth = 2, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const benefits = [
  {
    title: "Conversations",
    description:
      "All your WhatsApp chats in a single shared inbox — no more switching phones or losing threads.",
    icon: MessageSquare,
  },
  {
    title: "Organize Leads",
    description:
      "Tag, segment and pipeline your contacts so nothing falls through the cracks.",
    icon: FileText,
  },
  {
    title: "Campaigns",
    description:
      "Reach more customers with targeted WhatsApp campaigns. Engage, nurture, and convert leads at scale.",
    icon: Send,
  },
  {
    title: "Templates",
    description:
      "Create ready-to-use WhatsApp messages for every occasion. Save time and communicate faster with consistency.",
    icon: Files,
  },
];

/* ===================================================== */
/* NODES — order controls the clockwise glow sequence     */
/* x / y are percentages inside the 400x400 diagram box   */
/* ===================================================== */

const nodes = [
  { key: "social", label: "Social", icon: Share2, x: 50, y: 8 },
  { key: "whatsapp", label: "WhatsApp", icon: MessageSquare, x: 88, y: 30 },
  { key: "instagram", label: "Instagram", icon: InstagramIcon, x: 88, y: 70 },
  { key: "facebook", label: "Facebook", icon: FacebookIcon, x: 50, y: 92 },
  { key: "webforms", label: "Web Forms", icon: FileText, x: 12, y: 70 },
  { key: "googleads", label: "Google Ads", icon: Megaphone, x: 12, y: 30 },
];

const CYCLE_MS = 1400;

function WhatsAppDiagram() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const activeKey = nodes[activeIndex].key;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <style>{`
        @keyframes crm-pulse-ring {
          0% { transform: scale(0.85); opacity: 0.55; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes crm-node-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45), 0 4px 14px rgba(34, 197, 94, 0.35); }
          50% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0), 0 4px 22px rgba(34, 197, 94, 0.55); }
        }
        .crm-node-active {
          animation: crm-node-glow 1.4s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient pulsing rings behind the center hub */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/20"
          style={{ animation: "crm-pulse-ring 2.4s ease-out infinite" }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/20"
          style={{ animation: "crm-pulse-ring 2.4s ease-out infinite 1.2s" }}
        />
      </div>

      {/* Connector lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {nodes.map((node) => {
          const isActive = node.key === activeKey;
          return (
            <line
              key={node.key}
              x1={200}
              y1={200}
              x2={(node.x / 100) * 400}
              y2={(node.y / 100) * 400}
              stroke={isActive ? "#22c55e" : "#bbe8cc"}
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeDasharray="6 6"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease" }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="
          absolute left-1/2 top-1/2 z-10 flex
          h-36 w-36 -translate-x-1/2 -translate-y-1/2
          flex-col items-center justify-center gap-1
          rounded-full bg-brand-green text-white shadow-lg
        "
      >
        <MessageSquare size={28} strokeWidth={2} />
        <span className="text-[13px] font-semibold leading-tight">
          WhatsApp CRM
        </span>
      </div>

      {/* Orbiting nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isActive = node.key === activeKey;

        return (
          <div
            key={node.key}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div
              className={`
                flex h-12 w-12 items-center justify-center rounded-xl
                transition-all duration-500 ease-out
                ${isActive
                  ? "crm-node-active scale-110 bg-brand-green text-white"
                  : "scale-100 bg-white text-gray-500 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"}
              `}
            >
              <Icon size={22} strokeWidth={2} />
            </div>
            <span
              className={`
                text-[12px] transition-colors duration-500
                ${isActive ? "font-medium text-gray-900" : "text-gray-400"}
              `}
            >
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function CoreBenefits() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <div className="mb-12 text-center">
          <p className="section-eyebrow">Core Benefits</p>
          <h2 className="section-heading">
            Turn conversations into organized customer relationships.
          </h2>
        </div>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[48%_52%]
            lg:gap-4
          "
        >
          {/* ================================================= */}
          {/* LEFT SIDE - BENEFITS */}
          {/* ================================================= */}

          <div className="space-y-7">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex gap-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-green-light
                    "
                  >
                    <Icon size={24} strokeWidth={2} className="text-brand-green" />
                  </div>

                  <div className="pt-0.5">
                    <h3 className="mb-2 text-[19px] font-semibold text-gray-950">
                      {benefit.title}
                    </h3>

                    <p className="max-w-[440px] text-[15px] leading-6 text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE - ANIMATED DIAGRAM (replaces static image) */}
          {/* ================================================= */}

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px]">
              <WhatsAppDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreBenefits;
