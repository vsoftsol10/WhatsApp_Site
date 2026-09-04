
// import { useEffect, useState } from "react";
// import { Check } from "lucide-react";
// import FreeTrialDrawer from "../components/FreeTrialDrawer.jsx";
// import PurchaseDrawer from "../components/PurchaseDrawer.jsx";

// // const plans = [
// //   {
// //     name: "Trial",
// //     price: "₹0",
// //     period: "Free trial",
// //     description:
// //       "Try WhatsApp CRM and experience a simpler way to manage customer conversations.",
// //     features: [
// //       "WhatsApp conversations.",
// //       "Basic team inbox",
// //       "Lead management",
// //       "Follow-up tracking",
// //     ],
// //     button: "Start Free Trial",
// //     type: "trial",
// //   },

// //   {
// //     name: "Starter",
// //     price: "₹999",
// //     period: "/ month",
// //     description:
// //       "Essential CRM tools for small teams getting started with WhatsApp.",
// //     features: [
// //       "Team Inbox",
// //       "Lead Tracking",
// //       "Follow-ups",
// //       "Customer Management",
// //     ],
// //     button: "Get Started",
// //     type: "normal",
// //   },

// //   {
// //     name: "Professional",
// //     price: "₹1999",
// //     period: "/ month",
// //     description:
// //       "Advanced tools for growing teams that manage more customer conversations.",
// //     features: [
// //       "Everything in Starter",
// //       "Campaigns",
// //       "Reports & Analytics",
// //       "Team Assignment",
// //       "Advanced Follow-ups",
// //       "Customer Segmentation",
// //     ],
// //     button: "Get Started",
// //     type: "popular",
// //   },

// //   {
// //     name: "Enterprise",
// //     price: "Custom Pricing",
// //     period: "",
// //     description:
// //       "Powerful WhatsApp CRM solutions for larger organizations and teams.",
// //     features: [
// //       "Everything in Professional",
// //       "Advanced Reports",
// //       "More Team Members",
// //       "Custom Workflow",
// //       "Priority Support",
// //       "Dedicated Account Support",
// //     ],
// //     button: "Contact Us",
// //     type: "enterprise",
// //   },
// // ];

// function Pricing() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showTrialDrawer, setShowTrialDrawer] = useState(false);
//   const [showPurchaseDrawer, setShowPurchaseDrawer] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/api/public/plans`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch plans");
//         }

//         const data = await response.json();

//         setPlans(data.plans || []);
//       } catch (error) {
//         console.error("Failed to load plans:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   return (
//     <section className="w-full bg-[#f5f5f5] px-6 py-16 md:py-20 lg:py-24">

//       <div className="mx-auto max-w-7xl">


//         {/* ================================================= */}
//         {/* SECTION HEADING */}
//         {/* ================================================= */}

//         <div className="mb-20 text-center">

//           <p
//             className="
//           mb-4
//           text-[24px]
//           font-bold
//           tracking-[-0.3px]
//           text-[#00c875]
//           sm:text-[26px]
//         "
//           >
//             Choose Your Plan
//           </p>

//           <h2
//             className="
//           text-[38px]
//           font-bold
//           leading-[1.15]
//           tracking-[-1px]
//           text-gray-900
//           sm:text-[44px]
//           md:text-[48px]
//           lg:text-[52px]
//         "
//           >
//             Simple Plans for Every Team
//           </h2>

//           <p
//             className="
//           mx-auto
//           mt-5
//           max-w-[680px]
//           text-[16px]
//           leading-7
//           text-gray-500
//           sm:text-[17px]
//           md:text-[18px]
//         "
//           >
//             Choose the plan that fits your team and start managing
//             your WhatsApp conversations more efficiently.
//           </p>

//         </div>


//         {/* ================================================= */}
//         {/* PRICING CARDS */}
//         {/* ================================================= */}

//         <div
//           className="
//         grid
//         grid-cols-1
//         gap-8
//         md:grid-cols-2
//         lg:grid-cols-4
//         lg:gap-7
//         xl:gap-8
//       "
//         >

//           {plans.map((plan) => (

//             <div
//               key={plan.name}
//               className={`
//             relative
//             flex
//             min-h-[470px]
//             flex-col
//             rounded-[20px]
//             bg-white
//             p-8
//             shadow-[0_5px_18px_rgba(0,0,0,0.08)]
//             transition-all
//             duration-300
//             hover:-translate-y-2
//             hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]

//             ${plan.type === "popular"
//                   ? "border-2 border-[#ffbf00]"
//                   : "border border-gray-200"
//                 }
//           `}
//             >

//               {/* ================================================= */}
//               {/* MOST POPULAR BADGE */}
//               {/* ================================================= */}

//               {plan.type === "popular" && (
//                 <div
//                   className="
//                 absolute
//                 -top-[18px]
//                 left-1/2
//                 -translate-x-1/2
//                 whitespace-nowrap
//                 rounded-full
//                 bg-[#ffbf00]
//                 px-6
//                 py-2
//                 text-[12px]
//                 font-bold
//                 tracking-wide
//                 text-gray-900
//                 shadow-sm
//               "
//                 >
//                   MOST POPULAR
//                 </div>
//               )}


//               {/* ================================================= */}
//               {/* PLAN NAME */}
//               {/* ================================================= */}

//               <h3
//                 className="
//               mb-3
//               text-[24px]
//               font-bold
//               tracking-[-0.4px]
//               text-gray-900
//             "
//               >
//                 {plan.name}
//               </h3>


//               {/* ================================================= */}
//               {/* PRICE */}
//               {/* ================================================= */}

//               <div className="mb-5 flex items-baseline gap-2">

//                 <span
//                   className={`
//                 font-bold
//                 tracking-[-0.8px]
//                 text-gray-900

//                 ${plan.type === "enterprise"
//                       ? "text-[25px]"
//                       : "text-[34px]"
//                     }
//               `}
//                 >
//                   {plan.price}
//                 </span>

//                 {plan.period && (
//                   <span
//                     className="
//                   text-[14px]
//                   font-medium
//                   text-gray-500
//                 "
//                   >
//                     {plan.period}
//                   </span>
//                 )}

//               </div>


//               {/* ================================================= */}
//               {/* DESCRIPTION */}
//               {/* ================================================= */}

//               <p
//                 className="
//               mb-8
//               min-h-[78px]
//               text-[15px]
//               font-medium
//               leading-[1.65]
//               text-gray-500
//             "
//               >
//                 {plan.description}
//               </p>


//               {/* ================================================= */}
//               {/* FEATURES */}
//               {/* ================================================= */}

//               <div className="flex-1 space-y-4">

//                 {plan.features.map((feature) => (

//                   <div
//                     key={feature}
//                     className="flex items-start gap-3"
//                   >

//                     <Check
//                       size={19}
//                       strokeWidth={2.5}
//                       className="
//                     mt-[2px]
//                     shrink-0
//                     text-[#00c875]
//                   "
//                     />

//                     <span
//                       className="
//                     text-[15px]
//                     font-medium
//                     leading-6
//                     text-gray-600
//                   "
//                     >
//                       {feature}
//                     </span>

//                   </div>

//                 ))}

//               </div>


//               {/* ================================================= */}
//               {/* BUTTON */}
//               {/* ================================================= */}

//               <button
//                 type="button"
//                 onClick={() => {
//                   if (plan.type === "trial") {
//                     setShowTrialDrawer(true);
//                   }

//                   if (plan.type === "normal" || plan.type === "popular") {
//                     setSelectedPlan(plan);
//                     setShowPurchaseDrawer(true);
//                   }
//                 }}
//                 className={`
//               mt-8
//               flex
//               h-[54px]
//               w-full
//               items-center
//               justify-center
//               rounded-[13px]
//               px-5
//               text-[16px]
//               font-semibold
//               transition-all
//               duration-200
//               hover:-translate-y-1
//               hover:shadow-lg

//               ${plan.type === "popular"
//                     ? "bg-[#ffbf00] text-gray-900 hover:bg-[#ffc62e]"
//                     : plan.type === "enterprise"
//                       ? "border-2 border-[#00c875] bg-white text-[#00b968] hover:bg-[#eafff5]"
//                       : "bg-[#00b968] text-white hover:bg-[#00a85f]"
//                   }
//             `}
//               >
//                 {plan.button}
//               </button>

//             </div>

//           ))}

//         </div>

//       </div>


//       {/* ================================================= */}
//       {/* FREE TRIAL DRAWER */}
//       {/* ================================================= */}

//       <FreeTrialDrawer
//         isOpen={showTrialDrawer}
//         onClose={() => setShowTrialDrawer(false)}
//       />

//       <PurchaseDrawer
//         isOpen={showPurchaseDrawer}
//         onClose={() => {
//           setShowPurchaseDrawer(false);
//           setSelectedPlan(null);
//         }}
//         selectedPlan={selectedPlan}
//       />

//     </section>

//   );
// }

// export default Pricing;


import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import FreeTrialDrawer from "../components/FreeTrialDrawer.jsx";
import PurchaseDrawer from "../components/PurchaseDrawer.jsx";

function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showTrialDrawer, setShowTrialDrawer] = useState(false);
  const [showPurchaseDrawer, setShowPurchaseDrawer] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // ============================================================
  // FETCH PLANS FROM BACKEND
  // ============================================================

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/public/plans`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }

        const data = await response.json();

        setPlans(data.plans || []);
      } catch (error) {
        console.error("Failed to load plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // ============================================================
  // FORMAT DATABASE PLANS FOR EXISTING UI
  // ============================================================

  const formattedPlans = plans.map((plan) => {
    const planName = plan.planName?.toLowerCase();

    let type = "normal";
    let button = "Get Started";
    let period = "/ month";
    let description =
      "Essential CRM tools to help you manage your WhatsApp conversations more efficiently.";

    // TRIAL
    if (plan.isTrial || planName === "trial") {
      type = "trial";
      button = "Start Free Trial";
      period = "Free trial";

      description =
        "Try WhatsApp CRM and experience a simpler way to manage customer conversations.";
    }

    // PROFESSIONAL
    if (planName === "professional") {
      type = "popular";

      description =
        "Advanced tools for growing teams that manage more customer conversations.";
    }

    // ENTERPRISE
    if (planName === "enterprise") {
      type = "enterprise";
      button = "Contact Us";
      period = "";

      description =
        "Powerful WhatsApp CRM solutions for larger organizations and teams.";
    }

    return {
      ...plan,

      // Existing UI expects "name"
      name: plan.planName,

      // Format price
      price:
        plan.isTrial || Number(plan.price) === 0
          ? "₹0"
          : `₹${Number(plan.price).toLocaleString("en-IN")}`,

      period,

      description,

      button,

      type,

      // Use features from Super Admin
      features: Array.isArray(plan.features) ? plan.features : [],
    };
  });

  return (
    <section className="w-full bg-[#f5f5f5] px-6 py-16 md:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <div className="mb-20 text-center">

          <p
            className="
          mb-4
          text-[24px]
          font-bold
          tracking-[-0.3px]
          text-[#00c875]
          sm:text-[26px]
        "
          >
            Choose Your Plan
          </p>

          <h2
            className="
          text-[38px]
          font-bold
          leading-[1.15]
          tracking-[-1px]
          text-gray-900
          sm:text-[44px]
          md:text-[48px]
          lg:text-[52px]
        "
          >
            Simple Plans for Every Team
          </h2>

          <p
            className="
          mx-auto
          mt-5
          max-w-[680px]
          text-[16px]
          leading-7
          text-gray-500
          sm:text-[17px]
          md:text-[18px]
        "
          >
            Choose the plan that fits your team and start managing
            your WhatsApp conversations more efficiently.
          </p>

        </div>

        {/* ================================================= */}
        {/* PRICING CARDS */}
        {/* ================================================= */}

        {loading ? (
          <div className="py-20 text-center text-gray-500">
            Loading plans...
          </div>
        ) : formattedPlans.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            No plans available at the moment.
          </div>
        ) : (
          <div
            className="
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-4
          lg:gap-7
          xl:gap-8
        "
          >

            {formattedPlans.map((plan) => (

              <div
                key={plan.id}
                className={`
              relative
              flex
              min-h-[470px]
              flex-col
              rounded-[20px]
              bg-white
              p-8
              shadow-[0_5px_18px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]

              ${plan.type === "popular"
                    ? "border-2 border-[#ffbf00]"
                    : "border border-gray-200"
                  }
            `}
              >

                {/* ================================================= */}
                {/* MOST POPULAR BADGE */}
                {/* ================================================= */}

                {plan.type === "popular" && (
                  <div
                    className="
                  absolute
                  -top-[18px]
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  bg-[#ffbf00]
                  px-6
                  py-2
                  text-[12px]
                  font-bold
                  tracking-wide
                  text-gray-900
                  shadow-sm
                "
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* ================================================= */}
                {/* PLAN NAME */}
                {/* ================================================= */}

                <h3
                  className="
                mb-3
                text-[24px]
                font-bold
                tracking-[-0.4px]
                text-gray-900
              "
                >
                  {plan.name}
                </h3>

                {/* ================================================= */}
                {/* PRICE */}
                {/* ================================================= */}

                <div className="mb-5 flex items-baseline gap-2">

                  <span
                    className={`
                  font-bold
                  tracking-[-0.8px]
                  text-gray-900

                  ${plan.type === "enterprise"
                        ? "text-[25px]"
                        : "text-[34px]"
                      }
                `}
                  >
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span
                      className="
                    text-[14px]
                    font-medium
                    text-gray-500
                  "
                    >
                      {plan.period}
                    </span>
                  )}

                </div>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                mb-8
                min-h-[78px]
                text-[15px]
                font-medium
                leading-[1.65]
                text-gray-500
              "
                >
                  {plan.description}
                </p>

                {/* ================================================= */}
                {/* FEATURES */}
                {/* ================================================= */}

                <div className="flex-1 space-y-4">

                  {plan.features.map((feature, index) => (

                    <div
                      key={`${plan.id}-feature-${index}`}
                      className="flex items-start gap-3"
                    >

                      <Check
                        size={19}
                        strokeWidth={2.5}
                        className="
                      mt-[2px]
                      shrink-0
                      text-[#00c875]
                    "
                      />

                      <span
                        className="
                      text-[15px]
                      font-medium
                      leading-6
                      text-gray-600
                    "
                      >
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* ================================================= */}
                {/* BUTTON */}
                {/* ================================================= */}

                <button
                  type="button"
                  onClick={() => {

                    // TRIAL PLAN
                    if (plan.type === "trial") {
                      setSelectedPlan(plan);
                      setShowTrialDrawer(true);
                    }

                    // NORMAL / POPULAR PLANS
                    if (
                      plan.type === "normal" ||
                      plan.type === "popular"
                    ) {
                      setSelectedPlan(plan);
                      setShowPurchaseDrawer(true);
                    }

                    // ENTERPRISE
                    if (plan.type === "enterprise") {
                      // Keep your existing Contact Us behavior here
                      // if you already have one.
                    }

                  }}
                  className={`
                mt-8
                flex
                h-[54px]
                w-full
                items-center
                justify-center
                rounded-[13px]
                px-5
                text-[16px]
                font-semibold
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg

                ${plan.type === "popular"
                      ? "bg-[#ffbf00] text-gray-900 hover:bg-[#ffc62e]"
                      : plan.type === "enterprise"
                        ? "border-2 border-[#00c875] bg-white text-[#00b968] hover:bg-[#eafff5]"
                        : "bg-[#00b968] text-white hover:bg-[#00a85f]"
                    }
              `}
                >
                  {plan.button}
                </button>

              </div>

            ))}

          </div>
        )}

      </div>

      {/* ================================================= */}
      {/* FREE TRIAL DRAWER */}
      {/* ================================================= */}

      <FreeTrialDrawer
        isOpen={showTrialDrawer}
        onClose={() => {
          setShowTrialDrawer(false);
          setSelectedPlan(null);
        }}
      />

      {/* ================================================= */}
      {/* PURCHASE DRAWER */}
      {/* ================================================= */}

      <PurchaseDrawer
        isOpen={showPurchaseDrawer}
        onClose={() => {
          setShowPurchaseDrawer(false);
          setSelectedPlan(null);
        }}
        selectedPlan={selectedPlan}
      />

    </section>
  );
}

export default Pricing;

