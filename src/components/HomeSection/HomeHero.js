import React from "react";
import myPic from "../../images/myPic.png";
import { Typewriter } from "react-simple-typewriter";

export default function HomeHero() {
  return (
    <div className="home bgDark py-5 my-5 flex-column d-flex justify-content-center align-items-center">
      <div className="container text-white text-center ">
        <div className="row ">
          <div className="col-12">
            <div className="imageDiv">
              <div className="image-container">
                <div className="image">
                  <img
                    src={myPic}
                    alt="loading..."
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div>
              <h3 className="fw-normal  mt-3">Hello, I'm</h3>
              <h2 className="fw-normal">
                <span className="fw-bold">
                  <Typewriter
                    words={["Ijjaz Ahmad"]}
                    loop={1}
                    cursorStyle=""
                    typeSpeed={100}
                  />
                </span>
              </h2>
            </div>
            <div>
              <h5 className="fw-normal w-100">
                <span className="fw-bold">
                  <Typewriter
                    words={[
                      "UI Designer",
                      "Frontend Developer",
                      "Backend Developer",
                      "Fullstack Developer",
                    ]}
                    loop={1000}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
