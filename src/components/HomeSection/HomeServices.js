import React from "react";

const services = [
  {
    img: "fa-brands fa-react",
    title: "React.js & Next.js Development",
    detail:
      "Expert React.js and Next.js development services for building high-performance, SEO-friendly web applications with modern JavaScript frameworks and best practices.",
  },
  {
    img: "fa-solid fa-code",
    title: "Mobile App Development",
    detail:
      "Professional React Native and native mobile app development for iOS and Android platforms, creating responsive and user-friendly mobile applications.",
  },
  {
    img: "fa-solid fa-server",
    title: "Full Stack MERN Development",
    detail:
      "Complete end-to-end development using MongoDB, Express.js, React.js, and Node.js stack for scalable web applications and RESTful APIs.",
  },
];

function HomeServices() {
  return (
    <section className="services_page" aria-labelledby="services-heading">
      <div className="services-page py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <div className="lh-1 text-white">
                <span data-aos="fade-left" className="text-warning small">
                  What I Offer
                </span>
                <h2
                  id="services-heading"
                  data-aos="fade-left"
                  className="fw-semibold fs-2 text-warning"
                >
                  My Development Services
                </h2>
              </div>
            </div>
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <article className="services__item">
                  <div className="services__item__icon" aria-hidden="true">
                    <i className={`${service.img} text-white fs-1`}></i>
                  </div>
                  <h3 className="h4">{service.title}</h3>
                  <p className="text-white-50">{service.detail}</p>
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
