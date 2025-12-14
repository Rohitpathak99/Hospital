import React from "react";
import { Link } from "react-router-dom";

export default function FemaleFertility() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HERO ===== */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
            Female Fertility Care & Treatment
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Female fertility depends on hormonal balance, ovulation, and overall
            reproductive health. Our personalised approach supports women at
            every stage of their fertility journey.
          </p>
        </div>

        {/* ===== INTRO ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-12">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Understanding Female Fertility
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Female fertility is influenced by many factors, including age,
            menstrual cycle regularity, ovulation, uterine health, and hormonal
            balance. Even minor disruptions in these areas can affect the
            ability to conceive.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Many fertility concerns in women are manageable with timely
            diagnosis and the right treatment plan. Early evaluation helps
            identify concerns and improves the chances of a healthy pregnancy.
          </p>
        </div>

        {/* ===== COMMON CONDITIONS ===== */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-sky-800 mb-6">
            Common Female Fertility Conditions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "PCOS / PCOD",
                desc: "A common hormonal condition that can cause irregular periods, ovulation issues, and difficulty conceiving.",
              },
              {
                title: "Irregular or Absent Ovulation",
                desc: "When ovulation does not occur regularly, it becomes harder to predict fertile days and achieve pregnancy.",
              },
              {
                title: "Blocked Fallopian Tubes",
                desc: "Blockages can prevent sperm from reaching the egg or stop a fertilised egg from reaching the uterus.",
              },
              {
                title: "Endometriosis",
                desc: "A condition where tissue similar to the uterine lining grows outside the uterus, sometimes affecting fertility.",
              },
              {
                title: "Uterine Conditions",
                desc: "Fibroids, polyps, or structural differences in the uterus may interfere with implantation.",
              },
              {
                title: "Age-related Fertility Changes",
                desc: "Fertility naturally declines with age due to reduced egg quantity and quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 border-l-4 border-sky-600"
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DIAGNOSIS ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            How Female Fertility Is Evaluated
          </h2>

          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>
              <strong>Hormonal Blood Tests:</strong> Assess ovulation and hormone
              balance.
            </li>
            <li>
              <strong>Ultrasound Scans:</strong> Examine ovaries, uterus, and
              follicle development.
            </li>
            <li>
              <strong>Ovulation Tracking:</strong> Helps identify fertile windows
              and cycle patterns.
            </li>
            <li>
              <strong>Tubal Evaluation:</strong> Checks whether fallopian tubes
              are open and functioning.
            </li>
            <li>
              <strong>Medical History Review:</strong> Includes menstrual
              patterns, symptoms, and previous pregnancies or treatments.
            </li>
          </ul>
        </div>

        {/* ===== TREATMENT OPTIONS ===== */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-sky-800 mb-6">
            Female Fertility Treatment Options
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cycle Regulation & Ovulation Support",
                desc: "Medications and monitoring to support regular ovulation and healthy cycles.",
              },
              {
                title: "PCOS & Hormonal Management",
                desc: "Targeted treatment plans to manage hormonal imbalances and improve egg quality.",
              },
              {
                title: "Uterine & Tubal Treatments",
                desc: "Medical or minimally invasive procedures when structural concerns are present.",
              },
              {
                title: "Assisted Reproductive Techniques",
                desc: "IVF, IUI, and advanced options to support conception when needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== WHEN TO SEEK HELP ===== */}
        <div className="bg-sky-100 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            When Should You Consult a Specialist?
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Irregular or absent periods</li>
            <li>Trying to conceive for over a year (or 6 months if over 35)</li>
            <li>Diagnosed PCOS, endometriosis, or thyroid conditions</li>
            <li>Previous pregnancy losses or fertility treatments</li>
            <li>Pelvic pain or severe menstrual discomfort</li>
          </ul>
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            Compassionate Care for Every Woman
          </h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Every fertility journey is unique. Our team offers respectful,
            evidence-based care designed around your body, your health, and your
            goals.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full
                       bg-sky-700 text-white font-semibold
                       hover:bg-sky-800 transition"
          >
            Book a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
