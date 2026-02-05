import React from "react";
import { trackResumeDownload } from "../Analytics/GoogleAnalytics";

const ResumeDownload = ({
  variant = "button",
  className = "",
  showIcon = true,
  text = "Download Resume",
}) => {
  const resumeUrl = "/resume/Ijjaz-Ahmad-Resume.pdf";

  const handleDownload = () => {
    trackResumeDownload();
  };

  if (variant === "link") {
    return (
      <a
        href={resumeUrl}
        download="Ijjaz-Ahmad-MERN-Developer-Resume.pdf"
        onClick={handleDownload}
        className={`resume-link ${className}`}
        aria-label="Download Ijjaz Ahmad's Resume PDF"
      >
        {showIcon && <i className="fa-solid fa-file-pdf me-2"></i>}
        {text}
      </a>
    );
  }

  if (variant === "card") {
    return (
      <div className={`resume-card ${className}`} data-aos="fade-up">
        <div className="resume-card__icon">
          <i className="fa-solid fa-file-pdf"></i>
        </div>
        <div className="resume-card__content">
          <h4>Download My Resume</h4>
          <p>Get a detailed overview of my skills, experience, and projects</p>
          <a
            href={resumeUrl}
            download="Ijjaz-Ahmad-MERN-Developer-Resume.pdf"
            onClick={handleDownload}
            className="resume-card__btn"
            aria-label="Download Ijjaz Ahmad's Resume PDF"
          >
            <i className="fa-solid fa-download me-2"></i>
            Download PDF
          </a>
        </div>
        <div className="resume-card__stats">
          <div className="stat">
            <span className="stat__number">3+</span>
            <span className="stat__label">Years</span>
          </div>
          <div className="stat">
            <span className="stat__number">50+</span>
            <span className="stat__label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat__number">10+</span>
            <span className="stat__label">Clients</span>
          </div>
        </div>
        <div className="card__corner top-right"></div>
        <div className="card__corner bottom-left"></div>
      </div>
    );
  }

  // Default button variant
  return (
    <a
      href={resumeUrl}
      download="Ijjaz-Ahmad-MERN-Developer-Resume.pdf"
      onClick={handleDownload}
      className={`resume-btn ${className}`}
      aria-label="Download Ijjaz Ahmad's Resume PDF"
    >
      {showIcon && <i className="fa-solid fa-download me-2"></i>}
      <span>{text}</span>
    </a>
  );
};

export default ResumeDownload;
