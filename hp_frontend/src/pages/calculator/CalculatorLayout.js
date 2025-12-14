import React from "react";

export default function CalculatorLayout({ title, intro, children }) {
  return (
    <section className="w-full min-h-[70vh] bg-sky-50 py-14 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg px-6 sm:px-10 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-3">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-8">
          {intro}
        </p>

        {/* Page content (forms/results) */}
        {children}
      </div>
    </section>
  );
}
