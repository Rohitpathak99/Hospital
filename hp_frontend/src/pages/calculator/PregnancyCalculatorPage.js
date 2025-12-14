// src/pages/calculator/PregnancyCalculatorPage.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

export default function PregnancyCalculatorPage() {
  const [method, setMethod] = useState("lmp"); // "lmp" | "edd"
  const [lmp, setLmp] = useState("");
  const [edd, setEdd] = useState("");

  const [usedLmp, setUsedLmp] = useState(null);
  const [dueDate, setDueDate] = useState(null);
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

    const today = new Date();
    let baseLmp = null;
    let calculatedEdd = null;

    if (method === "lmp") {
      if (!lmp) return;
      baseLmp = new Date(lmp);
      calculatedEdd = new Date(baseLmp);
      // 40 weeks = 280 days from LMP
      calculatedEdd.setDate(baseLmp.getDate() + 280);
    } else if (method === "edd") {
      if (!edd) return;
      calculatedEdd = new Date(edd);
      // Approximate LMP = EDD - 280 days
      baseLmp = new Date(calculatedEdd);
      baseLmp.setDate(calculatedEdd.getDate() - 280);
    }

    setUsedLmp(baseLmp);
    setDueDate(calculatedEdd);

    // Calculate gestational age from LMP to today
    const diffMs = today.getTime() - baseLmp.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays >= 0) {
      const weeks = Math.floor(diffDays / 7);
      const days = diffDays % 7;
      setWeeksPregnant(weeks);
      setExtraDays(days);

      let tri = "First trimester";
      if (weeks >= 14 && weeks < 28) tri = "Second trimester";
      if (weeks >= 28) tri = "Third trimester";
      setTrimester(tri);
    } else {
      setWeeksPregnant(null);
      setExtraDays(null);
      setTrimester(null);
    }
  };

  return (
    <CalculatorLayout
      title="Pregnancy Week & Stage Calculator"
      intro="Find out how far along you might be in your pregnancy and which trimester you are in, using either your last period date or your estimated due date."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)]">
        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">
              How would you like to calculate?
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="lmp"
                  checked={method === "lmp"}
                  onChange={() => setMethod("lmp")}
                  className="text-sky-600"
                />
                <span>By first day of last menstrual period (LMP)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="edd"
                  checked={method === "edd"}
                  onChange={() => setMethod("edd")}
                  className="text-sky-600"
                />
                <span>By estimated due date (EDD)</span>
              </label>
            </div>
          </div>

          {method === "lmp" && (
            <label className="block text-sm font-medium text-slate-700">
              First day of your last period
              <input
                type="date"
                value={lmp}
                onChange={(e) => setLmp(e.target.value)}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </label>
          )}

          {method === "edd" && (
            <label className="block text-sm font-medium text-slate-700">
              Estimated due date (EDD)
              <input
                type="date"
                value={edd}
                onChange={(e) => setEdd(e.target.value)}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </label>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition"
          >
            Calculate Pregnancy Week
          </button>

          <p className="text-xs text-slate-500 mt-2">
            This follows the usual obstetric method of counting pregnancy from
            the first day of your last menstrual period (about 40 weeks total).
          </p>
        </form>

        {/* ===== RESULTS ===== */}
        <div className="space-y-6">
          {dueDate && usedLmp ? (
            <>
              <div className="p-6 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <h3 className="font-semibold text-sky-800 text-lg">
                  Your pregnancy overview
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                  <li>
                    📅 <strong>Estimated due date (EDD):</strong>{" "}
                    {formatDate(dueDate)}
                  </li>
                  <li>
                    🩸{" "}
                    <strong>
                      Estimated start of this pregnancy cycle (LMP):
                    </strong>{" "}
                    {formatDate(usedLmp)}
                  </li>
                  {weeksPregnant !== null && (
                    <li>
                      🤰 <strong>Approximate pregnancy age:</strong>{" "}
                      {weeksPregnant} week
                      {weeksPregnant !== 1 ? "s" : ""}{" "}
                      {extraDays
                        ? `and ${extraDays} day${extraDays !== 1 ? "s" : ""}`
                        : ""}
                    </li>
                  )}
                  {trimester && (
                    <li>
                      🌗 <strong>Current trimester:</strong> {trimester}
                    </li>
                  )}
                </ul>

                <p className="text-xs text-slate-500 mt-4">
                  Only a small number of babies arrive exactly on their due
                  date. Most are born within a couple of weeks before or after
                  this estimate.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
                <h3 className="text-base font-semibold text-sky-800 mb-2">
                  How pregnancy weeks are counted
                </h3>
                <p className="mb-2">
                  Doctors usually count pregnancy from the first day of your
                  last menstrual period, not from the exact date of conception.
                  This is because pinpointing ovulation and fertilisation for
                  everyone is difficult, but the period start date is often
                  easier to track.
                </p>
                <p className="mb-2">
                  From this date, a full-term pregnancy is about 40 weeks long.
                  A pregnancy calculator helps you map important milestones like
                  trimester changes, ultrasound scans, and your expected birth
                  window.
                </p>
                <p className="text-xs text-slate-500">
                  Your doctor may adjust this estimate after an ultrasound,
                  especially in early pregnancy, based on your baby&apos;s
                  growth and measurements.
                </p>
              </div>
            </>
          ) : (
            <div className="p-6 rounded-xl bg-sky-50 border border-dashed border-sky-200 text-sm text-slate-600">
              Enter either your last menstrual period date or your estimated due
              date to see how many weeks pregnant you may be and which
              trimester you are in.
            </div>
          )}
        </div>
      </div>

      {/* ===== EDUCATIONAL SECTION ===== */}
      <div className="mt-12 space-y-10 text-sm text-slate-700 leading-relaxed">
        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            What a pregnancy calculator can tell you
          </h3>
          <p className="mb-2">
            A pregnancy calculator gives you an estimated due date and a rough
            idea of how far along you are. This can help you track crucial
            milestones, plan check-ups, and understand when different pregnancy
            symptoms or changes may appear.
          </p>
          <p>
            It&apos;s a helpful planning tool, but it doesn&apos;t replace your
            gynaecologist&apos;s assessment or ultrasound findings.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            Trimesters at a glance
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>First trimester:</strong> From week 1 to the end of week
              13 – early development and organ formation.
            </li>
            <li>
              <strong>Second trimester:</strong> Week 14 to the end of week 27
              – many parents begin to feel stronger movements.
            </li>
            <li>
              <strong>Third trimester:</strong> Week 28 to birth – rapid weight
              gain and final preparations for delivery.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-semibold text-sky-800 mb-2">
            A gentle reminder
          </h3>
          <p className="text-xs text-slate-500">
            This calculator offers an estimate based on typical pregnancy
            lengths. It does not predict premature or late births, and it is
            not meant for emergency use. For any concerns about your pregnancy
            or baby&apos;s growth, please contact your obstetrician or fertility
            specialist.
          </p>
        </section>
      </div>
    </CalculatorLayout>
  );
}
