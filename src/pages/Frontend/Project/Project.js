import React from "react";
import ProjectShowCase from "../../../components/ProjectShowCase/ProjectShowCase";
import PorfolioHero from "../../../components/PortfolioSection/PortfolioHero";
import { projects } from "../../../config/projects";

export default function Project() {
  return (
    <div className="portfolio__page">
      <PorfolioHero />
      
      <section className="portfolio__content py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="section__label" data-aos="fade-up">
                &lt; complete_portfolio /&gt;
              </div>
              <h2 className="section__title" data-aos="fade-up" data-aos-delay="100">
                All Projects
              </h2>
              <p className="section__subtitle" data-aos="fade-up" data-aos-delay="200">
                A comprehensive collection of web and mobile applications
              </p>
            </div>
          </div>
          
          {projects.map((projectGroup, index) => (
            <div className="row mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <ProjectShowCase projects={projectGroup} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
