import React from "react";
import { Link } from "react-router-dom";

const About = "/images/about.png";

function HomeAbout() {
  return (
    <section
      className="container rounded-3 py-5 bg-secondary"
      aria-labelledby="about-heading"
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            data-aos="zoom-in"
            src={About}
            alt="Ijjaz Ahmad - About Me Illustration showing web development technologies"
            className="img-fluid"
            loading="lazy"
            width="400"
            height="400"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-8 text-white-50">
          <div className="lh-1 text-white">
            <span data-aos="fade-left" className="text-warning small">
              Who Am I ?
            </span>
            <h2
              id="about-heading"
              data-aos="fade-left"
              className="fw-semibold fs-2 text-warning"
            >
              About Me - Full Stack Developer
            </h2>
          </div>
          <p data-aos="fade-left" className="py-1">
            I'm Ijjaz Ahmad, a passionate <strong>Full Stack Developer</strong>{" "}
            with expertise in both frontend and backend technologies. I
            specialize in building dynamic, scalable, and user-friendly web
            applications using <strong>MERN Stack</strong>,{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
            <strong>Node.js</strong>.
          </p>
          <p data-aos="fade-left">
            With a strong foundation in modern frameworks and databases, I
            create seamless digital experiences for clients worldwide. My focus
            is on writing clean, efficient code to deliver high-performance
            solutions that drive business growth. Available for freelance
            projects and full-time opportunities.
          </p>
          <div data-aos="fade-left">
            <Link
              to="/about"
              aria-label="Learn more about Ijjaz Ahmad's background and skills"
            >
              <button className="btn btn-warning px-3">
                Read More About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
