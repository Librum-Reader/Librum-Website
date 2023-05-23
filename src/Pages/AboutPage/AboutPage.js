import React, { useContext, useEffect } from "react";
import "./AboutPage.css";

import about1 from "./Image01r.png";
import about2 from "./image02.png";
import about3 from "./image03.png";

import { Fade } from "react-reveal";
import { SiteContext } from "../../Context/Context";
export const AboutPage = () => {
  const { mode, bg, setBg } = useContext(SiteContext);
  useEffect(() => {
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
      <div className="aboutPage-container">
        <section className="header">
          <h1>About Librum </h1>
        </section>
        <section className="about-intro-container">
          <div className="about-intro sm">
            <div className="about-intro-text">
              <h1>What is Librum?</h1>
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
              >
                Librum is an application, designed to make reading as enjoyable
                and straightforward as possible for you. It is more than simply
                an e-book reader, Librum makes it possible for you, to manage
                your own library, which you can access from all of your devices
                at any time. Librum provides a variety of features to make you
                as productive as you can be, these features include being able
                to take notes from within the app, book mark and highlight
                important sections, while being able to customise the
                application to look exactly how you want it to.
              </p>

              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
              >
                Librum also provides free access to over 60,000 books, custom
                plugins and your reading statistics, while remaining free and
                100% open source
              </p>
            </div>
            <div className="about-intro-image">
              <img src={about1} alt="" />
            </div>
          </div>
        </section>{" "}
        <Fade>
          <section className="about-intro-container">
            <div className="about-intro sm2">
              <div className="about-intro-image">
                <img src={about2} alt="" />
              </div>

              <div className="about-intro-text">
                <h1>Why should you choose Librum over other readers?</h1>

                <p
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  Librum separates itself from any other reader by combining
                  Power, Efficiency, and great Design. You are able to change
                  the data of your books, write notes, or synchronize your
                  library between your devices with no more than 2 clicks while
                  using a beautiful and simple interface. We don't want you to
                  waste your time navigating through a complex application or
                  trying to manually synchronize your books across devices.
                  Librum aims to make reading as frictionless as possible by
                  doing all of this for you.
                </p>
              </div>
            </div>
          </section>{" "}
        </Fade>
        <Fade>
          <section className="about-intro-container">
            <div className="about-intro sm">
              <div className="about-intro-text">
                <h1>Some of Librum's features are</h1>
                <ul
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  <li>
                    {" "}
                    <i className="fa fa-circle"></i>
                    Fully functional cross-platform e-reader
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Creating your personalized library
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>Note taking
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Book syncing across all of your devices
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>Highlighting and Bookmarks
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Syncing with 3rd parties (Google drive, Dropbox, ...)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Book meta-data editing
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Support of all major book formats (20+)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    TTS (Text to Speech)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Automated page scrolling
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Reading statistics
                  </li>
                  <li>
                    <i className="fa fa-circle"></i>
                    Custom plugins
                  </li>
                </ul>

                {/* <button className="btn btn-about">
                Our Twitter
                <i class="fa fa-twitter"></i>
              </button> */}
              </div>
              <div className="about-intro-image">
                <img src={about3} alt="" />
              </div>
            </div>
          </section>{" "}
        </Fade>
      </div>
    </div>
  );
};
