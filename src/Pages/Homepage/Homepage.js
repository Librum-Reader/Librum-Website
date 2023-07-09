import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import image1 from "./image1.svg";
import { Showcase } from "../../Components/Showcase/Showcase";
import { Features } from "../../Components/Features/Features";
import { About } from "../../Components/About/About";
import { Support } from "../../Components/Support/Support";
import { Attributes } from "../../Components/Attributes/Attributes";
import { CountUP } from "../../Components/CountUp/CountUp";
import { Circles } from "../../Components/CirclePercent/Circles";
import { SiteContext } from "../../Context/Context";
import wave from "./wave.svg";
// import { auth } from "../../firebase-config";
// import Example from "../../Components/Tabs/Tabs";

export const Homepage = () => {
  const { bg, setBg } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  return (
    <>
      <div
        style={
          bg === "light"
            ? { backgroundColor: "white", color: "var(--color-primary)" }
            : {
                backgroundColor: "transparent",
                color: "var(--color-primary)",
              }
        }
        className="test-container"
      >
        {/* Hello {auth.currentUser.email} */}
        <Showcase image1={image1} />
      </div>
      <div
        style={
          bg === "light"
            ? { backgroundColor: "white", color: "var(--color-primary)" }
            : {
                backgroundColor: "#3e4757",
                color: "var(--color-primary)",
              }
        }
        className="test-container-features"
      >
        <img src={wave} className="wave" />
        <Features />
        <Circles />
        <About />
        <Support />
      </div>
    </>
  );
};
