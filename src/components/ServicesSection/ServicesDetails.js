import React from "react";

const services = [
  {
    img: "fa-brands fa-react",
    title: "Website Development",
    detail:
      "High-performance web applications using React.js, Next.js, and cutting-edge frontend technologies for blazing-fast user experiences.",
    features: ["SPA Architecture", "SSR & SSG", "PWA Support"],
  },
  {
    img: "fa-solid fa-code",
    title: "Mobile App Development",
    detail:
      "Native mobile applications for Android and iOS platforms with seamless performance and intuitive interfaces.",
    features: ["Cross-Platform", "Native APIs", "Offline Mode"],
  },
  {
    img: "fa-solid fa-database",
    title: "Real-Time Solutions",
    detail:
      "Real-time data synchronization with chat apps, notifications, and live updates for engaging web and mobile experiences.",
    features: ["WebSockets", "Live Updates", "Push Notifications"],
  },
  {
    img: "fa-solid fa-server",
    title: "End-to-End Development",
    detail:
      "Complete digital product lifecycle from ideation and design to deployment and maintenance for web and mobile platforms.",
    features: ["MVP Development", "Scaling", "Maintenance"],
  },
  {
    img: "fa-solid fa-laptop-code",
    title: "API Integration",
    detail:
      "Seamless integration with third-party APIs and services for data exchange, payment processing, and enhanced functionality.",
    features: ["REST APIs", "GraphQL", "Webhooks"],
  },
  {
    img: "fa-solid fa-cloud-arrow-up",
    title: "Cloud Deployment",
    detail:
      "Scalable cloud infrastructure deployment on AWS, Azure, and Google Cloud with automated CI/CD pipelines and monitoring.",
    features: ["Auto-Scaling", "Load Balancing", "DevOps"],
  },
];

export default function ServicesDetails() {
  return (
    <section className="services-page py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="section__label" data-aos="fade-up">
              &lt; expertise /&gt;
            </div>
            <p
              className="section__subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive solutions for your digital transformation
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="services__item">
                <div className="services__number">0{index + 1}</div>
                <div className="services__item__icon">
                  <i className={service.img}></i>
                  <div className="icon__glow"></div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.detail}</p>
                <div className="services__features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature__tag">
                      <i className="fa-solid fa-check"></i>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
