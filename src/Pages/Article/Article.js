import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteContext } from "../../Context/Context";
import "./Article.css";
import launch from "./launch.svg";

export const Article = () => {
  let { title } = useParams();
  const { bg, setBg } = useContext(SiteContext);

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
          ? { backgroundColor: "white", color: "var(--color-primary)" }
          : {
            backgroundColor: "#282c34",
            color: "var(--color-primary)",
          }
      }
      className="news-article-page"
    >
      <div className="news-article-container">
        <div className="news-article-header">
          <div className="newspage-image">
            <div
              className="newspage-main-image"
              style={
                title === "welcome"
                  ? {
                    backgroundImage: `url(${launch})`,
                  }
                  : {
                    backgroundImage: `url(${launch})`,
                  }
              }
            ></div>
            <div className="newspage-links">
              <h3>Latest</h3>
              {title === "welcome" ? (
                <Link to={"../news/launch"}>
                  <h2
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary)" }
                        : { color: "white" }
                    }
                  >
                    Launching of CRM
                  </h2>{" "}
                </Link>
              ) : (
                <Link to={"../news/welcome"}>
                  <h2
                    style={
                      bg === "light"
                        ? { color: "var(--color-primary)" }
                        : { color: "white" }
                    }
                  >
                    Welcome to CRM
                  </h2>
                </Link>
              )}
            </div>
          </div>
          <div className="newspage-content">
            {title === "welcome-newspage" ? (
              <h2>Welcome to Librum</h2>
            ) : (
              <h2>Launching of Librum</h2>
            )}

            {title === "welcome-newspage" ? (
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                      color: "white",
                    }
                }
              >
                Welcome to our news page. Here you will find the latest news and
                updates for Librum. If you would like to share an article or
                announce an event you are organizing, feel free to contact us.
                We are currently looking for volunteers to help us build content
                for this website. So if you would like to spare some of your
                free time to create, edit or review our articles, just give us a
                message.
              </p>
            ) : (
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                      color: "white",
                    }
                }
              >
                So, as you can tell, the beta version of the website is live.
                Many more features are to come for this iteration. In the
                meanwhile, feel free to browse through our catalog of cases and
                articles. Report any bugs or issues to us via our contact page
                which is up and running. The main purpose of this app is to
                provide an easier way to read. However, we also want to build a
                community and network as well. Our ultimate goal is to be a
                resource hub for people who want to read more. If you have any
                suggestions or would like to contribute to CRM, feel free to
                contact us. Thanks.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
