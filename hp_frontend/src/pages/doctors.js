import React, { useState, useMemo, useEffect } from "react";

const SPECIALIZATIONS = [
  "All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Gynecology", "Dermatology"
];

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from Django API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(() => console.log("⚠️ Backend not running"));
  }, []);

  // Filtering logic (applied on live data)
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc =>
      (filter === "All" || doc.department === filter) &&
      doc.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }, [search, filter, doctors]);

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Title + Filters */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-900" data-aos="fade-up">
            Meet Our Medical Experts
          </h1>

          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="150">
            Our doctors are highly trained specialists dedicated to providing the finest care.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Search doctor by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 w-full md:w-72 border rounded-lg shadow-sm"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 border rounded-lg shadow-sm w-full md:w-56"
            >
              {SPECIALIZATIONS.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </header>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doc => (
              <div
                key={doc.id}
                data-aos="zoom-in"
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={doc.photo ? doc.photo : "/doctor-placeholder.jpg"}

                    alt={doc.name}
                    className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800">{doc.name}</h3>
                  <p className="text-blue-600 mt-1">{doc.department}</p>
                  <p className="text-gray-500 mt-1">{doc.experience}+ Years Experience</p>

                  <button
                    onClick={() => (window.location.href = "/appointment")}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">Loading doctors...</p>
          )}
        </div>

      </div>
    </section>
  );
}
