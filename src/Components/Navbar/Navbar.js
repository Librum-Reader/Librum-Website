import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import icon from "./ereader1.png";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { SiteContext } from "../../Context/Context";
import { getAuth } from "firebase/auth";
import iconOff from "./switch-off-50.png";
import iconOn from "./switch-on-50.png";
import sunIcon from "./sunIcon.png";
export const Navbar = () => {
  const [show, setShow] = useState(false);

  const auth = getAuth();
  const color = "#b18cf7";
  const colorA = "white";

  const colorB = "black";
  const {
    user,
    setUser,
    logout,
    mode,
    bg,
    setBg,
    selected,
    setSelected,
    token,
  } = useContext(SiteContext);
  // const [bg, setBg] = useState("dark");
  return (
    <div
      // style={{ backgroundColor: "white", color: "var(--color-primary)" }}
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "white",
            }
      }
      className="nav-box"
    >
      <div className="nav-contain">
        <div className="nav-toggle-container">
          {bg === "dark" ? (
            <div className="nav-toggle-circle">
              <i className="fa fa-moon" aria-hidden="true"></i>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "lightgrey",
              }}
              className="nav-toggle-circle"
            >
              <svg
                className="sun-icon"
                width="17"
                height="17"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1686_3420)">
                  <path
                    d="M10.5 14.875C12.9162 14.875 14.875 12.9162 14.875 10.5C14.875 8.08375 12.9162 6.125 10.5 6.125C8.08375 6.125 6.125 8.08375 6.125 10.5C6.125 12.9162 8.08375 14.875 10.5 14.875Z"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 0.875V2.625"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 18.375V20.125"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.6925 3.69238L4.935 4.93488"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.065 16.0649L17.3075 17.3074"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.875 10.5H2.625"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.375 10.5H20.125"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.6925 17.3074L4.935 16.0649"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.065 4.93488L17.3075 3.69238"
                    stroke="#666687"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1686_3420">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}{" "}
          {bg === "light" ? (
            <li
              className="toggle-li"
              onClick={() => {
                if (bg === "light") {
                  setBg("dark");
                }
                if (bg === "dark") {
                  setBg("light");
                }
              }}
            >
              <img src={iconOn} alt="toggle-icon" />
            </li>
          ) : (
            <li
              className="toggle-li"
              onClick={() => {
                if (bg === "light") {
                  setBg("dark");
                }
                if (bg === "dark") {
                  setBg("light");
                }
              }}
            >
              {/* <div>
                <small>Dark</small>
              </div> */}
              <img src={iconOff} alt="toggle-icon" />
            </li>
          )}
        </div>

        <div className="navbar-container">
          <Link
            to={"/"}
            onClick={() => {
              setSelected(1);
            }}
            className="logo-link"
          >
            {" "}
            <div className="logo">
              <img src={icon} alt="" />
              <h2>Librum</h2>
            </div>
          </Link>

          <div className="navbar-menu">
            <ul>
              <li>
                <Link
                  to={"./"}
                  onClick={() => {
                    setSelected(1);
                  }}
                >
                  <p
                    style={
                      window.location.href === "http://localhost:3000/" ||
                      window.location.href === "https://librumreader.com/"
                        ? { color: color }
                        : bg === "light"
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to={"./support"}
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  <p
                    style={
                      window.location.href ===
                        "http://localhost:3000/support" ||
                      window.location.href ===
                        "https://librumreader.com/support"
                        ? { color: color }
                        : bg === "light"
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    Support
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to={"./news"}
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <p
                    style={
                      window.location.href === "http://localhost:3000/news" ||
                      window.location.href === "https://librumreader.com/news"
                        ? { color: color }
                        : bg === "light"
                        ? { color: colorB }
                        : { color: colorA }
                    }
                  >
                    News
                  </p>
                </Link>
              </li>
              <li>
                {user && (
                  <Link
                    to={"./profile"}
                    onClick={() => {
                      setSelected(1);
                    }}
                  >
                    <p
                      style={
                        window.location.href ===
                          "http://localhost:3000/profile" ||
                        window.location.href ===
                          "https://librumreader.com/profile"
                          ? { color: color }
                          : bg === "light"
                          ? { color: colorB }
                          : { color: colorA }
                      }
                    >
                      Account
                    </p>
                  </Link>
                )}
              </li>

              {!token ? (
                <li>
                  <Link
                    to={"./login"}
                    onClick={() => {
                      setSelected(0);
                    }}
                  >
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    {" "}
                    <Link
                      to={"./login"}
                      onClick={() => {
                        setSelected(0);
                        logout();
                      }}
                    >
                      <p
                        style={
                          window.location.href ===
                            "http://localhost:3000/login" ||
                          window.location.href ===
                            "https://librumreader.com/login"
                            ? { color: color }
                            : bg === "light"
                            ? { color: colorB }
                            : { color: colorA }
                        }
                      >
                        {/* <i className="fas fa-door-open">
                          <small>signout</small>
                        </i> */}
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            localStorage.removeItem("token");
                          }}
                        >
                          Logout
                        </button>
                      </p>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-container-sm">
          <Link
            to={"/"}
            onClick={() => {
              setSelected(1);
            }}
            className="logo-link"
          >
            {" "}
            <div className="logo">
              <img src={icon} alt="" />
              <h2>Librum</h2>
            </div>
          </Link>
          <div style={{ color: "black" }}>
            <i
              className="fas fa-bars"
              style={
                bg === "dark"
                  ? { fontSize: "20px", color: "white" }
                  : { fontSize: "20px", color: "purple" }
              }
              onClick={() => {
                setShow(true);
              }}
            ></i>
          </div>
        </div>
        {show && <Menu setShow={setShow} />}
      </div>
    </div>
  );
};
