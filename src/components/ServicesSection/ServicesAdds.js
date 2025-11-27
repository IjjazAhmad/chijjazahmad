import React from "react";

export default function ServicesAdds() {
  return (
    <section className="services__cta py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="cta__content" data-aos="zoom-in">
              <div className="cta__decoration">
                <div className="decoration__corner top-left"></div>
                <div className="decoration__corner top-right"></div>
                <div className="decoration__corner bottom-left"></div>
                <div className="decoration__corner bottom-right"></div>
              </div>
              
              <div className="cta__label">&lt; let's_collaborate /&gt;</div>
              <h2 className="cta__title">
                Ready to Build Something Amazing?
              </h2>
              <p className="cta__description">
                Full-stack development services covering everything from UI/UX design 
                to scalable back-end architecture. Let's turn your vision into reality.
              </p>
              
              <div className="cta__stats">
                <div className="stat__item">
                  <div className="stat__number">50+</div>
                  <div className="stat__label">Projects</div>
                </div>
                <div className="stat__divider"></div>
                <div className="stat__item">
                  <div className="stat__number">30+</div>
                  <div className="stat__label">Clients</div>
                </div>
                <div className="stat__divider"></div>
                <div className="stat__item">
                  <div className="stat__number">5+</div>
                  <div className="stat__label">Years</div>
                </div>
              </div>

              <div className="cta__actions">
                <a
                  href="https://wa.me/+923267876344"
                  className="btn__primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Start a Project
                </a>
                <a href="/contact" className="btn__secondary">
                  <i className="fa-solid fa-envelope"></i>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta__bg__glow"></div>
    </section>
  );
}
