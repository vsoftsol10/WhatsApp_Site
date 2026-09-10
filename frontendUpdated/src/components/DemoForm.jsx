

import { useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";

function DemoForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    phone: "",
    email: "",

    location: "",
    address: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ============================================
  // HANDLE INPUT CHANGE
  // ============================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ============================================
  // VALIDATE FORM
  // ============================================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Requirements are required";
    }

    return newErrors;
  };

  // ============================================
  // SUBMIT FORM
  // ============================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/demo-requests`,
        formData
      );

      if (response.data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Demo request failed:", error);

      alert(
        error.response?.data?.message ||
        "Failed to submit demo request. Please try again."
      );
    }
  };

  // ============================================
  // RESET FORM
  // ============================================
  const resetForm = () => {
    setFormData({
      companyName: "",
      ownerName: "",
      phone: "",
      email: "",
      location: "",
      address: "",
      requirements: "",
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        md:p-8
        lg:p-9
      "
    >
      {!submitted ? (
        <>
          {/* ===================================== */}
          {/* FORM HEADER */}
          {/* ===================================== */}

          <div className="mb-7">
            <h2 className="text-[26px] font-bold tracking-[-0.5px] text-gray-900">
              Get a Demo
            </h2>

            <p className="mt-2 text-[15px] leading-6 text-gray-500">
              Tell us about your team and we'll tailor a walkthrough
              specifically for your business.
            </p>
          </div>

          {/* ===================================== */}
          {/* FORM */}
          {/* ===================================== */}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Company Name + Owner Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Company Name */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ABC Technologies"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.companyName && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Owner Name */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Owner Name
                </label>

                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.ownerName && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.ownerName}
                  </p>
                )}
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.phone && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="company@gmail.com"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.email && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Location + Address */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Location */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Tirunelveli"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.location && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Office address"
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-[16px]
                    text-gray-900
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#00c875]
                    focus:ring-2
                    focus:ring-[#00c875]/20
                  "
                />

                {errors.address && (
                  <p className="mt-1.5 text-[13px] text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <label className="mb-2 block text-[15px] font-semibold text-gray-800">
                Requirements
              </label>

              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Tell us about your needs..."
                rows={5}
                className="
                  min-h-[130px]
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-[16px]
                  leading-6
                  text-gray-900
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-[#00c875]
                  focus:ring-2
                  focus:ring-[#00c875]/20
                "
              />

              {errors.requirements && (
                <p className="mt-1.5 text-[13px] text-red-500">
                  {errors.requirements}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                mt-2
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#00c875]
                text-[16px]
                font-bold
                text-white
                shadow-[0_6px_18px_rgba(0,200,117,0.25)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#00b968]
                hover:shadow-[0_9px_24px_rgba(0,200,117,0.35)]
                active:scale-[0.99]
              "
            >
              Book a Demo
            </button>
          </form>
        </>
      ) : (
        /* ========================================= */
        /* SUCCESS STATE */
        /* ========================================= */

        <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#d9faeb]">
            <CheckCircle
              size={34}
              strokeWidth={2}
              className="text-[#00c875]"
            />
          </div>

          <h2 className="text-[26px] font-bold text-gray-900">
            Demo Request Received!
          </h2>

          <p className="mt-3 max-w-md text-[16px] leading-7 text-gray-500">
            Thank you for your interest in WhatsApp CRM. Our team
            will contact you shortly to schedule your demo.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="
              mt-6
              rounded-full
              border-2
              border-[#00c875]
              px-6
              py-2.5
              text-[15px]
              font-semibold
              text-[#00b968]
              transition
              hover:bg-[#eafff5]
            "
          >
            Submit another request
          </button>
        </div>
      )}
    </div>
  );
}

export default DemoForm;

