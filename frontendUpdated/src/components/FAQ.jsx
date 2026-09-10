

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is included in the Trial plan?",
    answer:
      "The Trial plan lets you experience the core WhatsApp CRM features, including WhatsApp conversations, a basic team inbox, lead management, and follow-up tracking.",
  },
  {
    question: "Can I upgrade from Starter to Professional?",
    answer:
      "Yes. You can upgrade from the Starter plan to the Professional plan whenever your team needs more advanced CRM features, campaigns, reports, and customer segmentation.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Yes. You can cancel your subscription at any time. Your access will continue according to the terms of your current billing period.",
  },
  {
    question: "Can multiple team members use WhatsApp CRM?",
    answer:
      "Yes. WhatsApp CRM is designed for teams. You can add team members, assign conversations, manage leads, and collaborate through a shared inbox.",
  },
  {
    question: "What is included in the Enterprise plan?",
    answer:
      "The Enterprise plan includes everything in Professional, plus advanced reports, more team members, custom workflows, priority support, and dedicated account support.",
  },
  {
    question: "Do I need technical knowledge to get started?",
    answer:
      "No. WhatsApp CRM is designed to be simple to use. You can connect your WhatsApp number, organize your conversations, and start managing customers without advanced technical knowledge.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f5f5f5] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">

        {/* ========================================= */}
        {/* HEADING */}
        {/* ========================================= */}

        <div className="mb-14 text-center">

          <p
            className="
              mb-3
              text-[22px]
              font-bold
              tracking-[-0.2px]
              text-[#00c875]
            "
          >
            FAQ
          </p>

          <h2
            className="
              text-[32px]
              font-bold
              leading-tight
              tracking-[-0.8px]
              text-gray-900
              sm:text-[36px]
              md:text-[40px]
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[600px]
              text-[15px]
              leading-6
              text-gray-500
              sm:text-[16px]
            "
          >
            Find answers to the most common questions about
            WhatsApp CRM and our plans.
          </p>

        </div>


        {/* ========================================= */}
        {/* FAQ LIST */}
        {/* ========================================= */}

        <div className="space-y-4">

          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-[0_4px_12px_rgba(0,0,0,0.07)]
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#b7efd5] shadow-[0_8px_20px_rgba(0,0,0,0.09)]"
                      : ""
                  }
                `}
              >

                {/* ================================= */}
                {/* QUESTION */}
                {/* ================================= */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-5
                    px-7
                    py-6
                    text-left
                    transition-colors
                    duration-200
                    hover:bg-gray-50
                    sm:px-8
                  "
                >

                  {/* Plus / Minus */}
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e6fff3]
                      text-[#00c875]
                    "
                  >
                    {isOpen ? (
                      <Minus
                        size={18}
                        strokeWidth={2.4}
                      />
                    ) : (
                      <Plus
                        size={18}
                        strokeWidth={2.4}
                      />
                    )}
                  </span>


                  {/* Question */}
                  <span
                    className={`
                      text-[16px]
                      font-semibold
                      leading-6
                      transition-colors
                      duration-200
                      sm:text-[17px]
                      ${
                        isOpen
                          ? "text-[#00b968]"
                          : "text-gray-900"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                </button>


                {/* ================================= */}
                {/* ANSWER */}
                {/* ================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div
                      className="
                        border-t
                        border-gray-100
                        px-7
                        pb-7
                        pl-[68px]
                        pt-5
                        sm:px-8
                        sm:pl-[78px]
                      "
                    >
                      <p
                        className="
                          text-[14px]
                          font-medium
                          leading-7
                          text-gray-500
                          sm:text-[15px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;

