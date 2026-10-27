export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-start
          gap-6
          px-4
          pt-6
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
              text-[34px]
              font-bold
              leading-[1.12]
              tracking-tight
              text-gray-950
              xs:text-[40px]
              sm:text-[54px]
              sm:leading-[1.08]
              sm:tracking-[-1.8px]
              lg:text-[66px]
              xl:text-[70px]
            "
          >
            {/* First line */}
            <span className="block sm:whitespace-nowrap mb-2 sm:mb-3">
              Stop Losing Leads in
            </span>

            {/* Second line */}
            <span className="block sm:whitespace-nowrap">
              <span className="text-brand-green">
                WhatsApp
              </span>{" "}
              Chaos
            </span>
          </h1>


          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-5
              max-w-[560px]
              text-[15px]
              leading-[1.65]
              text-gray-500
              sm:mt-8
              sm:text-[18px]
              sm:leading-[1.7]
            "
          >
            One inbox for every conversation, lead, and follow-up — built for
            teams who live on WhatsApp.
          </p>


          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
              sm:mt-9
              sm:gap-4
            "
          >

            {/* ================= BOOK DEMO ================= */}

            <a
              href="/demo"
              className="
                inline-flex
                h-[48px]
                items-center
                gap-2
                rounded-[12px]
                bg-brand-green
                px-6
                text-[15px]
                font-semibold
                text-white
                shadow-lg
                shadow-brand-green/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-xl
                sm:h-[54px]
                sm:gap-2.5
                sm:rounded-[14px]
                sm:px-8
                sm:text-[17px]
                sm:hover:-translate-y-1
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
                h-[48px]
                items-center
                gap-2
                rounded-[12px]
                bg-brand-yellow
                px-6
                text-[15px]
                font-semibold
                text-gray-900
                shadow-lg
                shadow-brand-yellow/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-xl
                sm:h-[54px]
                sm:gap-2.5
                sm:rounded-[14px]
                sm:px-8
                sm:text-[17px]
                sm:hover:-translate-y-1
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
              w-[58%]
              max-w-[320px]
              object-contain
              sm:w-[60%]
              sm:max-w-[390px]
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
