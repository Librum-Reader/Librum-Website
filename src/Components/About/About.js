import React from "react";
import "./About.css";
import { Fade } from "react-reveal";

export const About = () => {
  return (
    <div className="container" id="about">
      <Fade>
        <div className="about-container">
          <h1
            style={{
              color: "#ffffff",
              textTransform: "capitalize",
              marginBottom: "-20px",
            }}
          >
            A little info about ourselves
          </h1>
          <div className="about-top">
            <div className="about-quote">
              <h1>
                "Reading is essential for those who seek to rise above the
                ordinary.” - Jim Rohn
              </h1>
            </div>
            <div className="about-info">
              {" "}
              <p>
                We believe that software should be free and open source. All of
                our software is publicly available for you, feel free to
                contribute or suggest new features!
              </p>
            </div>
          </div>

          <div className="about-platforms">
            {/* <i className="fab fa-firefox"></i>
          <i className="fab fa-chrome"></i> */}
            <i className="fab fa-microsoft"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-android"></i>
            <i className="fab fa-linux"></i>
          </div>
        </div>
      </Fade>
    </div>
  );
};
