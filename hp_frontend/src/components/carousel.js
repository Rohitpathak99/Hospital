// HeroSection.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointment?consultant=any");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#E7F3FF]">
      {/* Optional top stripe like Indira banner */}
      {/* <div className="w-full bg-sky-900 text-white text-center text-sm py-2">
        NEW · Calculate Your IVF Success Rate
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT: Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="bg-sky-700 text-white rounded-[32px] px-8 sm:px-10 py-10 sm:py-12 max-w-xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
              SLRD Memorial:  
              <br />
              Fertility Centre
              <br />
              You Can Trust
            </h1>

            <p className="text-sm sm:text-base text-sky-100 mb-8">
              Personalised fertility care, advanced IVF technology and a
              compassionate team to support you at every step of your journey to
              parenthood.
            </p>

            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-sky-700 font-semibold text-sm sm:text-base shadow-md hover:bg-sky-50 transition"
            >
              Get Consultation
            </button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* decorative circle background */}
            <div className="absolute inset-0 rounded-full bg-sky-200/60 scale-125 translate-x-6 translate-y-4 -z-10" />
            <img
              src="images/carousel_family.jpg"
              alt="Happy couple expecting a baby"
              className="w-full h-auto object-contain drop-shadow-xl"
              onError={(e) => {
                e.currentTarget.src = "/hospital1.jpg"; // fallback
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
