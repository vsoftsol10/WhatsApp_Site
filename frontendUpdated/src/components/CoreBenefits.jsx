
import {
  MessageSquare,
  FileText,
  Send,
  Files,
} from "lucide-react";

const benefits = [
  {
    title: "Conversations",
    description:
      "All your WhatsApp chats in a single shared inbox — no more switching phones or losing threads.",
    icon: MessageSquare,
  },
  {
    title: "Organize Leads",
    description:
      "Tag, segment and pipeline your contacts so nothing falls through the cracks.",
    icon: FileText,
  },
  {
    title: "Campaigns",
    description:
      "Reach more customers with targeted WhatsApp campaigns. Engage, nurture, and convert leads at scale.",
    icon: Send,
  },
  {
    title: "Templates",
    description:
      "Create ready-to-use WhatsApp messages for every occasion. Save time and communicate faster with consistency.",
    icon: Files,
  },
];

function CoreBenefits() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <div className="mb-12 text-center">

          {/* Section Label */}
          <p className="section-eyebrow">
            Core Benefits
          </p>

          {/* Section Title */}
          <h2
            className="section-heading"
          >
            Turn conversations into organized customer relationships.
          </h2>

        </div>


        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[48%_52%]
            lg:gap-4
          "
        >

          {/* ================================================= */}
          {/* LEFT SIDE - BENEFITS */}
          {/* ================================================= */}

          <div className="space-y-7">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-5"
                >

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-green-light
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className="text-brand-green"
                    />
                  </div>


                  {/* Text */}
                  <div className="pt-0.5">

                    {/* Benefit Title */}
                    <h3
                      className="
                        mb-2
                        text-[19px]
                        font-semibold
                        text-gray-950
                      "
                    >
                      {benefit.title}
                    </h3>


                    {/* Benefit Description */}
                    <p
                      className="
                        max-w-[440px]
                        text-[15px]
                        leading-6
                        text-gray-500
                      "
                    >
                      {benefit.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>


          {/* ================================================= */}
          {/* RIGHT SIDE - IMAGE */}
          {/* ================================================= */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[700px]">

              <img
                src="/images/aboutInLanding.png"
                alt="WhatsApp CRM integrations"
                className="
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CoreBenefits;

