import React from "react";

const About = "/images/about.jpg";

export default function AboutDetail() {
  return (
    <div className="about-detail">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
          <div className="about-image">
            <img
              src={About}
              alt="About Ijjaz Ahmad - Full Stack Developer"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7" data-aos="fade-left" data-aos-delay="200">
          <div className="about-content">
            <span className="section-label">Who Am I?</span>
            <h3>About Me!</h3>
            <p>
              I'm Ijjaz Ahmad, a passionate Full Stack Developer with expertise in
              both frontend and backend technologies. I specialize in building
              dynamic, scalable, and user-friendly web applications.
            </p>
            <p>
              With a strong foundation in modern frameworks and databases, I
              create seamless digital experiences. My focus is on writing clean,
              efficient code to deliver high-performance solutions. Let's
              collaborate to bring your ideas to life!
            </p>
            <button
              type="button"
              className="btn"
            >
              <a
                href="https://wa.me/+923267876344"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
