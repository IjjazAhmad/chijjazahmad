import ContactForm from "../../../components/Form/ContactForm";

const Contact = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col py-5 text-white  text-center">
              <h1>Contact Us</h1>
              <p className="gap-3 align-items-center justify-content-center d-flex">
                Home <i class="fa-solid fa-arrow-right-long"></i> Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-widget py-5 spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact__widget__item text-white-50">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Address</h4>
                  <p>Faisalabad, Punjab Pakistan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact__widget__item">
                <a
                  href="https://wa.me/923267876344"
                  target="_blank"
                  className="text-white-50"
                >
                  <div className="contact__widget__item__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact__widget__item__text">
                    <h4>Phone</h4>
                    <p>+923267876344</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact__widget__item">
                {" "}
                <a
                  target="_blank"
                  href="mailto:ijjazahmad@hotmail.com"
                  className="text-white-50"
                >
                  <div className="contact__widget__item__icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact__widget__item__text">
                    <h4>Email</h4>
                    <p>ijjazahmad@hotmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Contact;
