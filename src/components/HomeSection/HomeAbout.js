import React from "react";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <section
      className="home-about-section bgDark py-5"
      aria-labelledby="stats-heading"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10" data-aos="fade-up">
            <div className="home-about-content text-center">
              <span className="section-label">My Achievements</span>
              <h2 id="stats-heading">Experience & Success</h2>
              <div className="about-stats justify-content-center">
                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <Link
                to="/about"
                aria-label="Learn more about Ijjaz Ahmad's background and skills"
              >
                <button className="btn btn-primary mt-4">
                  Learn More About Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
