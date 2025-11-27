import React from "react";

export default function ServicesHero() {
  return (
    <div className="services__hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto py-5 text-center">
            <div className="hero__label" data-aos="fade-down">
              &lt; services /&gt;
            </div>
            <h1 className="hero__title" data-aos="fade-up" data-aos-delay="100">
              What I Offer
            </h1>
            <p className="hero__breadcrumb" data-aos="fade-up" data-aos-delay="200">
              <span>Home</span>
              <i className="fa-solid fa-chevron-right"></i>
              <span className="active">Services</span>
            </p>
            <div className="hero__decoration">
              <div className="decoration__line"></div>
              <div className="decoration__dot"></div>
              <div className="decoration__line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__bg__grid"></div>
    </div>
  );
}
