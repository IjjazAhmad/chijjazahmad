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
                  <div className="image__corners">
                    <span className="corner top-left"></span>
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>
                    <span className="corner bottom-right"></span>
                  </div>
                </div>
              </div>
              <div className="showcase__details mt-3">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="showcase__details">
                <div className="project__category">
                  <i className="fa-solid fa-tag"></i>
                  {selectedProject.category}
                </div>
                <h3 className="project__title">{selectedProject.title}</h3>
                <p className="project__description">
                  {selectedProject.description}
                </p>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link-btn"
                  >
                    <i className="fa-solid fa-external-link"></i>
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowCase;
