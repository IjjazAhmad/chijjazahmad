import React from "react";
import About from "../../images/about.png";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="container rounded-3 py-5 bg-secondary">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            data-aos="zoom-in"
            src={About}
            alt="About"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-8 text-white-50">
          <div className="lh-1 text-white">
            <span data-aos="fade-left">Who Am I ?</span>
            <h3 data-aos="fade-left" className="fw-semibold fs-2 text-warning">
              About Me!
            </h3>
          </div>
          <p data-aos="fade-left" className="py-1">
            I’m Ijjaz Ahmad, a passionate Full Stack Developer with expertise in
            both frontend and backend technologies. I specialize in building
            dynamic, scalable, and user-friendly web applications.
          </p>
          <p data-aos="fade-left">
            With a strong foundation in modern frameworks and databases, I
            create seamless digital experiences. My focus is on writing clean,
            efficient code to deliver high-performance solutions. Let’s
            collaborate to bring your ideas to life!
          </p>
          <div data-aos="fade-left">
            <Link to="/about">
              <button className="btn btn-warning px-3">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
