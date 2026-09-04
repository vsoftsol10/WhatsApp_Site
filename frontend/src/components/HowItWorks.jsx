

import {
  Share2,
  ClipboardList,
  UserCheck,
  Bell,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Connect",
    description:
      "Link your WhatsApp number in seconds and import existing chats.",
    icon: Share2,
  },
  {
    number: 2,
    title: "Organize",
    description:
      "Tag leads, segment contacts and sort conversations into pipelines.",
    icon: ClipboardList,
  },
  {
    number: 3,
    title: "Assign",
    description:
      "Route chats to the right team member so nothing gets missed.",
    icon: UserCheck,
  },
  {
    number: 4,
    title: "Follow Up",
    description:
      "Schedule reminders and close more deals with timely responses.",
    icon: Bell,
  },
];

function HowItWorks() {
  return (
    <section   id="how-it-works" className="w-full bg-[#f5f5f5] px-6 py-18 md:py-22">
      <div className="mx-auto max-w-7xl">

        {/* ============================================= */}
        {/* SECTION HEADING */}
        {/* ============================================= */}

        <div className="mb-16 text-center">

          {/* Label */}
          <p
            className="
              mb-3
              text-[22px]
              font-bold
              tracking-[-0.2px]
              text-[#00c875]
            "
          >
            How It Works
          </p>

          {/* Heading */}
          <h2
            className="
              text-[32px]
              font-semibold
              leading-tight
              tracking-[-0.8px]
              text-gray-900
              sm:text-[34px]
              md:text-[38px]
            "
          >
            From first message to closed deal in four steps
          </h2>

        </div>


        {/* ============================================= */}
        {/* STEPS */}
        {/* ============================================= */}

        <div className="relative">

          {/* ============================================= */}
          {/* CONNECTING LINE - DESKTOP */}
          {/* ============================================= */}

          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[30px]
              hidden
              h-[2px]
              rounded-full
              bg-[#62dca4]
              lg:block
            "
          />


          {/* ============================================= */}
          {/* STEP GRID */}
          {/* ============================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-8
            "
          >

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* ===================================== */}
                  {/* ICON + NUMBER */}
                  {/* ===================================== */}

                  <div className="relative mb-5">

                    {/* Icon Box */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        border-2
                        border-[#00c875]
                        bg-white
                        shadow-sm
                      "
                    >
                      <Icon
                        size={26}
                        strokeWidth={2.2}
                        className="text-[#00c875]"
                      />
                    </div>


                    {/* Number Badge */}
                    <div
                      className="
                        absolute
                        -right-2
                        -top-2
                        flex
                        h-[24px]
                        w-[24px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#00c875]
                        text-[12px]
                        font-bold
                        text-white
                        shadow-sm
                      "
                    >
                      {step.number}
                    </div>

                  </div>


                  {/* ===================================== */}
                  {/* TITLE */}
                  {/* ===================================== */}

                  <h3
                    className="
                      mb-2.5
                      text-[18px]
                      font-semibold
                      tracking-[-0.2px]
                      text-gray-950
                    "
                  >
                    {step.title}
                  </h3>


                  {/* ===================================== */}
                  {/* DESCRIPTION */}
                  {/* ===================================== */}

                  <p
                    className="
                      max-w-[220px]
                      text-[14px]
                      font-medium
                      leading-[1.6]
                      text-gray-600
                    "
                  >
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;

