import React, { useState } from "react";
import SocialShare from "../SocialShare/SocialShare";

function CaseStudyCard({ study, index }) {
  const images = study.images || [study.image];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div
      className={`case__study case__study--creative ${index % 2 === 1 ? "reverse" : ""}`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Floating Decorations */}
      <div className="floating__decorations">
        <div className="float-circle float-1"></div>
        <div className="float-circle float-2"></div>
        <div className="float-dots"></div>
        <div className="float-line"></div>
      </div>

      <div className="case__inner">
        <div className="row g-0 align-items-stretch">
          {/* Image Gallery Section */}
          <div className={`col-lg-7 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
            <div className="case__gallery">
              {/* Main Display - Device Frame */}
              <div className="gallery__showcase">
                <div className="device__frame">
                  <div className="device__header">
                    <div className="device__dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="device__url">
                      <i className="fa-solid fa-lock"></i>
                      <span>
                        {study.link
                          ? new URL(study.link).hostname
                          : "localhost:3000"}
                      </span>
                    </div>
                    <div className="device__actions">
                      <i className="fa-solid fa-minus"></i>
                      <i className="fa-regular fa-square"></i>
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="device__screen">
                    <img
                      src={images[selectedImage]}
                      alt={`${study.title} screenshot`}
                      loading="lazy"
                    />
                    <div className="screen__glare"></div>
                  </div>
                </div>

                {/* Floating Preview Cards */}
                {images.length > 1 && (
                  <div className="preview__cards">
                    {images.slice(0, 3).map((img, idx) => (
                      <div
                        key={idx}
                        className={`preview__card ${selectedImage === idx ? "active" : ""}`}
                        onClick={() => setSelectedImage(idx)}
                        style={{ "--delay": `${idx * 0.1}s` }}
                      >
                        <img src={img} alt={`Preview ${idx + 1}`} />
                        <div className="card__number">{idx + 1}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Live Badge */}
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live__badge"
                  >
                    <span className="pulse"></span>
                    <i className="fa-solid fa-external-link-alt"></i>
                    <span>View Live</span>
                  </a>
                )}
              </div>

              {/* Gallery Footer - Results & Actions */}
              <div className="gallery__footer">
                {/* Results Strip */}
                <div className="results__strip">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="result__badge">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="gallery__actions">
                  <div className="floating__tech">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech__pill"
                        style={{ "--i": idx }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`col-lg-5 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
            <div className="case__content">
              {/* Category & Title */}
              <div className="content__header">
                <span className="project__category">
                  <span className="category__icon">
                    <i className="fa-solid fa-rocket"></i>
                  </span>
                  {study.category}
                </span>
                <h3 className="project__title">{study.title}</h3>
              </div>

              {/* Expandable Sections */}
              <div className="content__sections">
                <div className="section__item">
                  <div className="section__icon challenge">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div className="section__text">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                </div>

                <div className="section__item">
                  <div className="section__icon solution">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="section__text">
                    <h4>Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                </div>
              </div>

              {/* Social Share */}
              <div className="content__actions">
                <SocialShare
                  url={study.link || window.location.href}
                  title={study.title}
                  projectDescription={study.solution}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
