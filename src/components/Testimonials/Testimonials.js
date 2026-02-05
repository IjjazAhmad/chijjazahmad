import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "CEO",
    company: "TechStart Solutions",
    location: "New York, USA",
    flag: "🇺🇸",
    avatar: "SM",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    bgPattern:
      "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)",
    text: "Ijjaz delivered an exceptional e-commerce platform for our business. His expertise in MERN Stack development and attention to detail exceeded our expectations.",
    project: "E-commerce Platform",
    icon: "fa-solid fa-cart-shopping",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    position: "Founder",
    company: "DigitalWave Agency",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    avatar: "AH",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bgPattern:
      "radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.15) 0%, transparent 50%)",
    text: "Working with Ijjaz on our React Native mobile app was a great experience. He understood our requirements perfectly and delivered a high-quality app.",
    project: "Mobile App",
    icon: "fa-solid fa-mobile-screen-button",
  },
  {
    id: 3,
    name: "Emily Thompson",
    position: "Product Manager",
    company: "InnovateTech",
    location: "London, UK",
    flag: "🇬🇧",
    avatar: "ET",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    bgPattern:
      "radial-gradient(circle at 20% 20%, rgba(79, 172, 254, 0.15) 0%, transparent 50%)",
    text: "Ijjaz's full-stack development skills are impressive. He built our entire SaaS platform from scratch using Next.js and Node.js. A true professional!",
    project: "SaaS Platform",
    icon: "fa-solid fa-cloud",
  },
  {
    id: 4,
    name: "Muhammad Ali",
    position: "CTO",
    company: "StartupHub Pakistan",
    location: "Lahore, Pakistan",
    flag: "🇵🇰",
    avatar: "MA",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    bgPattern:
      "radial-gradient(circle at 80% 80%, rgba(250, 112, 154, 0.15) 0%, transparent 50%)",
    text: "Outstanding work on our education platform! Ijjaz's expertise in React.js and MongoDB helped us build a scalable solution. Will definitely hire again.",
    project: "EdTech Platform",
    icon: "fa-solid fa-graduation-cap",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card-creative">
      {/* Animated Border */}
      <div
        className="card-border-glow"
        style={{ background: testimonial.gradient }}
      ></div>

      {/* Card Inner */}
      <div className="card-inner">
        {/* Background Pattern */}
        <div
          className="card-bg-pattern"
          style={{ background: testimonial.bgPattern }}
        ></div>

        {/* Floating Particles */}
        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Top Section - Project & Rating */}
        <div className="card-top">
          <div
            className="project-chip"
            style={{ background: testimonial.gradient }}
          >
            <i className={testimonial.icon}></i>
            <span>{testimonial.project}</span>
          </div>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="quote-section">
          <div
            className="quote-icon"
            style={{ background: testimonial.gradient }}
          >
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <p className="quote-text">{testimonial.text}</p>
        </div>

        {/* Author */}
        <div className="author-section">
          <div className="author-avatar-wrapper">
            <div
              className="avatar-glow"
              style={{ background: testimonial.gradient }}
            ></div>
            <div
              className="author-avatar"
              style={{ background: testimonial.gradient }}
            >
              <span>{testimonial.avatar}</span>
            </div>
            <div className="verified-badge">
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
          <div className="author-details">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-position">{testimonial.position}</p>
            <p className="author-company">
              <i className="fa-solid fa-building"></i>
              {testimonial.company}
            </p>
          </div>
          <div className="location-badge">
            <span className="flag">{testimonial.flag}</span>
            <span className="location-text">{testimonial.location}</span>
          </div>
        </div>

        {/* Decorative Line */}
        <div
          className="decorative-line"
          style={{ background: testimonial.gradient }}
        ></div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length - 1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Auto-swipe effect - every 3 seconds (left to right direction)
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <section
      className="testimonials-creative"
      aria-labelledby="testimonials-heading"
    >
      {/* Animated Background */}
      <div className="creative-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="noise-overlay"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="container">
        {/* Creative Header */}
        <div className="creative-header" data-aos="fade-up">
          <div className="header-badge">
            <span className="badge-dot"></span>
            <span>Trusted Worldwide</span>
          </div>
          <h2 id="testimonials-heading" className="creative-title">
            Client <span className="highlight">Love</span> Stories
            <svg className="title-decoration" viewBox="0 0 200 20" fill="none">
              <path
                d="M0 10 Q50 0, 100 10 T200 10"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="50%" stopColor="#f093fb" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
              </defs>
            </svg>
          </h2>
          <p className="creative-subtitle">
            Don't just take our word for it — hear from the people who've
            experienced the magic
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-row" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Launched</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="stat-content">
              <span className="stat-number">15+</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
        </div>

        {/* Main Testimonials Area */}
        <div
          className="testimonials-showcase"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Left Side - Featured Card */}
          <div className="featured-testimonial">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>

          {/* Right Side - Cards Swiper */}
          <div className="cards-swiper-wrapper">
            <Swiper
              modules={[EffectCards]}
              effect="cards"
              grabCursor={true}
              loop={true}
              speed={800}
              initialSlide={testimonials.length - 1}
              allowSlideNext={false}
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 8,
                perSlideRotate: 2,
              }}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
              className="cards-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="mini-card"
                    style={{ "--card-gradient": testimonial.gradient }}
                  >
                    <div className="mini-card-inner">
                      <div
                        className="mini-avatar"
                        style={{ background: testimonial.gradient }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="mini-info">
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.company}</p>
                      </div>
                      <div className="mini-rating">
                        <i className="fa-solid fa-star"></i>
                        <span>5.0</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Hint */}
            <div className="swipe-hint">
              <i className="fa-solid fa-hand-pointer"></i>
              <span>Swipe cards</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="creative-cta" data-aos="fade-up">
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-emoji">🚀</span>
              <h3>Ready to Be the Next Success Story?</h3>
              <p>Let's build something extraordinary together</p>
            </div>
            <a
              href="https://wa.me/923267876344"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <span className="btn-text">
                <i className="fa-brands fa-whatsapp"></i>
                Start Your Journey
              </span>
              <span className="btn-shine"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
