// src/pages/calculator/OvulationCalculatorPage.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

export default function OvulationCalculatorPage() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const [nextPeriod, setNextPeriod] = useState(null);
  const [ovulationDate, setOvulationDate] = useState(null);
  const [fertileStart, setFertileStart] = useState(null);
  const [fertileEnd, setFertileEnd] = useState(null);
  const [futureWindows, setFutureWindows] = useState([]);

  const formatDate = (date) =>
    date?.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const calculateOvulation = (e) => {
    e.preventDefault();
    if (!lastPeriod || !cycleLength) return;

    const lp = new Date(lastPeriod);
    const cycle = Number(cycleLength);

    // 1️⃣ Next expected period (LMP + cycle length)
    const next = new Date(lp);
    next.setDate(lp.getDate() + cycle);
    setNextPeriod(next);

    // 2️⃣ Ovulation ≈ 14 days before next period
    const ov = new Date(next);
    ov.setDate(next.getDate() - 14);
    setOvulationDate(ov);

    // 3️⃣ Fertile window (5 days before ovulation to 1 day after)
    const start = new Date(ov);
    start.setDate(ov.getDate() - 5);
    const end = new Date(ov);
    end.setDate(ov.getDate() + 1);
    setFertileStart(start);
    setFertileEnd(end);

    // 4️⃣ Next 3 fertile windows in upcoming cycles
    const windows = [];
    for (let i = 1; i <= 3; i++) {
      const cycleStart = new Date(lp);
      cycleStart.setDate(lp.getDate() + cycle * i);

      const cycleNext = new Date(cycleStart);
      cycleNext.setDate(cycleStart.getDate() + cycle);

      const cycleOv = new Date(cycleNext);
      cycleOv.setDate(cycleNext.getDate() - 14);

      const fwStart = new Date(cycleOv);
      fwStart.setDate(cycleOv.getDate() - 5);
      const fwEnd = new Date(cycleOv);
      fwEnd.setDate(cycleOv.getDate() + 1);

      windows.push({ start: fwStart, end: fwEnd });
    }
    setFutureWindows(windows);
  };

  return (
    <CalculatorLayout
      title="Ovulation & Fertile Window Calculator"
      intro="Find your likely ovulation date and fertile window using the first day of your last period and your usual cycle length."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* ===== FORM ===== */}
        <form onSubmit={calculateOvulation} className="space-y-5 max-w-md">
          <label className="block text-sm font-medium text-slate-700">
            First day of your last period
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
            <span className="text-[11px] text-slate-500">
              If you&apos;re not sure, 28 days is a common average.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition"
          >
            Calculate Ovulation
          </button>

          <p className="text-xs text-slate-500 mt-2">
            This calculator assumes relatively regular cycles. If your periods
            are irregular, tracking with ovulation kits, scans, or your
            gynaecologist&apos;s guidance will give more accurate results.
          </p>
        </form>

        {/* ===== RESULTS ===== */}
        <div className="space-y-6">
          {ovulationDate ? (
            <>
              <div className="p-6 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <h3 className="font-semibold text-sky-800 text-lg">
                  Your fertile days this cycle
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                  <li>
                    📅 <strong>Expected next period:</strong>{" "}
                    {formatDate(nextPeriod)}
                  </li>
                  <li>
                    🥚 <strong>Estimated ovulation day:</strong>{" "}
                    {formatDate(ovulationDate)}
                  </li>
                  <li>
                    🌸 <strong>Fertile window:</strong>{" "}
                    {formatDate(fertileStart)} – {formatDate(fertileEnd)}
                  </li>
                  <li>
                    🔄 <strong>Cycle length:</strong> {cycleLength} days
                  </li>
                </ul>

                <p className="text-xs text-slate-500 mt-4">
                  Ovulation often happens around 14 days before your next
                  period, but this can shift from cycle to cycle. Treat this as
                  a guide rather than an exact prediction.
                </p>
              </div>

              {futureWindows.length > 0 && (
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
                  <h3 className="text-base font-semibold text-sky-800 mb-2">
                    Upcoming fertile windows
                  </h3>
                  <p className="mb-2">
                    These are your estimated fertile windows over the next few
                    cycles based on your current inputs:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {futureWindows.map((w, index) => (
                      <li key={index}>
                        Cycle {index + 2}: {formatDate(w.start)} –{" "}
                        {formatDate(w.end)}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 mt-3">
                    Fertile windows may vary if your cycle length changes.
                    Recalculate if your periods shift noticeably.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="p-6 rounded-xl bg-sky-50 border border-dashed border-sky-200 text-sm text-slate-600">
              Enter your last period date and cycle length to view your likely
              ovulation day and fertile window.
            </div>
          )}
        </div>
      </div>

      {/* ===== EDUCATIONAL SECTION ===== */}
      <div className="mt-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            How ovulation fits into your cycle
          </h3>
          <p className="mb-2">
            In a typical cycle, ovulation tends to happen roughly 14 days before
            your next period. Around this time, an egg is released from the
            ovary and can be fertilised for about 12–24 hours. Sperm can live in
            the reproductive tract for several days, which is why your fertile
            window lasts longer than just one day.
          </p>
          <p>
            Tracking this window can improve your chances of conceiving or help
            you understand your body&apos;s rhythm more clearly.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            When an ovulation calculator is less accurate
          </h3>
          <p className="mb-2">
            If your periods are irregular, predicting the exact day of ovulation
            becomes more difficult using dates alone. In such cases, your doctor
            may suggest additional methods like:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Monitoring cervical mucus changes</li>
            <li>Tracking basal body temperature patterns</li>
            <li>Using urine ovulation predictor kits</li>
            <li>Ultrasound follicle tracking during fertility treatment</li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Important reminder
          </h3>
          <p className="text-xs text-slate-500">
            This tool is for general information and cycle awareness only. It
            does not replace medical advice, fertility evaluation, or
            contraception guidance. Always speak with your gynaecologist or
            fertility specialist for personalised recommendations.
          </p>
        </section>
      </div>
    </CalculatorLayout>
  );
}
