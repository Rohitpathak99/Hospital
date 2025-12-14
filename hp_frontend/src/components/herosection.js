import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function FeatureSection() {
  const [selected, setSelected] = useState("");

  const features = [
    {
      id: "trying",
      title:
        "We’ve been trying to conceive for over a year and want guidance",
    },
    {
      id: "history",
      title:
        "I have a history of failed IVF, miscarriages, or blocked tubes",
    },
    {
      id: "cycles",
      title:
        "I experience irregular periods or have PCOS / PCOD",
    },
    {
      id: "sperm",
      title:
        "We’re facing very low or zero sperm count concerns",
    },
  ];

  // change this path to match your Contact Us page route
  const handleRecommendationsClick = () => {
    if (!selected) return;
    window.location.href = "/contact-us";
  };

  return (
    <section className="w-full bg-sky-50 py-16 px-4">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Let us help you move forward
        </h2>
        <p className="mt-4 text-lg text-slate-700">
          Select the option that best describes your situation so we can suggest
          the most relevant next steps for you.
        </p>
      </div>

      {/* Options (custom radio-style cards) */}
      <div className="mt-10 mx-auto max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const isActive = selected === feature.id;

          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => setSelected(feature.id)}
              className={`flex w-full items-center gap-4 rounded-lg px-6 py-4 text-left transition-all shadow-sm
                ${
                  isActive
                    ? "bg-sky-600 text-white scale-[1.02] shadow-md"
                    : "bg-white text-slate-900 hover:bg-sky-100"
                }`}
            >
              {/* Custom checkbox with check icon */}
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-sm border-2 flex-shrink-0
                  ${
                    isActive
                      ? "bg-sky-700 border-sky-700 text-white"
                      : "border-sky-600 text-transparent"
                  }`}
              >
                <FaCheck className="h-3 w-3" />
              </span>

              {/* Text */}
              <p className="text-sm sm:text-base leading-snug">
                {feature.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleRecommendationsClick}
          disabled={!selected}
          className={`px-10 py-3 rounded-full font-semibold text-white transition-all
            ${
              selected
                ? "bg-sky-700 hover:bg-sky-800 shadow-sm"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Get Recommendations
        </button>
      </div>
    </section>
  );
}
