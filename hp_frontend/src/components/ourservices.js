import React from "react";

export default function OurServices() {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=60",
      title: "Female Fertility Care",
      desc: "Hormonal evaluation, PCOS/PCOD management, ovulation support & reproductive wellness care.",
      link: "/services/female-fertility",
    },
    {
      img: "https://images.unsplash.com/photo-1579152613346-f03b1cdb0a9b?auto=format&fit=crop&w=1100&q=60",
      title: "Male Fertility Health",
      desc: "Diagnosis and treatment for low sperm count, motility issues and reproductive hormonal imbalance.",
      link: "/services/male-fertility",
    },
    {
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1100&q=60",
      title: "IVF & Assisted Reproduction",
      desc: "Advanced IVF, ICSI, embryo transfer & personalized conception planning under expert guidance.",
      link: "/services/ivf-treatment",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Fertility Services We Provide
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Comprehensive reproductive care for both men and women, including 
          advanced IVF treatment for those who require assisted conception.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white 
              hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <a href={service.link}>
                  <h3 className="text-lg font-semibold text-blue-800 hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                </a>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                <a
                  href={service.link}
                  className="group mt-4 inline-flex items-center gap-1 text-sm 
                  font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
