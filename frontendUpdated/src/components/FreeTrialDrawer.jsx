// import { useState } from "react";

// export default function FreeTrialDrawer({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     ownerName: "",
//     phoneNumber: "",
//     email: "",
//     address: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (
//       !formData.companyName ||
//       !formData.ownerName ||
//       !formData.phoneNumber ||
//       !formData.email ||
//       !formData.address
//     ) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/public/trial-signup`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             companyName: formData.companyName,
//             ownerName: formData.ownerName,
//             phone: formData.phoneNumber,
//             email: formData.email,
//             address: formData.address,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message || "Failed to start free trial.");
//         return;
//       }

//       alert(
//         data.message ||
//           "Free trial started successfully. Login credentials have been sent to your email."
//       );

//       // Clear form after successful signup
//       setFormData({
//         companyName: "",
//         ownerName: "",
//         phoneNumber: "",
//         email: "",
//         address: "",
//       });

//       // Close drawer
//       onClose();
//     } catch (error) {
//       console.error("Trial signup error:", error);
//       alert("Unable to connect to the server. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
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
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className="mx-auto flex h-[40px] w-[225px] items-center justify-center rounded-[5px] bg-[#00c875] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00b86b] hover:shadow-lg"
//             >
//               {isSubmitting
//                 ? "Processing..."
//                 : "Request Free Trial ₹0 →"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function FreeTrialDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================================
  // EMAIL VERIFICATION
  // ============================================================

  const [emailVerified, setEmailVerified] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState("");

  // ============================================================
  // INPUT CHANGE
  // ============================================================

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // ============================================================
    // EMAIL CHANGE
    // ============================================================

    if (name === "email") {
      setEmailVerified(false);
      setEmailError("");
      setOtpError("");

      // If user changes email, previous OTP becomes invalid
      setOtpSent(false);
      setOtp("");

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
  // SEND EMAIL OTP
  // ============================================================

  const handleVerifyEmail = async () => {
    const email = formData.email.trim().toLowerCase();

    if (!email) {
      setEmailError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Prevent OTP if email already exists
    if (emailError === "This email ID is already registered.") {
      return;
    }

    try {
      setSendingOtp(true);
      setEmailError("");
      setOtpError("");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/email-verification/send-otp`,
        {
          email,
        }
      );

      if (response.data.success) {
        setOtpSent(true);
        setOtp("");
      } else {
        setOtpError(
          response.data.message ||
            "Unable to send OTP."
        );
      }
    } catch (error) {
      console.error("Send OTP error:", error);

      setOtpError(
        error.response?.data?.message ||
          "Unable to send OTP. Please try again."
      );
    } finally {
      setSendingOtp(false);
    }
  };

  // ============================================================
  // VERIFY OTP
  // ============================================================

  const handleVerifyOTP = async () => {
    const enteredOTP = otp.trim();

    if (!enteredOTP) {
      setOtpError("Please enter the OTP.");
      return;
    }

    if (!/^\d{6}$/.test(enteredOTP)) {
      setOtpError("Please enter the 6-digit OTP.");
      return;
    }

    const normalizedEmail =
      formData.email.trim().toLowerCase();

    if (!normalizedEmail) {
      setOtpError("Email address is required.");
      return;
    }

    try {
      setVerifyingOtp(true);
      setOtpError("");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/email-verification/verify-otp`,
        {
          email: normalizedEmail,
          otp: enteredOTP,
        }
      );

      if (response.data?.success) {
        // OTP verified successfully
        setEmailVerified(true);

        // Hide OTP section
        setOtpSent(false);

        // Clear OTP input
        setOtp("");

        // Clear OTP error
        setOtpError("");

        console.log("Email verified successfully.");
      } else {
        setOtpError(
          response.data?.message ||
            "Invalid OTP. Please try again."
        );
      }
    } catch (error) {
      console.error("OTP verification error:", error);

      setOtpError(
        error.response?.data?.message ||
          "Unable to verify OTP. Please try again."
      );
    } finally {
      setVerifyingOtp(false);
    }
  };

  // ============================================================
  // RESEND OTP
  // ============================================================

  const handleResendOTP = async () => {
    await handleVerifyEmail();
  };

  // ============================================================
  // CHANGE EMAIL
  // ============================================================

  const handleChangeEmail = () => {
    setEmailVerified(false);
    setOtpSent(false);
    setOtp("");
    setOtpError("");
    setEmailError("");

    document
      .querySelector('input[name="email"]')
      ?.focus();
  };

  // ============================================================
  // FREE TRIAL SUBMIT
  // ============================================================

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

    // ============================================================
    // CHECK EXISTING EMAIL
    // ============================================================

    if (
      emailError ===
      "This email ID is already registered."
    ) {
      alert("This email ID is already registered.");
      return;
    }

    // ============================================================
    // CHECK EMAIL VERIFICATION
    // ============================================================

    if (!emailVerified) {
      alert(
        "Please verify your email address before starting the free trial."
      );
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
        alert(
          data.message ||
            "Failed to start free trial."
        );
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

      // Reset email verification
      setEmailVerified(false);
      setEmailError("");
      setOtpSent(false);
      setOtp("");
      setOtpError("");

      // Close drawer
      onClose();
    } catch (error) {
      console.error("Trial signup error:", error);
      alert(
        "Unable to connect to the server. Please try again."
      );
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
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
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

              {/* ================================================= */}
              {/* EMAIL VERIFIED */}
              {/* ================================================= */}

              {emailVerified ? (
                <div>
                  <div className="flex h-[40px] items-center justify-between rounded-[8px] border border-[#00c875] bg-green-50 px-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="text-[16px] font-bold text-[#00c875]">
                        ✓
                      </span>

                      <span className="truncate text-[14px] font-medium text-gray-800">
                        {formData.email}
                      </span>
                    </div>

                    <span className="ml-2 shrink-0 text-[11px] font-semibold text-[#00c875]">
                      Verified
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleChangeEmail}
                    className="mt-2 text-[11px] font-medium text-gray-500 underline hover:text-[#00c875]"
                  >
                    Change email
                  </button>
                </div>
              ) : (
                <>
                  {/* EMAIL INPUT */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="company@gmail.com"
                      disabled={otpSent}
                      className="h-[40px] w-full rounded-[8px] border border-gray-400 px-3 pr-[55px] text-[14px] outline-none transition focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875] disabled:bg-gray-100 disabled:text-gray-500"
                    />

                    {!otpSent && (
                      <button
                        type="button"
                        onClick={handleVerifyEmail}
                        disabled={
                          sendingOtp ||
                          checkingEmail ||
                          !!emailError
                        }
                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-[5px] bg-[#00c875] px-2 py-1 text-[9px] font-semibold text-white transition hover:bg-[#00b86b] disabled:cursor-not-allowed disabled:bg-gray-400"
                      >
                        {sendingOtp
                          ? "Sending..."
                          : "Verify"}
                      </button>
                    )}
                  </div>

                  {/* CHECKING EMAIL */}
                  {checkingEmail && (
                    <p className="mt-1 text-[12px] text-gray-500">
                      Checking email...
                    </p>
                  )}

                  {/* EXISTING EMAIL ERROR */}
                  {emailError && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {emailError}
                    </p>
                  )}

                  {/* ================================================= */}
                  {/* OTP SECTION */}
                  {/* ================================================= */}

                  {otpSent && (
                    <div className="mt-3 rounded-[8px] border border-gray-200 bg-gray-50 p-3">
                      <p className="mb-2 text-[12px] font-medium text-gray-700">
                        We sent a 6-digit OTP to your email.
                      </p>

                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => {
                          const value =
                            e.target.value
                              .replace(/\D/g, "")
                              .substring(0, 6);

                          setOtp(value);
                          setOtpError("");
                        }}
                        placeholder="Enter 6-digit OTP"
                        inputMode="numeric"
                        maxLength={6}
                        autoComplete="one-time-code"
                        className="h-[40px] w-full rounded-[7px] border border-gray-300 bg-white px-3 text-center text-[16px] font-semibold tracking-[5px] outline-none placeholder:text-gray-400 placeholder:tracking-normal focus:border-[#00c875] focus:ring-1 focus:ring-[#00c875]"
                      />

                      {otpError && (
                        <p className="mt-2 text-[12px] text-red-500">
                          {otpError}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={handleVerifyOTP}
                        disabled={
                          verifyingOtp ||
                          otp.length !== 6
                        }
                        className="mt-3 flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#00c875] text-[12px] font-semibold text-white transition hover:bg-[#00b86b] disabled:cursor-not-allowed disabled:bg-gray-400"
                      >
                        {verifyingOtp
                          ? "Verifying..."
                          : "Verify OTP"}
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          disabled={sendingOtp}
                          className="text-[11px] font-medium text-[#00c875] hover:underline disabled:text-gray-400"
                        >
                          {sendingOtp
                            ? "Sending..."
                            : "Resend OTP"}
                        </button>

                        <span className="text-gray-300">
                          |
                        </span>

                        <button
                          type="button"
                          onClick={handleChangeEmail}
                          className="text-[11px] font-medium text-gray-500 hover:text-[#00c875] hover:underline"
                        >
                          Change email
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
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
              className="mx-auto flex h-[40px] w-[225px] items-center justify-center rounded-[5px] bg-[#00c875] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00b86b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
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