
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
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:gap-12">

          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2.5">
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

              <span className="text-[20px] font-bold tracking-[-0.3px]">
                Whatsapp{" "}
                <span className="text-brand-green">CRM</span>
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-[330px]
                text-[15px]
                leading-7
                text-gray-400
              "
            >
              One simple CRM to manage your WhatsApp conversations,
              leads, customers, and follow-ups in one place.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-[14px] text-gray-400">
                <Mail size={17} className="text-brand-green" />
                <span>hello@whatsappcrm.com</span>
              </div>

              <div className="flex items-center gap-3 text-[14px] text-gray-400">
                <Phone size={17} className="text-brand-green" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3.5">
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
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3.5">
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
                  href="#contact"
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
          <div>
            <h3 className="mb-5 text-[16px] font-semibold text-white">
              Get Started
            </h3>

            <p className="text-[14px] leading-6 text-gray-400">
              Ready to bring your WhatsApp conversations into one
              organized workspace?
            </p>

            <a
              href="/pricing"
              className="
                mt-6
                inline-flex
                h-[48px]
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
        <div className="my-10 h-px w-full bg-gray-800" />

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

            <a
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

