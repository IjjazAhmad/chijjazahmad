import { projects } from "../../config/projects";
import ProjectShowCase from "../ProjectShowCase/ProjectShowCase";
import { Link } from "react-router-dom";
export default function HomePortfolio() {
  return (
    <div className="container rounded-3 py-3 bg-secondary portfolio">
      <div className="text-center text-white py-4">
        <span data-aos="fade-left">Who Am I ?</span>
        <h3 className="text-warning">Lastest Projects</h3>
      </div>
      {projects.slice(0, 3).map((projectGroup, index) => (
        <div className="row" key={index}>
          <ProjectShowCase projects={projectGroup} />
        </div>
      ))}{" "}
      <div data-aos="fade-left">
        <Link to="/project" className="text-center text-warning">
          <p className="text-warning pt-3">See More Projects</p>
        </Link>
      </div>
    </div>
  );
}
