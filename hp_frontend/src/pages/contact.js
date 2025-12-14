import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: "Please fill all fields." });
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ ok: true, msg: "✅ Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ ok: false, msg: "❌ Failed to send message." });
      }
    } catch {
      setStatus({ ok: false, msg: "⚠️ Server not responding." });
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We’re here to help. Reach us by phone, email, or message us directly.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>📍 Lifeline Hospital, Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ contact@lifelinehospital.com</li>
          </ul>

          {status && (
            <p
              className={`mb-4 font-medium ${
                status.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.msg}
            </p>
          )}

          <form onSubmit={onSubmit} className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Your Email *"
              className="w-full border p-3 rounded-lg"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message *"
              rows={4}
              className="w-full border p-3 rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <iframe
          title="Hospital Map"
          className="w-full h-[420px] rounded-2xl shadow border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Mumbai&output=embed"
        />
      </div>
    </section>
  );
}
