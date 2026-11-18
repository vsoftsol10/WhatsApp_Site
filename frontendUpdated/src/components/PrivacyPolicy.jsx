// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <main className="min-h-screen bg-[#f4f4f4] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
//       <div className="mx-auto max-w-6xl">

//         {/* Page Heading */}
//         <div className="mb-12 text-center ">
//           <p className="mb-3 text-base font-semibold text-[#22b573]">
//             Privacy Policy
//           </p>

//           <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
//             How we collect, use and protect your information.
//           </h1>
//         </div>

//         {/* Privacy Policy Content */}
//         <div className="space-y-9 text-[15px] leading-7 text-gray-700 sm:text-base">

//           {/* 1 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               1. Information We Collect
//             </h2>

//             <p>
//               We collect information you provide directly to us, such as your
//               name, email address, company name and phone number when you create
//               an account or contact our team. We also collect information about
//               how you use WhatsApp CRM, including conversation metadata, lead
//               status and activity logs.
//             </p>

//             <p className="mt-4">
//               When you connect your WhatsApp number, we process conversation
//               data necessary to display and manage your chats within the CRM. We
//               do not store message content on our servers beyond what is
//               required to provide the service.
//             </p>
//           </section>

//           {/* 2 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               2. How We Use Your Information
//             </h2>

//             <p>We use the information we collect to:</p>

//             <ul className="mt-3 list-disc space-y-2 pl-6">
//               <li>
//                 Provide, maintain and improve WhatsApp CRM features.
//               </li>

//               <li>
//                 Respond to your support requests and inquiries.
//               </li>

//               <li>
//                 Send you important account, security and service notifications.
//               </li>

//               <li>
//                 Monitor and analyze trends to improve user experience.
//               </li>
//             </ul>
//           </section>

//           {/* 3 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               3. Information Sharing
//             </h2>

//             <p>
//               We do not sell or rent your personal information. We may share
//               information with service providers who help us operate the
//               platform (such as hosting and analytics), and when required by
//               law or to protect our rights.
//             </p>
//           </section>

//           {/* 4 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               4. Data Security
//             </h2>

//             <p>
//               We take reasonable measures to protect your information using
//               industry-standard encryption and access controls. However, no
//               method of transmission over the internet is completely secure,
//               and we cannot guarantee absolute security.
//             </p>
//           </section>

//           {/* 5 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               5. Data Retention
//             </h2>

//             <p>
//               We retain your information for as long as your account is active
//               or as needed to provide our services. You may request deletion of
//               your account and associated data at any time.
//             </p>
//           </section>

//           {/* 6 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               6. Your Rights
//             </h2>

//             <p>
//               You have the right to access, correct or delete your personal
//               information. You can also opt out of promotional communications
//               at any time through your account settings.
//             </p>
//           </section>

//           {/* 7 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               7. Changes to This Policy
//             </h2>

//             <p>
//               We may update this Privacy Policy from time to time. We will
//               notify you of significant changes by posting a notice within the
//               app or sending an email to your registered address.
//             </p>
//           </section>

//           {/* 8 */}
//           <section>
//             <h2 className="mb-4 text-xl font-semibold text-black">
//               8. Contact Us
//             </h2>

//             <p>
//               If you have questions about this Privacy Policy, please reach out
//               through the Contact option in the footer of this page.
//             </p>
//           </section>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default PrivacyPolicy;



import React from "react";

/*
  Content lives in one array so it is easy to edit later.
  Each section has a title and an ordered list of blocks:
    { type: "p",  text, label? }          paragraph (optional bold label)
    { type: "h3", text }                  small sub-heading
    { type: "ul", items: [string | { label, text }] }   bullet list
    { type: "lines", lines: [{ label?, text, href? }] } contact lines
*/
const sections = [
  {
    title: "1. Information We Collect",
    blocks: [
      { type: "p", text: "We may collect the following types of information:" },
      { type: "h3", text: "a. Information You Provide Directly" },
      {
        type: "ul",
        items: [
          "Name, email address, phone number, company details.",
          "Login credentials and account details.",
          "Business, GST and billing information.",
          "Messages, contacts and communications managed through VatupCRM.",
        ],
      },
      { type: "h3", text: "b. Information Collected Automatically" },
      {
        type: "ul",
        items: [
          "Device information (IP address, browser type, operating system).",
          "Usage data (pages visited, features used, date and time of access).",
          "Cookies and similar technologies for authentication and analytics.",
        ],
      },
      { type: "h3", text: "c. Information from Third Parties" },
      {
        type: "ul",
        items: [
          "Data from integrations such as the WhatsApp Business Platform, Meta Business tools and email providers (only with your consent and authorisation).",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    blocks: [
      { type: "p", text: "We use your information to:" },
      {
        type: "ul",
        items: [
          "Provide, operate and improve VatupCRM services.",
          "Create and manage accounts, onboarding and subscriptions.",
          "Enable third-party integrations (for example, WhatsApp messaging).",
          "Communicate with you regarding updates, support and service announcements.",
          "Monitor and prevent fraudulent or unauthorised activities.",
          "Comply with legal and regulatory obligations.",
        ],
      },
    ],
  },
  {
    title: "3. Data Obtained via Meta / WhatsApp Business Platform",
    blocks: [
      {
        type: "p",
        text: "Through our integration with the WhatsApp Business Platform (Cloud API), we may receive and process WhatsApp user phone numbers, profile names, message content and message delivery or read status on behalf of the businesses using VatupCRM. This data is used solely to provide messaging, CRM and automation services to our business customers. Meta processes WhatsApp data under its own terms and privacy policy.",
      },
      {
        type: "p",
        text: "We do not use data obtained through Meta's APIs for advertising or ad targeting, do not sell it, and do not use it to build user profiles for any purpose unrelated to providing the service. Data obtained through Meta's APIs is deleted or anonymised in accordance with the retention practices described in Section 7, or promptly upon a customer's request or account deauthorisation.",
      },
    ],
  },
  {
    title: "4. Sharing of Information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal data. We may share your information with:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Service Providers:",
            text: "infrastructure, hosting and database providers (including Render, Supabase and Hostinger), email delivery providers, and analytics providers. These providers are contractually restricted from using your data for any purpose other than providing services to us.",
          },
          {
            label: "Third-Party Integrations:",
            text: "such as Meta and WhatsApp, only as required to provide the service you have authorised.",
          },
          {
            label: "Legal Authorities:",
            text: "when required to comply with applicable law, legal process, or to enforce our terms, subject to the safeguards described in Section 5.",
          },
        ],
      },
    ],
  },
  {
    title: "5. Government and Legal Requests",
    blocks: [
      {
        type: "p",
        text: "We review all requests from public authorities for user data to confirm they are legally valid before responding. We disclose only the minimum information necessary to satisfy a valid request, and we will challenge requests we believe are unlawful, overly broad or improperly issued through appropriate legal channels. We maintain internal records of such requests, our responses and the legal reasoning applied.",
      },
    ],
  },
  {
    title: "6. Data Security",
    blocks: [
      {
        type: "p",
        text: "We implement reasonable technical and organisational measures to safeguard your data, including encrypted connections, hashed passwords, encrypted storage of access tokens and role-based access controls. However, no system is completely secure, and we cannot guarantee absolute protection.",
      },
    ],
  },
  {
    title: "7. Data Retention",
    blocks: [
      {
        type: "ul",
        items: [
          "We retain your personal data, including WhatsApp message and contact data, for as long as your account is active or as needed to provide our Services.",
          "After your subscription ends or your account is terminated, we keep your data for 30 days so that you can export it. After that, it is securely deleted or anonymised, unless the law requires us to keep it longer.",
          "You can request earlier deletion at any time, as described in Section 8.",
        ],
      },
    ],
  },
  {
    title: "8. Your Rights and Data Deletion",
    blocks: [
      {
        type: "p",
        text: "Depending on your jurisdiction, including under India's Digital Personal Data Protection Act, 2023, you may have the right to:",
      },
      {
        type: "ul",
        items: [
          "Access and obtain a copy of your personal data.",
          "Correct inaccurate or incomplete information.",
          "Request deletion of your personal data.",
          "Restrict or object to the processing of your data.",
          "Withdraw consent for optional data processing.",
        ],
      },
      {
        type: "p",
        label: "How to exercise these rights or request deletion:",
        text: "email vatupvsoft@gmail.com from your registered email address (or include your registered phone number), and tell us what you want done. We will confirm your request and complete it within 30 days, unless the law requires us to keep some data.",
      },
      {
        type: "p",
        text: "If you are a contact of one of our business customers, please also contact that business directly, as it decides how your data is used.",
      },
    ],
  },
  {
    title: "9. Cookies and Tracking",
    blocks: [
      { type: "p", text: "We use cookies and similar technologies to:" },
      {
        type: "ul",
        items: [
          "Keep you signed in and secure your session.",
          "Monitor website performance.",
          "Provide analytics for product improvement.",
        ],
      },
      {
        type: "p",
        text: "You can manage cookies through your browser settings.",
      },
    ],
  },
  {
    title: "10. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Our service providers may store or process data on servers located outside India. If you access VatupCRM from outside India, your data may also be transferred to and processed in countries with different data protection laws. We take reasonable steps to ensure it remains protected.",
      },
    ],
  },
  {
    title: "11. Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Our Services are not directed to individuals under 18 years old. We do not knowingly collect data from children. If we become aware that we have, we will delete such information.",
      },
    ],
  },
  {
    title: "12. Changes to this Policy",
    blocks: [
      {
        type: "p",
        text: 'We may update this Privacy Policy from time to time. For material changes, we will notify you by email at least 15 days before they take effect. Other changes take effect once posted on this page with a revised "Effective Date." If you continue to use the Services after the changes take effect, you accept the updated Policy.',
      },
    ],
  },
  {
    title: "13. Contact Information",
    blocks: [
      {
        type: "p",
        text: "For any privacy-related questions or requests, please contact us:",
      },
      {
        type: "lines",
        lines: [
          { text: "VSoft Solutions IT Services" },
          {
            label: "Email:",
            text: "vatupvsoft@gmail.com",
            href: "mailto:vatupvsoft@gmail.com",
          },
          {
            label: "Phone:",
            text: "+91 9095422237",
            href: "tel:+919095422237",
          },
          {
            label: "Address:",
            text: "Vannarapettai, Tirunelveli, Tamil Nadu - 627003, India.",
          },
        ],
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

const Block = ({ block, index, prev }) => {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="mb-2 mt-5 text-base font-semibold text-black">
          {block.text}
        </h3>
      );

    case "ul": {
      // list sits closer to a lead-in paragraph, normal after a sub-heading
      const margin = prev === "p" ? "mt-3 " : "";
      return (
        <ul className={`${margin}list-disc space-y-2 pl-6`}>
          {block.items.map((item, i) => (
            <li key={i}>
              {typeof item === "string" ? (
                item
              ) : (
                <Labelled label={item.label} text={item.text} />
              )}
            </li>
          ))}
        </ul>
      );
    }

    case "lines":
      return (
        <div className="mt-4 space-y-1">
          {block.lines.map((line, i) => (
            <p key={i}>
              {line.label && (
                <span className="font-semibold text-black">{line.label}</span>
              )}
              {line.label && " "}
              {line.href ? (
                <a
                  href={line.href}
                  className="text-[#22b573] hover:underline"
                >
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>
      );

    default:
      return (
        <p className={index > 0 ? "mt-4" : undefined}>
          <Labelled label={block.label} text={block.text} />
        </p>
      );
  }
};

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f4f4f4] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-12 text-center ">
          <p className="mb-3 text-base font-semibold text-[#22b573]">
            Privacy Policy
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            How we collect, use and protect your information.
          </h1>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-9 text-[15px] leading-7 text-gray-700 sm:text-base">

          {/* Intro */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-black">
              VatupCRM Privacy Policy
            </h2>

            <p>
              <span className="font-semibold text-black">Effective Date:</span>{" "}
              14 October 2026
            </p>
            <p className="mt-1">
              VSoft Solutions IT Services · https://www.thevsoft.com
            </p>

            <p className="mt-4">
              This Privacy Policy explains how we collect, use, disclose and
              safeguard your information when you use VatupCRM. We are
              committed to protecting your personal data and respecting your
              privacy. It should be read together with our Terms and
              Conditions.
            </p>
          </section>

          {/* Numbered sections */}
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-black">
                {section.title}
              </h2>

              {section.blocks.map((block, i) => (
                <Block
                  key={i}
                  block={block}
                  index={i}
                  prev={i > 0 ? section.blocks[i - 1].type : null}
                />
              ))}
            </section>
          ))}

        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
