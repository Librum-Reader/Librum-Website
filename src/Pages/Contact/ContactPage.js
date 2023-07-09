import React, { useContext, useEffect, useRef } from "react";
import "./ContactPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";

import supportDark from "./supportDark.png";
import supportLight from "./supportLight.png";

import { Form } from "../../Components/Form/Form";

import { Link } from "react-router-dom";

import { SiteContext } from "../../Context/Context";
import { SupportWays } from "../../Components/Support/SupportWays";

export const ContactPage = ({ message, anchor, cards }) => {
  const { bg, setBg } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

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
              paddingBottom: "100px;",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
              paddingBottom: "100px",
            }
      }
      className="container"
    >
      <Form />
      {/* <div className="contactPage-container">
        <SupportWays pics={[reason3, reason1, reason2]} cards={cards} />
      </div> */}
    </div>
  );
};
