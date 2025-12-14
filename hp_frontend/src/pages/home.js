// src/pages/home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components (make sure filenames/exports match these import names)
import CarouselHeroCard from "../components/carousel";     // your carousel with side card
import HeroSection from "../components/herosection";      // about + "let us help you" card
import Testimonials from "../components/testimonials";   // contains its own heading
import Hero from "../components/hero";
import OurServices from "../components/ourservices";
import LogoSlider from "../components/productslider";
import FAQSection from "../components/FAQSection";
import PregnancyTools from "../components/Tools";


import {
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BeakerIcon,
  UserIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* ===== CAROUSEL SECTION (Single Background Image + Right Card inside component) ===== */}
      <section id="home" className="relative w-full h-[92vh]">
        <CarouselHeroCard />
      </section>
      <section id="hero" className="relative">
        <Hero />
      </section>
      {/* ===== HERO/ABOUT SECTION (imported from herosection.js) ===== */}
      <HeroSection />
      <OurServices />
      <div className="p-5"> <LogoSlider /></div>
      <FAQSection />
      <PregnancyTools />
      
      {/* ===== TESTIMONIALS (component includes the heading already) ===== */}
      <section id="testimonials" className="py-20 bg-gray-50" data-aos="fade-up">
        <Testimonials />
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        id="contact"
        className="bg-blue-900 text-white text-center py-20 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-3">Need Assistance?</h2>
        <p className="max-w-2xl mx-auto text-gray-200">
          Our medical team is available 24/7 to support you.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}