import React, { useContext, useState, useEffect } from "react";
import "./Features.css";
import { Fade } from "react-reveal";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import svg1 from "./svg01.svg";
import svg2 from "./svg02.svg";
import svg3 from "./svg03.svg";
import svg4 from "./svg04.svg";
import { SiteContext } from "../../Context/Context";
import Alternate from "./Alternate";

export const Features = () => {
  const { bg, setBg } = useContext(SiteContext);
  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  const [slide, setSLide] = useState(1);
  return (
    <div className="container" id="features">
      <div
        // style={{ color: "var(--color-primary)" }}
        className="features-sm-container"
      >
        <h2>Our Goals </h2>

        <p
          style={
            bg === "light"
              ? { color: "var(--color-primary0)" }
              : {
                  color: "white",
                }
          }
        >
          Our goal is to make reading as simple for you as possible. Librum
          instantly syncs your books across all of your devices and allows you
          to build your own private library
        </p>
        <Fade>
          <div
            className="feature-icons"
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            <div className="feature-icon">
              <img src={icon1} alt="" />
              <h5>Available on all devices</h5>
            </div>
            <div className="feature-icon">
              <img src={icon2} alt="" />
              <h5>Available on all platforms</h5>
            </div>
            <div className="feature-icon">
              <img src={icon3} alt="" />
              <h5>Offline or Online</h5>
            </div>
          </div>
        </Fade>
      </div>

      <div className="features-lg-container">
        <div className="features-center">
          <h2 className="features-heading">
            <strong>Why</strong> Librum?
          </h2>
        </div>
        <div className="alternate-wrapper">
          <Alternate />
        </div>
      </div>
    </div>
  );
};
