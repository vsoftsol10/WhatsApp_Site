import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api";

function DoubleQuoteIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="currentColor"
      className="text-brand-green"
      aria-hidden="true"
    >
      <path d="M7 10h9v9H11c0 4 2 6 6 7v4c-7-1-11-5-11-12V10h1Zm18 0h9v9h-5c0 4 2 6 6 7v4c-7-1-11-5-11-12V10h1Z" />
    </svg>
  );
}

function StarRating({ rating }) {
  const safeRating = Math.min(5, Math.max(0, Number(rating) || 0));

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill={star <= safeRating ? "currentColor" : "none"}
          className={
            star <= safeRating
              ? "text-yellow-400"
              : "text-gray-300"
          }
          aria-hidden="true"
        >
          <path
            d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================
  // CAROUSEL STATE
  // =========================================

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${API_URL}/testimonials/public`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        setTestimonials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // =========================================
  // CAROUSEL SETTINGS
  // =========================================

  const visibleCards = 3;

  // =========================================
  // CREATE INFINITE CAROUSEL ITEMS
  // =========================================

  const carouselTestimonials =
    testimonials.length > visibleCards
      ? [
          ...testimonials,
          ...testimonials.slice(0, visibleCards),
        ]
      : testimonials;

  // =========================================
  // NEXT SLIDE
  // =========================================

  const nextSlide = () => {
    if (testimonials.length <= visibleCards) return;

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;

      // After reaching the cloned cards,
      // immediately return to the original beginning.
      if (nextIndex >= testimonials.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  // =========================================
  // PREVIOUS SLIDE
  // =========================================

  const prevSlide = () => {
    if (testimonials.length <= visibleCards) return;

    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return testimonials.length - 1;
      }

      return prevIndex - 1;
    });
  };

  // =========================================
  // AUTO SLIDE
  // =========================================

  useEffect(() => {
    if (loading || testimonials.length <= visibleCards) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= testimonials.length) {
          return 0;
        }

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [loading, testimonials.length]);

  // =========================================
  // RESET INDEX WHEN DATA CHANGES
  // =========================================

  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    }
  }, [testimonials.length, currentIndex]);

  return (
    <section className="w-full bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* SECTION HEADING */}
        {/* ========================================= */}

        <div className="mb-12 text-center">
          <p className="section-eyebrow">
            Testimonials
          </p>

          <h2 className="section-heading">
            Trusted by Teams. Proven by Results
          </h2>
        </div>

        {/* ========================================= */}
        {/* LOADING */}
        {/* ========================================= */}

        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-6
                  shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  animate-pulse
                "
              >
                {/* Quote skeleton */}

                <div className="mb-4 h-10 w-10 rounded bg-gray-200" />

                {/* Content skeleton */}

                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-5/6 rounded bg-gray-200" />
                  <div className="h-4 w-4/6 rounded bg-gray-200" />
                </div>

                {/* Rating skeleton */}

                <div className="mt-5 h-4 w-24 rounded bg-gray-200" />

                {/* Divider */}

                <div className="my-5 h-px w-full bg-gray-200" />

                {/* User skeleton */}

                <div className="flex items-center gap-3.5">
                  <div className="h-11 w-11 rounded-full bg-gray-200" />

                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-gray-200" />
                    <div className="h-3 w-32 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================= */}
        {/* TESTIMONIAL CAROUSEL */}
        {/* ========================================= */}

        {!loading && testimonials.length > 0 && (
          <div className="relative">

            {/* ========================================= */}
            {/* LEFT ARROW */}
            {/* ========================================= */}

            {testimonials.length > 3 && (
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonials"
                className="
                  absolute
                  -left-4
                  top-1/2
                  z-10
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  shadow-[0_4px_12px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-gray-50
                  md:-left-5
                "
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* ========================================= */}
            {/* CAROUSEL VIEWPORT */}
            {/* ========================================= */}

            <div className="overflow-hidden px-1 py-1">

              {/* ========================================= */}
              {/* CAROUSEL TRACK */}
              {/* ========================================= */}

              <div
                className="
                  flex
                  transition-transform
                  duration-700
                  ease-in-out
                "
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / 3)
                  }%)`,
                }}
              >
                {carouselTestimonials.map(
                  (testimonial, index) => {
                    const initial =
                      testimonial.customerName
                        ?.charAt(0)
                        ?.toUpperCase() || "?";

                    const role = [
                      testimonial.designation,
                      testimonial.companyName,
                    ]
                      .filter(Boolean)
                      .join(", ");

                    return (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className="
                          w-full
                          shrink-0
                          px-2
                          md:w-1/3
                        "
                      >

                        {/* ===================================== */}
                        {/* TESTIMONIAL CARD */}
                        {/* ===================================== */}

                        <div
                          className="
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            px-6
                            py-6
                            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)]
                          "
                        >

                          {/* ===================================== */}
                          {/* DOUBLE QUOTATION MARK */}
                          {/* ===================================== */}

                          <div className="mb-4">
                            <DoubleQuoteIcon />
                          </div>

                          {/* ===================================== */}
                          {/* QUOTE */}
                          {/* ===================================== */}

                          <p
                            className="
                              min-h-[96px]
                              text-[15px]
                              font-medium
                              leading-[1.7]
                              text-gray-600
                            "
                          >
                            {testimonial.content}
                          </p>

                          {/* ===================================== */}
                          {/* STAR RATING */}
                          {/* ===================================== */}

                          <div className="mt-4">
                            <StarRating
                              rating={testimonial.rating}
                            />
                          </div>

                          {/* ===================================== */}
                          {/* DIVIDER */}
                          {/* ===================================== */}

                          <div className="my-5 h-px w-full bg-gray-200" />

                          {/* ===================================== */}
                          {/* USER */}
                          {/* ===================================== */}

                          <div className="flex items-center gap-3.5">

                            {/* Avatar */}

                            <div
                              className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-brand-green-light
                                text-[15px]
                                font-bold
                                text-brand-green-dark
                              "
                            >
                              {initial}
                            </div>

                            {/* User Details */}

                            <div>
                              <p
                                className="
                                  text-[14px]
                                  font-semibold
                                  text-gray-900
                                "
                              >
                                {testimonial.customerName}
                              </p>

                              {role && (
                                <p
                                  className="
                                    mt-0.5
                                    text-[12px]
                                    text-gray-500
                                  "
                                >
                                  {role}
                                </p>
                              )}
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* ========================================= */}
            {/* RIGHT ARROW */}
            {/* ========================================= */}

            {testimonials.length > 3 && (
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="
                  absolute
                  -right-4
                  top-1/2
                  z-10
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  text-gray-700
                  shadow-[0_4px_12px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-gray-50
                  md:-right-5
                "
              >
                <ChevronRight size={20} />
              </button>
            )}

          </div>
        )}

        {/* ========================================= */}
        {/* CAROUSEL DOTS */}
        {/* ========================================= */}

        {!loading && testimonials.length > 3 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index ===
                    currentIndex % testimonials.length
                      ? "w-6 bg-brand-green"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* ========================================= */}
        {/* NO TESTIMONIALS */}
        {/* ========================================= */}

        {!loading && testimonials.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-sm text-gray-500">
              No testimonials available at the moment.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Testimonials;

