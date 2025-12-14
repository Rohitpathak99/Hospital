import React from "react";

export default function AllProducts() {
  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-sky-900 mb-6">
          All Fertility & Pregnancy Products
        </h1>

        <p className="text-slate-700 max-w-2xl mb-10">
          Explore a curated range of fertility, pregnancy, and reproductive
          wellness products recommended by our specialists to support you at
          every stage.
        </p>

        {/* You can reuse your product card grid here */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Example card */}
          <div className="rounded-xl bg-white shadow p-5">
            <h3 className="font-semibold text-slate-900">
              Ovulation Test Kit
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Helps identify fertile days by detecting hormone changes.
            </p>
            <p className="mt-3 font-semibold text-sky-700">₹749</p>
          </div>

          {/* Add more product cards here */}
        </div>
      </div>
    </section>
  );
}
