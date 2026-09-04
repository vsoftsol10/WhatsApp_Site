

const testimonials = [
  {
    quote:
      "We stopped losing leads in WhatsApp. Every conversation is organized, assigned, and followed up on time.",
    name: "Priya",
    role: "Head of Sales, Brightwave",
    initial: "P",
  },
  {
    quote:
      "We stopped losing leads in WhatsApp. Every conversation is organized, assigned, and followed up on time.",
    name: "Priya",
    role: "Head of Sales, Brightwave",
    initial: "P",
  },
  {
    quote:
      "We stopped losing leads in WhatsApp. Every conversation is organized, assigned, and followed up on time.",
    name: "Priya",
    role: "Head of Sales, Brightwave",
    initial: "P",
  },
];

function DoubleQuoteIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="currentColor"
      className="text-[#00c875]"
      aria-hidden="true"
    >
      <path d="M7 10h9v9H11c0 4 2 6 6 7v4c-7-1-11-5-11-12V10h1Zm18 0h9v9h-5c0 4 2 6 6 7v4c-7-1-11-5-11-12V10h1Z" />
    </svg>
  );
}

function Testimonials() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* SECTION HEADING */}
        {/* ========================================= */}

        <div className="mb-12 text-center">

          <p
            className="
              mb-3
              text-[22px]
              font-bold
              text-[#00c875]
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-[32px]
              font-semibold
              tracking-[-0.8px]
              text-gray-900
              sm:text-[34px]
              md:text-[38px]
            "
          >
            Trusted by Teams. Proven by Results
          </h2>

        </div>


        {/* ========================================= */}
        {/* TESTIMONIAL CARDS */}
        {/* ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-6
                py-6
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)]
              "
            >

              {/* ===================================== */}
              {/* DOUBLE QUOTATION MARK */}
              {/* ===================================== */}

              <div className="mb-4">
                <DoubleQuoteIcon />
              </div>


              {/* ===================================== */}
              {/* QUOTE */}
              {/* ===================================== */}

              <p
                className="
                  min-h-[96px]
                  text-[15px]
                  font-medium
                  leading-[1.7]
                  text-gray-600
                "
              >
                {testimonial.quote}
              </p>


              {/* ===================================== */}
              {/* DIVIDER */}
              {/* ===================================== */}

              <div className="my-5 h-px w-full bg-gray-200" />


              {/* ===================================== */}
              {/* USER */}
              {/* ===================================== */}

              <div className="flex items-center gap-3.5">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#78f0bd]
                    text-[15px]
                    font-bold
                    text-[#00b968]
                  "
                >
                  {testimonial.initial}
                </div>


                {/* User Details */}
                <div>

                  <p
                    className="
                      text-[14px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[12px]
                      text-gray-500
                    "
                  >
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;

