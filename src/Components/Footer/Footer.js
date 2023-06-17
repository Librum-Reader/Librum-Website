import React, { useContext, useEffect } from "react";
import "./Footer.css";
import image1 from "../Navbar/ereader1.png";
import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const Footer = ({ image }) => {
  const { bg, setBg, setSelected } = useContext(SiteContext);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  if (
    window.location.href === "http://localhost:3000/profile" ||
    window.location.href === "https://librum-reader/profile"
  ) {
    return null;
  }

  return (
    <div
      style={
        bg === "light"
          ? {
            backgroundColor: "white",
            color: "var(--color-primary)",
            borderTop: "2px dotted grey",
          }
          : {
            backgroundColor: "#282c34",
            color: "var(--color-primary)",
          }
      }
      className="footer"
      id="footer"
    >
      <div>
        <div className="footer-container">
          <div className="footer-upper footer-light">
            <h2
              style={
                !bg === "light" ? { color: "white" } : { color: "crimson" }
              }
            >
              Have any questions or concerns?
            </h2>

            <input placeholder="Enter your email address" type="text" />
            <textarea
              className="footer-light"
              placeholder="Message"
              type="text"
            />
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <img src={image1} alt="" />
          <h3
            style={bg === "light" ? { color: "crimson" } : { color: "white" }}
          >
            Librum
          </h3>
        </div>

        <ul>
          <Link
            style={bg === "light" ? { color: "crimson" } : { color: "white" }}
            to={"/support"}
            onClick={() => {
              setSelected(2);
            }}
          >
            <li>Support</li>
          </Link>
          <Link
            style={bg === "light" ? { color: "crimson" } : { color: "white" }}
            to={"/news"}
            onClick={() => {
              setSelected(3);
            }}
          >
            <li>News</li>
          </Link>
          <Link
            style={bg === "light" ? { color: "crimson" } : { color: "white" }}
            to={"/about"}
            onClick={() => {
              setSelected(4);
            }}
          >
            {" "}
            <li>About</li>
          </Link>
        </ul>
        <div
          style={bg === "light" ? { color: "crimson" } : { color: "white" }}
          className="footer-social"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
