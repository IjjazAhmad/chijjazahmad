import React, { useState } from "react";
import ProjectShowCase from "../../../components/ProjectShowCase/ProjectShowCase";
import PorfolioHero from "../../../components/PortfolioSection/PortfolioHero";
import { projects } from "../../../config/projects";

export default function Project() {
  const [visibleProjects, setVisibleProjects] = useState(5);
  
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 2);
  };
  
  const handleShowLess = () => {
    setVisibleProjects(5);
  };
  
  return (
    <div className="portfolio__page">
      <PorfolioHero />
      
      <section className="portfolio__content py-5">
        <div className="container py-5">
          {projects.slice(0, visibleProjects).map((projectGroup, index) => (
            <div className="row mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <ProjectShowCase projects={projectGroup} />
            </div>
          ))}
          
          <div className="text-center mt-5" data-aos="fade-up">
            {visibleProjects < projects.length && (
              <button onClick={handleShowMore} className="project__link-btn">
                <span>Show More</span>
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            )}
            
            {visibleProjects > 5 && (
              <button onClick={handleShowLess} className="project__link-btn ms-3">
                <span>Show Less</span>
                <i className="fa-solid fa-arrow-up"></i>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
