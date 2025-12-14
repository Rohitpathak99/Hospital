import React from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback: "Excellent service and caring doctors! Highly recommend this hospital.",
  },
  {
    name: "Sneha Kapoor",
    feedback: "The staff is very friendly and professional. Great experience!",
  },
  {
    name: "Amit Verma",
    feedback: "Clean environment and timely treatment. Five stars!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        data-aos="fade-up"
      >
        What Our Patients Say
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1"
          >
            <ChatBubbleLeftIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-600 italic leading-relaxed mb-4">“{t.feedback}”</p>
            <h4 className="text-blue-800 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Testimonials;
