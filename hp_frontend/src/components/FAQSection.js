// FAQSection.js
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is IVF and how does it actually work?",
    answer:
      "In vitro fertilisation (IVF) is a fertility treatment where eggs are collected from the ovaries, fertilised with sperm in a lab, and one or more healthy embryos are then placed back into the uterus to try for a pregnancy.",
  },
  {
    id: 2,
    question: "When should we think about starting IVF treatment?",
    answer:
      "IVF is usually considered after both partners are evaluated and simpler options such as medicines or IUI have not worked, or when there are issues like blocked tubes, low sperm count, advanced age or other significant fertility problems.",
  },
  {
    id: 3,
    question: "Who usually benefits the most from IVF?",
    answer:
      "IVF can help couples with blocked fallopian tubes, poor sperm count or motility, ovulation problems, endometriosis, or when donor eggs or sperm are needed. Your fertility specialist will guide you based on your reports and medical history.",
  },
  {
    id: 4,
    question: "How successful is IVF treatment?",
    answer:
      "Success rates vary with age, egg and sperm quality, the cause of infertility and overall health. Younger women typically have higher success, while chances gradually decline with age. Your clinic can share approximate success figures for your age group.",
  },
  {
    id: 5,
    question: "Is IVF a painful procedure?",
    answer:
      "Most people describe IVF as mildly uncomfortable rather than very painful. Hormone injections may cause bloating or soreness, and egg collection is usually done under anaesthesia or sedation so that you stay comfortable.",
  },
  {
    id: 6,
    question: "How long does one IVF cycle take from start to finish?",
    answer:
      "From starting medications and scans to egg retrieval and embryo transfer, a single IVF cycle typically takes around 4–6 weeks. The exact duration can vary depending on your protocol and how your body responds.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            IVF & Fertility FAQs
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Clear answers to common questions about IVF and fertility care.
            Always speak to your fertility specialist for personalised advice.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-16">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border border-gray-200 shadow-md rounded-lg transition-all duration-200 hover:shadow-lg ${
                  isOpen ? "border-sky-500" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="text-lg font-semibold text-black text-left pr-4">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Only render answer WHEN open -> no extra space on others */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-600 text-base mt-10">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-sky-600 transition-all duration-200 hover:text-sky-700 underline-offset-4 hover:underline">
            Speak to our team
          </span>
          .
        </p>
      </div>
    </section>
  );
}
