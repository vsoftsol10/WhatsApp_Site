


// import { Play, ArrowRight } from "lucide-react";

// function CTASection() {
//   return (
//     <section className="w-full bg-[#f5f5f5] px-6 py-14 md:py-16">
//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           rounded-2xl
//           bg-[#00c875]
//           px-6
//           py-12
//           text-center
//           shadow-[0_10px_30px_rgba(0,200,117,0.12)]
//           md:px-10
//           md:py-14
//         "
//       >
//         {/* Heading */}
//         <h2
//           className="
//             text-[30px]
//             font-bold
//             leading-[1.15]
//             tracking-[-0.8px]
//             text-white
//             sm:text-[34px]
//             md:text-[38px]
//           "
//         >
//           Stop losing leads in WhatsApp.
//         </h2>

//         {/* Description */}
//         <p
//           className="
//             mx-auto
//             mt-4
//             max-w-[560px]
//             text-[16px]
//             font-medium
//             leading-[1.6]
//             text-white/95
//             sm:text-[17px]
//           "
//         >
//           Bring conversations, customers, leads, and follow-ups into
//           one simple CRM.
//         </p>

//         {/* Buttons */}
//         <div
//           className="
//             mt-8
//             flex
//             flex-col
//             items-center
//             justify-center
//             gap-4
//             sm:flex-row
//           "
//         >
//           {/* Book a Demo */}
//           <button
//             className="
//               inline-flex
//               h-[52px]
//               min-w-[165px]
//               items-center
//               justify-center
//               gap-2.5
//               rounded-[13px]
//               bg-white
//               px-7
//               text-[16px]
//               font-semibold
//               text-[#00b968]
//               shadow-md
//               transition-all
//               duration-200
//               hover:-translate-y-1
//               hover:shadow-xl
//             "
//           >
//             <Play
//               size={18}
//               fill="currentColor"
//               strokeWidth={0}
//             />

//             <span>Book a demo</span>
//           </button>

//           {/* Get Started */}
//           <button
//             className="
//               inline-flex
//               h-[52px]
//               min-w-[165px]
//               items-center
//               justify-center
//               gap-2.5
//               rounded-[13px]
//               bg-[#ffbf00]
//               px-7
//               text-[16px]
//               font-semibold
//               text-gray-900
//               shadow-md
//               transition-all
//               duration-200
//               hover:-translate-y-1
//               hover:bg-[#ffc933]
//               hover:shadow-xl
//             "
//           >
//             <span>Get Started</span>

//             <ArrowRight
//               size={19}
//               strokeWidth={2.2}
//             />
//           </button>
//         </div>

//         {/* Bottom Text */}
//         <p
//           className="
//             mt-6
//             text-[14px]
//             font-medium
//             text-white
//           "
//         >
//           Start organizing your customer conversations today.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default CTASection;


import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
return ( <section className="w-full bg-[#f5f5f5] px-6 py-14 md:py-16"> <div
     className="
       mx-auto
       max-w-7xl
       rounded-2xl
       bg-[#00c875]
       px-6
       py-12
       text-center
       shadow-[0_10px_30px_rgba(0,200,117,0.12)]
       md:px-10
       md:py-14
     "
   >
{/* Heading */} <h2
       className="
         text-[30px]
         font-bold
         leading-[1.15]
         tracking-[-0.8px]
         text-white
         sm:text-[34px]
         md:text-[38px]
       "
     >
Stop losing leads in WhatsApp. </h2>


    {/* Description */}
    <p
      className="
        mx-auto
        mt-4
        max-w-[560px]
        text-[16px]
        font-medium
        leading-[1.6]
        text-white/95
        sm:text-[17px]
      "
    >
      Bring conversations, customers, leads, and follow-ups into
      one simple CRM.
    </p>

    {/* Buttons */}
    <div
      className="
        mt-8
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      {/* Book a Demo */}
      <Link
        to="/demo"
        className="
          inline-flex
          h-[52px]
          min-w-[165px]
          items-center
          justify-center
          gap-2.5
          rounded-[13px]
          bg-white
          px-7
          text-[16px]
          font-semibold
          text-[#00b968]
          shadow-md
          transition-all
          duration-200
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        <Play
          size={18}
          fill="currentColor"
          strokeWidth={0}
        />

        <span>Book a demo</span>
      </Link>

      {/* Get Started */}
      <button
        type="button"
        className="
          inline-flex
          h-[52px]
          min-w-[165px]
          items-center
          justify-center
          gap-2.5
          rounded-[13px]
          bg-[#ffbf00]
          px-7
          text-[16px]
          font-semibold
          text-gray-900
          shadow-md
          transition-all
          duration-200
          hover:-translate-y-1
          hover:bg-[#ffc933]
          hover:shadow-xl
        "
      >
        <span>Get Started</span>

        <ArrowRight
          size={19}
          strokeWidth={2.2}
        />
      </button>
    </div>

    {/* Bottom Text */}
    <p
      className="
        mt-6
        text-[14px]
        font-medium
        text-white
      "
    >
      Start organizing your customer conversations today.
    </p>
  </div>
</section>


);
}

export default CTASection;
