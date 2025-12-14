import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Navbar blur change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart Navigation (Home scroll + Page redirect)
  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // navigate home first
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 250);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg
      ${isScrolled ? "bg-white/90 shadow-md border-b border-white/30" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div
          onClick={() => handleScrollToSection("home")}
          className="text-2xl font-bold cursor-pointer select-none text-blue-700"
        >
          SLRD <span className="text-blue-500">MEMORIAL HOSPITAL</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-800 font-medium">
          {["home", "about", "departments", "customer feedback", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="nav-link hover:text-blue-700 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 shadow-md flex flex-col items-center space-y-4 py-4 backdrop-blur-lg">
          {["home", "about", "departments", "testimonials", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="text-gray-800 hover:text-blue-700 transition nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
