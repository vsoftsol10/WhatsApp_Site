export default function Hero2() {
  return (
    <section
      className="
        relative
        min-h-[520px]
        w-full
        overflow-hidden
        bg-[#f3faee]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/whatsapp-hero-bg.png')",
        }}
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[520px]
          w-full
          items-center
          px-4
          py-12
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            w-full
            max-w-[540px]
            lg:ml-6
            xl:ml-12
          "
        >
          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <h1
            className="
              text-[32px]
              font-bold
              leading-[1.15]
              tracking-tight
              text-gray-950
              xs:text-[38px]
              sm:text-[48px]
              sm:leading-[1.12]
              sm:tracking-[-1.5px]
              md:text-[52px]
              lg:text-[54px]
              xl:text-[56px]
            "
          >
            <span className="block sm:whitespace-nowrap">
              One Inbox. Your Whole
            </span>

            <span className="block sm:whitespace-nowrap">
              Team. Zero Confusion.
            </span>
          </h1>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mt-5
              max-w-[500px]
              text-[15px]
              leading-[1.6]
              text-gray-600
              sm:mt-6
              sm:text-[17px]
              md:text-[18px]
            "
          >
            Trusted by 500+ businesses to manage leads, chats,
            and customer relationships in one place.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
              sm:mt-7
              sm:gap-4
            "
          >
            {/* BOOK A DEMO */}
            <a
              href="/demo"
              className="
                inline-flex
                h-[48px]
                items-center
                justify-center
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
                hover:bg-brand-green-dark
                hover:shadow-xl
                sm:h-[52px]
                sm:gap-2.5
                sm:rounded-[14px]
                sm:px-7
                sm:text-[16px]
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

            {/* GET STARTED */}
            <a
              href="/demo"
              className="
                inline-flex
                h-[48px]
                items-center
                justify-center
                gap-2
                rounded-[12px]
                bg-brand-yellow
                px-6
                text-[15px]
                font-semibold
                text-gray-950
                shadow-lg
                shadow-brand-yellow/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-brand-yellow-dark
                hover:shadow-xl
                sm:h-[52px]
                sm:gap-2.5
                sm:rounded-[14px]
                sm:px-7
                sm:text-[16px]
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
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
