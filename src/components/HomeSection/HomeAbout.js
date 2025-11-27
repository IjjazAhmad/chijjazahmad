import React from "react";
import { Link } from "react-router-dom";

const About = "/images/about.png";

function HomeAbout() {
  return (
    <section
      className="home-about-section bgDark py-5"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 order-2 order-lg-1" data-aos="fade-right">
            <div className="home-about-content">
              <span className="section-label">Who Am I?</span>
              <h2 id="about-heading">
                About Me
              </h2>
              <p>
                I'm Ijjaz Ahmad, a passionate <strong>Full Stack Developer</strong>{" "}
                with expertise in both frontend and backend technologies. I
                specialize in building dynamic, scalable, and user-friendly web
                applications using <strong>MERN Stack</strong>,{" "}
                <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
                <strong>Node.js</strong>.
              </p>
              <p>
                With a strong foundation in modern frameworks and databases, I
                create seamless digital experiences for clients worldwide. My focus
                is on writing clean, efficient code to deliver high-performance
                solutions that drive business growth.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <Link
                to="/about"
                aria-label="Learn more about Ijjaz Ahmad's background and skills"
              >
                <button className="btn btn-primary">
                  Read More About Me
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-7 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="200">
            <div className="home-about-image">
              <img
                src={About}
                alt="Ijjaz Ahmad - Full Stack Developer"
                className="img-fluid"
                loading="lazy"
                width="600"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
