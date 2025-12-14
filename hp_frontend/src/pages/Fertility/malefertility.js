import React from "react";
import { Link } from "react-router-dom";

export default function MaleFertility() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HERO ===== */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
            Male Fertility Care & Treatment
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Male fertility plays an equally important role in conception. Our
            specialised care focuses on identifying causes, improving sperm
            health, and supporting couples on their fertility journey.
          </p>
        </div>

        {/* ===== INTRO ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-12">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">
            Understanding Male Fertility
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Male fertility refers to a man’s ability to contribute to pregnancy
            through healthy sperm production, proper hormone balance, and
            effective delivery of sperm. Around one-third of infertility cases
            involve male-related factors, either alone or alongside female
            factors.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Many male fertility concerns are treatable once the underlying cause
            is identified. Early evaluation helps improve outcomes and reduces
            delays in achieving pregnancy.
          </p>
        </div>

        {/* ===== COMMON CAUSES ===== */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-sky-800 mb-6">
            Common Causes of Male Infertility
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Low Sperm Count",
                desc: "A reduced number of sperm can lower the chances of fertilisation. This may be temporary or related to lifestyle, hormonal, or medical factors.",
              },
              {
                title: "Poor Sperm Motility",
                desc: "Sperm that do not move effectively may struggle to reach and fertilise the egg.",
              },
              {
                title: "Abnormal Sperm Shape",
                desc: "Irregular sperm structure can interfere with fertilisation even if sperm count is normal.",
              },
              {
                title: "Hormonal Imbalances",
                desc: "Hormones such as testosterone and FSH play a key role in sperm production. Imbalances can disrupt fertility.",
              },
              {
                title: "Varicocele",
                desc: "Enlarged veins around the testicles can affect sperm quality by increasing temperature.",
              },
              {
                title: "Lifestyle Factors",
                desc: "Smoking, alcohol use, stress, obesity, lack of sleep, and exposure to toxins can negatively impact fertility.",
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
            How Male Fertility Is Evaluated
          </h2>

          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>
              <strong>Semen Analysis:</strong> Measures sperm count, movement,
              and shape.
            </li>
            <li>
              <strong>Hormonal Tests:</strong> Evaluates testosterone and other
              reproductive hormones.
            </li>
            <li>
              <strong>Ultrasound & Imaging:</strong> Detects structural issues
              such as varicocele or blockages.
            </li>
            <li>
              <strong>Medical History Review:</strong> Includes past illnesses,
              medications, surgeries, and lifestyle habits.
            </li>
          </ul>
        </div>

        {/* ===== TREATMENTS ===== */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-sky-800 mb-6">
            Male Fertility Treatment Options
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lifestyle & Nutritional Guidance",
                desc: "Personalised plans focusing on diet, exercise, sleep, and stress management to support sperm health.",
              },
              {
                title: "Medical Treatment",
                desc: "Medications or hormone therapy may be prescribed to correct underlying imbalances or infections.",
              },
              {
                title: "Surgical Treatment",
                desc: "Procedures such as varicocele repair or sperm retrieval techniques when needed.",
              },
              {
                title: "Assisted Reproductive Techniques",
                desc: "IVF, ICSI, and related techniques help overcome sperm-related challenges effectively.",
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

        {/* ===== WHEN TO SEE A DOCTOR ===== */}
        <div className="bg-sky-100 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            When Should You Seek Help?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-3">
            Consider consulting a fertility specialist if:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>You have been trying to conceive for over a year</li>
            <li>You have a history of testicular injury or surgery</li>
            <li>You experience sexual or hormonal concerns</li>
            <li>You have undergone cancer treatment</li>
          </ul>
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">
            Take the First Step Toward Parenthood
          </h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Male fertility challenges are common and treatable. Our specialists
            provide compassionate, confidential, and science-based care tailored
            to your needs.
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
