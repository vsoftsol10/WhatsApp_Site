function InboxHero() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#f5fbe9]">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft green gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_70%,rgba(126,205,91,0.22),transparent_42%),radial-gradient(circle_at_82%_35%,rgba(211,237,190,0.35),transparent_40%)]
          "
        />

        {/* Large left circular ring */}
        <div
          className="
            absolute
            -left-[310px]
            -top-[210px]
            h-[720px]
            w-[720px]
            rounded-full
            border-[90px]
            border-[#b7df9d]/45
          "
        />

        {/* Second left circular ring */}
        <div
          className="
            absolute
            -left-[390px]
            top-[50px]
            h-[650px]
            w-[650px]
            rounded-full
            border-[70px]
            border-[#8dcc72]/25
          "
        />

        {/* Third subtle left curve */}
        <div
          className="
            absolute
            -left-[470px]
            top-[180px]
            h-[580px]
            w-[580px]
            rounded-full
            border-[2px]
            border-[#8fcf73]/30
          "
        />

        {/* Bottom-left dotted pattern */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[155px]
            w-[245px]
            opacity-30
            [background-image:radial-gradient(#73ad62_1.2px,transparent_1.2px)]
            [background-size:9px_9px]
          "
        />

        {/* Right large circular line */}
        <div
          className="
            absolute
            -right-[260px]
            -top-[230px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-[#b8dca4]/50
          "
        />

        {/* Right second circular line */}
        <div
          className="
            absolute
            -right-[330px]
            -top-[120px]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#c9e4b8]/60
          "
        />

        {/* Small right dotted pattern */}
        <div
          className="
            absolute
            right-0
            top-0
            h-[130px]
            w-[180px]
            opacity-20
            [background-image:radial-gradient(#75a966_1px,transparent_1px)]
            [background-size:9px_9px]
          "
        />

      </div>


      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[500px]
          max-w-7xl
          grid-cols-1
          items-center
          gap-6
          px-4
          py-8
          sm:px-8
          sm:py-10
          lg:grid-cols-[48%_52%]
          lg:gap-0
          lg:px-8
          lg:py-8
        "
      >

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            max-w-[650px]
            lg:pt-2
          "
        >

          {/* Heading */}
          <h1
            className="
              text-[32px]
              font-bold
              leading-[1.12]
              tracking-tight
              text-gray-950
              xs:text-[38px]
              sm:text-[46px]
              sm:leading-[1.08]
              sm:tracking-[-1.5px]
              lg:text-[52px]
              xl:text-[56px]
            "
          >
            {/* First line */}
            <span className="block sm:whitespace-nowrap">
              Your WhatsApp Inbox,
            </span>

            <span className="mt-2 sm:mt-4 block">
              Finally{" "}
              <span className="text-brand-green">
                Organized.
              </span>
            </span>
          </h1>


          {/* Description */}
          <p
            className="
              mt-4
              max-w-[500px]
              text-[15px]
              leading-[1.6]
              text-gray-700
              sm:mt-7
              sm:text-[18px]
            "
          >
            Automate follow-ups, assign leads instantly, and
            never lose a customer again.
          </p>


          {/* Button */}
          <div className="mt-6 sm:mt-8">
            <a
              href="/demo"
              className="
                inline-flex
                h-[48px]
                min-w-[150px]
                items-center
                justify-center
                gap-2.5
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
                sm:h-[54px]
                sm:min-w-[168px]
                sm:gap-3
                sm:rounded-[15px]
                sm:px-8
                sm:text-[17px]
                sm:hover:-translate-y-1
              "
            >
              Get Started

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>

        </div>


        {/* ================================================= */}
        {/* RIGHT IMAGE */}
        {/* ================================================= */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
            lg:justify-end
          "
        >

          {/* Soft green glow */}
          <div
            className="
              absolute
              right-[5%]
              top-[15%]
              h-[260px]
              w-[260px]
              sm:h-[420px]
              sm:w-[420px]
              rounded-full
              bg-[#ccebb9]/50
              blur-3xl
            "
          />

          {/* Additional subtle glow */}
          <div
            className="
              absolute
              right-[15%]
              top-[25%]
              h-[180px]
              w-[180px]
              sm:h-[280px]
              sm:w-[280px]
              rounded-full
              bg-[#e1f3d4]/70
              blur-2xl
            "
          />

          {/* Main CRM Image */}
          <img
            src="/images/whatsapp-inbox.png"
            alt="WhatsApp CRM inbox"
            className="
              relative
              z-10
              h-auto
              w-full
              max-w-[340px]
              sm:max-w-[480px]
              lg:max-w-[680px]
              object-contain
              drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)]
              transition-transform
              duration-500
              hover:scale-[1.02]
            "
          />

        </div>

      </div>

    </section>
  );
}

export default InboxHero;
