// src/pages/calculator/ConceptionCalculatorPage.jsx
import React, { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

export default function ConceptionCalculatorPage() {
  const [method, setMethod] = useState("lmp"); // "lmp" | "dueDate" | "weeks"
  const [lmp, setLmp] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [weeksPregnant, setWeeksPregnant] = useState("");
  const [extraDays, setExtraDays] = useState("");

  const [usedLmp, setUsedLmp] = useState(null);
  const [windowStart, setWindowStart] = useState(null);
  const [windowEnd, setWindowEnd] = useState(null);
  const [midDate, setMidDate] = useState(null);

  const formatDate = (date) =>
    date?.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    let baseLmp = null;

    // 1️⃣ Method: Last Menstrual Period
    if (method === "lmp") {
      if (!lmp) return;
      baseLmp = new Date(lmp);
    }

    // 2️⃣ Method: Estimated Due Date
    if (method === "dueDate") {
      if (!dueDate) return;
      const dd = new Date(dueDate);
      // LMP ≈ due date - 280 days (40 weeks)
      baseLmp = new Date(dd);
      baseLmp.setDate(dd.getDate() - 280);
    }

    // 3️⃣ Method: Weeks Pregnant (Gestational age)
    if (method === "weeks") {
      if (!weeksPregnant) return;
      const w = Number(weeksPregnant) || 0;
      const d = Number(extraDays) || 0;
      const totalDays = w * 7 + d;

      const today = new Date();
      baseLmp = new Date(today);
      baseLmp.setDate(today.getDate() - totalDays);
    }

    if (!baseLmp) return;

    // Conception window: LMP + 11 to +21 days
    const start = new Date(baseLmp);
    start.setDate(start.getDate() + 11);

    const end = new Date(baseLmp);
    end.setDate(end.getDate() + 21);

    const mid = new Date(
      (start.getTime() + end.getTime()) / 2
    );

    setUsedLmp(baseLmp);
    setWindowStart(start);
    setWindowEnd(end);
    setMidDate(mid);
  };

  return (
    <CalculatorLayout
      title="Pregnancy Conception Calculator"
      intro="Estimate when conception most likely occurred using your last period, due date, or weeks of pregnancy."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          {/* Method selector */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">
              Choose how you want to calculate:
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
                <span>By last menstrual period (LMP)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="dueDate"
                  checked={method === "dueDate"}
                  onChange={() => setMethod("dueDate")}
                  className="text-sky-600"
                />
                <span>By estimated due date (EDD)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="weeks"
                  checked={method === "weeks"}
                  onChange={() => setMethod("weeks")}
                  className="text-sky-600"
                />
                <span>By how many weeks pregnant you are</span>
              </label>
            </div>
          </div>

          {/* Inputs based on method */}
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

          {method === "dueDate" && (
            <label className="block text-sm font-medium text-slate-700">
              Your estimated due date (EDD)
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </label>
          )}

          {method === "weeks" && (
            <div className="grid grid-cols-[1.2fr_1fr] gap-4">
              <label className="block text-sm font-medium text-slate-700">
                Weeks pregnant
                <input
                  type="number"
                  min="0"
                  max="42"
                  value={weeksPregnant}
                  onChange={(e) => setWeeksPregnant(e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Extra days
                <input
                  type="number"
                  min="0"
                  max="6"
                  value={extraDays}
                  onChange={(e) => setExtraDays(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
                <span className="text-[11px] text-slate-500">
                  Optional
                </span>
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white hover:bg-sky-800 transition"
          >
            Show Likely Conception Window
          </button>

          <p className="text-xs text-slate-500 mt-1">
            Conception can rarely be pinpointed to a single day. This tool gives
            an estimated window based on typical cycle patterns.
          </p>
        </form>

        {/* ===== RESULTS ===== */}
        <div className="space-y-6">
          {windowStart && windowEnd ? (
            <>
              <div className="p-6 rounded-xl bg-sky-50 border border-sky-200 shadow-sm">
                <h3 className="font-semibold text-sky-800 text-lg">
                  Estimated conception window
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {usedLmp && (
                    <li>
                      📅 <strong>Estimated start of last period used:</strong>{" "}
                      {formatDate(usedLmp)}
                    </li>
                  )}
                  <li>
                    💖 <strong>Most likely conception window:</strong>{" "}
                    {formatDate(windowStart)} – {formatDate(windowEnd)}
                  </li>
                  {midDate && (
                    <li>
                      🌟 <strong>Approximate mid-point (possible conception day):</strong>{" "}
                      {formatDate(midDate)}
                    </li>
                  )}
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  Sperm can live inside the reproductive tract for several days,
                  and ovulation can shift slightly from month to month. This is
                  why we show a range of days instead of one exact date.
                </p>
              </div>
            </>
          ) : (
            <div className="p-6 rounded-xl bg-sky-50 border border-dashed border-sky-200 text-sm text-slate-600">
              Choose a method above, enter your details, and we&apos;ll estimate
              when conception most likely occurred.
            </div>
          )}

          {/* Extra explanation box */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
            <h3 className="text-base font-semibold text-sky-800 mb-2">
              How this conception calculator works
            </h3>
            <p className="mb-2">
              In a typical cycle, ovulation usually happens about 11–21 days
              after the first day of your period. Conception can occur when an
              egg meets sperm during this fertile window. Depending on the
              information you know — your last period, your due date, or how
              many weeks pregnant you are — we estimate when that window most
              likely occurred.
            </p>
            <p className="mb-2">
              These calculations are based on common patterns in menstrual
              cycles, but every body is different. Irregular cycles, hormonal
              conditions, and fertility treatments can all change the exact day
              pregnancy began.
            </p>
            <p className="text-xs text-slate-500">
              This tool is for informational purposes only and cannot replace
              medical advice, fertility counselling, or ultrasound-based dating.
              If you have questions about your pregnancy timeline, speak with
              your gynaecologist or fertility specialist.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
