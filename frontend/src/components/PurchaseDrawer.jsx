
// import { useEffect, useState } from "react";
// import axios from "axios";

// import {
//   Check,
//   X,
//   ArrowRight,
//   ArrowLeft,
//   Smartphone,
//   CreditCard,
//   Landmark,
//   Tag,
//   ChevronDown,
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

//   // UPI
//   const [upiId, setUpiId] = useState("");

//   // Card
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");

//   // Net banking
//   const [selectedBank, setSelectedBank] = useState("");

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

//       setUpiId("");
//       setCardNumber("");
//       setExpiry("");
//       setCvv("");
//       setSelectedBank("");

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

//     setStep(2);
//   };

//   // ============================================================
//   // RAZORPAY PAYMENT
//   // ============================================================

//   const handleRazorpayPayment = async () => {
//     try {
//       // ============================================================
//       // CHECK SELECTED PLAN
//       // ============================================================

//       if (!selectedPlan) {
//         alert("Please select a plan.");
//         return;
//       }

//       // ============================================================
//       // CHECK COMPANY DETAILS
//       // ============================================================

//       if (
//         !formData.companyName.trim() ||
//         !formData.ownerName.trim() ||
//         !formData.phone.trim() ||
//         !formData.email.trim() ||
//         !formData.address.trim()
//       ) {
//         alert("Please complete all required company details.");
//         setStep(1);
//         return;
//       }

//       // ============================================================
//       // CHECK RAZORPAY SCRIPT
//       // ============================================================

//       if (!window.Razorpay) {
//         alert(
//           "Razorpay is not loaded. Please refresh the page and try again."
//         );
//         return;
//       }

//       // ============================================================
//       // PREPARE CUSTOMER DETAILS
//       // ============================================================

//       const customerDetails = {
//         companyName: formData.companyName.trim(),
//         ownerName: formData.ownerName.trim(),
//         email: formData.email.trim().toLowerCase(),
//         phone: formData.phone.trim(),
//         address: formData.address.trim(),
//       };

//       console.log("Customer details:", customerDetails);

//       // ============================================================
//       // PREPARE PAYMENT DETAILS
//       // ============================================================

//       console.log("Selected plan:", {
//         id: selectedPlan.id,
//         name: selectedPlan.name,
//         price: selectedPlan.price,
//       });

//       console.log("Payment amount:", {
//         basePrice,
//         gst,
//         total,
//       });

//       // ============================================================
//       // CREATE RAZORPAY ORDER
//       // ============================================================

//       console.log("Creating Razorpay order...");

//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/razorpay/create-order`,
//         {
//           amount: total,
//           receipt: `receipt_${Date.now()}`,
//         }
//       );

//       console.log("Create order response:", response.data);

//       if (!response.data.success) {
//         alert(
//           response.data.message ||
//           "Failed to create payment order."
//         );
//         return;
//       }

//       const order = response.data.order;

//       console.log("Razorpay order created:", order);

//       // ============================================================
//       // RAZORPAY CHECKOUT OPTIONS
//       // ============================================================

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,

//         amount: order.amount,

//         currency: order.currency,

//         name: "WhatsApp CRM",

//         description: `${selectedPlan.name} Plan`,

//         order_id: order.id,

//         // ==========================================================
//         // CUSTOMER PREFILL
//         // ==========================================================

//         prefill: {
//           name: customerDetails.ownerName,
//           email: customerDetails.email,
//           contact: customerDetails.phone,
//         },

//         // ==========================================================
//         // PAYMENT SUCCESS HANDLER
//         // ==========================================================

//         handler: async function (paymentResponse) {
//           try {
//             console.log(
//               "Razorpay payment response:",
//               paymentResponse
//             );

//             // ------------------------------------------------------
//             // IMPORTANT DEBUG LOG
//             // ------------------------------------------------------

//             console.log(
//               "Sending company details:",
//               customerDetails
//             );

//             console.log("Sending plan details:", {
//               planId: selectedPlan.id,
//               planName: selectedPlan.name,
//             });

//             console.log("Sending payment details:", {
//               amount: basePrice,
//               tax: gst,
//               totalAmount: total,
//               paymentMethod: "RAZORPAY",
//             });

//             // ------------------------------------------------------
//             // VERIFY PAYMENT WITH BACKEND
//             // ------------------------------------------------------

//             const verifyResponse = await axios.post(
//               `${import.meta.env.VITE_API_URL}/razorpay/verify-payment`,
//               {
//                 // ==================================================
//                 // RAZORPAY PAYMENT DETAILS
//                 // ==================================================

//                 razorpay_order_id:
//                   paymentResponse.razorpay_order_id,

//                 razorpay_payment_id:
//                   paymentResponse.razorpay_payment_id,

//                 razorpay_signature:
//                   paymentResponse.razorpay_signature,

//                 // ==================================================
//                 // COMPANY DETAILS
//                 // ==================================================

//                 companyName: customerDetails.companyName,

//                 ownerName: customerDetails.ownerName,

//                 email: customerDetails.email,

//                 phone: customerDetails.phone,

//                 address: customerDetails.address,

//                 // ==================================================
//                 // PLAN DETAILS
//                 // ==================================================

//                 planId: selectedPlan.id,

//                 planName: selectedPlan.name,

//                 // ==================================================
//                 // PAYMENT AMOUNT
//                 // ==================================================

//                 amount: basePrice,

//                 tax: gst,

//                 totalAmount: total,

//                 paymentMethod: "RAZORPAY",
//               }
//             );

//             // ------------------------------------------------------
//             // VERIFY RESPONSE
//             // ------------------------------------------------------

//             console.log(
//               "Verify payment response:",
//               verifyResponse.data
//             );

//             // ======================================================
//             // SUCCESS
//             // ======================================================

//             if (verifyResponse.data.success) {
//               console.log(
//                 "Payment verified successfully."
//               );

//               console.log(
//                 "Company created:",
//                 verifyResponse.data.company
//               );

//               console.log(
//                 "Subscription created:",
//                 verifyResponse.data.subscription
//               );

//               console.log(
//                 "Payment saved:",
//                 verifyResponse.data.payment
//               );

//               alert(
//                 "Payment successful! Your company account has been created."
//               );

//               onClose();
//             }

//             // ======================================================
//             // FAILURE
//             // ======================================================

//             else {
//               alert(
//                 verifyResponse.data.message ||
//                 "Payment verification failed."
//               );
//             }
//           } catch (error) {
//             console.error(
//               "Payment verification error:",
//               error.response?.data || error.message
//             );

//             console.error(
//               "Payment verification status:",
//               error.response?.status
//             );

//             alert(
//               error.response?.data?.message ||
//               "Payment was completed, but verification failed."
//             );
//           }
//         },

//         // ==========================================================
//         // PAYMENT MODAL CLOSE
//         // ==========================================================

//         modal: {
//           ondismiss: function () {
//             console.log(
//               "Razorpay checkout was closed by the user."
//             );
//           },
//         },

//         // ==========================================================
//         // RAZORPAY THEME
//         // ==========================================================

//         theme: {
//           color: "#00c875",
//         },
//       };

//       // ============================================================
//       // OPEN RAZORPAY
//       // ============================================================

//       console.log("Opening Razorpay Checkout...");

//       const razorpay = new window.Razorpay(options);

//       // ============================================================
//       // RAZORPAY PAYMENT FAILED
//       // ============================================================

//       razorpay.on(
//         "payment.failed",
//         function (response) {
//           console.error(
//             "Razorpay payment failed:",
//             response.error
//           );

//           alert(
//             response.error?.description ||
//             "Payment failed. Please try again."
//           );
//         }
//       );

//       razorpay.open();
//     } catch (error) {
//       // ============================================================
//       // CREATE ORDER / RAZORPAY ERROR
//       // ============================================================

//       console.error(
//         "Razorpay payment error:",
//         error.response?.data || error.message
//       );

//       console.error(
//         "Razorpay error status:",
//         error.response?.status
//       );

//       alert(
//         error.response?.data?.message ||
//         "Unable to start Razorpay payment."
//       );
//     }
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

//   // ============================================================
//   // PAYMENT METHOD CHANGE
//   // ============================================================

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   // ============================================================
//   // CARD NUMBER FORMAT
//   // ============================================================

//   const handleCardNumberChange = (e) => {
//     let value = e.target.value.replace(/\D/g, "");

//     value = value.substring(0, 16);

//     value = value.replace(/(.{4})/g, "$1 ").trim();

//     setCardNumber(value);
//   };

//   // ============================================================
//   // EXPIRY FORMAT
//   // ============================================================

//   const handleExpiryChange = (e) => {
//     let value = e.target.value.replace(/\D/g, "");

//     value = value.substring(0, 4);

//     if (value.length >= 3) {
//       value = `${value.substring(0, 2)}/${value.substring(2)}`;
//     }

//     setExpiry(value);
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
//           ${isOpen && selectedPlan
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
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
//           ${isOpen && selectedPlan
//             ? "translate-x-0"
//             : "translate-x-full"
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
//                   text-[21px]
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
//                   text-[14px]
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
//                 text-[13px]
//                 font-bold
//                 tracking-wide
//                 ${step === 1
//                   ? "text-[#00c875]"
//                   : "text-gray-900"
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
//                 text-[13px]
//                 font-bold
//                 tracking-wide
//                 ${step === 2
//                   ? "text-[#00c875]"
//                   : "text-gray-400"
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
//                       text-[10px]
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
//                         text-[16px]
//                         font-bold
//                         text-gray-900
//                       "
//                     >
//                       {selectedPlan?.name}
//                     </h3>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[11px]
//                         font-medium
//                         text-gray-500
//                       "
//                     >
//                       Billed monthly · GST applied at checkout
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       text-[16px]
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
//                           text-[12px]
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
//                     text-[15px]
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
//                       h-[42px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[15px]
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
//                       h-[42px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[15px]
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
//                       h-[42px]
//                       w-full
//                       rounded-[8px]
//                       border
//                       border-gray-400
//                       px-3
//                       text-[15px]
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
//                         h-[42px]
//                         w-full
//                         rounded-[8px]
//                         border
//                         border-gray-400
//                         px-3
//                         pr-[70px]
//                         text-[15px]
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
//                         px-2.5
//                         py-1.5
//                         text-[10px]
//                         font-semibold
//                         text-white
//                         ${emailVerified
//                           ? "bg-gray-500"
//                           : "bg-[#00c875] hover:bg-[#00b86b]"
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
//                       py-2.5
//                       text-[15px]
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
//                   text-[15px]
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

//               <div
//                 className={`
//                   border-b
//                   border-[#00c875]
//                   ${paymentMethod === "upi"
//                     ? "bg-gray-50"
//                     : "bg-white"
//                   }
//                 `}
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     handlePaymentMethodChange("upi")
//                   }
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     gap-3
//                     px-3
//                     py-4
//                     text-left
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-[17px]
//                       w-[17px]
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[#00c875]
//                     "
//                   >
//                     {paymentMethod === "upi" && (
//                       <div
//                         className="
//                           h-[9px]
//                           w-[9px]
//                           rounded-full
//                           bg-[#00c875]
//                         "
//                       />
//                     )}
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-[32px]
//                       w-[32px]
//                       items-center
//                       justify-center
//                       rounded-[6px]
//                       border
//                       border-[#00c875]
//                       text-[#00c875]
//                     "
//                   >
//                     <Smartphone size={18} />
//                   </div>

//                   <div className="flex-1">
//                     <p
//                       className="
//                         text-[15px]
//                         font-semibold
//                         text-gray-800
//                       "
//                     >
//                       UPI
//                     </p>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[12px]
//                         text-gray-500
//                       "
//                     >
//                       Pay via UPI ID
//                     </p>
//                   </div>

//                   <ChevronDown
//                     size={17}
//                     className={`
//                       text-gray-500
//                       transition-transform
//                       ${paymentMethod === "upi"
//                         ? "rotate-180"
//                         : ""
//                       }
//                     `}
//                   />
//                 </button>

//                 {paymentMethod === "upi" && (
//                   <div className="px-3 pb-4">
//                     <label
//                       className="
//                         mb-2
//                         block
//                         text-[12px]
//                         font-medium
//                         text-gray-700
//                       "
//                     >
//                       Enter UPI ID
//                     </label>

//                     <input
//                       type="text"
//                       value={upiId}
//                       onChange={(e) =>
//                         setUpiId(e.target.value)
//                       }
//                       placeholder="example@upi"
//                       className="
//                         h-[42px]
//                         w-full
//                         rounded-[7px]
//                         border
//                         border-gray-300
//                         bg-white
//                         px-3
//                         text-[13px]
//                         outline-none
//                         placeholder:text-gray-400
//                         focus:border-[#00c875]
//                         focus:ring-1
//                         focus:ring-[#00c875]
//                       "
//                     />

//                     <p
//                       className="
//                         mt-2
//                         text-[10px]
//                         text-gray-500
//                       "
//                     >
//                       Enter your UPI ID to continue with UPI
//                       payment.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* ================================================= */}
//               {/* CREDIT / DEBIT CARD */}
//               {/* ================================================= */}

//               <div
//                 className={`
//                   border-b
//                   border-[#00c875]
//                   ${paymentMethod === "card"
//                     ? "bg-gray-50"
//                     : "bg-white"
//                   }
//                 `}
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     handlePaymentMethodChange("card")
//                   }
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     gap-3
//                     px-3
//                     py-4
//                     text-left
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-[17px]
//                       w-[17px]
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[#00c875]
//                     "
//                   >
//                     {paymentMethod === "card" && (
//                       <div
//                         className="
//                           h-[9px]
//                           w-[9px]
//                           rounded-full
//                           bg-[#00c875]
//                         "
//                       />
//                     )}
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-[32px]
//                       w-[32px]
//                       items-center
//                       justify-center
//                       rounded-[6px]
//                       border
//                       border-[#00c875]
//                       text-[#00c875]
//                     "
//                   >
//                     <CreditCard size={18} />
//                   </div>

//                   <div className="flex-1">
//                     <p
//                       className="
//                         text-[15px]
//                         font-semibold
//                         text-gray-800
//                       "
//                     >
//                       Credit / Debit Card
//                     </p>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[12px]
//                         text-gray-500
//                       "
//                     >
//                       Visa, Mastercard, Rupay
//                     </p>
//                   </div>

//                   <ChevronDown
//                     size={17}
//                     className={`
//                       text-gray-500
//                       transition-transform
//                       ${paymentMethod === "card"
//                         ? "rotate-180"
//                         : ""
//                       }
//                     `}
//                   />
//                 </button>

//                 {paymentMethod === "card" && (
//                   <div className="px-3 pb-4">
//                     <div className="mb-3">
//                       <label
//                         className="
//                           mb-2
//                           block
//                           text-[12px]
//                           font-medium
//                           text-gray-700
//                         "
//                       >
//                         Card Number
//                       </label>

//                       <input
//                         type="text"
//                         value={cardNumber}
//                         onChange={handleCardNumberChange}
//                         placeholder="1234 5678 9012 3456"
//                         inputMode="numeric"
//                         className="
//                           h-[42px]
//                           w-full
//                           rounded-[7px]
//                           border
//                           border-gray-300
//                           bg-white
//                           px-3
//                           text-[13px]
//                           outline-none
//                           placeholder:text-gray-400
//                           focus:border-[#00c875]
//                           focus:ring-1
//                           focus:ring-[#00c875]
//                         "
//                       />
//                     </div>

//                     <div className="flex gap-3">
//                       <div className="flex-1">
//                         <label
//                           className="
//                             mb-2
//                             block
//                             text-[12px]
//                             font-medium
//                             text-gray-700
//                           "
//                         >
//                           Expiry
//                         </label>

//                         <input
//                           type="text"
//                           value={expiry}
//                           onChange={handleExpiryChange}
//                           placeholder="MM/YY"
//                           inputMode="numeric"
//                           className="
//                             h-[42px]
//                             w-full
//                             rounded-[7px]
//                             border
//                             border-gray-300
//                             bg-white
//                             px-3
//                             text-[13px]
//                             outline-none
//                             placeholder:text-gray-400
//                             focus:border-[#00c875]
//                             focus:ring-1
//                             focus:ring-[#00c875]
//                           "
//                         />
//                       </div>

//                       <div className="flex-1">
//                         <label
//                           className="
//                             mb-2
//                             block
//                             text-[12px]
//                             font-medium
//                             text-gray-700
//                           "
//                         >
//                           CVV
//                         </label>

//                         <input
//                           type="password"
//                           value={cvv}
//                           onChange={(e) =>
//                             setCvv(
//                               e.target.value
//                                 .replace(/\D/g, "")
//                                 .substring(0, 4)
//                             )
//                           }
//                           placeholder="CVV"
//                           inputMode="numeric"
//                           className="
//                             h-[42px]
//                             w-full
//                             rounded-[7px]
//                             border
//                             border-gray-300
//                             bg-white
//                             px-3
//                             text-[13px]
//                             outline-none
//                             placeholder:text-gray-400
//                             focus:border-[#00c875]
//                             focus:ring-1
//                             focus:ring-[#00c875]
//                           "
//                         />
//                       </div>
//                     </div>

//                     <p
//                       className="
//                         mt-2
//                         text-[10px]
//                         text-gray-500
//                       "
//                     >
//                       Your card details are securely handled by
//                       Razorpay.
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* ================================================= */}
//               {/* NET BANKING */}
//               {/* ================================================= */}

//               <div
//                 className={`
//                   border-b
//                   border-[#00c875]
//                   ${paymentMethod === "netbanking"
//                     ? "bg-gray-50"
//                     : "bg-white"
//                   }
//                 `}
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     handlePaymentMethodChange("netbanking")
//                   }
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     gap-3
//                     px-3
//                     py-4
//                     text-left
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-[17px]
//                       w-[17px]
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[#00c875]
//                     "
//                   >
//                     {paymentMethod === "netbanking" && (
//                       <div
//                         className="
//                           h-[9px]
//                           w-[9px]
//                           rounded-full
//                           bg-[#00c875]
//                         "
//                       />
//                     )}
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-[32px]
//                       w-[32px]
//                       items-center
//                       justify-center
//                       rounded-[6px]
//                       border
//                       border-[#00c875]
//                       text-[#00c875]
//                     "
//                   >
//                     <Landmark size={18} />
//                   </div>

//                   <div className="flex-1">
//                     <p
//                       className="
//                         text-[15px]
//                         font-semibold
//                         text-gray-800
//                       "
//                     >
//                       Net Banking
//                     </p>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[12px]
//                         text-gray-500
//                       "
//                     >
//                       All major banks supported
//                     </p>
//                   </div>

//                   <ChevronDown
//                     size={17}
//                     className={`
//                       text-gray-500
//                       transition-transform
//                       ${paymentMethod === "netbanking"
//                         ? "rotate-180"
//                         : ""
//                       }
//                     `}
//                   />
//                 </button>

//                 {paymentMethod === "netbanking" && (
//                   <div className="px-3 pb-4">
//                     <label
//                       className="
//                         mb-2
//                         block
//                         text-[12px]
//                         font-medium
//                         text-gray-700
//                       "
//                     >
//                       Select your bank
//                     </label>

//                     <div className="relative">
//                       <select
//                         value={selectedBank}
//                         onChange={(e) =>
//                           setSelectedBank(e.target.value)
//                         }
//                         className="
//                           h-[42px]
//                           w-full
//                           appearance-none
//                           rounded-[7px]
//                           border
//                           border-gray-300
//                           bg-white
//                           px-3
//                           pr-9
//                           text-[13px]
//                           text-gray-700
//                           outline-none
//                           focus:border-[#00c875]
//                           focus:ring-1
//                           focus:ring-[#00c875]
//                         "
//                       >
//                         <option value="">
//                           Select your bank
//                         </option>

//                         <option value="sbi">
//                           State Bank of India
//                         </option>

//                         <option value="hdfc">
//                           HDFC Bank
//                         </option>

//                         <option value="icici">
//                           ICICI Bank
//                         </option>

//                         <option value="axis">
//                           Axis Bank
//                         </option>

//                         <option value="kotak">
//                           Kotak Mahindra Bank
//                         </option>

//                         <option value="bob">
//                           Bank of Baroda
//                         </option>

//                         <option value="pnb">
//                           Punjab National Bank
//                         </option>

//                         <option value="canara">
//                           Canara Bank
//                         </option>
//                       </select>

//                       <ChevronDown
//                         size={16}
//                         className="
//                           pointer-events-none
//                           absolute
//                           right-3
//                           top-1/2
//                           -translate-y-1/2
//                           text-gray-500
//                         "
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ================================================= */}
//               {/* COUPON */}
//               {/* ================================================= */}

//               <div
//                 className="
//                   border-b
//                   border-gray-200
//                   px-3
//                   py-5
//                 "
//               >
//                 <div className="flex items-center gap-3">
//                   <Tag
//                     size={18}
//                     className="shrink-0 text-[#00c875]"
//                   />

//                   <div className="flex flex-1 items-center gap-2">
//                     <input
//                       type="text"
//                       value={coupon}
//                       onChange={(e) => {
//                         setCoupon(e.target.value);
//                         setCouponAdded(false);
//                       }}
//                       placeholder="Coupon Code"
//                       disabled={couponAdded}
//                       className="
//                         h-[38px]
//                         flex-1
//                         border-none
//                         bg-transparent
//                         text-[13px]
//                         outline-none
//                         placeholder:text-gray-500
//                         disabled:text-gray-600
//                       "
//                     />

//                     <button
//                       type="button"
//                       onClick={handleAddCoupon}
//                       className="
//                         rounded-[5px]
//                         px-3
//                         py-2
//                         text-[13px]
//                         font-bold
//                         text-[#00c875]
//                         transition
//                         hover:bg-green-50
//                       "
//                     >
//                       {couponAdded ? "Applied" : "Apply"}
//                     </button>
//                   </div>
//                 </div>

//                 {couponAdded && (
//                   <p
//                     className="
//                       mt-2
//                       pl-8
//                       text-[10px]
//                       font-medium
//                       text-[#00c875]
//                     "
//                   >
//                     Coupon applied successfully.
//                   </p>
//                 )}
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
//                       text-[12px]
//                       text-gray-700
//                     "
//                   >
//                     {selectedPlan?.name} Plan (GST per month)
//                   </span>

//                   <span
//                     className="
//                       text-[12px]
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
//                       text-[12px]
//                       text-gray-700
//                     "
//                   >
//                     Taxes &amp; fees (18% GST)
//                   </span>

//                   <span
//                     className="
//                       text-[12px]
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
//                       text-[12px]
//                       font-semibold
//                       text-gray-700
//                     "
//                   >
//                     Total
//                   </span>

//                   <span
//                     className="
//                       text-[13px]
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
//                   text-[10px]
//                   leading-[1.5]
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
//           {/* STEP 1 FOOTER */}

//           {step === 1 && (
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="
//                   h-[42px]
//                   flex-1
//                   rounded-[5px]
//                   border
//                   border-gray-300
//                   bg-white
//                   text-[14px]
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
//                   h-[42px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   bg-[#00c875]
//                   text-[14px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#00b968]
//                 "
//               >
//                 Payment
//                 <ArrowRight size={17} />
//               </button>
//             </div>
//           )}

//           {/* STEP 2 FOOTER */}

//           {step === 2 && (
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className="
//                   flex
//                   h-[42px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   border
//                   border-gray-300
//                   bg-white
//                   text-[14px]
//                   font-semibold
//                   text-[#00b968]
//                   transition
//                   hover:bg-gray-50
//                 "
//               >
//                 <ArrowLeft size={16} />
//                 Back
//               </button>

//               <button
//                 type="button"
//                 onClick={handleRazorpayPayment}
//                 className="
//                   flex
//                   h-[42px]
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-[5px]
//                   bg-[#00c875]
//                   text-[14px]
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#00b968]
//                 "
//               >
//                 Pay {formatCurrency(total)}
//                 <ArrowRight size={17} />
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  CreditCard,
  Landmark,
  Tag,
  ChevronDown,
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

  const [emailError, setEmailError] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);

  // Payment success
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // UPI
  const [upiId, setUpiId] = useState("");

  // Card
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Net banking
  const [selectedBank, setSelectedBank] = useState("");

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [couponAdded, setCouponAdded] = useState(false);

  // ============================================================
  // RESET DRAWER
  // ============================================================

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setPaymentSuccess(null);
      setEmailVerified(false);

      setPaymentMethod("upi");

      setUpiId("");
      setCardNumber("");
      setExpiry("");
      setCvv("");
      setSelectedBank("");

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

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setEmailVerified(false);
      setEmailError("");

      const email = value.trim().toLowerCase();

      // Don't check until email looks valid
      if (!email || !email.includes("@")) {
        return;
      }

      try {
        setCheckingEmail(true);

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/razorpay/check-email`,
          {
            params: {
              email,
            },
          }
        );

        if (response.data.exists) {
          setEmailError(
            "This email ID is already registered."
          );
        } else {
          setEmailError("");
        }
      } catch (error) {
        console.error("Email check failed:", error);
      } finally {
        setCheckingEmail(false);
      }
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

    setStep(2);
  };

  // ============================================================
  // RAZORPAY PAYMENT
  // ============================================================

  const handleRazorpayPayment = async () => {
    try {
      // ============================================================
      // CHECK SELECTED PLAN
      // ============================================================

      if (!selectedPlan) {
        alert("Please select a plan.");
        return;
      }


      // ============================================================
      // CHECK COMPANY DETAILS
      // ============================================================

      if (
        !formData.companyName.trim() ||
        !formData.ownerName.trim() ||
        !formData.phone.trim() ||
        !formData.email.trim() ||
        !formData.address.trim()
      ) {
        alert("Please complete all required company details.");
        setStep(1);
        return;
      }

      // ============================================================
      // CHECK RAZORPAY SCRIPT
      // ============================================================

      if (!window.Razorpay) {
        alert(
          "Razorpay is not loaded. Please refresh the page and try again."
        );
        return;
      }

      // ============================================================
      // PREPARE CUSTOMER DETAILS
      // ============================================================

      const customerDetails = {
        companyName: formData.companyName.trim(),
        ownerName: formData.ownerName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
      };

      console.log("Customer details:", customerDetails);

      // ============================================================
      // PREPARE PLAN DETAILS
      // ============================================================

      const planDetails = {
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        price: basePrice,
      };

      console.log("Selected plan:", planDetails);

      // ============================================================
      // PREPARE PAYMENT DETAILS
      // ============================================================

      const paymentDetails = {
        amount: basePrice,
        tax: gst,
        totalAmount: total,
        paymentMethod: "RAZORPAY",
      };

      console.log("Payment amount:", paymentDetails);

      // ============================================================
      // CREATE RAZORPAY ORDER
      // ============================================================

      console.log("Creating Razorpay order...");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/razorpay/create-order`,
        {
          amount: total,
          receipt: `receipt_${Date.now()}`,
        }
      );

      console.log("Create order response:", response.data);

      if (!response.data.success) {
        alert(
          response.data.message ||
          "Failed to create payment order."
        );
        return;
      }

      const order = response.data.order;

      console.log("Razorpay order created:", order);

      // ============================================================
      // RAZORPAY CHECKOUT OPTIONS
      // ============================================================

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "WhatsApp CRM",

        description: `${selectedPlan.name} Plan`,

        order_id: order.id,

        // ==========================================================
        // CUSTOMER PREFILL
        // ==========================================================

        prefill: {
          name: customerDetails.ownerName,
          email: customerDetails.email,
          contact: customerDetails.phone,
        },

        // ==========================================================
        // PAYMENT SUCCESS HANDLER
        // ==========================================================

        handler: async function (paymentResponse) {
          try {
            console.log(
              "Razorpay payment response:",
              paymentResponse
            );

            // ------------------------------------------------------
            // DEBUG LOGS
            // ------------------------------------------------------

            console.log(
              "Sending company details:",
              customerDetails
            );

            console.log(
              "Sending plan details:",
              planDetails
            );

            console.log(
              "Sending payment details:",
              paymentDetails
            );

            // ------------------------------------------------------
            // VERIFY PAYMENT WITH BACKEND
            // ------------------------------------------------------

            const verifyResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/razorpay/verify-payment`,
              {
                // ==================================================
                // RAZORPAY PAYMENT DETAILS
                // ==================================================

                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,

                // ==================================================
                // COMPANY DETAILS
                // ==================================================

                companyName:
                  customerDetails.companyName,

                ownerName:
                  customerDetails.ownerName,

                email:
                  customerDetails.email,

                phone:
                  customerDetails.phone,

                address:
                  customerDetails.address,

                // ==================================================
                // PLAN DETAILS
                // ==================================================

                planId:
                  planDetails.planId,

                planName:
                  planDetails.planName,

                // ==================================================
                // PAYMENT AMOUNT
                // ==================================================

                amount:
                  paymentDetails.amount,

                tax:
                  paymentDetails.tax,

                totalAmount:
                  paymentDetails.totalAmount,

                paymentMethod:
                  paymentDetails.paymentMethod,
              }
            );

            // ------------------------------------------------------
            // VERIFY RESPONSE
            // ------------------------------------------------------

            console.log(
              "Verify payment response:",
              verifyResponse.data
            );

            // ======================================================
            // SUCCESS
            // ======================================================

            if (verifyResponse.data.success) {
              console.log(
                "Payment verified successfully."
              );

              console.log(
                "Company created:",
                verifyResponse.data.company
              );

              console.log(
                "Subscription created:",
                verifyResponse.data.subscription
              );

              console.log(
                "Payment saved:",
                verifyResponse.data.payment
              );

              // Show success screen instead of alert
              setPaymentSuccess({
                company: verifyResponse.data.company,
                subscription:
                  verifyResponse.data.subscription,
                payment: verifyResponse.data.payment,
              });
            }

            // ======================================================
            // FAILURE
            // ======================================================

            else {
              alert(
                verifyResponse.data.message ||
                "Payment verification failed."
              );
            }
          } catch (error) {
            console.error(
              "Payment verification error:",
              error.response?.data || error.message
            );

            console.error(
              "Payment verification status:",
              error.response?.status
            );

            alert(
              error.response?.data?.message ||
              "Payment was completed, but verification failed."
            );
          }
        },

        // ==========================================================
        // RAZORPAY MODAL CLOSE
        // ==========================================================

        modal: {
          ondismiss: function () {
            console.log(
              "Razorpay checkout was closed by the user."
            );
          },
        },

        // ==========================================================
        // RAZORPAY THEME
        // ==========================================================

        theme: {
          color: "#00c875",
        },
      };

      // ============================================================
      // OPEN RAZORPAY
      // ============================================================

      console.log("Opening Razorpay Checkout...");

      const razorpay = new window.Razorpay(options);

      // ============================================================
      // RAZORPAY PAYMENT FAILED
      // ============================================================

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Razorpay payment failed:",
            response.error
          );

          alert(
            response.error?.description ||
            "Payment failed. Please try again."
          );
        }
      );

      razorpay.open();
    } catch (error) {
      // ============================================================
      // CREATE ORDER / RAZORPAY ERROR
      // ============================================================

      console.error(
        "Razorpay payment error:",
        error.response?.data || error.message
      );

      console.error(
        "Razorpay error status:",
        error.response?.status
      );

      alert(
        error.response?.data?.message ||
        "Unable to start Razorpay payment."
      );
    }
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
    return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
  };

  // ============================================================
  // PAYMENT METHOD CHANGE
  // ============================================================

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // ============================================================
  // CARD NUMBER FORMAT
  // ============================================================

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.substring(0, 16);

    value = value.replace(/(.{4})/g, "$1 ").trim();

    setCardNumber(value);
  };

  // ============================================================
  // EXPIRY FORMAT
  // ============================================================

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.substring(0, 4);

    if (value.length >= 3) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }

    setExpiry(value);
  };

  // ============================================================
  // SUCCESS SCREEN DATA
  // ============================================================

  const successCompanyId =
    paymentSuccess?.company?.companyId ||
    paymentSuccess?.company?.id ||
    "—";

  const successCompanyName =
    paymentSuccess?.company?.companyName ||
    formData.companyName ||
    "—";

  const successPlanName =
    paymentSuccess?.subscription?.plan?.planName ||
    paymentSuccess?.subscription?.planName ||
    selectedPlan?.name ||
    "—";

  const successAmount =
    paymentSuccess?.payment?.totalAmount ?? total;

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
          ${isOpen && selectedPlan
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
          ${isOpen && selectedPlan
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
      >
        {/* ====================================================== */}
        {/* PAYMENT SUCCESS SCREEN */}
        {/* ====================================================== */}

        {paymentSuccess ? (
          <div className="flex h-full flex-col bg-white">
            {/* CLOSE BUTTON */}

            <div className="flex justify-end px-4 pt-5">
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

            {/* SUCCESS CONTENT */}

            <div
              className="
                flex
                flex-1
                flex-col
                items-center
                overflow-y-auto
                px-6
                pt-10
                text-center
              "
            >
              {/* SUCCESS ICON */}

              <div
                className="
                  flex
                  h-[78px]
                  w-[78px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00c875]/10
                "
              >
                <div
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00c875]
                  "
                >
                  <Check
                    size={32}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-6
                  text-[24px]
                  font-bold
                  text-gray-900
                "
              >
                Payment Successful!
              </h2>

              <p
                className="
                  mt-2
                  max-w-[300px]
                  text-[14px]
                  leading-5
                  text-gray-500
                "
              >
                Your company account has been created
                successfully.
              </p>

              {/* ACCOUNT DETAILS */}

              <div
                className="
                  mt-8
                  w-full
                  rounded-[8px]
                  border
                  border-gray-300
                  bg-gray-50
                  p-4
                  text-left
                "
              >
                <h3
                  className="
                    mb-4
                    text-[14px]
                    font-bold
                    tracking-wide
                    text-gray-800
                  "
                >
                  ACCOUNT DETAILS
                </h3>

                {/* COMPANY ID */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    py-3
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Company ID
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {successCompanyId}
                  </span>
                </div>

                {/* COMPANY NAME */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-gray-200
                    py-3
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Company
                  </span>

                  <span
                    className="
                      text-right
                      text-[13px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {successCompanyName}
                  </span>
                </div>

                {/* PLAN */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    py-3
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Plan
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-semibold
                      text-gray-900
                    "
                  >
                    {successPlanName}
                  </span>
                </div>

                {/* AMOUNT */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    pt-3
                  "
                >
                  <span
                    className="
                      text-[12px]
                      text-gray-500
                    "
                  >
                    Amount Paid
                  </span>

                  <span
                    className="
                      text-[14px]
                      font-bold
                      text-[#00c875]
                    "
                  >
                    {formatCurrency(successAmount)}
                  </span>
                </div>
              </div>

              {/* EMAIL MESSAGE */}

              <div
                className="
                  mt-5
                  w-full
                  rounded-[8px]
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-3
                  text-left
                "
              >
                <p
                  className="
                    text-[12px]
                    leading-5
                    text-gray-600
                  "
                >
                  Your account is ready. Please check your
                  email for your login credentials and account
                  details.
                </p>
              </div>
            </div>

            {/* SUCCESS FOOTER */}

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
              <button
                type="button"
                onClick={onClose}
                className="
                  flex
                  h-[42px]
                  w-full
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
                Continue
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        ) : (
          <>
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
                    ${step === 1
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
                    ${step === 2
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
                            ${emailVerified
                              ? "bg-gray-500"
                              : "bg-[#00c875] hover:bg-[#00b86b]"
                            }
                          `}
                        >
                          {emailVerified ? "Verified" : "Verify"}
                        </button>
                      </div>
                      {checkingEmail && (
                        <p className="mt-1 text-[12px] text-gray-500">
                          Checking email...
                        </p>
                      )}

                      {emailError && (
                        <p className="mt-1 text-[12px] text-red-500">
                          {emailError}
                        </p>
                      )}
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

                  <div
                    className={`
                      border-b
                      border-[#00c875]
                      ${paymentMethod === "upi"
                        ? "bg-gray-50"
                        : "bg-white"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handlePaymentMethodChange("upi")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
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

                      <div className="flex-1">
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

                      <ChevronDown
                        size={17}
                        className={`
                          text-gray-500
                          transition-transform
                          ${paymentMethod === "upi"
                            ? "rotate-180"
                            : ""
                          }
                        `}
                      />
                    </button>

                    {paymentMethod === "upi" && (
                      <div className="px-3 pb-4">
                        <label
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-gray-700
                          "
                        >
                          Enter UPI ID
                        </label>

                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) =>
                            setUpiId(e.target.value)
                          }
                          placeholder="example@upi"
                          className="
                            h-[42px]
                            w-full
                            rounded-[7px]
                            border
                            border-gray-300
                            bg-white
                            px-3
                            text-[13px]
                            outline-none
                            placeholder:text-gray-400
                            focus:border-[#00c875]
                            focus:ring-1
                            focus:ring-[#00c875]
                          "
                        />

                        <p
                          className="
                            mt-2
                            text-[10px]
                            text-gray-500
                          "
                        >
                          Enter your UPI ID to continue with UPI
                          payment.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ================================================= */}
                  {/* CREDIT / DEBIT CARD */}
                  {/* ================================================= */}

                  <div
                    className={`
                      border-b
                      border-[#00c875]
                      ${paymentMethod === "card"
                        ? "bg-gray-50"
                        : "bg-white"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handlePaymentMethodChange("card")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
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

                      <div className="flex-1">
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

                      <ChevronDown
                        size={17}
                        className={`
                          text-gray-500
                          transition-transform
                          ${paymentMethod === "card"
                            ? "rotate-180"
                            : ""
                          }
                        `}
                      />
                    </button>

                    {paymentMethod === "card" && (
                      <div className="px-3 pb-4">
                        <div className="mb-3">
                          <label
                            className="
                              mb-2
                              block
                              text-[12px]
                              font-medium
                              text-gray-700
                            "
                          >
                            Card Number
                          </label>

                          <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            inputMode="numeric"
                            className="
                              h-[42px]
                              w-full
                              rounded-[7px]
                              border
                              border-gray-300
                              bg-white
                              px-3
                              text-[13px]
                              outline-none
                              placeholder:text-gray-400
                              focus:border-[#00c875]
                              focus:ring-1
                              focus:ring-[#00c875]
                            "
                          />
                        </div>

                        <div className="flex gap-3">
                          <div className="flex-1">
                            <label
                              className="
                                mb-2
                                block
                                text-[12px]
                                font-medium
                                text-gray-700
                              "
                            >
                              Expiry
                            </label>

                            <input
                              type="text"
                              value={expiry}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              inputMode="numeric"
                              className="
                                h-[42px]
                                w-full
                                rounded-[7px]
                                border
                                border-gray-300
                                bg-white
                                px-3
                                text-[13px]
                                outline-none
                                placeholder:text-gray-400
                                focus:border-[#00c875]
                                focus:ring-1
                                focus:ring-[#00c875]
                              "
                            />
                          </div>

                          <div className="flex-1">
                            <label
                              className="
                                mb-2
                                block
                                text-[12px]
                                font-medium
                                text-gray-700
                              "
                            >
                              CVV
                            </label>

                            <input
                              type="password"
                              value={cvv}
                              onChange={(e) =>
                                setCvv(
                                  e.target.value
                                    .replace(/\D/g, "")
                                    .substring(0, 4)
                                )
                              }
                              placeholder="CVV"
                              inputMode="numeric"
                              className="
                                h-[42px]
                                w-full
                                rounded-[7px]
                                border
                                border-gray-300
                                bg-white
                                px-3
                                text-[13px]
                                outline-none
                                placeholder:text-gray-400
                                focus:border-[#00c875]
                                focus:ring-1
                                focus:ring-[#00c875]
                              "
                            />
                          </div>
                        </div>

                        <p
                          className="
                            mt-2
                            text-[10px]
                            text-gray-500
                          "
                        >
                          Your card details are securely handled by
                          Razorpay.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ================================================= */}
                  {/* NET BANKING */}
                  {/* ================================================= */}

                  <div
                    className={`
                      border-b
                      border-[#00c875]
                      ${paymentMethod === "netbanking"
                        ? "bg-gray-50"
                        : "bg-white"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handlePaymentMethodChange("netbanking")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
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

                      <div className="flex-1">
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

                      <ChevronDown
                        size={17}
                        className={`
                          text-gray-500
                          transition-transform
                          ${paymentMethod === "netbanking"
                            ? "rotate-180"
                            : ""
                          }
                        `}
                      />
                    </button>

                    {paymentMethod === "netbanking" && (
                      <div className="px-3 pb-4">
                        <label
                          className="
                            mb-2
                            block
                            text-[12px]
                            font-medium
                            text-gray-700
                          "
                        >
                          Select your bank
                        </label>

                        <div className="relative">
                          <select
                            value={selectedBank}
                            onChange={(e) =>
                              setSelectedBank(e.target.value)
                            }
                            className="
                              h-[42px]
                              w-full
                              appearance-none
                              rounded-[7px]
                              border
                              border-gray-300
                              bg-white
                              px-3
                              pr-9
                              text-[13px]
                              text-gray-700
                              outline-none
                              focus:border-[#00c875]
                              focus:ring-1
                              focus:ring-[#00c875]
                            "
                          >
                            <option value="">
                              Select your bank
                            </option>

                            <option value="sbi">
                              State Bank of India
                            </option>

                            <option value="hdfc">
                              HDFC Bank
                            </option>

                            <option value="icici">
                              ICICI Bank
                            </option>

                            <option value="axis">
                              Axis Bank
                            </option>

                            <option value="kotak">
                              Kotak Mahindra Bank
                            </option>

                            <option value="bob">
                              Bank of Baroda
                            </option>

                            <option value="pnb">
                              Punjab National Bank
                            </option>

                            <option value="canara">
                              Canara Bank
                            </option>
                          </select>

                          <ChevronDown
                            size={16}
                            className="
                              pointer-events-none
                              absolute
                              right-3
                              top-1/2
                              -translate-y-1/2
                              text-gray-500
                            "
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ================================================= */}
                  {/* COUPON */}
                  {/* ================================================= */}

                  <div
                    className="
                      border-b
                      border-gray-200
                      px-3
                      py-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Tag
                        size={18}
                        className="shrink-0 text-[#00c875]"
                      />

                      <div className="flex flex-1 items-center gap-2">
                        <input
                          type="text"
                          value={coupon}
                          onChange={(e) => {
                            setCoupon(e.target.value);
                            setCouponAdded(false);
                          }}
                          placeholder="Coupon Code"
                          disabled={couponAdded}
                          className="
                            h-[38px]
                            flex-1
                            border-none
                            bg-transparent
                            text-[13px]
                            outline-none
                            placeholder:text-gray-500
                            disabled:text-gray-600
                          "
                        />

                        <button
                          type="button"
                          onClick={handleAddCoupon}
                          className="
                            rounded-[5px]
                            px-3
                            py-2
                            text-[13px]
                            font-bold
                            text-[#00c875]
                            transition
                            hover:bg-green-50
                          "
                        >
                          {couponAdded ? "Applied" : "Apply"}
                        </button>
                      </div>
                    </div>

                    {couponAdded && (
                      <p
                        className="
                          mt-2
                          pl-8
                          text-[10px]
                          font-medium
                          text-[#00c875]
                        "
                      >
                        Coupon applied successfully.
                      </p>
                    )}
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
              {/* STEP 1 FOOTER */}

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

              {/* STEP 2 FOOTER */}

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
                    onClick={handleRazorpayPayment}
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
          </>
        )}
      </aside>
    </>
  );
}