// import React from "react";

// const TermsAndConditions = () => {
//   return (
//     <main className="min-h-screen bg-[#f4f4f4] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
//       <div className="mx-auto max-w-6xl">

//         {/* Header */}
//         <div className="mb-12 text-center">
//           <p className="mb-3 text-base font-semibold text-[#20b66b]">
//             Terms and Conditions
//           </p>

//           <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
//             The rules and conditions for using WhatsApp CRM.
//           </h1>
//         </div>

//         {/* Content */}
//         <div className="space-y-9 text-[15px] leading-7 text-gray-700 sm:text-base">

//           {/* 1 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               1. Acceptance of Terms
//             </h2>

//             <p>
//               By creating an account or using WhatsApp CRM, you agree to these
//               Terms of Service. If you do not agree, you may not access or use
//               the platform.
//             </p>
//           </section>

//           {/* 2 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               2. Your Account
//             </h2>

//             <p>
//               You are responsible for maintaining the security of your account
//               credentials and for all activity that occurs under your account.
//               You agree to notify us immediately of any unauthorized use.
//             </p>
//           </section>

//           {/* 3 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               3. Acceptable Use
//             </h2>

//             <p className="mb-3">
//               You agree not to:
//             </p>

//             <ul className="list-disc space-y-2 pl-6">
//               <li>
//                 Use the service for any unlawful purpose or in violation of any
//                 local law.
//               </li>

//               <li>
//                 Send spam, unsolicited messages or any content that violates
//                 WhatsApp's policies.
//               </li>

//               <li>
//                 Attempt to interfere with, disrupt or gain unauthorized access
//                 to our systems.
//               </li>

//               <li>
//                 Resell or sublicense access to the platform without our written
//                 consent.
//               </li>
//             </ul>
//           </section>

//           {/* 4 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               4. Plans and Billing
//             </h2>

//             <p>
//               Paid plans are billed on a recurring monthly basis. You can
//               upgrade, downgrade or cancel your plan at any time from your
//               account settings. Fees are non-refundable except where required
//               by law.
//             </p>
//           </section>

//           {/* 5 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               5. Intellectual Property
//             </h2>

//             <p>
//               WhatsApp CRM and all related content, features and functionality
//               are owned by us and protected by intellectual property laws. You
//               may not copy, modify or distribute our materials without
//               permission.
//             </p>
//           </section>

//           {/* 6 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               6. Termination
//             </h2>

//             <p>
//               We may suspend or terminate your account if you violate these
//               Terms. You may close your account at any time. Upon termination,
//               your right to use the service ends immediately.
//             </p>
//           </section>

//           {/* 7 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               7. Disclaimer of Warranties
//             </h2>

//             <p>
//               The service is provided "as is" without warranties of any kind.
//               We do not guarantee that the platform will be uninterrupted,
//               error-free or secure.
//             </p>
//           </section>

//           {/* 8 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               8. Limitation of Liability
//             </h2>

//             <p>
//               To the fullest extent permitted by law, we are not liable for any
//               indirect, incidental or consequential damages arising from your
//               use of WhatsApp CRM.
//             </p>
//           </section>

//           {/* 9 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               9. Changes to These Terms
//             </h2>

//             <p>
//               We may update these Terms from time to time. Continued use of the
//               service after changes are posted constitutes acceptance of the
//               revised Terms.
//             </p>
//           </section>

//           {/* 10 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               10. Contact Us
//             </h2>

//             <p>
//               If you have questions about these Terms, please reach out through
//               the Contact option in the footer of this page.
//             </p>
//           </section>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default TermsAndConditions;


import React from "react";

/*
  Content is kept in one array so it is easy to edit later.
  - items:  bullet list. Each entry is a string, or { label, text } for a bold label.
  - paragraphs: normal paragraphs shown before the list.
  - notes:  labelled paragraphs shown after the list.
  - lines:  plain lines (used for the contact block).
*/
const sections = [
  {
    title: "1. Definitions",
    items: [
      '"Company", "we", "us" means VSoft Solutions IT Services, the operator of VatupCRM.',
      '"Website" means https://www.thevsoft.com and any other website or web application through which we offer VatupCRM.',
      '"Services" means the CRM software, WhatsApp messaging features, integrations and related support provided by the Company.',
      '"User", "You" or "Customer" means any individual or entity using our Services.',
      '"Customer Data" means all data you or your users upload to or process through the Services, including the personal data of your contacts.',
      '"Meta" means Meta Platforms, Inc. and its affiliates, which operate the WhatsApp Business Platform.',
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "By using our Services, you represent and warrant that you are at least 18 years old and have the legal authority to enter into these Terms. If you accept on behalf of a business, you confirm that you are authorised to bind that business.",
    ],
  },
  {
    title: "3. Use of Services",
    items: [
      "You agree to use our Services only for lawful purposes.",
      "You must not use the Services in any way that may damage the Website, interfere with its availability, or involve unauthorised access.",
      "Misuse of the platform for spam, fraud or illegal activities is strictly prohibited.",
      "You must obtain valid opt-in consent from every contact before messaging them on WhatsApp, honour opt-out requests, and comply with the WhatsApp Business Terms of Service, the WhatsApp Business Messaging Policy and other applicable Meta policies.",
      "You must not use the Services to send prohibited, misleading or restricted content under Meta's policies.",
    ],
    notes: [
      {
        label: "Important Notice:",
        text: "Violation of these usage terms may result in immediate suspension or termination of your account and legal action where applicable.",
      },
    ],
  },
  {
    title: "4. Accounts and Security",
    items: [
      "To access certain features, you may be required to create an account. You must provide accurate and current information.",
      "You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account, including that of users you add.",
      "You must notify us promptly at [support email] if you suspect unauthorised use of your account.",
      "The Company is not liable for unauthorised access due to your failure to secure your account.",
    ],
  },
  {
    title: "5. Subscription, Payments and Refunds",
    items: [
      "Some Services require payment of subscription fees, as set out in your plan or proposal.",
      "All fees are billed in advance and are non-refundable, unless otherwise specified in these Terms or in your plan or proposal.",
      "WhatsApp conversation and message charges are set and billed by Meta, either directly to you or passed through to you as specified in your plan, and may change without notice.",
      "Fees are exclusive of GST and other applicable taxes.",
    ],
    notes: [
      {
        label: "Pricing changes:",
        text: "The Company may change its pricing by giving you at least 15 days' written notice by email before the change takes effect. Customers who have already paid in advance keep their current price until the end of their current billing period. If you do not agree with the new pricing, you may cancel your subscription before the change takes effect.",
      },
      {
        label: "Payment Policy:",
        text: "Subscription fees are processed based on your chosen billing cycle. Please ensure your payment information is up to date to avoid service interruptions. Overdue accounts may be suspended until dues are cleared.",
      },
    ],
  },
  {
    title: "6. Intellectual Property",
    items: [
      "All content, trademarks, logos, designs and software provided on the Website and Services are owned by or licensed to VSoft Solutions IT Services.",
      "You are granted a limited, non-exclusive, non-transferable licence to use the Services solely for your internal business purposes.",
      "You may not copy, modify, distribute, resell or reverse-engineer any part of the Website or Services.",
    ],
  },
  {
    title: "7. Third-Party Integrations",
    items: [
      "VatupCRM integrates with third-party services such as the WhatsApp Business Platform (Cloud API) provided by Meta, email providers and other applications.",
      "Meta alone decides on business verification, template approvals, quality ratings, messaging limits, pricing and account restrictions. The Company is not responsible for the actions, terms, changes or failures of third-party services.",
      "VatupCRM is not affiliated with, endorsed by or sponsored by WhatsApp or Meta.",
    ],
  },
  {
    title: "8. Data Privacy",
    items: [
      "Your use of the Services is also governed by our Privacy Policy, available at [Privacy Policy URL].",
      "You retain ownership of your Customer Data, but you grant the Company a licence to process it as necessary to provide the Services.",
      "As between the parties, you are responsible for the personal data of your own contacts (including having a lawful basis and valid consent to process it), and the Company processes it on your instructions.",
      "To provide the Services, Customer Data is processed by Meta (through the WhatsApp Business Platform) and by our other service providers, such as hosting and infrastructure providers. We take reasonable steps to ensure these providers protect the data.",
      "You may export or request deletion of your Customer Data at any time by contacting [support email].",
      "Each party will comply with the data protection laws that apply to it, including India's Digital Personal Data Protection Act, 2023, to the extent applicable.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    items: [
      'The Services are provided on an "as is" and "as available" basis.',
      "The Company makes no warranties or guarantees regarding uptime, message delivery, accuracy or performance.",
      "To the maximum extent permitted by law, the Company is not liable for any indirect, incidental or consequential damages arising from your use of the Services, including loss of profit, revenue, business or data.",
      "To the maximum extent permitted by law, the Company's total liability for all claims arising from your use of the Services will not exceed the fees you paid to the Company in the 3 months before the claim arose.",
      "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
      "You agree to indemnify the Company against third-party claims, losses and expenses arising from your content, your messaging practices (including messaging contacts without valid consent) or your breach of these Terms.",
    ],
  },
  {
    title: "10. Termination",
    items: [
      "The Company may suspend or terminate your access to the Services if you violate these Terms, fail to pay, or if Meta restricts your WhatsApp account or our access to the API.",
      "You may stop using the Services at any time by discontinuing use of the Website and cancelling your subscription. Cancellation takes effect at the end of your current billing period.",
      "If the Company terminates your access without cause, we will refund the prepaid fees for the unused part of your billing period. No refund is due where we terminate or suspend because of your breach, non-payment, or a restriction imposed by Meta.",
      "After termination, we will keep your Customer Data for [30] days so that you can export it, and then delete it, unless the law requires us to keep it longer. Further details are in the Privacy Policy.",
    ],
  },
  {
    title: "11. Force Majeure",
    paragraphs: [
      "The Company is not liable for any delay or failure to perform caused by events beyond its reasonable control, including natural disasters, power or internet outages, government action, labour disputes, and outages or changes of third-party services such as Meta, cloud hosting or telecom providers.",
    ],
  },
  {
    title: "12. General Provisions",
    items: [
      {
        label: "Severability:",
        text: "If any part of these Terms is found to be unenforceable, the rest remains in effect.",
      },
      {
        label: "Entire agreement:",
        text: "These Terms, together with the Privacy Policy and your plan or proposal, are the entire agreement between you and the Company about the Services. If your plan or proposal conflicts with these Terms, the plan or proposal prevails.",
      },
      {
        label: "Assignment:",
        text: "You may not transfer your rights or obligations under these Terms without our written consent. The Company may assign these Terms in connection with a merger, acquisition or sale of its business.",
      },
      {
        label: "No waiver:",
        text: "If the Company does not enforce a right, that does not mean it gives up that right.",
      },
      {
        label: "Notices:",
        text: "The Company may give you notice by email to the address on your account or by posting on the Website. You may give notice to the Company by email to [support/legal email] or by post to the address in Section 14.",
      },
    ],
  },
  {
    title: "13. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts located in Tirunelveli, Tamil Nadu, India.",
    ],
  },
  {
    title: "14. Changes to Terms",
    paragraphs: [
      "The Company may update these Terms from time to time. For material changes, we will notify you by email at least 15 days before they take effect. Other changes take effect once posted on the Website. If you continue to use the Services after the changes take effect, you accept the revised Terms. If you do not agree, you may cancel your subscription before the changes take effect.",
    ],
  },
  {
    title: "15. Contact Information",
    paragraphs: [
      "For any questions or concerns about these Terms, please contact us:",
    ],
    lines: [
      { text: "VSoft Solutions IT Services" },
      { label: "Website:", text: "https://www.thevsoft.com" },
      { label: "Email:", text: "[support/legal email]" },
      { label: "Phone:", text: "[phone number]" },
      {
        label: "Address:",
        text: "Vannarapettai, Tirunelveli, Tamil Nadu - 627003, India.",
      },
    ],
  },
];

const Labelled = ({ label, text }) => (
  <>
    {label && <span className="font-semibold text-black">{label}</span>}
    {label && " "}
    {text}
  </>
);

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-[#f4f4f4] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-base font-semibold text-[#20b66b]">
            Terms and Conditions
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            The rules and conditions for using VatupCRM.
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-9 text-[15px] leading-7 text-gray-700 sm:text-base">

          {/* Intro */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-black">
              VatupCRM Terms and Conditions
            </h2>

            <p>VSoft Solutions IT Services · https://www.thevsoft.com</p>

            <p className="mt-4">
              Welcome to VatupCRM. By accessing or using our Website, products
              or Services, you agree to comply with and be bound by these Terms
              and Conditions (&quot;Terms&quot;). Please read them carefully.
              If you do not agree, you must not use our Services.
            </p>
          </section>

          {/* Numbered sections */}
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-black">
                {section.title}
              </h2>

              {section.paragraphs?.map((para, i) => (
                <p key={i} className={i > 0 ? "mt-4" : undefined}>
                  {para}
                </p>
              ))}

              {section.items && (
                <ul className="list-disc space-y-2 pl-6">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <Labelled label={item.label} text={item.text} />
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.notes?.map((note, i) => (
                <p key={i} className="mt-4">
                  <Labelled label={note.label} text={note.text} />
                </p>
              ))}

              {section.lines && (
                <div className="mt-4 space-y-1">
                  {section.lines.map((line, i) => (
                    <p key={i}>
                      <Labelled label={line.label} text={line.text} />
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}

        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
