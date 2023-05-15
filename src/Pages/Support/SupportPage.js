import React, { useContext, useEffect, useRef } from "react";
import "./SupportPage.css";

import reason1 from "./reasons1.png";
import reason2 from "./reasons2.png";
import reason3 from "./reasons3.png";

import supportDark from "./supportDark.png";
import supportLight from "./supportLight.png";

import { Form } from "../../Components/Form/Form";

import { Link } from "react-router-dom";

import { SiteContext } from "../../Context/Context";
import { SupportWays } from "../../Components/Support/SupportWays";

export const SupportPage = ({ message, anchor, cards }) => {
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
      <div className="supportPage-container">
        <SupportWays pics={[reason3, reason1, reason2]} cards={cards} />
      </div>

      <div className="support-page-need-support">
        <div>
          <img src={bg === "dark" ? supportLight : supportDark} alt="" />
          <div>
            <h1 style={{ color: "var(--color-primary)" }}>Need Support?</h1>
            <p
              style={
                bg === "light"
                  ? {
                      color: "var(--color-primary0)",
                    }
                  : {
                      color: "white",
                    }
              }
            >
              Need Support with the software? Having issues with your login
              account? Just send a message and we will get back to you as soon
              as possible.
              <span style={{ color: "var(--color-primary)" }}>
                {" "}
                Fill out our form below with the details of your concern
              </span>
            </p>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
};
