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

export const Features = () => {
  const { bg, setBg } = useContext(SiteContext);
  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

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
        <h2>Our Goals</h2>

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
          <div className="features-slide">
            <div className="slide-selection">
              <div className="slide-selection-menu">
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(1)}>Cross device</h3>
                </div>
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(2)}>Cross platform</h3>
                </div>
                <div className="featured-selection">
                  <h3 onClick={() => setSLide(3)}>Offline available</h3>
                </div>
              </div>
              <div
                className="slide-selection-bar"
                style={
                  slide === 1
                    ? { transform: "translateX(0)" }
                    : slide === 2
                    ? { transform: "translateX(100%)" }
                    : { transform: "translateX(200%)" }
                }
              ></div>
            </div>

            {slide === 1 && (
              <div className="slide-image">
                <p
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  Librum is designed for all operating systems. You can always
                  count on a great reading experience with Librum, no matter if
                  you are on Linux, Windows or Apple
                </p>
                <img src={svg4} alt="" />
              </div>
            )}
            {slide === 2 && (
              <div className="slide-image">
                <p
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  Librum is designed for all operating systems. You can always
                  count on a great reading experience with Librum, whether
                  you're on your phone, laptop, or tablet
                </p>
                <img src={svg2} alt="" style={{ height: "350px" }} />
              </div>
            )}
            {slide === 3 && (
              <div className="slide-image">
                <p
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  No need for constant updates or a live connection, you can use
                  Librum without an internet connection as well
                </p>
                <img src={svg3} alt="" />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};
