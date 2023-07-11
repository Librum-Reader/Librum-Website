import React, { useContext, useEffect } from "react";
import "./ImpressumPage.css";
import { SiteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const ImpressumPage = () => {
  const { bg, setBg } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  return (
    <div
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="container"
    >
      <div className="impressum-page">
        <div className="impressum-page-column-container">
          <h2>About Us</h2>
          <div
            className="impressum-page-text"
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            Librum-Reader
            <br />
            Kirchenkamp 2, 50226, Frechen Germany
          </div>
        </div>
        <div className="impressum-page-column-container">
          <h2>Contact</h2>
          <div
            className="impressum-page-text"
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            Owner: David Lazarescu
            <br />
            E-Mail:{" "}
            <a
              href="mailto:help@librumreader.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
            >
              contact@librumreader.com
            </a>{" "}
            <br />
            Internet:
            <Link to="/" style={{ color: "var(--color-primary)" }}>
              {" "}
              https://librumreader.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
