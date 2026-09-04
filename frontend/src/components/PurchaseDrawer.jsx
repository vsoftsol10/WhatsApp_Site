

// import { useEffect, useState } from "react";
// import {
//   Check,
//   X,
//   ArrowRight,
//   ArrowLeft,
//   Smartphone,
//   CreditCard,
//   Landmark,
//   Tag,
// } from "lucide-react";

// export default function PurchaseDrawer({
//   isOpen,
//   onClose,
//   selectedPlan,
// }) {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     companyName: "",
//     ownerName: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const [emailVerified, setEmailVerified] = useState(false);

//   // Payment method
//   const [paymentMethod, setPaymentMethod] = useState("upi");

//   // Coupon
//   const [coupon, setCoupon] = useState("");
//   const [couponAdded, setCouponAdded] = useState(false);

//   // ============================================================
//   // RESET DRAWER
//   // ============================================================

//   useEffect(() => {
//     if (isOpen) {
//       setStep(1);
//       setEmailVerified(false);
//       setPaymentMethod("upi");
//       setCoupon("");
//       setCouponAdded(false);

//       setFormData({
//         companyName: "",
//         ownerName: "",
//         phone: "",
//         email: "",
//         address: "",
//       });
//     }
//   }, [isOpen, selectedPlan?.name]);

//   // ============================================================
//   // ESCAPE KEY
//   // ============================================================

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscape);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [isOpen, onClose]);

//   // ============================================================
//   // INPUT CHANGE
//   // ============================================================

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "email") {
//       setEmailVerified(false);
//     }
//   };

//   // ============================================================
//   // VERIFY EMAIL
//   // ============================================================

//   const handleVerifyEmail = () => {
//     if (!formData.email.trim()) {
//       alert("Please enter your email address.");
//       return;
//     }

//     // UI-only for now
//     setEmailVerified(true);
//   };

//   // ============================================================
//   // PAYMENT BUTTON
//   // ============================================================

//   const handlePayment = () => {
//     if (
//       !formData.companyName.trim() ||
//       !formData.ownerName.trim() ||
//       !formData.phone.trim() ||
//       !formData.email.trim() ||
//       !formData.address.trim()
//     ) {
//       alert("Please complete all required details.");
//       return;
//     }

//     // SAME DRAWER → STEP 2
//     setStep(2);
//   };

//   // ============================================================
//   // BACK TO DETAILS
//   // ============================================================

//   const handleBack = () => {
//     setStep(1);
//   };

//   // ============================================================
//   // ADD COUPON
//   // ============================================================

//   const handleAddCoupon = () => {
//     if (!coupon.trim()) {
//       alert("Please enter a coupon code.");
//       return;
//     }

//     setCouponAdded(true);
//   };

//   // ============================================================
//   // PRICE CALCULATION
//   // ============================================================

//   const getPrice = () => {
//     if (!selectedPlan?.price) return 0;

//     const numericPrice = Number(
//       String(selectedPlan.price).replace(/[^\d.]/g, "")
//     );

//     return Number.isFinite(numericPrice) ? numericPrice : 0;
//   };

//   const basePrice = getPrice();

//   const gst = Math.round(basePrice * 0.18);

//   const total = basePrice + gst;

//   const formatCurrency = (amount) => {
//     return `₹${amount.toLocaleString("en-IN")}`;
//   };

//   return (
//     <>
//       {/* ====================================================== */}
//       {/* OVERLAY */}
//       {/* ====================================================== */}

//       <div
//         className={`
//           fixed
//           inset-0
//           z-[999]
//           bg-black/30
//           transition-opacity
//           duration-500
//           ease-in-out
//           ${
//             isOpen && selectedPlan
//               ? "pointer-events-auto opacity-100"
//               : "pointer-events-none opacity-0"
//           }
//         `}
//         onClick={onClose}
//       />

//       {/* ====================================================== */}
//       {/* RIGHT SIDE DRAWER */}
//       {/* ====================================================== */}

//       <aside
//         className={`
//           fixed
//           right-0
//           top-0
//           z-[1000]
//           flex
//           h-screen
//           w-full
//           max-w-[390px]
//           flex-col
//           bg-white
//           shadow-2xl
//           transition-transform
//           duration-500
//           ease-[cubic-bezier(0.4,0,0.2,1)]
//           ${
//             isOpen && selectedPlan
//               ? "translate-x-0"
//               : "translate-x-full"
//           }
//         `}
//       >
//         {/* ====================================================== */}
//         {/* HEADER */}
//         {/* ====================================================== */}

//         <div
//           className="
//             shrink-0
//             border-b
//             border-gray-300
//             px-4
//             pb-4
//             pt-6
//           "
//         >
//           <div className="flex items-start justify-between">
//             <div>
//               <h2
//                 className="
//                   text-[20px]
//                   font-semibold
//                   leading-tight
//                   text-gray-900
//                 "
//               >
//                 Complete Purchase
//               </h2>

//               <p
//                 className="
//                   mt-1
//                   text-[13px]
//                   text-gray-600
//                 "
//               >
//                 Review your plan and proceed
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={onClose}
//               className="
//                 flex
//                 h-8
//                 w-8
//                 items-center
//                 justify-center
//                 text-[#00c875]
//                 transition-transform
//                 duration-200
//                 hover:scale-110
//               "
//               aria-label="Close"
//             >
//               <X size={25} strokeWidth={2} />
//             </button>
//           </div>
//         </div>

//         {/* ====================================================== */}
//         {/* STEP INDICATOR */}
//         {/* ====================================================== */}

//         <div
//           className="
//             shrink-0
//             border-b
//             border-gray-200
//             px-4
//           "
//         >
//           <div className="flex h-12 items-end">
//             {/* STEP 1 */}

//             <div
//               className={`
//                 relative
//                 flex
//                 h-full
//                 flex-1
//                 items-center
//                 justify-center
//                 text-[11px]
//                 font-bold
//                 tracking-wide
//                 ${
//                   step === 1
//                     ? "text-[#00c875]"
//                     : "text-gray-900"
//                 }
//               `}
//             >
//               01 PLAN &amp; DETAILS

//               {step === 1 && (
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-full
//                     bg-[#00c875]
//                   "
//                 />
//               )}
//             </div>

//             {/* STEP 2 */}

//             <div
//               className={`
//                 relative
//                 flex
//                 h-full
//                 flex-1
//                 items-center
//                 justify-center
//                 text-[11px]
//                 font-bold
//                 tracking-wide
//                 ${
//                   step === 2
//                     ? "text-[#00c875]"
//                     : "text-gray-400"
//                 }
//               `}
//             >
//               02 PAYMENT

//               {step === 2 && (
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-full
//                     bg-[#00c875]
//                   "
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ====================================================== */}
//         {/* CONTENT */}
//         {/* ====================================================== */}

//         <div
//           className="
//             flex-1
//             overflow-y-auto
//             px-4
//             pb-6
//           "
//         >
//           {/* ==================================================== */}
//           {/* STEP 1 */}
//           {/* ==================================================== */}

//           {step === 1 && (
//             <>
//               {/* SELECTED PLAN */}

//               <div
//                 className="
//                   mt-5
//                   rounded-[8px]
//                   border
//                   border-gray-400
//                   bg-white
//                   px-3
//                   py-3
//                 "
//               >
//                 <div className="mb-2">
//                   <span
//                     className="
//                       inline-flex
//                       rounded-[4px]
//                       bg-[#00c875]
//                       px-2
//                       py-0.5
//                       text-[9px]
//                       font-semibold
//                       text-white
//                     "
//                   >
//                     selected
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3
//                       className="
//                         text-[15px]
//                         font-bold
//                         text-gray-900
//                       "
//                     >
//                       {selectedPlan?.name}
//                     </h3>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[10px]
//                         font-medium
//                         text-gray-500
//                       "
//                     >
//                       Billed monthly · GST applied at checkout
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       text-[15px]
//                       font-semibold
//                       text-gray-900
//                     "
//                   >
//                     {selectedPlan?.price}/mo
//                   </div>
//                 </div>

//                 <div
//                   className="
//                     my-3
//                     border-t
//                     border-dashed
//                     border-gray-400
//                   "
//                 />

//                 <div
//                   className="
//                     grid
//                     grid-cols-2
//                     gap-x-4
//                     gap-y-2
//                   "
//                 >
//                   {selectedPlan?.features?.map((feature) => (
//                     <div
//                       key={feature}
//                       className="
//                         flex
//                         items-start
//                         gap-1.5
//                       "
//                     >
//                       <Check
//                         size={15}
//                         strokeWidth={2.5}
//                         className="
//                           mt-[2px]
//                           shrink-0
//                           text-[#00c875]
//                         "
//                       />

//                       <span
//                         className="
//                           text-[11px]
//                           leading-4
//                           text-gray-600
//                         "
//                       >
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* YOUR DETAILS */}

//               <div className="pt-6">
//                 <h3
//                   className="
//                     mb-4
//                     text-[14px]
//                     font-bold
//                     tracking-wide
//                     text-gray-800
//                   "
//                 >
//                   YOUR DETAILS
//                 </h3>

//                 {/* COMPANY */}

//                 <div className="mb-4">
//                   <label
//                     className="
//                       mb-2
//                       block
//                       text-[15px]
//                       text-gray-700
//                     "
//                   >
//                     Company Name
//                   </label>

//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     placeholder="ABC Technologies"
//                     className="
//                       h-[40px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[14px]
//                       outline-none
//                       transition
//                       placeholder:text-gray-400
//                       focus:border-[#00c875]
//                       focus:ring-1
//                       focus:ring-[#00c875]
//                     "
//                   />
//                 </div>

//                 {/* OWNER */}

//                 <div className="mb-4">
//                   <label
//                     className="
//                       mb-2
//                       block
//                       text-[15px]
//                       text-gray-700
//                     "
//                   >
//                     Owner Name
//                   </label>

//                   <input
//                     type="text"
//                     name="ownerName"
//                     value={formData.ownerName}
//                     onChange={handleChange}
//                     placeholder="John Smith"
//                     className="
//                       h-[40px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[14px]
//                       outline-none
//                       transition
//                       placeholder:text-gray-400
//                       focus:border-[#00c875]
//                       focus:ring-1
//                       focus:ring-[#00c875]
//                     "
//                   />
//                 </div>

//                 {/* PHONE */}

//                 <div className="mb-4">
//                   <label
//                     className="
//                       mb-2
//                       block
//                       text-[15px]
//                       text-gray-700
//                     "
//                   >
//                     Phone Number
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="10 digit mobile number"
//                     maxLength={10}
//                     className="
//                       h-[40px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[14px]
//                       outline-none
//                       transition
//                       placeholder:text-gray-400
//                       focus:border-[#00c875]
//                       focus:ring-1
//                       focus:ring-[#00c875]
//                     "
//                   />
//                 </div>

//                 {/* EMAIL */}

//                 <div className="mb-4">
//                   <label
//                     className="
//                       mb-2
//                       block
//                       text-[15px]
//                       text-gray-700
//                     "
//                   >
//                     Email Address
//                   </label>

//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="company@gmail.com"
//                       className="
//                         h-[40px]
//                         w-full
//                         rounded-[8px]
//                         border
//                         border-gray-400
//                         px-3
//                         pr-[65px]
//                         text-[14px]
//                         outline-none
//                         transition
//                         placeholder:text-gray-400
//                         focus:border-[#00c875]
//                         focus:ring-1
//                         focus:ring-[#00c875]
//                       "
//                     />

//                     <button
//                       type="button"
//                       onClick={handleVerifyEmail}
//                       className={`
//                         absolute
//                         right-1
//                         top-1/2
//                         -translate-y-1/2
//                         rounded-[5px]
//                         px-2
//                         py-1
//                         text-[9px]
//                         font-semibold
//                         text-white
//                         ${
//                           emailVerified
//                             ? "bg-gray-500"
//                             : "bg-[#00c875] hover:bg-[#00b86b]"
//                         }
//                       `}
//                     >
//                       {emailVerified ? "Verified" : "Verify"}
//                     </button>
//                   </div>
//                 </div>

//                 {/* ADDRESS */}

//                 <div className="mb-6">
//                   <label
//                     className="
//                       mb-2
//                       block
//                       text-[15px]
//                       text-gray-700
//                     "
//                   >
//                     Address
//                   </label>

//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     placeholder="Enter company address"
//                     rows={3}
//                     className="
//                       w-full
//                       resize-none
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       py-2
//                       text-[14px]
//                       outline-none
//                       transition
//                       placeholder:text-gray-400
//                       focus:border-[#00c875]
//                       focus:ring-1
//                       focus:ring-[#00c875]
//                     "
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           {/* ==================================================== */}
//           {/* STEP 2 — PAYMENT */}
//           {/* ==================================================== */}

//           {step === 2 && (
//             <div className="pt-6">
//               {/* PAYMENT DETAILS */}

//               <h3
//                 className="
//                   mb-5
//                   px-2
//                   text-[14px]
//                   font-bold
//                   tracking-[1.2px]
//                   text-gray-800
//                 "
//               >
//                 PAYMENT DETAILS
//               </h3>

//               {/* ================================================= */}
//               {/* UPI */}
//               {/* ================================================= */}

//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod("upi")}
//                 className="
//                   flex
//                   w-full
//                   items-center
//                   gap-3
//                   border-b
//                   border-[#00c875]
//                   px-3
//                   py-4
//                   text-left
//                 "
//               >
//                 {/* Radio */}

//                 <div
//                   className="
//                     flex
//                     h-[16px]
//                     w-[16px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#00c875]
//                   "
//                 >
//                   {paymentMethod === "upi" && (
//                     <div
//                       className="
//                         h-[8px]
//                         w-[8px]
//                         rounded-full
//                         bg-[#00c875]
//                       "
//                     />
//                   )}
//                 </div>

//                 {/* Icon */}

//                 <div
//                   className="
//                     flex
//                     h-[30px]
//                     w-[30px]
//                     items-center
//                     justify-center
//                     rounded-[6px]
//                     border
//                     border-[#00c875]
//                     text-[#00c875]
//                   "
//                 >
//                   <Smartphone size={17} />
//                 </div>

//                 {/* Text */}

//                 <div>
//                   <p
//                     className="
//                       text-[13px]
//                       font-semibold
//                       text-gray-800
//                     "
//                   >
//                     UPI
//                   </p>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       text-gray-500
//                     "
//                   >
//                     Pay via UPI ID
//                   </p>
//                 </div>
//               </button>

//               {/* ================================================= */}
//               {/* CREDIT / DEBIT CARD */}
//               {/* ================================================= */}

//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod("card")}
//                 className="
//                   flex
//                   w-full
//                   items-center
//                   gap-3
//                   border-b
//                   border-[#00c875]
//                   px-3
//                   py-4
//                   text-left
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     h-[16px]
//                     w-[16px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#00c875]
//                   "
//                 >
//                   {paymentMethod === "card" && (
//                     <div
//                       className="
//                         h-[8px]
//                         w-[8px]
//                         rounded-full
//                         bg-[#00c875]
//                       "
//                     />
//                   )}
//                 </div>

//                 <div
//                   className="
//                     flex
//                     h-[30px]
//                     w-[30px]
//                     items-center
//                     justify-center
//                     rounded-[6px]
//                     border
//                     border-[#00c875]
//                     text-[#00c875]
//                   "
//                 >
//                   <CreditCard size={17} />
//                 </div>

//                 <div>
//                   <p
//                     className="
//                       text-[13px]
//                       font-semibold
//                       text-gray-800
//                     "
//                   >
//                     Credit / Debit Card
//                   </p>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       text-gray-500
//                     "
//                   >
//                     Visa, Mastercard, Rupay
//                   </p>
//                 </div>
//               </button>

//               {/* ================================================= */}
//               {/* NET BANKING */}
//               {/* ================================================= */}

//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod("netbanking")}
//                 className="
//                   flex
//                   w-full
//                   items-center
//                   gap-3
//                   border-b
//                   border-[#00c875]
//                   px-3
//                   py-4
//                   text-left
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     h-[16px]
//                     w-[16px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#00c875]
//                   "
//                 >
//                   {paymentMethod === "netbanking" && (
//                     <div
//                       className="
//                         h-[8px]
//                         w-[8px]
//                         rounded-full
//                         bg-[#00c875]
//                       "
//                     />
//                   )}
//                 </div>

//                 <div
//                   className="
//                     flex
//                     h-[30px]
//                     w-[30px]
//                     items-center
//                     justify-center
//                     rounded-[6px]
//                     border
//                     border-[#00c875]
//                     text-[#00c875]
//                   "
//                 >
//                   <Landmark size={17} />
//                 </div>

//                 <div>
//                   <p
//                     className="
//                       text-[13px]
//                       font-semibold
//                       text-gray-800
//                     "
//                   >
//                     Net Banking
//                   </p>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       text-gray-500
//                     "
//                   >
//                     All major banks supported
//                   </p>
//                 </div>
//               </button>

//               {/* ================================================= */}
//               {/* COUPON */}
//               {/* ================================================= */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border-b
//                   border-gray-200
//                   px-3
//                   py-5
//                 "
//               >
//                 <div className="flex items-center gap-3">
//                   <Tag
//                     size={17}
//                     className="text-[#00c875]"
//                   />

//                   {couponAdded ? (
//                     <span
//                       className="
//                         text-[12px]
//                         font-semibold
//                         text-gray-700
//                       "
//                     >
//                       {coupon}
//                     </span>
//                   ) : (
//                     <input
//                       type="text"
//                       value={coupon}
//                       onChange={(e) => {
//                         setCoupon(e.target.value);
//                         setCouponAdded(false);
//                       }}
//                       placeholder="Coupon Code"
//                       className="
//                         w-[130px]
//                         border-none
//                         bg-transparent
//                         text-[12px]
//                         outline-none
//                         placeholder:text-gray-700
//                       "
//                     />
//                   )}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleAddCoupon}
//                   className="
//                     text-[12px]
//                     font-bold
//                     text-[#00c875]
//                   "
//                 >
//                   {couponAdded ? "Added" : "Add"}
//                 </button>
//               </div>

//               {/* ================================================= */}
//               {/* PRICE SUMMARY */}
//               {/* ================================================= */}

//               <div className="px-2 pt-5">
//                 {/* BASE PRICE */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     py-2
//                   "
//                 >
//                   <span
//                     className="
//                       text-[10px]
//                       text-gray-700
//                     "
//                   >
//                     {selectedPlan?.name} Plan (GST per month)
//                   </span>

//                   <span
//                     className="
//                       text-[10px]
//                       font-medium
//                       text-gray-900
//                     "
//                   >
//                     {formatCurrency(basePrice)}
//                   </span>
//                 </div>

//                 {/* GST */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     py-2
//                   "
//                 >
//                   <span
//                     className="
//                       text-[10px]
//                       text-gray-700
//                     "
//                   >
//                     Taxes &amp; fees (18% GST)
//                   </span>

//                   <span
//                     className="
//                       text-[10px]
//                       font-medium
//                       text-gray-900
//                     "
//                   >
//                     {formatCurrency(gst)}
//                   </span>
//                 </div>

//                 {/* TOTAL */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     border-t
//                     border-gray-300
//                     py-2.5
//                   "
//                 >
//                   <span
//                     className="
//                       text-[10px]
//                       font-semibold
//                       text-gray-700
//                     "
//                   >
//                     Total
//                   </span>

//                   <span
//                     className="
//                       text-[11px]
//                       font-semibold
//                       text-gray-900
//                     "
//                   >
//                     {formatCurrency(total)}
//                   </span>
//                 </div>
//               </div>

//               {/* ================================================= */}
//               {/* TERMS */}
//               {/* ================================================= */}

//               <p
//                 className="
//                   mt-4
//                   px-2
//                   text-[8px]
//                   leading-[1.45]
//                   text-gray-500
//                 "
//               >
//                 By completing payment, you agree to our Terms of
//                 Service and Privacy Policy. You can cancel your
//                 subscription at any time.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* ====================================================== */}
//         {/* FOOTER */}
//         {/* ====================================================== */}

//         <div
//           className="
//             shrink-0
//             border-t
//             border-gray-200
//             bg-white
//             px-4
//             py-4
//           "
//         >
//           {/* ==================================================== */}
//           {/* STEP 1 FOOTER */}
//           {/* ==================================================== */}

//           {step === 1 && (
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="
//                   h-[40px]
//                   flex-1
//                   rounded-[5px]
//                   border
//                   border-gray-300
//                   bg-white
//                   text-[13px]
//                   font-semibold
//                   text-[#00b968]
//                   transition
//                   hover:bg-gray-50
//                 "
//               >
//                 Cancel
//               </button>

//               <button
//                 type="button"
//                 onClick={handlePayment}
//                 className="
//                   flex
//                   h-[40px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   bg-[#00c875]
//                   text-[13px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#00b968]
//                 "
//               >
//                 Payment
//                 <ArrowRight size={16} />
//               </button>
//             </div>
//           )}

//           {/* ==================================================== */}
//           {/* STEP 2 FOOTER */}
//           {/* ==================================================== */}

//           {step === 2 && (
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="
//                   flex
//                   h-[40px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   border
//                   border-gray-300
//                   bg-white
//                   text-[13px]
//                   font-semibold
//                   text-[#00b968]
//                   transition
//                   hover:bg-gray-50
//                 "
//               >
//                 <ArrowLeft size={15} />
//                 Back
//               </button>

//               <button
//                 type="button"
//                 onClick={() => {
//                   alert(
//                     `Proceeding to payment for ${selectedPlan?.name}`
//                   );
//                 }}
//                 className="
//                   flex
//                   h-[40px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   bg-[#00c875]
//                   text-[13px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#00b968]
//                 "
//               >
//                 Pay {formatCurrency(total)}
//                 <ArrowRight size={16} />
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  CreditCard,
  Landmark,
  Tag,
} from "lucide-react";

export default function PurchaseDrawer({
  isOpen,
  onClose,
  selectedPlan,
}) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [couponAdded, setCouponAdded] = useState(false);

  // ============================================================
  // RESET DRAWER
  // ============================================================

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setEmailVerified(false);
      setPaymentMethod("upi");
      setCoupon("");
      setCouponAdded(false);

      setFormData({
        companyName: "",
        ownerName: "",
        phone: "",
        email: "",
        address: "",
      });
    }
  }, [isOpen, selectedPlan?.name]);

  // ============================================================
  // ESCAPE KEY
  // ============================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // ============================================================
  // INPUT CHANGE
  // ============================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setEmailVerified(false);
    }
  };

  // ============================================================
  // VERIFY EMAIL
  // ============================================================

  const handleVerifyEmail = () => {
    if (!formData.email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // UI-only for now
    setEmailVerified(true);
  };

  // ============================================================
  // PAYMENT BUTTON
  // ============================================================

  const handlePayment = () => {
    if (
      !formData.companyName.trim() ||
      !formData.ownerName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.address.trim()
    ) {
      alert("Please complete all required details.");
      return;
    }

    // SAME DRAWER → STEP 2
    setStep(2);
  };

  // ============================================================
  // BACK TO DETAILS
  // ============================================================

  const handleBack = () => {
    setStep(1);
  };

  // ============================================================
  // ADD COUPON
  // ============================================================

  const handleAddCoupon = () => {
    if (!coupon.trim()) {
      alert("Please enter a coupon code.");
      return;
    }

    setCouponAdded(true);
  };

  // ============================================================
  // PRICE CALCULATION
  // ============================================================

  const getPrice = () => {
    if (!selectedPlan?.price) return 0;

    const numericPrice = Number(
      String(selectedPlan.price).replace(/[^\d.]/g, "")
    );

    return Number.isFinite(numericPrice) ? numericPrice : 0;
  };

  const basePrice = getPrice();

  const gst = Math.round(basePrice * 0.18);

  const total = basePrice + gst;

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <>
      {/* ====================================================== */}
      {/* OVERLAY */}
      {/* ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-black/30
          transition-opacity
          duration-500
          ease-in-out
          ${
            isOpen && selectedPlan
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={onClose}
      />

      {/* ====================================================== */}
      {/* RIGHT SIDE DRAWER */}
      {/* ====================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[1000]
          flex
          h-screen
          w-full
          max-w-[390px]
          flex-col
          bg-white
          shadow-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            isOpen && selectedPlan
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <div
          className="
            shrink-0
            border-b
            border-gray-300
            px-4
            pb-4
            pt-6
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <h2
                className="
                  text-[21px]
                  font-semibold
                  leading-tight
                  text-gray-900
                "
              >
                Complete Purchase
              </h2>

              <p
                className="
                  mt-1
                  text-[14px]
                  text-gray-600
                "
              >
                Review your plan and proceed
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                text-[#00c875]
                transition-transform
                duration-200
                hover:scale-110
              "
              aria-label="Close"
            >
              <X size={25} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ====================================================== */}
        {/* STEP INDICATOR */}
        {/* ====================================================== */}

        <div
          className="
            shrink-0
            border-b
            border-gray-200
            px-4
          "
        >
          <div className="flex h-12 items-end">
            {/* STEP 1 */}

            <div
              className={`
                relative
                flex
                h-full
                flex-1
                items-center
                justify-center
                text-[13px]
                font-bold
                tracking-wide
                ${
                  step === 1
                    ? "text-[#00c875]"
                    : "text-gray-900"
                }
              `}
            >
              01 PLAN &amp; DETAILS

              {step === 1 && (
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#00c875]
                  "
                />
              )}
            </div>

            {/* STEP 2 */}

            <div
              className={`
                relative
                flex
                h-full
                flex-1
                items-center
                justify-center
                text-[13px]
                font-bold
                tracking-wide
                ${
                  step === 2
                    ? "text-[#00c875]"
                    : "text-gray-400"
                }
              `}
            >
              02 PAYMENT

              {step === 2 && (
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#00c875]
                  "
                />
              )}
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* CONTENT */}
        {/* ====================================================== */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-4
            pb-6
          "
        >
          {/* ==================================================== */}
          {/* STEP 1 */}
          {/* ==================================================== */}

          {step === 1 && (
            <>
              {/* SELECTED PLAN */}

              <div
                className="
                  mt-5
                  rounded-[8px]
                  border
                  border-gray-400
                  bg-white
                  px-3
                  py-3
                "
              >
                <div className="mb-2">
                  <span
                    className="
                      inline-flex
                      rounded-[4px]
                      bg-[#00c875]
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    selected
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="
                        text-[16px]
                        font-bold
                        text-gray-900
                      "
                    >
                      {selectedPlan?.name}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        font-medium
                        text-gray-500
                      "
                    >
                      Billed monthly · GST applied at checkout
                    </p>
                  </div>

                  <div
                    className="
                      text-[16px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {selectedPlan?.price}/mo
                  </div>
                </div>

                <div
                  className="
                    my-3
                    border-t
                    border-dashed
                    border-gray-400
                  "
                />

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-x-4
                    gap-y-2
                  "
                >
                  {selectedPlan?.features?.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-1.5
                      "
                    >
                      <Check
                        size={15}
                        strokeWidth={2.5}
                        className="
                          mt-[2px]
                          shrink-0
                          text-[#00c875]
                        "
                      />

                      <span
                        className="
                          text-[12px]
                          leading-4
                          text-gray-600
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* YOUR DETAILS */}

              <div className="pt-6">
                <h3
                  className="
                    mb-4
                    text-[15px]
                    font-bold
                    tracking-wide
                    text-gray-800
                  "
                >
                  YOUR DETAILS
                </h3>

                {/* COMPANY */}

                <div className="mb-4">
                  <label
                    className="
                      mb-2
                      block
                      text-[15px]
                      text-gray-700
                    "
                  >
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="ABC Technologies"
                    className="
                      h-[42px]
                      w-full
                      rounded-[8px]
                      border
                      border-gray-400
                      px-3
                      text-[15px]
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#00c875]
                      focus:ring-1
                      focus:ring-[#00c875]
                    "
                  />
                </div>

                {/* OWNER */}

                <div className="mb-4">
                  <label
                    className="
                      mb-2
                      block
                      text-[15px]
                      text-gray-700
                    "
                  >
                    Owner Name
                  </label>

                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="
                      h-[42px]
                      w-full
                      rounded-[8px]
                      border
                      border-gray-400
                      px-3
                      text-[15px]
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#00c875]
                      focus:ring-1
                      focus:ring-[#00c875]
                    "
                  />
                </div>

                {/* PHONE */}

                <div className="mb-4">
                  <label
                    className="
                      mb-2
                      block
                      text-[15px]
                      text-gray-700
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    maxLength={10}
                    className="
                      h-[42px]
                      w-full
                      rounded-[8px]
                      border
                      border-gray-400
                      px-3
                      text-[15px]
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#00c875]
                      focus:ring-1
                      focus:ring-[#00c875]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div className="mb-4">
                  <label
                    className="
                      mb-2
                      block
                      text-[15px]
                      text-gray-700
                    "
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="company@gmail.com"
                      className="
                        h-[42px]
                        w-full
                        rounded-[8px]
                        border
                        border-gray-400
                        px-3
                        pr-[70px]
                        text-[15px]
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-[#00c875]
                        focus:ring-1
                        focus:ring-[#00c875]
                      "
                    />

                    <button
                      type="button"
                      onClick={handleVerifyEmail}
                      className={`
                        absolute
                        right-1
                        top-1/2
                        -translate-y-1/2
                        rounded-[5px]
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-white
                        ${
                          emailVerified
                            ? "bg-gray-500"
                            : "bg-[#00c875] hover:bg-[#00b86b]"
                        }
                      `}
                    >
                      {emailVerified ? "Verified" : "Verify"}
                    </button>
                  </div>
                </div>

                {/* ADDRESS */}

                <div className="mb-6">
                  <label
                    className="
                      mb-2
                      block
                      text-[15px]
                      text-gray-700
                    "
                  >
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter company address"
                    rows={3}
                    className="
                      w-full
                      resize-none
                      rounded-[8px]
                      border
                      border-gray-400
                      px-3
                      py-2.5
                      text-[15px]
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#00c875]
                      focus:ring-1
                      focus:ring-[#00c875]
                    "
                  />
                </div>
              </div>
            </>
          )}

          {/* ==================================================== */}
          {/* STEP 2 — PAYMENT */}
          {/* ==================================================== */}

          {step === 2 && (
            <div className="pt-6">
              {/* PAYMENT DETAILS */}

              <h3
                className="
                  mb-5
                  px-2
                  text-[15px]
                  font-bold
                  tracking-[1.2px]
                  text-gray-800
                "
              >
                PAYMENT DETAILS
              </h3>

              {/* ================================================= */}
              {/* UPI */}
              {/* ================================================= */}

              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-b
                  border-[#00c875]
                  px-3
                  py-4
                  text-left
                "
              >
                {/* Radio */}

                <div
                  className="
                    flex
                    h-[17px]
                    w-[17px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#00c875]
                  "
                >
                  {paymentMethod === "upi" && (
                    <div
                      className="
                        h-[9px]
                        w-[9px]
                        rounded-full
                        bg-[#00c875]
                      "
                    />
                  )}
                </div>

                {/* Icon */}

                <div
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-[#00c875]
                    text-[#00c875]
                  "
                >
                  <Smartphone size={18} />
                </div>

                {/* Text */}

                <div>
                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-gray-800
                    "
                  >
                    UPI
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Pay via UPI ID
                  </p>
                </div>
              </button>

              {/* ================================================= */}
              {/* CREDIT / DEBIT CARD */}
              {/* ================================================= */}

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-b
                  border-[#00c875]
                  px-3
                  py-4
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-[17px]
                    w-[17px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#00c875]
                  "
                >
                  {paymentMethod === "card" && (
                    <div
                      className="
                        h-[9px]
                        w-[9px]
                        rounded-full
                        bg-[#00c875]
                      "
                    />
                  )}
                </div>

                <div
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-[#00c875]
                    text-[#00c875]
                  "
                >
                  <CreditCard size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-gray-800
                    "
                  >
                    Credit / Debit Card
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Visa, Mastercard, Rupay
                  </p>
                </div>
              </button>

              {/* ================================================= */}
              {/* NET BANKING */}
              {/* ================================================= */}

              <button
                type="button"
                onClick={() => setPaymentMethod("netbanking")}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-b
                  border-[#00c875]
                  px-3
                  py-4
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-[17px]
                    w-[17px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#00c875]
                  "
                >
                  {paymentMethod === "netbanking" && (
                    <div
                      className="
                        h-[9px]
                        w-[9px]
                        rounded-full
                        bg-[#00c875]
                      "
                    />
                  )}
                </div>

                <div
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-[#00c875]
                    text-[#00c875]
                  "
                >
                  <Landmark size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-gray-800
                    "
                  >
                    Net Banking
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[12px]
                      text-gray-500
                    "
                  >
                    All major banks supported
                  </p>
                </div>
              </button>

              {/* ================================================= */}
              {/* COUPON */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  px-3
                  py-5
                "
              >
                <div className="flex items-center gap-3">
                  <Tag
                    size={18}
                    className="text-[#00c875]"
                  />

                  {couponAdded ? (
                    <span
                      className="
                        text-[13px]
                        font-semibold
                        text-gray-700
                      "
                    >
                      {coupon}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                        setCouponAdded(false);
                      }}
                      placeholder="Coupon Code"
                      className="
                        w-[140px]
                        border-none
                        bg-transparent
                        text-[13px]
                        outline-none
                        placeholder:text-gray-700
                      "
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleAddCoupon}
                  className="
                    text-[13px]
                    font-bold
                    text-[#00c875]
                  "
                >
                  {couponAdded ? "Added" : "Add"}
                </button>
              </div>

              {/* ================================================= */}
              {/* PRICE SUMMARY */}
              {/* ================================================= */}

              <div className="px-2 pt-5">
                {/* BASE PRICE */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    py-2
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-700
                    "
                  >
                    {selectedPlan?.name} Plan (GST per month)
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-gray-900
                    "
                  >
                    {formatCurrency(basePrice)}
                  </span>
                </div>

                {/* GST */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    py-2
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-700
                    "
                  >
                    Taxes &amp; fees (18% GST)
                  </span>

                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-gray-900
                    "
                  >
                    {formatCurrency(gst)}
                  </span>
                </div>

                {/* TOTAL */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-gray-300
                    py-2.5
                  "
                >
                  <span
                    className="
                      text-[12px]
                      font-semibold
                      text-gray-700
                    "
                  >
                    Total
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* ================================================= */}
              {/* TERMS */}
              {/* ================================================= */}

              <p
                className="
                  mt-4
                  px-2
                  text-[10px]
                  leading-[1.5]
                  text-gray-500
                "
              >
                By completing payment, you agree to our Terms of
                Service and Privacy Policy. You can cancel your
                subscription at any time.
              </p>
            </div>
          )}
        </div>

        {/* ====================================================== */}
        {/* FOOTER */}
        {/* ====================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-gray-200
            bg-white
            px-4
            py-4
          "
        >
          {/* ==================================================== */}
          {/* STEP 1 FOOTER */}
          {/* ==================================================== */}

          {step === 1 && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="
                  h-[42px]
                  flex-1
                  rounded-[5px]
                  border
                  border-gray-300
                  bg-white
                  text-[14px]
                  font-semibold
                  text-[#00b968]
                  transition
                  hover:bg-gray-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handlePayment}
                className="
                  flex
                  h-[42px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  bg-[#00c875]
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#00b968]
                "
              >
                Payment
                <ArrowRight size={17} />
              </button>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 2 FOOTER */}
          {/* ==================================================== */}

          {step === 2 && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="
                  flex
                  h-[42px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  border
                  border-gray-300
                  bg-white
                  text-[14px]
                  font-semibold
                  text-[#00b968]
                  transition
                  hover:bg-gray-50
                "
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <button
                type="button"
                onClick={() => {
                  alert(
                    `Proceeding to payment for ${selectedPlan?.name}`
                  );
                }}
                className="
                  flex
                  h-[42px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  bg-[#00c875]
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#00b968]
                "
              >
                Pay {formatCurrency(total)}
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}