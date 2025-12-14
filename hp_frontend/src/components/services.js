export default function Services() {
  const services = [
    { title: "Cardiology", desc: "Heart care and cardiac surgeries." },
    { title: "Orthopedics", desc: "Bone, joint, and muscle treatments." },
    { title: "Neurology", desc: "Brain and spine-related care." },
    { title: "Pediatrics", desc: "Child and infant healthcare." },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Specialties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}