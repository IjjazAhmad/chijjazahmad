import ContactForm from "../../../components/Form/ContactForm";

const Contact = () => {
  return (
    <div className="contact__page">
      {/* Hero Section */}
      <div className="contact__hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto py-5 text-center">
              <div className="hero__label" data-aos="fade-down">
                &lt; get_in_touch /&gt;
              </div>
              <h1
                className="hero__title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let's Work Together
              </h1>
              <p
                className="hero__breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span>Home</span>
                <i className="fa-solid fa-chevron-right"></i>
                <span className="active">Contact</span>
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

      {/* Contact Info Cards */}
      <section className="contact-widget py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="contact__widget__item">
                <div className="contact__widget__icon">
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="icon__glow"></div>
                </div>
                <div className="contact__widget__content">
                  <h4>Location</h4>
                  <p>
                    Faisalabad, Punjab
                    <br />
                    Pakistan
                  </p>
                </div>
                <div className="card__corner top-right"></div>
                <div className="card__corner bottom-left"></div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a
                href="https://wa.me/923267876344"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__widget__link"
              >
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa-brands fa-whatsapp"></i>
                    <div className="icon__glow"></div>
                  </div>
                  <div className="contact__widget__content">
                    <h4>WhatsApp</h4>
                    <p>
                      +92 326 7876344
                      <br />
                      Available 24/7
                    </p>
                  </div>
                  <div className="card__corner top-right"></div>
                  <div className="card__corner bottom-left"></div>
                </div>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="mailto:ijjazahmad705@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__widget__link"
              >
                <div className="contact__widget__item">
                  <div className="contact__widget__icon">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="icon__glow"></div>
                  </div>
                  <div className="contact__widget__content">
                    <h4>Email</h4>
                    <p>
                      ijjazahmad705@gmail.com
                      <br />
                      Quick Response
                    </p>
                  </div>
                  <div className="card__corner top-right"></div>
                  <div className="card__corner bottom-left"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
