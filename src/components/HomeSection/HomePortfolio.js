import { projects } from "../../config/projects";
import ProjectShowCase from "../ProjectShowCase/ProjectShowCase";
import { Link } from "react-router-dom";

export default function HomePortfolio() {
  return (
    <section className="portfolio py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="section__label" data-aos="fade-up">
              &lt; my_work /&gt;
            </div>
            <h2 className="section__title" data-aos="fade-up" data-aos-delay="100">
              Featured Projects
            </h2>
            <p className="section__subtitle" data-aos="fade-up" data-aos-delay="200">
              Showcasing recent work and successful collaborations
            </p>
          </div>
        </div>
        
        {projects.slice(0, 2).map((projectGroup, index) => (
          <div className="row mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProjectShowCase projects={projectGroup} />
          </div>
        ))}
        
        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/project" className="btn__view-all">
            <span>View All Projects</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
