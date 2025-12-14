import React from "react";
import {
  GiBabyFace,
  GiCycle,
  GiDroplets,
  GiEggClutch,
  GiBabyBottle,
} from "react-icons/gi";

export default function PregnancyTools() {
  const tools = [
    {
      name: "Pregnancy Calculator",
      icon: <GiBabyBottle />,
      href: "/pregnancy-calculator",
    },
    {
      name: "Ovulation Calculator",
      icon: <GiCycle />,
      href: "/ovulation-calculator",
    },
    {
      name: "Pregnancy Conception Calculator",
      icon: <GiEggClutch />,
      href: "/conception-calculator",
    },
    {
      name: "Period Calculator",
      icon: <GiDroplets />,
      href: "/period-calculator",
    },
    {
      name: "Pregnancy Due Date Calculator",
      icon: <GiBabyFace />,
      href: "/due-date-calculator",
    },
  ];

  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            NEW • Calculate Your IVF Success Rate
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Pregnancy Calculator Tools for Confident and Stress-Free Planning
        </h1>

        {/* Sub heading */}
        <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Track fertility, plan conception, and calculate your pregnancy timeline
          with our smart tools designed to guide you through each step.
        </p>

        {/* CARD GRID SECTION */}
        <div className="mt-14 flex flex-col items-center gap-12">

          {/* Row 1 (3 items) */}
          <div className="flex flex-wrap justify-center gap-14">
            {tools.slice(0, 3).map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="w-28 h-28 rounded-full border-2 border-sky-600 flex items-center justify-center
                                text-sky-700 text-5xl transition-all duration-200 
                                group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl">
                  {tool.icon}
                </div>
                <p className="mt-4 text-base font-semibold text-sky-800 text-center w-[170px] leading-snug group-hover:underline">
                  {tool.name}
                </p>
              </a>
            ))}
          </div>

          {/* Row 2 (2 items) */}
          <div className="flex flex-wrap justify-center gap-14">
            {tools.slice(3).map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="w-28 h-28 rounded-full border-2 border-sky-600 flex items-center justify-center
                                text-sky-700 text-5xl transition-all duration-200 
                                group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl">
                  {tool.icon}
                </div>
                <p className="mt-4 text-base font-semibold text-sky-800 text-center w-[170px] leading-snug group-hover:underline">
                  {tool.name}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
