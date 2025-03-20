import React from "react";
const services = [
  {
    img: "fa-brands fa-react",
    title: "Website Development",
    detail:
      "Focuses on building high-performance web applications using React.js, Next.js, and other related technologies.",
  },
  {
    img: "fa-solid fa-code",
    title: "Mobile App Development",
    detail:
      "Focuses on building high-performance native mobile applications for both Android and iOS platforms.",
  },
  {
    img: "fa-solid fa-database",
    title: "Real-Time Web & Mobile Solutions",
    detail:
      "Provides real-time data solutions features like chat apps, notifications, and live updates for web and mobile applications.",
  },
  {
    img: "fa-solid fa-server",
    title: "End-to-End Digital Product Development",
    detail:
      "Handles everything from ideation to deployment for web and mobile applications.",
  },
  {
    img: "fa-solid fa-laptop-code",
    title: "API INTEGRATION",
    detail:
      "Ensures seamless integration of web and mobile applications with APIs for data exchange and communication.",
  },
  {
    img: "fa-solid fa-cloud-arrow-up",
    title: "Cloud-Based Application Deployment",
    detail:
      "Ensures seamless deployment of web and mobile applications on cloud platforms like AWS, Azure, and Google Cloud.",
  },
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
                <p className="text-white-50">{service.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
