import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ================= PAGES ================= */
import Home from "./pages/home";
import About from "./pages/about";
import Doctors from "./pages/doctors";          // (Make sure you have this page)
import Appointment from "./pages/appointment";
import Contact from "./pages/contact";

/* === Newly Added Calculator Pages === */
import PregnancyCalculatorPage from "./pages/calculator/PregnancyCalculatorPage";
import OvulationCalculatorPage from "./pages/calculator/OvulationCalculatorPage";
import ConceptionCalculatorPage from "./pages/calculator/ConceptionCalculatorPage";
import PeriodCalculatorPage from "./pages/calculator/PeriodCalculatorPage";
import DueDateCalculatorPage from "./pages/calculator/DueDateCalculatorPage";

// Fertility pages
import MaleFertility from "./pages/Fertility/malefertility";
import FemaleFertility from "./pages/Fertility/femalefertility";

// All products
import AllProducts from "./pages/Allproducts/Allproducts";

/* ================= COMPONENTS ================= */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


/* ================= APP ================= */
function App() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Router>
      {/* NAVBAR — Visible on every page */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-16 bg-gray-50 min-h-screen">

        <Routes>
          {/* NORMAL PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔵 Pregnancy Tool Routes */}
          <Route path="/pregnancy-calculator" element={<PregnancyCalculatorPage />} />
          <Route path="/ovulation-calculator" element={<OvulationCalculatorPage />} />
          <Route path="/conception-calculator" element={<ConceptionCalculatorPage />} />
          <Route path="/period-calculator" element={<PeriodCalculatorPage />} />
          <Route path="/due-date-calculator" element={<DueDateCalculatorPage />} />

          {/*  Fertility pages */}
          <Route path="/services/female-fertility" element={<FemaleFertility />} />
          <Route path="/services/male-fertility" element={<MaleFertility />} />

          {/*  All product page */}
          <Route path="/products" element={<AllProducts />} />


          

        </Routes>
      </main>

      {/* FOOTER — Visible on all pages */} 
      <Footer />

      {/* Floating Emergency Button */}
      <a
        href="tel:108"
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 
        text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold 
        animate-bounce-slow"
      >
        🚑 Emergency • 24/7
      </a>

    </Router>
  );
}

export default App;
