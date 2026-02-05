import React, { useState } from "react";

function ProjectShowCase(props) {
  const { projects } = props;
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="col-12">
      <div className="project__showcase">
        <div className="showcase__content">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="showcase__image">
                <div className="image__wrapper">
                  <img src={selectedProject.img} alt={selectedProject.title} />
                  <div className="image__overlay"></div>
                  <div className="image__glow"></div>
                </div>
                <div className="image__frame">
                  <span className="frame-line top"></span>
                  <span className="frame-line right"></span>
                  <span className="frame-line bottom"></span>
                  <span className="frame-line left"></span>
                </div>
              </div>
              <div className="showcase__thumbnails mt-4">
                <div className="project__thumbnails">
                  {projects.map((project, idx) => (
                    <div
                      key={idx}
                      className={`thumbnail__item ${
                        selectedProject.title === project.title ? "active" : ""
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <img src={project.img} alt={project.title} />
                      <div className="thumbnail__overlay"></div>
                      <div className="thumbnail__border"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="showcase__info">
                <div className="project__badge">
                  <span className="badge__icon">
                    <i className="fa-solid fa-rocket"></i>
                  </span>
                  <span className="badge__text">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="project__title">
                  <span className="title__text">{selectedProject.title}</span>
                  <span className="title__underline"></span>
                </h3>

                <div className="project__description">
                  <p>{selectedProject.description}</p>
                </div>

                <div className="project__actions">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link-btn primary"
                    >
                      <span className="btn__content">
                        <i className="fa-solid fa-external-link"></i>
                        <span>Visit Website</span>
                      </span>
                      <span className="btn__glow"></span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase__decoration">
          <div className="deco-circle"></div>
          <div className="deco-dots"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowCase;
