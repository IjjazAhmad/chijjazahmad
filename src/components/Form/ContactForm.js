const ContactForm = () => {
  return (
    <section className="contact spad py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435799.68877348956!2d72.49831576344414!3d31.422801903001577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1739867851490!5m2!1sen!2sbd"
                height="450"
                style={{ border: 0 }}
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <h3>Get in touch</h3>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website"
                />
                <textarea
                  className="form-control"
                  placeholder="Message"
                ></textarea>
                <div className="col">
                  <button
                    type="submit"
                    className="btn w-100 btn-warning rounded-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
