// src/pages/calculator/PeriodCalculatorPage.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

export default function PeriodCalculatorPage() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const [nextPeriod, setNextPeriod] = useState(null);
  const [fertileStart, setFertileStart] = useState(null);
  const [fertileEnd, setFertileEnd] = useState(null);
  const [upcomingPeriods, setUpcomingPeriods] = useState([]);

  const formatDate = (date) =>
    date?.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const calculatePeriod = (e) => {
    e.preventDefault();
    if (!lastPeriod || !cycleLength) return;

    const lpDate = new Date(lastPeriod);
    const len = Number(cycleLength);

    // 1️⃣ Next period
    const next = new Date(lpDate);
    next.setDate(next.getDate() + len);
    setNextPeriod(next);

    // 2️⃣ Fertile window around ovulation (approx. 14 days before period)
    const ovulation = new Date(next);
    ovulation.setDate(next.getDate() - 14);

    const fertileWindowStart = new Date(ovulation);
    fertileWindowStart.setDate(ovulation.getDate() - 2); // 2 days before

    const fertileWindowEnd = new Date(ovulation);
    fertileWindowEnd.setDate(ovulation.getDate() + 2); // 2 days after

    setFertileStart(fertileWindowStart);
    setFertileEnd(fertileWindowEnd);

    // 3️⃣ Next 3 predicted cycles
    const future = [];
    for (let i = 1; i <= 3; i++) {
      const d = new Date(lpDate);
      d.setDate(d.getDate() + len * i);
      future.push(d);
    }
    setUpcomingPeriods(future);
  };

  return (
    <CalculatorLayout
      title="Period & Cycle Tracker"
      intro="Use this simple planner to estimate your upcoming period dates and fertile window based on your usual menstrual pattern."
    >
      {/* ====== FORM + RESULTS ====== */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Form */}
        <form onSubmit={calculatePeriod} className="space-y-5 max-w-md">
          <label className="block text-sm font-medium text-slate-700">
            Last period start date
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Usual cycle length (days)
            <input
              type="number"
              min="22"
              max="40"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Period duration (days)
            <input
              type="number"
              min="2"
              max="10"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition"
          >
            Predict My Cycle
          </button>

          <p className="text-xs text-slate-500 mt-2">
            This calculator works best if your periods are fairly regular. If
            your cycles vary a lot or you have concerns, please speak with your
            gynaecologist or fertility specialist.
          </p>
        </form>

        {/* Results */}
        <div className="space-y-6">
          {nextPeriod ? (
            <>
              <div className="p-6 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <h3 className="font-semibold text-sky-800 text-lg">
                  Your cycle overview
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                  <li>
                    📅 <strong>Expected next period:</strong>{" "}
                    {formatDate(nextPeriod)}
                  </li>
                  <li>
                    🩸 <strong>Typical flow days:</strong>{" "}
                    {periodLength} day{periodLength > 1 ? "s" : ""} from the
                    start date.
                  </li>
                  <li>
                    🌼 <strong>Likely fertile window:</strong>{" "}
                    {fertileStart && fertileEnd
                      ? `${formatDate(fertileStart)} – ${formatDate(
                          fertileEnd
                        )}`
                      : "—"}
                  </li>
                  <li>
                    🔄 <strong>Average cycle length:</strong>{" "}
                    {cycleLength} days
                  </li>
                </ul>

                <p className="text-xs text-slate-500 mt-4">
                  These dates are approximations based on your inputs. Hormones,
                  stress, illness, and medications can all shift your actual
                  cycle.
                </p>
              </div>

              {upcomingPeriods.length > 0 && (
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-800 text-sm">
                    Upcoming predicted periods
                  </h3>
                  <ol className="mt-3 space-y-1 text-sm text-slate-700 list-decimal list-inside">
                    {upcomingPeriods.map((d, idx) => (
                      <li key={idx}>{formatDate(d)}</li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          ) : (
            <div className="p-6 rounded-xl bg-sky-50 border border-dashed border-sky-200 text-sm text-slate-600">
              Enter your last period date and usual cycle length to see your
              next expected period and fertile window.
            </div>
          )}
        </div>
      </div>

      {/* ====== EDUCATIONAL CONTENT (reworded, not copied) ====== */}
      <div className="mt-12 space-y-10 text-sm text-slate-700 leading-relaxed">
        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Understanding your menstrual cycle
          </h3>
          <p className="mb-2">
            Your menstrual cycle is counted from the first day of one period to
            the first day of the next. For many people this is around 28 days,
            but anything from roughly 22 to 35 days can be normal if it is
            fairly consistent for you.
          </p>
          <p>
            The bleeding you see during your period is just one part of the
            cycle. Hormones quietly prepare the ovaries and the uterine lining
            every month — these changes are what this calculator tries to map
            out for you.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Phases of a typical cycle
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Menstrual phase:</strong> The days when you bleed. This
              usually lasts 3–7 days.
            </li>
            <li>
              <strong>Follicular phase:</strong> After your period, hormones
              help eggs mature in the ovaries and the uterine lining slowly
              thickens again.
            </li>
            <li>
              <strong>Ovulation:</strong> Around the middle of the cycle, a
              mature egg is released. This is usually the most fertile time.
            </li>
            <li>
              <strong>Luteal phase:</strong> After ovulation, hormones support
              the uterine lining. If pregnancy doesn&apos;t happen, hormone
              levels drop and a new period begins.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Why cycles can be irregular
          </h3>
          <p className="mb-2">
            It&apos;s common for your cycle to shift by a few days from month to
            month. Larger changes or very unpredictable cycles may be linked to
            factors such as:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Polycystic ovary syndrome (PCOS) or other hormone issues</li>
            <li>Significant weight gain or loss</li>
            <li>Stress, disrupted sleep, or heavy exercise</li>
            <li>Thyroid problems or other medical conditions</li>
            <li>Starting, stopping, or missing hormonal medicines</li>
          </ul>
          <p className="mt-2">
            If your periods are very heavy, very painful, or absent for several
            months, it is a good idea to talk to your doctor or fertility
            specialist.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Important note
          </h3>
          <p className="text-xs text-slate-500">
            This period tracker is intended for general information only and
            cannot replace personalised medical advice, diagnosis, or treatment.
            For any concerns about your menstrual health, fertility, or
            pregnancy, please consult a qualified healthcare professional.
          </p>
        </section>
      </div>
    </CalculatorLayout>
  );
}
