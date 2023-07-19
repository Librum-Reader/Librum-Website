import React, { useContext, useEffect, useRef, useState } from "react";
import { SiteContext } from "../../Context/Context";
import "./Profile.css";
import img1 from "./about2.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { getDate } from "../../Assets/js/Functions";
export const Profile = () => {
  const navigate = useNavigate();
  const name = useRef("");
  const photo = useRef("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [number] = useState(Math.random());
  const [show, setShow] = useState(false);
  const [bugList, setBugList] = useState([]);
  const [view, setView] = useState("");

  const { user, bg, setBg, fetchUserData, fetchBookData } =
    useContext(SiteContext);

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

  useEffect(() => {
    fetchUserData(token);
    fetchBookData(token);
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
      <div className="profile-page">
        <div className="profile-page-landing">
          <div className="profile-page-landing-text">
            <h1
              style={
                bg === "light"
                  ? {
                      color: "var(--color-primary)",
                    }
                  : {
                      color: "var(--color-primary)",
                    }
              }
            >
              Hello James
            </h1>
            <p
              style={
                bg === "light"
                  ? {
                      color: "rgba(1,1,1,.75)",
                    }
                  : {
                      color: "white",
                    }
              }
            >
              Lorem ipsum dolor sit amet. Ut perferendis fugit sit dolorem sint
              et culpa eaque qui possimus totam et quasi aperiam qui voluptas
              accusamus aut eveniet praesentium. Quo consectetur sunt aut
              dolorem iure non sequi nihil ut nihil rerum a temporibus itaque.
              Sit delectus nisi quo placeat voluptatum est tempore voluptatum
              eum distinctio quam.
            </p>
            <div className="buttons-section">
              <button className="btn btn-secondary">Report Bug</button>
              <button className="btn btn-alternate">See Updates</button>
            </div>
          </div>
          <div className="profile-page-landing-image">
            <img src={img1} alt="imag" />
          </div>
        </div>

        <div className="profile-page-navigation">
          <div
            onClick={() => {
              setShow(!show);
              setView("bugs");
            }}
            className="profile-page-navigate-section"
          >
            <div className="profile-page-navigate-icon">
              <i className="fas fa-bug"></i>
            </div>

            <div className="ticker">{bugList?.length}</div>
            <div className="profile-page-navigation-text">
              <h1>
                Reports <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>See the Latest Bugs other users are reporting</p>
            </div>
          </div>

          <div
            onClick={() => {
              setShow(true);
              setView("updates");
            }}
            className="profile-page-navigate-section"
          >
            <div className="profile-page-navigate-icon">
              <i className="fas fa-file"></i>
            </div>
            <div className="ticker">0</div>
            <div className="profile-page-navigation-text">
              <h1>
                Updates <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>Check the latest updates</p>
            </div>
          </div>

          <div
            onClick={() => {
              setShow(true);
              setView("settings");
            }}
            className="profile-page-navigate-section"
          >
            <div className="profile-page-navigate-icon">
              <i className="fas fa-cog"></i>
            </div>
            <div className="ticker">
              <i className="fa fa-gears" aria-hidden="true"></i>
            </div>
            <div className="profile-page-navigation-text">
              <h1>
                Settings <i className="far fa-arrow-alt-circle-right"></i>
              </h1>
              <p>Change you profile Name, Avatar, and password</p>
            </div>
          </div>
        </div>

        <div
          className="profile-page-menu"
          style={
            show
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(-100%)" }
          }
        >
          <div className="profile-page-menu-header">
            <div className="profile=page-header-title">
              <small>Current</small>
              <h1>{view}</h1>
            </div>
            <div
              onClick={() => {
                setShow(false);
              }}
              className="profile-page-exit"
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
          </div>

          {view === "bugs" && (
            <>
              {" "}
              <div className="profile-page-menu-list">
                <div className="profile-page-menu-labels">
                  <div className="profile-page-list-item-id"> id </div>
                  <div className="profile-page-list-item-date">
                    {" "}
                    Date issued{" "}
                  </div>
                  <div className="profile-page-list-item-user"> Title</div>
                  <div className="profile-page-list-item-flag">
                    status <i className="fa fa-flag" aria-hidden="true"></i>{" "}
                  </div>
                </div>
                <div className="ppm-list">
                  {bugList?.map((bug) => (
                    <>
                      <div className="profile-page-list-item-id">
                        <small>{bug.id}</small>
                      </div>
                      <div className="profile-page-list-item-date">
                        <small>{bug.date}</small>
                      </div>
                      <div className="profile-page-list-item-user">
                        {bug.title}
                      </div>
                      <div className="profile-page-list-item-flag">
                        {bug.status}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="profile-page-menu-form">
                <h2>Report Bug</h2>
                <input
                  type="text"
                  name="name"
                  value={title ? title : ""}
                  placeholder="Brief title/description"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <textarea
                  type="text"
                  name="name"
                  value={text ? text : ""}
                  placeholder="Enter a report"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
              <div className="profile-page-menu-actions">
                <div className="buttons-section">
                  <button
                    onClick={() => {
                      console.log("clicked");
                    }}
                    className="btn btn-secondary"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => {
                      setShow(false);
                    }}
                    className="btn btn-alternate"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
          {view === "settings" && (
            <div className="profile-page-settings">
              {" "}
              Hello James
              <div className="profile-page-avatar">
                <img src={user.photoURL} alt="avatar" />
              </div>
              <input type={"/text"} ref={name} placeholder={"Enter name"} />
              <input
                type={"/text"}
                ref={photo}
                placeholder={"Enter photo URL"}
              />
              <button
                onClick={() => {
                  console.log("clicked");
                }}
                className="btn btn-secondary"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
