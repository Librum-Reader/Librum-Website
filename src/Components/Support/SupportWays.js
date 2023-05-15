import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const SupportWays = ({ pics, cards }) => {
  const { bg, setSelected } = useContext(SiteContext);
  return (
    <section className="support-ways">
      <div className="support-way-container">
        <div className="support-ways-header">
          <h1 className="larger-Header">Ways to Support Us</h1>
        </div>
        {cards && (
          <div className="support-ways-text">
            <a
              className="support-ways-unit sd1"
              id="sd-1"
              href={"https://www.patreon.com/librumreader"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sw-image">
                {" "}
                <img src={pics[0]} alt="" className="im1" />
              </div>
              <h2 style={{ color: "var(--color-primary)" }}>
                Support us on Patreon
              </h2>
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
              >
                Consider supporting us on Patreon for as little as 2$ a month.
                As a team of opensource developers we rely on donations from the
                community to be able to continue working on projects like
                Librum.
              </p>
            </a>

            <a
              className="support-ways-unit"
              href={"https://github.com/Librum-Reader/Librum"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sw-image">
                {" "}
                <img src={pics[1]} alt="" className="im1" />
              </div>
              <h2 style={{ color: "var(--color-primary)" }}>Contribute</h2>
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
              >
                If you like Librum and have some programming or designing
                skills, consider contributing to our open source project. If you
                don't have any experience but still want to contribute, you can
                search for bugs or request new features.
              </p>
            </a>

            <Link
              className="support-ways-unit"
              onClick={() => {
                setSelected("login");
              }}
              to={"../login"}
            >
              <div className="sw-image">
                {" "}
                <img src={pics[2]} alt="" />
              </div>

              <h2 style={{ color: "var(--color-primary)" }}>
                Join the Community
              </h2>
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
              >
                Consider writing an article, sharing Librum on social media, or
                simply letting your friends know how much you enjoy Librum if
                you want to get more involved in the community.
              </p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
