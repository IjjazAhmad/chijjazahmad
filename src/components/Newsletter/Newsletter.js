import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { trackEvent } from "../Analytics/GoogleAnalytics";

const Newsletter = ({ variant = "default" }) => {
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
      // For now, we'll simulate the subscription
      // In production, integrate with Mailchimp, ConvertKit, or your email service
      console.log("Newsletter subscription:", data.email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Track subscription
      trackEvent("subscribe", "newsletter", data.email);

      setSubmitStatus("success");
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "minimal") {
    return (
      <div className="newsletter newsletter--minimal">
        <form onSubmit={handleSubmit(onSubmit)} className="newsletter__form">
          <div className="newsletter__input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className={`newsletter__input ${errors.email ? "error" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <button
              type="submit"
              className="newsletter__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <i className="fa-solid fa-paper-plane"></i>
              )}
            </button>
          </div>
          {errors.email && (
            <span className="newsletter__error">{errors.email.message}</span>
          )}
          {submitStatus === "success" && (
            <span className="newsletter__success">
              <i className="fa-solid fa-check-circle"></i> Subscribed
              successfully!
            </span>
          )}
          {submitStatus === "error" && (
            <span className="newsletter__error">
              <i className="fa-solid fa-times-circle"></i> Something went wrong.
              Please try again.
            </span>
          )}
        </form>
      </div>
    );
  }

  return (
    <section className="newsletter py-5" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="newsletter__content">
                <span className="section__label">&lt; stay_updated /&gt;</span>
                <h2 id="newsletter-heading" className="newsletter__title">
                  Get Development Tips & Updates
                </h2>
                <p className="newsletter__description">
                  Subscribe to receive weekly insights on MERN Stack
                  development, React.js tips, career advice, and updates on my
                  latest projects. Join 500+ developers!
                </p>
                <ul className="newsletter__benefits">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Weekly React & Next.js tutorials
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Exclusive project case studies
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Career tips for developers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Early access to new projects
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="newsletter__form-container">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="newsletter__form"
                >
                  <div className="form__group">
                    <label htmlFor="newsletter-name">
                      <i className="fa-solid fa-user"></i>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="newsletter-name"
                      placeholder="Enter your name"
                      className={`form-control ${errors.name ? "error" : ""}`}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="form__error">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="form__group">
                    <label htmlFor="newsletter-email">
                      <i className="fa-solid fa-envelope"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      placeholder="your@email.com"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="form__error">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="newsletter__btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin me-2"></i>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="form__success" role="alert">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>
                        Welcome aboard! Check your inbox for a confirmation
                        email.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="form__error-message" role="alert">
                      <i className="fa-solid fa-times-circle"></i>
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <p className="newsletter__privacy">
                    <i className="fa-solid fa-lock"></i>
                    Your email is safe. I never spam or share your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
