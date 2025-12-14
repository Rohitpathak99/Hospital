// src/pages/DueDateCalculatorPage.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

export default function DueDateCalculatorPage() {
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const [dueDate, setDueDate] = useState(null);
  const [conceptionDate, setConceptionDate] = useState(null);
  const [weeksPregnant, setWeeksPregnant] = useState(null);
  const [extraDays, setExtraDays] = useState(null);
  const [trimester, setTrimester] = useState(null);

  const formatDate = (date) =>
    date?.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lmp) return;

    const lmpDate = new Date(lmp);
    const today = new Date();
    const cycle = Number(cycleLength) || 28;

    // Naegele’s rule with cycle adjustment:
    // EDD = LMP + 280 days + (cycleLength - 28)
    const edd = new Date(lmpDate);
    edd.setDate(edd.getDate() + 280 + (cycle - 28));
    setDueDate(edd);

    // Conception estimate: ovulation ~ cycleLength - 14 days after LMP
    const conception = new Date(lmpDate);
    conception.setDate(conception.getDate() + (cycle - 14));
    setConceptionDate(conception);

    // Weeks pregnant from LMP to today
    const diffMs = today.getTime() - lmpDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays >= 0) {
      const weeks = Math.floor(diffDays / 7);
      const days = diffDays % 7;
      setWeeksPregnant(weeks);
      setExtraDays(days);

      // Trimester estimation
      let tri = "First trimester";
      if (weeks >= 14 && weeks < 28) tri = "Second trimester";
      if (weeks >= 28) tri = "Third trimester";
      setTrimester(tri);
    } else {
      // LMP is in the future → just clear pregnancy age info
      setWeeksPregnant(null);
      setExtraDays(null);
      setTrimester(null);
    }
  };

  return (
    <CalculatorLayout
      title="Pregnancy Due Date Calculator"
      intro="Get an estimated due date for your baby based on the first day of your last menstrual period and your usual cycle length."
    >
      {/* FORM + RESULT GRID */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <label className="block text-sm font-medium text-slate-700">
            First day of your last period (LMP)
            <input
              type="date"
              value={lmp}
              onChange={(e) => setLmp(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Average cycle length (days)
            <input
              type="number"
              min="22"
              max="40"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
            <span className="text-[11px] text-slate-500">
              If you are not sure, leave it as 28 days.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition"
          >
            Calculate My Due Date
          </button>

          <p className="text-xs text-slate-500 mt-2">
            This tool gives an approximate estimate. Your doctor may adjust the
            due date after an ultrasound scan or based on your medical history.
          </p>
        </form>

        {/* Results */}
        <div className="space-y-6">
          {dueDate ? (
            <>
              <div className="p-6 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <h3 className="font-semibold text-sky-800 text-lg">
                  Your pregnancy snapshot
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                  <li>
                    🎉 <strong>Estimated due date (EDD):</strong>{" "}
                    {formatDate(dueDate)}
                  </li>
                  {conceptionDate && (
                    <li>
                      💖 <strong>Estimated conception date:</strong>{" "}
                      {formatDate(conceptionDate)}
                    </li>
                  )}
                  {weeksPregnant !== null && (
                    <li>
                      🤰 <strong>How far along you may be:</strong>{" "}
                      {weeksPregnant} week
                      {weeksPregnant !== 1 ? "s" : ""}{" "}
                      {extraDays ? `and ${extraDays} day${extraDays !== 1 ? "s" : ""}` : ""}
                    </li>
                  )}
                  {trimester && (
                    <li>
                      🌗 <strong>Current trimester:</strong> {trimester}
                    </li>
                  )}
                </ul>

                <p className="text-xs text-slate-500 mt-4">
                  Only a small percentage of babies arrive exactly on their due
                  date. Most births happen within a couple of weeks before or
                  after this day.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
                <h3 className="text-base font-semibold text-sky-800 mb-2">
                  How this due date is calculated
                </h3>
                <p className="mb-2">
                  This calculator uses the first day of your last menstrual
                  period and assumes an average pregnancy length of about 40
                  weeks (280 days). If your cycle is longer or shorter than 28
                  days, the estimate adjusts slightly to account for a
                  different ovulation time.
                </p>
                <p className="mb-2">
                  In natural conception, ovulation usually happens about 14 days
                  before your next period. Counting from your LMP helps doctors
                  and parents follow a standard timeline for scans and checkups,
                  even though the exact day of conception may be different.
                </p>
                <p className="text-xs text-slate-500">
                  Your gynaecologist may refine this date using ultrasound
                  measurements, especially in early pregnancy.
                </p>
              </div>
            </>
          ) : (
            <div className="p-6 rounded-xl bg-sky-50 border border-dashed border-sky-200 text-sm text-slate-600">
              Enter the first day of your last period and your usual cycle
              length to see your estimated due date, conception window and how
              many weeks pregnant you might be.
            </div>
          )}
        </div>
      </div>

      {/* EDUCATIONAL SECTION (reworded, inspired by Indira IVF structure) */}
      <div className="mt-12 space-y-10 text-sm text-slate-700 leading-relaxed">
        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            What is a pregnancy due date?
          </h3>
          <p className="mb-2">
            A pregnancy due date is the estimated day on which your baby is most
            likely to be born. It is usually calculated as 40 weeks from the
            first day of your last menstrual period. This date is a guide used
            by doctors to schedule tests, scans and key pregnancy checkups.
          </p>
          <p>
            While only a small number of babies arrive exactly on the predicted
            date, knowing your estimated due date can help you and your care
            team prepare for each stage of pregnancy.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Why your due date is only an estimate
          </h3>
          <p className="mb-2">
            Every pregnancy is unique. Factors like your natural cycle length,
            the exact day of ovulation, implantation timing, baby&apos;s growth
            pattern and overall health can all influence when labour actually
            starts.
          </p>
          <p>
            It is very common for babies to arrive within a window of about 2
            weeks before or after the estimated due date. Your doctor will keep
            monitoring you and your baby and guide you if your pregnancy goes
            much earlier or later than expected.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Using your due date to plan your journey
          </h3>
          <p className="mb-2">
            Once you know your estimated due date, you can map out important
            milestones like early scans, anomaly scans, glucose screening and
            third-trimester visits. It also helps you plan maternity leave,
            birth preferences, and support at home.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            This calculator is for general guidance only and does not replace
            medical advice. Always talk to your obstetrician or fertility
            specialist for personalised recommendations.
          </p>
        </section>
      </div>
    </CalculatorLayout>
  );
}
