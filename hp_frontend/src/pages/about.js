import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ====== Title Section ====== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-blue-600">Lifeline Hospital</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering excellence in healthcare with compassion and innovation.
          </p>
        </div>

        {/* ====== Hero Image / Intro ====== */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/hospital.jpg"
            alt="Our Hospital"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="md:w-1/2 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Founded in 1995, <strong>Lifeline Hospital</strong> has grown into
              one of India’s most trusted healthcare institutions. With a
              commitment to cutting-edge technology and patient care, we provide
              a range of services designed to meet the needs of our diverse
              community.
            </p>
            <p className="mb-4">
              Our dedicated team of doctors, nurses, and healthcare
              professionals work tirelessly to ensure that every patient
              receives personalized treatment and the highest quality of care.
            </p>
            <p>
              At Lifeline, we believe in healing not just the body, but the
              person — through compassion, understanding, and innovation.
            </p>
          </div>
        </div>

        {/* ====== Mission, Vision, Values ====== */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Our Mission</h3>
            <p className="text-gray-600">
              To provide compassionate, affordable, and high-quality healthcare
              that empowers people to live healthier, happier lives.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in healthcare innovation and patient
              experience, setting new standards in medical excellence.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Our Values</h3>
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
              <li>Integrity and Transparency</li>
              <li>Patient-Centered Care</li>
              <li>Continuous Learning and Growth</li>
              <li>Innovation in Every Step</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
  );
}
