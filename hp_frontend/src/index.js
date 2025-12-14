import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ Make sure this is included so Tailwind works

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS Animations
AOS.init({
  duration: 1100,
  easing: "ease-in-out",
  once: true, // animation runs only once
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
