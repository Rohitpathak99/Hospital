import React, { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.date || !form.department) {
      setStatus({ ok: false, msg: "Please fill all required fields." });
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/appointments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ ok: true, msg: "✅ Appointment booked successfully! We will contact you soon." });
        setForm({ name: "", email: "", phone: "", date: "", department: "", message: "" });
      } else {
        setStatus({ ok: false, msg: "❌ Something went wrong. Try again." });
      }
    } catch (error) {
      setStatus({ ok: false, msg: "❌ Server not responding. Make sure backend is running." });
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Book an Appointment</h1>

        {status && (
          <div
            className={`${
              status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            } p-3 rounded-lg mb-4`}
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Full Name *"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email *"
            type="email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Phone *"
            className="w-full border p-3 rounded-lg"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="date"
              value={form.date}
              onChange={onChange}
              type="date"
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="department"
              value={form.department}
              onChange={onChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Select Department *</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Gynecology</option>
              <option>Dermatology</option>
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Describe symptoms / message"
            rows={4}
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
