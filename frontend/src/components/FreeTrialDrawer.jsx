// import { useState } from "react";

// export default function FreeTrialDrawer({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     ownerName: "",
//     phoneNumber: "",
//     email: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       {/* Background Overlay */}
//       <div
//         className={`fixed inset-0 z-[999] bg-black/30 transition-opacity duration-300 ${
//           isOpen
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={onClose}
//       />

//       {/* Right Drawer */}
//       <div
//         className={`fixed right-0 top-0 z-[1000] h-screen w-full max-w-[390px] bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="border-b border-gray-300 px-4 pb-4 pt-6">
//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-[20px] font-semibold text-gray-900">
//                 Complete Purchase
//               </h2>

//               <p className="mt-1 text-[13px] text-gray-600">
//                 Review your plan and proceed
//               </p>
//             </div>

//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex h-8 w-8 items-center justify-center text-[32px] font-light leading-none text-[#00c875] transition-transform duration-200 hover:scale-110"
//             >
//               ×
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="h-[calc(100vh-100px)] overflow-y-auto px-4 pb-8">
          
//           {/* Plan & Details */}
//           <div className="border-b border-gray-200">
//             <div className="flex h-12 items-end justify-center">
//               <div className="relative h-full w-[135px]">
//                 <div className="flex h-full items-center justify-center">
//                   <span className="text-[11px] font-semibold tracking-wide text-[#00c875]">
//                     PLAN & DETAILS
//                   </span>
//                 </div>

//                 <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#00c875]" />
//               </div>
//             </div>
//           </div>

//           {/* Your Details */}
//           <div className="pt-6">
//             <h3 className="mb-4 text-[14px] font-bold tracking-wide text-gray-800">
//               YOUR DETAILS
//             </h3>

//             {/* Company Name */}
//             <div className="mb-4">
//               <label className="mb-2 block text-[15px] text-gray-700">
//                 Company Name
//               </label>

//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 placeholder="ABC Technologies"
//                 className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
//               />
//             </div>

//             {/* Owner Name */}
//             <div className="mb-4">
//               <label className="mb-2 block text-[15px] text-gray-700">
//                 Owner Name
//               </label>

//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 placeholder="John Smith"
//                 className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label className="mb-2 block text-[15px] text-gray-700">
//                 Phone Number
//               </label>

//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 placeholder="10 digit mobile number"
//                 className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label className="mb-2 block text-[15px] text-gray-700">
//                 Email Address
//               </label>

//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="company@gmail.com"
//                   className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 pr-[55px] text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
//                 />

//                 <button
//                   type="button"
//                   className="absolute right-1 top-1/2 -translate-y-1/2 rounded-[5px] bg-[#00c875] px-2 py-1 text-[9px] font-semibold text-white transition hover:bg-[#00b86b]"
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="mb-6">
//               <label className="mb-2 block text-[15px] text-gray-700">
//                 Address
//               </label>

//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter company address"
//                 rows={3}
//                 className="w-full resize-none rounded-[8px] border border-gray-400 px-3 py-2 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="button"
//               className="mx-auto flex h-[40px] w-[225px] items-center justify-center rounded-[5px] bg-[#00c875] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00b86b] hover:shadow-lg"
//             >
//               Request Free Trial ₹0 →
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";

export default function FreeTrialDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.companyName ||
      !formData.ownerName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.address
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/public/trial-signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyName: formData.companyName,
            ownerName: formData.ownerName,
            phone: formData.phoneNumber,
            email: formData.email,
            address: formData.address,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to start free trial.");
        return;
      }

      alert(
        data.message ||
          "Free trial started successfully. Login credentials have been sent to your email."
      );

      // Clear form after successful signup
      setFormData({
        companyName: "",
        ownerName: "",
        phoneNumber: "",
        email: "",
        address: "",
      });

      // Close drawer
      onClose();
    } catch (error) {
      console.error("Trial signup error:", error);
      alert("Unable to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-black/30 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Right Drawer */}
      <div
        className={`fixed right-0 top-0 z-[1000] h-screen w-full max-w-[390px] bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-gray-300 px-4 pb-4 pt-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[20px] font-semibold text-gray-900">
                Complete Purchase
              </h2>

              <p className="mt-1 text-[13px] text-gray-600">
                Review your plan and proceed
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center text-[32px] font-light leading-none text-[#00c875] transition-transform duration-200 hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-100px)] overflow-y-auto px-4 pb-8">
          
          {/* Plan & Details */}
          <div className="border-b border-gray-200">
            <div className="flex h-12 items-end justify-center">
              <div className="relative h-full w-[135px]">
                <div className="flex h-full items-center justify-center">
                  <span className="text-[11px] font-semibold tracking-wide text-[#00c875]">
                    PLAN & DETAILS
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#00c875]" />
              </div>
            </div>
          </div>

          {/* Your Details */}
          <div className="pt-6">
            <h3 className="mb-4 text-[14px] font-bold tracking-wide text-gray-800">
              YOUR DETAILS
            </h3>

            {/* Company Name */}
            <div className="mb-4">
              <label className="mb-2 block text-[15px] text-gray-700">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="ABC Technologies"
                className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
              />
            </div>

            {/* Owner Name */}
            <div className="mb-4">
              <label className="mb-2 block text-[15px] text-gray-700">
                Owner Name
              </label>

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="John Smith"
                className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="mb-2 block text-[15px] text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="10 digit mobile number"
                className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="mb-2 block text-[15px] text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="company@gmail.com"
                  className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 pr-[55px] text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
                />

                <button
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-[5px] bg-[#00c875] px-2 py-1 text-[9px] font-semibold text-white transition hover:bg-[#00b86b]"
                >
                  Verify
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="mb-2 block text-[15px] text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter company address"
                rows={3}
                className="w-full resize-none rounded-[8px] border border-gray-400 px-3 py-2 text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="mx-auto flex h-[40px] w-[225px] items-center justify-center rounded-[5px] bg-[#00c875] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00b86b] hover:shadow-lg"
            >
              {isSubmitting
                ? "Processing..."
                : "Request Free Trial ₹0 →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

