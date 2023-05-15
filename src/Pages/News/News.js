import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import pic4 from "./pic4.svg";
import "./News.css";
import newslogo from "./newslogo.svg";
import bloglogo2 from "./newslogo2.svg";
import { SiteContext } from "../../Context/Context";

export const News = () => {
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
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="container"
    >
      <div className="news-page">
        <div
          style={{
            margin: "-50px auto 0",
            textAlign: "center",
            paddingBottom: "100px",
          }}
          className="support-ways-header"
        >
          <h1 className="larger-Header">News and Updates</h1>
        </div>

        <div className="news-container">
          <div className="news-list">
            <div className="news-unit">
              <div className="news-image">
                <img src={newslogo} alt="news-logo" />
              </div>
              <div className="news-text">
                <div>
                  {" "}
                  <h2>Welcome to the Librum-Reader Blog </h2>
                  <small
                    style={
                      bg === "light"
                        ? { color: "crimson" }
                        : { color: "crimson" }
                    }
                  >
                    October 25 2022
                  </small>
                  <p
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary0)" }
                        : {
                            color: "white",
                          }
                    }
                  >
                    Welcome to our blog page. Here you will find the latest news
                    and updates for Librum-Reader. If you would like to share an
                    article or announce an event you are organizing, feel free
                    to contact us.
                  </p>
                </div>
                <Link to={"/news/welcome"}>
                  <button className="btn btn-secondary">Read More</button>
                </Link>
              </div>
            </div>

            <div className="news-unit">
              <div className="news-image">
                <img src={bloglogo2} alt="news-logo" />
              </div>
              <div className="news-text">
                <div>
                  {" "}
                  <h2>Launching of Librum Reader</h2>
                  <small
                    style={
                      bg === "light"
                        ? { color: "crimson" }
                        : { color: "crimson" }
                    }
                  >
                    October 23 2022
                  </small>
                  <p
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary0)" }
                        : {
                            color: "white",
                          }
                    }
                  >
                    So, as you can tell, the beta version of the website is
                    live. Many more features are to come for this iteration. In
                    the meanwhile, feel free to browse through our pages and
                    download the latest version of Librum. Report any bugs or
                    issues to us via our contact page which is up and running
                  </p>
                </div>

                <Link to={"/news/launch"}>
                  <button className="btn btn-secondary">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
