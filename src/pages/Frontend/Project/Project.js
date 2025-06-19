import React from "react";
import ProjectShowCase from "../../../components/ProjectShowCase/ProjectShowCase";
import PorfolioHero from "../../../components/PortfolioSection/PortfolioHero";
import { projects } from "../../../config/projects";

export default function Project() {
  return (
    <>
      <div className="portfolio pb-5">
        <PorfolioHero />
        <div className="container">
          <div className="row py-5">
            <div className="col-12 text-white">
              <span data-aos="fade-left">Who Am I ?</span>
              <h3
                data-aos="fade-left"
                className="fw-semibold fs-2 text-warning"
              >
                My Portfolio!
              </h3>
            </div>
            {projects.map((projectGroup, index) => (
              <div className="row" key={index}>
                <ProjectShowCase projects={projectGroup} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
