import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  trackFormSubmission,
  trackCTAClick,
} from "../Analytics/GoogleAnalytics";

// EmailJS Configuration - Replace with your actual IDs
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EnhancedContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          project_type: data.projectType,
          budget: data.budget,
        },
        EMAILJS_PUBLIC_KEY
      );

      // Track form submission
      trackFormSubmission("contact_form");

      setSubmitStatus("success");
      reset();

      // Clear success message after 10 seconds
      setTimeout(() => setSubmitStatus(null), 10000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactWidgets = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      lines: ["Faisalabad, Punjab", "Pakistan"],
      link: null,
      ariaLabel: "Location: Faisalabad, Punjab, Pakistan",
    },
    {
      icon: "fa-brands fa-whatsapp",
      title: "WhatsApp",
      lines: ["+92 326 7876344", "Available 24/7"],
      link: "https://wa.me/923267876344",
      ariaLabel: "Contact via WhatsApp: +92 326 7876344",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      lines: ["ijjazahmad@hotmail.com", "Quick Response"],
      link: "mailto:ijjazahmad@hotmail.com",
      ariaLabel: "Email: ijjazahmad@hotmail.com",
    },
  ];

  return (
    <>
      {/* Contact Widgets Section */}
      <section
        className="contact-widget py-5"
        aria-labelledby="contact-widgets-heading"
      >
        <div className="container py-5">
          <h2 id="contact-widgets-heading" className="visually-hidden">
            Contact Information
          </h2>
          <div className="row g-4">
            {contactWidgets.map((widget, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {widget.link ? (
                  <a
                    href={widget.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__widget__link"
                    aria-label={widget.ariaLabel}
                    onClick={() =>
                      trackCTAClick(`contact_${widget.title.toLowerCase()}`)
                    }
                  >
                    <div className="contact__widget__item">
                      <div className="contact__widget__icon">
                        <i className={widget.icon}></i>
                        <div className="icon__glow"></div>
                      </div>
                      <div className="contact__widget__content">
                        <h4>{widget.title}</h4>
                        <p>
                          {widget.lines[0]}
                          <br />
                          {widget.lines[1]}
                        </p>
                      </div>
                      <div className="card__corner top-right"></div>
                      <div className="card__corner bottom-left"></div>
                    </div>
                  </a>
                ) : (
                  <div className="contact__widget__item">
                    <div className="contact__widget__icon">
                      <i className={widget.icon}></i>
                      <div className="icon__glow"></div>
                    </div>
                    <div className="contact__widget__content">
                      <h4>{widget.title}</h4>
                      <p>
                        {widget.lines[0]}
                        <br />
                        {widget.lines[1]}
                      </p>
                    </div>
                    <div className="card__corner top-right"></div>
                    <div className="card__corner bottom-left"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact py-5" aria-labelledby="contact-form-heading">
        <div className="container py-5">
          <div className="row g-4 align-items-stretch">
            {/* Map Column */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435799.68877348956!2d72.49831576344414!3d31.422801903001577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1739867851490!5m2!1sen!2sbd"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  title="Ijjaz Ahmad Location - Faisalabad, Pakistan"
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

            {/* Form Column */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="contact__form">
                <div className="form__header">
                  <div className="form__label">&lt; message_me /&gt;</div>
                  <h3 id="contact-form-heading">Send a Message</h3>
                  <p>Let's discuss your project and bring your ideas to life</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form__group">
                        <label htmlFor="name">
                          <i className="fa-solid fa-user"></i>
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your name"
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form__group">
                        <label htmlFor="email">
                          <i className="fa-solid fa-envelope"></i>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="your@email.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form__group">
                        <label htmlFor="projectType">
                          <i className="fa-solid fa-code"></i>
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          className="form-control"
                          {...register("projectType")}
                        >
                          <option value="">Select project type</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">
                            Mobile App (React Native)
                          </option>
                          <option value="full-stack">
                            Full Stack MERN Project
                          </option>
                          <option value="ecommerce">E-commerce Platform</option>
                          <option value="api">API Development</option>
                          <option value="consulting">
                            Technical Consulting
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form__group">
                        <label htmlFor="budget">
                          <i className="fa-solid fa-dollar-sign"></i>
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className="form-control"
                          {...register("budget")}
                        >
                          <option value="">Select budget range</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-3000">$1,000 - $3,000</option>
                          <option value="3000-5000">$3,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form__group">
                    <label htmlFor="subject">
                      <i className="fa-solid fa-tag"></i>
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Project inquiry"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">
                        {errors.subject.message}
                      </div>
                    )}
                  </div>

                  <div className="form__group">
                    <label htmlFor="message">
                      <i className="fa-solid fa-message"></i>
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Tell me about your project, requirements, timeline..."
                      rows="5"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message:
                            "Please provide more details (at least 20 characters)",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="form__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin me-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane ms-2"></i>
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="form__success mt-3" role="alert">
                      <i className="fa-solid fa-check-circle me-2"></i>
                      <span>
                        Thank you for your message! I'll get back to you within
                        24 hours.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="form__error mt-3" role="alert">
                      <i className="fa-solid fa-times-circle me-2"></i>
                      <span>
                        Oops! Something went wrong. Please try again or contact
                        me directly via WhatsApp.
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedContactForm;
