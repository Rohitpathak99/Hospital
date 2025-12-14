import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function ProductSlider() {
  const products = [
    {
      name: "Ovulation Test Kit",
      desc: "Predicts fertile window with LH surge detection.",
      price: "₹749",
      rating: 4.8,
      img: "https://i.imgur.com/LWq1mJH.png",
    },
    {
      name: "Pregnancy Test Strip",
      desc: "Fast and accurate home pregnancy detection.",
      price: "₹199",
      rating: 4.7,
      img: "https://i.imgur.com/CZOsvbE.png",
    },
    {
      name: "Female Fertility Support",
      desc: "Myo-inositol, folate & essential reproductive nutrients.",
      price: "₹899",
      rating: 4.9,
      img: "https://i.imgur.com/zUQvC2t.png",
    },
    {
      name: "Male Fertility Booster",
      desc: "Improves sperm count, motility & vitality.",
      price: "₹845",
      rating: 4.6,
      img: "https://i.imgur.com/USZcnO4.jpeg",
    },
    {
      name: "Prenatal DHA Vitamin",
      desc: "Supports pregnancy brain development & fetal growth.",
      price: "₹1,150",
      rating: 4.9,
      img: "https://i.imgur.com/OvADmRT.png",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      
      <h2 className="text-center text-3xl font-semibold text-slate-900">
        Best for Fertility Wellness
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Handpicked products recommended for reproductive health & IVF support
      </p>

      {/* Slider */}
      <div className="mt-10 flex gap-6 px-6 overflow-x-auto scrollbar-hide">
        {products.map((item, i) => (
          <div
            key={i}
            className="min-w-[340px] bg-white border shadow-md rounded-2xl p-6 flex items-center justify-between
            hover:shadow-lg transition cursor-pointer"
          >
            {/* Product Image */}
            <img src={item.img} alt={item.name} className="h-20 w-auto" />

            {/* Info */}
            <div className="ml-3 w-full">
              <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-snug">{item.desc}</p>

              <div className="flex items-center gap-3 mt-3">
                <span className="font-semibold text-slate-900">{item.price}</span>
                <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-600" size={10} /> {item.rating}
                </span>
              </div>
            </div>

            <button className="ml-3 p-2 border rounded-full text-blue-600 hover:bg-blue-50">
              <FaArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <a
          href="/products"
          className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
        >
          View All
        </a>
      </div>

    </section>
  );
}
