import React, { useState } from "react";

function ProjectShowCase(props) {
  const { projects } = props;
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="container my-2">
      <div className="card bgDark text-white shadow-lg p-4 border-0">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={selectedProject.img}
              className="card-img"
              alt="Thumbnail"
              style={{ height: "350px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h4>{selectedProject.title}</h4>
            <p className="text-white-50">{selectedProject.description}</p>
            <span className="badge text-dark bg-warning">
              {selectedProject.category}
            </span>
            <div className="mt-3">
              <p>
                <strong>Project Cost:</strong> {selectedProject.cost}
              </p>
              <p>
                <strong>Project Duration:</strong> {selectedProject.duration}
              </p>
            </div>
            <div className="d-flex mt-3">
              {projects.map((project) => (
                <div
                  key={project}
                  className={`card me-2 border border-2 ${
                    selectedProject.title === project.title
                      ? "border-warning"
                      : ""
                  }`}
                  style={{ width: "120px", cursor: "pointer" }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt="Thumbnail"
                    style={{ height: "80px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowCase;
