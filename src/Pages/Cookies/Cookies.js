import React, { useContext } from "react";
import "./Cookies.css";
import { SiteContext } from "../../Context/Context";
import { Template } from "./Template";

export function Cookies(props) {
  const { bg } = useContext(SiteContext);

  return (
    <div className="container" style={
      bg === "light"
        ? {
          backgroundColor: "white",
          color: "var(--color-primary0)",
          paddingBottom: "100px;",
        }
        : {
          backgroundColor: "#282c34",
          color: "white",
          paddingBottom: "100px",
        }
    }>
      <Template meta={props} />

    </div>
  );
}
