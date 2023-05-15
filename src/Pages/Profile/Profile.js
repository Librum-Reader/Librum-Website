import React, { useContext, useEffect, useRef, useState } from "react";
import { SiteContext } from "../../Context/Context";
import "./Profile.css";
import img1 from "../AboutPage/about2.png";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { async } from "@firebase/util";
import { getDate } from "../../Assets/js/Functions";
export const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const name = useRef("");
  const photo = useRef("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [number] = useState(Math.random());
  const [show, setShow] = useState(false);
  const [bugList, setBugList] = useState([]);
  const [view, setView] = useState("");

  const bugCollectionRef = collection(db, "bugs");

  useEffect(() => {
    const getBugs = async () => {
      const data = await getDocs(bugCollectionRef);

      setBugList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBugs();
  }, []);

  const createBugReport = async () => {
    if (title === "" || text === "") {
      alert("please enter both fields");
      return;
    }
    try {
      const newBug = await addDoc(bugCollectionRef, {
        title,
        text,
        status: "in review",
        date: getDate(),
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });

      const getBugs = async () => {
        const data = await getDocs(bugCollectionRef);

        setBugList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getBugs();
      setText("");
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    if (name.current.valueOf === "" && photo.current.valueOf === "") {
      alert("please enter fields");
    }

    if (name.current.valueOf !== "") {
      updateProfile(auth.currentUser, {
        photoURL: photo.current.value,
      });
    }

    if (photo.current.valueOf !== "") {
      updateProfile(auth.currentUser, {
        photoURL: photo.current.value,
      });
    }

    updateProfile(auth.currentUser, {
      displayName: name.current.value,
      photoURL: photo.current.value,
    })
      .then(() => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { user, bg, setBg } = useContext(SiteContext);

  if (!user) {
    navigate("/");
  }

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
              Hello {auth.currentUser.displayName}
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
                      createBugReport();
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
              Hello {user?.displayName}
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
                  onSubmit();
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
