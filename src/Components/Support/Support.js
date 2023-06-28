import React, { useContext } from "react";
import { SiteContext } from "../../Context/Context";
import "./Support.css";

export const Support = () => {
  const { mode, bg, setBg } = useContext(SiteContext);

  return (
    <div
      className="container"
      style={{ margin: "150px auto 0", paddingBottom: "100px" }}
    >
      <div className="support-container">
        <h2>Free and Open Source</h2>

        <p
          style={
            bg === "light"
              ? { color: "var(--color-primary0)" }
              : {
                  color: "white",
                }
          }
        >
          Our code is open source so feel free to propose a new feature or
          improvement on it . Also check out our blog for latest updates and
          downloads.
        </p>
        <div className="support-links">
          <a
            href={"https://github.com/Librum-Reader/Librum"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={"https://www.patreon.com/librumreader"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-patreon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
