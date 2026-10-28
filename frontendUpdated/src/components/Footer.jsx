import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:gap-12">

          {/* Brand */}
          <div>
            <a href="#" className="-ml-[3px] inline-flex items-center">
              <img
                src="/images/vatup-logo.png"
                alt="Vatup CRM"
                className="block h-12 w-auto sm:h-16 lg:h-[72px]"
              />
            </a>

            <p
              className="
                mt-4
                sm:mt-5
                max-w-[330px]
                text-[14px]
                sm:text-[15px]
                leading-6
                sm:leading-7
                text-gray-400
              "
            >
              One simple CRM to manage your WhatsApp conversations,
              leads, customers, and follow-ups in one place.
            </p>

            {/* Contact */}
            <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3 text-[14px] text-gray-400">
                <Mail size={17} className="text-brand-green" />
                <span>vatupvsoft@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-[14px] text-gray-400">
                <Phone size={17} className="text-brand-green" />
                <span>+91 9095422237</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="md:pt-6">
            <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 sm:space-y-3.5">
              <li>
                <a
                  href="#features"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#trial"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Start a Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:pt-6">
            <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 sm:space-y-3.5">
              <li>
                <a
                  href="#about"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/demo"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-[14px] text-gray-400 transition-colors hover:text-brand-green"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:pt-6">
            <h3 className="mb-4 sm:mb-5 text-[16px] font-semibold text-white">
              Get Started
            </h3>

            <p className="text-[14px] leading-6 text-gray-400">
              Ready to bring your WhatsApp conversations into one
              organized workspace?
            </p>

            <a
              href="/pricing"
              className="
                mt-5
                sm:mt-6
                inline-flex
                h-[48px]
                w-full
                sm:w-auto
                justify-center
                items-center
                gap-2
                rounded-[12px]
                bg-brand-yellow
                px-6
                text-[15px]
                font-semibold
                text-gray-900
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-brand-yellow-dark
                hover:shadow-lg
              "
            >
              Start a Free Trial
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px w-full bg-gray-800" />

        {/* Bottom Footer */}
        <div
          className="
            flex
            flex-col
            gap-4
            text-[13px]
            text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Whatsapp CRM. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
