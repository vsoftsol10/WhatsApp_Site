


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-start
          gap-4
          px-4
          pt-8
          pb-8
          sm:px-6
          sm:pt-10
          lg:grid-cols-[54%_46%]
          lg:gap-0
          lg:px-6
          lg:pt-8
          lg:pb-4
        "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 max-w-[700px] lg:pt-[35px]">

          {/* ================= HEADING ================= */}

          <h1
            className="
              text-[50px]
              font-bold
              leading-[1.08]
              tracking-[-1.8px]
              text-gray-950
              sm:text-[58px]
              lg:text-[66px]
              xl:text-[70px]
            "
          >
            {/* First line */}
            <span className="block whitespace-nowrap mb-3">
              Stop Losing Leads in
            </span>

            {/* Second line */}
            <span className="block whitespace-nowrap">
              <span className="text-brand-green">
                WhatsApp
              </span>{" "}
              Chaos
            </span>
          </h1>


          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-8
              max-w-[560px]
              text-[17px]
              leading-[1.7]
              text-gray-500
              sm:text-[18px]
            "
          >
            One inbox for every conversation, lead, and follow-up — built for
            teams who live on WhatsApp.
          </p>


          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            {/* ================= BOOK DEMO ================= */}

            <a
              href="/demo"
              className="
                inline-flex
                h-[54px]
                items-center
                gap-2.5
                rounded-[14px]
                bg-brand-green
                px-8
                text-[17px]
                font-semibold
                text-white
                shadow-lg
                shadow-brand-green/20
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

              Book a demo
            </a>


            {/* ================= GET STARTED ================= */}

            <a
              href="/demo"
              className="
                inline-flex
                h-[54px]
                items-center
                gap-2.5
                rounded-[14px]
                bg-brand-yellow
                px-8
                text-[17px]
                font-semibold
                text-gray-900
                shadow-lg
                shadow-brand-yellow/20
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Get Started

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

          </div>

        </div>


        {/* ================================================= */}
        {/* RIGHT HERO IMAGE */}
        {/* ================================================= */}

        <div
          className="
            relative
            flex
            w-full
            items-start
            justify-center
            lg:-mt-[35px]
            lg:justify-end
          "
        >
          <img
            src="/images/hero-woman.png"
            alt="Team member replying to a WhatsApp lead"
            className="
              h-auto
              w-[68%]
              max-w-[390px]
              object-contain
              sm:w-[60%]
              lg:w-[82%]
              lg:max-w-[450px]
              xl:w-[80%]
            "
          />
        </div>

      </div>
    </section>
  );
}

