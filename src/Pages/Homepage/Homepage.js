import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
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
import HomePageModal from "../../Components/HomePageModal/HomePageModal";
// import { auth } from "../../firebase-config";
// import Example from "../../Components/Tabs/Tabs";

export const Homepage = () => {
  const { bg, setBg } = useContext(SiteContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //setShowModal(true);
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
          ? { backgroundColor: "white", color: "var(--color-primary)" }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="container"
    >
      {showModal && <HomePageModal setOpen={setShowModal}></HomePageModal>}
      <Showcase image1={image1} />
      <Attributes />
      <Features />
      <Circles />
      <About />
      <Support />
    </div>
  );
};
