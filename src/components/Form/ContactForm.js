const ContactForm = ({ params }) => {
  return (
    <>
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
                href="mailto:ijjazahmad@hotmail.com"
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
                      ijjazahmad@hotmail.com
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

      <section className="contact py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col" data-aos="fade-right">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435799.68877348956!2d72.49831576344414!3d31.422801903001577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1739867851490!5m2!1sen!2sbd"
                  height="100%"
                  style={{ border: 0 }}
                  title="Faisalabad, Pakistan Location Map"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
                <div className="map__overlay">
                  <div className="map__label">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Faisalabad, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6" data-aos="fade-left">
            <div className="contact__form">
              <div className="form__header">
                <div className="form__label">&lt; message_me /&gt;</div>
                <h3>Send a Message</h3>
                <p>Let's discuss your project and bring your ideas to life</p>
              </div>
              <form action="#">
                <div className="form__group">
                  <label htmlFor="name">
                    <i className="fa-solid fa-user"></i>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">
                    <i className="fa-solid fa-envelope"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="subject">
                    <i className="fa-solid fa-tag"></i>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="message">
                    <i className="fa-solid fa-message"></i>
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form__submit">
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactForm;
