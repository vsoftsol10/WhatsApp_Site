

import { Play, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DemoForm from "../components/DemoForm";
import Footer from "../components/Footer";

function DemoPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* Navbar */}
      <Navbar />

      <main className="px-4 py-10 md:px-6 md:py-14 lg:py-16">

        {/* ========================================= */}
        {/* PAGE HEADER */}
        {/* ========================================= */}

        <div className="mx-auto mb-12 max-w-5xl text-center">

          <p className="mb-3 text-[22px] font-bold text-[#00c875]">
            Contact Us
          </p>

          <h1
            className="
              text-[30px]
              font-bold
              leading-tight
              tracking-[-0.8px]
              text-gray-900
              sm:text-[34px]
              md:text-[40px]
            "
          >
            Tell us about your team and we'll be in touch.
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[15px]
              leading-7
              text-gray-500
              md:text-[16px]
            "
          >
            Get a personalized walkthrough and discover how WhatsApp CRM
            can help your team manage conversations, leads, and follow-ups.
          </p>

        </div>


        {/* ========================================= */}
        {/* MAIN CONTENT */}
        {/* ========================================= */}

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-stretch
          "
        >

          {/* ======================================= */}
          {/* LEFT - FORM */}
          {/* ======================================= */}

          <DemoForm />


          {/* ======================================= */}
          {/* RIGHT - SEE IT IN ACTION */}
          {/* ======================================= */}

          <div
            className="
              flex
              flex-col
              rounded-2xl
              bg-gradient-to-br
              from-[#00c875]
              to-[#00ad69]
              p-7
              text-white
              shadow-[0_8px_30px_rgba(0,200,117,0.18)]
              md:p-8
              lg:p-9
            "
          >

            {/* Heading */}

            <div>
              <h2 className="text-[26px] font-bold tracking-[-0.4px]">
                See it in action
              </h2>

              <p className="mt-3 max-w-[500px] text-[14px] leading-6 text-white/90 md:text-[15px]">
                Watch a quick walkthrough of how teams use WhatsApp CRM to
                manage leads, automate follow-ups, and keep everything in one
                place.
              </p>
            </div>


            {/* ===================================== */}
            {/* VIDEO */}
            {/* ===================================== */}

            <div
              className="
                relative
                mt-7
                h-[250px]
                overflow-hidden
                rounded-2xl
                bg-gray-200
                shadow-lg
                md:h-[290px]
                lg:h-[310px]
              "
            >

              <img
                src="/images/demo.png"
                alt="WhatsApp CRM dashboard"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/15" />


              {/* Play */}

              <button
                type="button"
                aria-label="Play demo"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-16
                  w-16
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#00c875]
                  shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                  transition
                  duration-200
                  hover:scale-110
                  hover:bg-white
                "
              >
                <Play
                  size={25}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </button>

            </div>


            {/* ===================================== */}
            {/* FEATURES */}
            {/* ===================================== */}

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />

                <span className="text-[14px] font-medium md:text-[15px]">
                  Lead management & assignment
                </span>
              </div>


              <div className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />

                <span className="text-[14px] font-medium md:text-[15px]">
                  Automated follow-ups & reminders
                </span>
              </div>


              <div className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />

                <span className="text-[14px] font-medium md:text-[15px]">
                  Team collaboration & reporting
                </span>
              </div>

            </div>


            {/* Bottom message */}

            <div className="mt-auto pt-7">

              <div className="rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-[13px] font-medium leading-5 text-white/95">
                  Everything your team needs to turn WhatsApp conversations
                  into organized customer relationships.
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
    
  );
}

export default DemoPage;

