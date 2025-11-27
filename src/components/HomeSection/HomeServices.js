import React from "react";

const services = [
  {
    icon: "fa-brands fa-react",
    title: "React / Next.JS",
    description: "Modern, fast, and interactive SAAS with cutting-edge frameworks and optimized performance",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile Development",
    description: "High-performance native mobile applications for iOS and Android with seamless UX",
    stack: ["React Native", "Native APIs"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Full Stack (MERN)",
    description: "Complete web solutions from database architecture to polished user interfaces",
    stack: ["MongoDB", "Express", "Node.js"],
  },
];

function HomeServices() {
  return (
    <section className="services_page" aria-labelledby="services-heading">
      <div className="services-page py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="section__label" data-aos="fade-up">
                &lt; what_i_do /&gt;
              </div>
              <h2 
                id="services-heading"
                className="section__title" 
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                Services & Expertise
              </h2>
              <p className="section__subtitle" data-aos="fade-up" data-aos-delay="200">
                Building digital experiences with modern technologies
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <article className="services__item">
                  <div className="services__number">0{index + 1}</div>
                  <div className="services__item__icon" aria-hidden="true">
                    <i className={service.icon}></i>
                    <div className="icon__glow"></div>
                  </div>
                  <h3 className="h4">{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="services__stack">
                    {service.stack.map((tech, idx) => (
                      <span key={idx} className="stack__tag">{tech}</span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
