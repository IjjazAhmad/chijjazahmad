import React from "react";
import myPic from "../../images/myPic.png";
import { Typewriter } from "react-simple-typewriter";

export default function HomeHero() {
  return (
    <section className="home bgDark py-5 my-5 flex-column d-flex justify-content-center align-items-center">
      <div className="container text-white text-center ">
        <div className="row ">
          <div className="col-12">
            <div className="imageDiv">
              <div className="image-container">
                <div className="image">
                  <img
                    src={myPic}
                    alt="Ijjaz Ahmad - Full Stack Developer Professional Photo"
                    aria-label="Professional headshot of Ijjaz Ahmad, Full Stack Developer"
                    loading="eager"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div>
              <h2 className="fw-normal mt-3">Hello, I'm</h2>
              <h1 className="fw-bold display-4">
                <span className="fw-bold">
                  <Typewriter
                    words={["Ijjaz Ahmad"]}
                    loop={1}
                    cursorStyle=""
                    typeSpeed={100}
                  />
                </span>
              </h1>
            </div>
            <div>
              <h3 className="fw-normal h4">
                <span className="fw-bold text-warning">
                  <Typewriter
                    words={[
                      "MERN Stack Developer",
                      "React.js Expert",
                      "Next.js Specialist",
                      "Mobile App Developer",
                      "Full Stack Engineer",
                    ]}
                    loop={1000}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
              <p className="lead mt-3 text-white-50">
                Professional Full Stack Developer with 5+ years of experience
                building scalable web applications and mobile apps. Specializing
                in MERN Stack, React.js, Next.js, and modern JavaScript
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
