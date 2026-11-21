
// import {
//   MessageCircle,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUpRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const socialLinks = [
//   {
//     name: "Instagram",
//     href: "https://www.instagram.com/vatup_crm/", // TODO: replace with your Instagram URL
//     icon: (
//       <>
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//       </>
//     ),
//   },
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/VatupCRM", // TODO: replace with your Facebook URL
//     icon: (
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     ),
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/company/thevsoft", // TODO: replace with your LinkedIn URL
//     icon: (
//       <>
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect x="2" y="9" width="4" height="12" />
//         <circle cx="4" cy="4" r="2" />
//       </>
//     ),
//   },
// ];

// function Footer() {
//   return (
//     <footer className="w-full bg-gray-950 text-white">
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
//         {/* Main Footer */}
//         <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:gap-12">

//           {/* Brand */}
//           <div>
//             <a href="#" className="-ml-[3px] inline-flex items-center">
//               <img
//                 src="/images/vatup-logo.png"
//                 alt="Vatup CRM"
//                 className="block h-12 w-auto sm:h-16 lg:h-[72px]"
//               />
//             </a>

//             <p
//               className="
//                 mt-4
//                 sm:mt-5
//                 max-w-[330px]
//                 text-[14px]
//                 sm:text-[15px]
//                 leading-6
//                 sm:leading-7
//                 text-gray-400
//               "
//             >
//               One simple CRM to manage your WhatsApp conversations,
//               leads, customers, and follow-ups in one place.
//             </p>

//             {/* Contact */}
//             <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
//               <div className="flex items-center gap-3 text-[14px] text-gray-400">
//                 <Mail size={17} className="text-brand-green" />
//                 <span>vatupvsoft@gmail.com</span>
//               </div>

//               <div className="flex items-center gap-3 text-[14px] text-gray-400">
//                 <Phone size={17} className="text-brand-green" />
//                 <span>+91 9095422237</span>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="mt-5 sm:mt-6 flex items-center gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.name}
//                   title={social.name}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:text-brand-green"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     {social.icon}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Product */}
//           <div className="md:pt-6">
//             <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
//               Product
//             </h3>

//             <ul className="space-y-3 sm:space-y-3.5">
//               <li>
//                 <a
//                   href="#features"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Features
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#how-it-works"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   How It Works
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/pricing"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Pricing
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/pricing"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Start a Trial
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="md:pt-6">
//             <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
//               Company
//             </h3>

//             <ul className="space-y-3 sm:space-y-3.5">
//               <li>
//                 <a
//                   href="/"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/demo"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Contact
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/privacy-policy"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/terms-and-conditions"
//                   className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
//                 >
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* CTA */}
//           <div className="md:pt-6">
//             <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
//               Get Started
//             </h3>

//             <p className="text-[14px] leading-6 text-gray-400">
//               Ready to bring your WhatsApp conversations into one
//               organized workspace?
//             </p>

//             <a
//               href="/pricing"
//               className="
//                 mt-5
//                 sm:mt-6
//                 inline-flex
//                 h-[48px]
//                 w-full
//                 sm:w-auto
//                 justify-center
//                 items-center
//                 gap-2
//                 rounded-[12px]
//                 bg-brand-yellow
//                 px-6
//                 text-[15px]
//                 font-semibold
//                 text-gray-900
//                 transition-all
//                 duration-200
//                 hover:-translate-y-1
//                 hover:bg-brand-yellow-dark
//                 hover:shadow-lg
//               "
//             >
//               Start a Free Trial
//               <ArrowUpRight size={18} strokeWidth={2.2} />
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-8 sm:my-10 h-px w-full bg-gray-800" />

//         {/* Bottom Footer */}
//         <div
//           className="
//             flex
//             flex-col
//             gap-4
//             text-[13px]
//             text-gray-500
//             md:flex-row
//             md:items-center
//             md:justify-between
//           "
//         >
//           <p>
//             © {new Date().getFullYear()} Vatup CRM. All rights reserved.
//           </p>

//           <div className="flex items-center gap-5">
//             <a
//               href="/privacy-policy"
//               className="transition-colors hover:text-white"
//             >
//               Privacy
//             </a>

//             <a
//               href="/terms-and-conditions"
//               className="transition-colors hover:text-white"
//             >
//               Terms
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import { Mail, Phone, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/vatup_crm/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/VatupCRM",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/thevsoft",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const headingClass =
  "mb-5 text-[17px] font-semibold text-brand-yellow";
const linkClass =
  "text-[14px] text-white transition-colors duration-200 hover:text-brand-yellow";

function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 md:pt-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.5fr] lg:gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center">
              <img
                src="/images/vatup-logo.png"
                alt="Vatup CRM"
                className="block h-12 w-auto sm:h-16 lg:h-[72px]"
              />
            </a>

            <p className="mt-4 max-w-[300px] text-[13px] leading-5 text-white">
              One simple CRM to manage your WhatsApp conversations,
              leads, customers, and follow-ups in one place.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-[13px] text-white">
                <Mail size={18} className="shrink-0 text-brand-yellow" />
                <span>vatupvsoft@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-[13px] text-white">
                <Phone size={18} className="shrink-0 text-brand-yellow" />
                <span>+91 9095422237</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="lg:pt-2">
            <h3 className={headingClass}>Product</h3>

            <ul className="space-y-3.5">
              <li>
                <a href="#features" className={linkClass}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className={linkClass}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="/pricing" className={linkClass}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/pricing" className={linkClass}>
                  Start a Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pt-2">
            <h3 className={headingClass}>Company</h3>

            <ul className="space-y-3.5">
              <li>
                <a href="/" className={linkClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="/demo" className={linkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className={linkClass}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col lg:pt-2">
            <h3 className={headingClass}>Get Started</h3>

            <p className="max-w-[260px] text-[14px] leading-5 text-white">
              Ready to bring your WhatsApp conversations into one
              organized workspace?
            </p>

            <a
              href="/pricing"
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-yellow px-5 text-[14px] font-medium text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow-dark hover:shadow-lg sm:w-auto sm:self-start"
            >
              Start a Free Trial
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </a>

            {/* Social Media */}
            <div className="mt-8 flex items-center gap-3 lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="text-white transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-yellow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gray-700 sm:mt-12" />

        {/* Bottom Footer */}
        <p className="pt-6 text-center text-[13px] text-white">
          © {new Date().getFullYear()} Vatup CRM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

