import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const myPic = "/images/myPic.jpg";

export default function HomeHero() {
  return (
    <section className="home bgDark py-5 my-5 flex-column d-flex justify-content-center align-items-center">
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-2 order-lg-1">
            <div className="text-content">
              <div className="greeting">Hello, I'm</div>
              <h1 className="fw-bold">
                <span className="fw-bold highlight">
                  <Typewriter
                    words={["Ijjaz Ahmad"]}
                    loop={1}
                    cursorStyle=""
                    typeSpeed={100}
                  />
                </span>
              </h1>
              <h2 className="fw-normal">
                <span className="fw-bold">
                  <Typewriter
                    words={[
                      "Software Developer",
                      "MERN Stack",
                      "React.js Expert",
                      "Next.js Specialist",
                      "Native Mobile App Developer",
                    ]}
                    loop={1000}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p className="mt-3">
                Professional Software Developer with 3+ years of experience
                building scalable web applications and mobile apps. Specializing
                in MERN Stack, React.js, Next.js, and modern JavaScript
                technologies.
              </p>
              <div className="cta-buttons">
                <Link to="/project" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-1 order-lg-2">
            <div className="imageDiv">
              <div className="image-container">
                <div className="image">
                  <img
                    src={myPic}
                    alt="Ijjaz Ahmad - Software Developer Professional Photo"
                    aria-label="Professional headshot of Ijjaz Ahmad, Software Developer"
                    loading="eager"
                    width="320"
                    height="320"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
