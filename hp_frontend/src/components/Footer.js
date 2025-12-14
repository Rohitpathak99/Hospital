import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#DBEDFF] text-blue-900 pt-14 pb-6 font-[Poppins] border-t border-blue-200">
      
      {/* ───────────── TOP GRID: 4 MAIN SECTIONS ───────────── */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Male Fertility */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4 underline decoration-blue-500/60 underline-offset-4">
            Male Fertility Treatment
          </h3>
          <ul className="space-y-2 text-[15px]">
            <Link to="/icsi-treatment" className="hover:text-blue-600 block">ICSI Treatment</Link>
            <Link to="/infertility-workup" className="hover:text-blue-600 block">Infertility Workup</Link>
            <Link to="/micro-tese" className="hover:text-blue-600 block">Micro TESE</Link>
            <Link to="/semen-analysis" className="hover:text-blue-600 block">Semen Analysis</Link>
            <Link to="/sperm-dfi-test" className="hover:text-blue-600 block">Sperm DFI Test</Link>
          </ul>
        </div>

        {/* Female Fertility */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4 underline decoration-blue-500/60 underline-offset-4">
            Female Fertility
          </h3>
          <ul className="space-y-2 text-[15px]">
            <Link to="/blastocyst-culture" className="hover:text-blue-600 block">Blastocyst Culture</Link>
            <Link to="/cryopreservation" className="hover:text-blue-600 block">Cryopreservation</Link>
            <Link to="/hysteroscopy" className="hover:text-blue-600 block">Hysteroscopy</Link>
            <Link to="/iui-treatment" className="hover:text-blue-600 block">IUI Treatment</Link>
            <Link to="/ivf-treatment" className="hover:text-blue-600 block">IVF Treatment</Link>
            <Link to="/laparoscopy" className="hover:text-blue-600 block">Laparoscopy</Link>
            <Link to="/sonography" className="hover:text-blue-600 block">Sonography</Link>
          </ul>
        </div>

        {/* Infertility Problems */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4 underline decoration-blue-500/60 underline-offset-4">
            Infertility Problems
          </h3>
          <ul className="space-y-2 text-[15px]">
            <Link to="/blocked-tube" className="hover:text-blue-600 block">Blocked Fallopian Tube</Link>
            <Link to="/endometriosis" className="hover:text-blue-600 block">Endometriosis</Link>
            <Link to="/female-infertility" className="hover:text-blue-600 block">Female Infertility</Link>
            <Link to="/irregular-periods" className="hover:text-blue-600 block">Irregular Periods</Link>
            <Link to="/male-infertility" className="hover:text-blue-600 block">Male Infertility</Link>
            <Link to="/pcod-pcos" className="hover:text-blue-600 block">PCOD / PCOS</Link>
            <Link to="/ovarian-cyst" className="hover:text-blue-600 block">Ovarian Cyst</Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4 underline decoration-blue-500/60 underline-offset-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>📍 Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@lifelinehospital.com</li>
          </ul>

          {/* Social */}
          <h4 className="mt-6 font-semibold text-blue-700 mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-600">📷</a>
            <a href="#" className="hover:text-blue-600">📘</a>
            <a href="#" className="hover:text-blue-600">🐦</a>
            <a href="#" className="hover:text-blue-600">🔗</a>
          </div>
        </div>
      </div>

      {/* ───────────── SECOND ROW — CALCULATORS ───────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 underline decoration-blue-500/60 underline-offset-4">
          Calculators
        </h3>

        <div className="flex flex-col gap-2 text-[15px]">
          <Link to="/conception-calculator" className="hover:text-blue-600 w-fit">Conception Calculator</Link>
          <Link to="/due-date-calculator" className="hover:text-blue-600 w-fit">Due Date Calculator</Link>
          <Link to="/ovulation-calculator" className="hover:text-blue-600 w-fit">Ovulation Calculator</Link>
          <Link to="/period-calculator" className="hover:text-blue-600 w-fit">Period Calculator</Link>
          <Link to="/pregnancy-calculator" className="hover:text-blue-600 w-fit">Pregnancy Calculator</Link>
        </div>
      </div>

      {/* ───────────── BOTTOM COPYRIGHT BAR ───────────── */}
      <div className="text-center text-sm text-blue-800/70 mt-10 pt-5 border-t border-blue-200">
        © {new Date().getFullYear()} Lifeline Hospital — All Rights Reserved.
      </div>
    </footer>
  );
}
