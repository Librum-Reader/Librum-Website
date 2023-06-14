import React, { useContext } from "react";
import "./Attributes.css";
import { Fade } from "react-reveal";
import { SiteContext } from "../../Context/Context";

export const Attributes = () => {
  const { bg, setBg } = useContext(SiteContext);

  return (
    <Fade>
      <div className="ft-services" id="ft-services">
        <div className="services-container">
          <div className="service">
            <i className="fab fa-instalod"></i>
            <h3>Quick Installation</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                    color: "white",
                  }
              }
            >
              Install in just 2 clicks
            </p>
          </div>

          <div className="service">
            <i className="fas fa-sync sync"></i>
            <h3>Easily Synchronized</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                    color: "white",
                  }
              }
            >
              Automatic synchronization
            </p>
          </div>

          <div className="service">
            <i className="fas fa-book-open"></i>
            <h3>Thousands of free books</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                    color: "white",
                  }
              }
            >
              Access to over 60,000 books
            </p>
          </div>

          <div className="service">
            <i className="fas fa-asterisk"></i>
            <h3>Light and Secure</h3>
            <p
              style={
                bg === "light"
                  ? { color: "var(--color-primary0)" }
                  : {
                    color: "white",
                  }
              }
            >
              Small file-size, quick Updates
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
