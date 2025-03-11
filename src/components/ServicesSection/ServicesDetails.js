import React from "react";
const services = [
  { img: "fa-brands fa-react", title: "WEB DEVELOPMENT" },
  { img: "fa-solid fa-code", title: "BACKEND DEVELOPMENT" },
  { img: "fa-solid fa-database", title: "DATABASE" },
  { img: "fa-solid fa-server", title: "SERVER" },
  { img: "fa-solid fa-laptop-code", title: "API INTEGRATION" },
  { img: "fa-solid fa-cloud-arrow-up", title: "DEPOLYMENT" },
];
export default function ServicesDetails() {
  return (
    <section className="services-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="lh-1 text-white">
              <span data-aos="fade-left">Who Am I ?</span>
              <h3
                data-aos="fade-left"
                className="fw-semibold fs-2 text-warning"
              >
                My Services!
              </h3>
            </div>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="services__item">
                <div className="services__item__icon">
                  <i className={`${service.img} text-white fs-1`}></i>
                </div>
                <h4>{service.title}</h4>
                <p className="text-white-50">
                  Our full-stack development services cover everything from
                  front-end design to back-end solutions, ensuring seamless,
                  scalable, and user-friendly web applications.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
