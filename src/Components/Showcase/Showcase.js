import React, { useContext, useEffect, useRef } from "react";

import Lottie from "lottie-web";
import "./Showcase.css";
import { SiteContext } from "../../Context/Context";
import { CountUP } from "../CountUp/CountUp";
import { AiFillGithub } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { FaLinux } from "react-icons/fa";

export const Showcase = ({ image1 }) => {
  const { bg, setBg } = useContext(SiteContext);

  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./reading.json"),
    });
  }, []);

  return (
    <div className="showcase-container">
      <div className="image sm">
        <img src={image1} alt="" />
      </div>
      <div className="info-section">
        <div className="info-section-text">
          <h1>A Simple and Free E-Book Reader</h1>
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            A clean and simple way to read your books on any device, without
            worrying about cross-platform synchronization.
          </p>
        </div>
        <div className="info-section-button">
          <button className="btn btn-secondary btn-sc">
            <FaLinux size="1.5rem" style={{ color: "var(--color-primary0)" }} />
            <p>Download</p>
          </button>
          <a
            href={"https://github.com/Librum-Reader/Librum"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-sc">
              <AiFillGithub size="1.5rem" />
              GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="image lg" ref={container}>
        {/* <img src={image1} alt="" /> */}
      </div>
    </div>
  );
};
