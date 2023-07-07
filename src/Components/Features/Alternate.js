import devices from "./devices.png";
import reading from "./reading.png";
import offline from "./offline.png";
import { SiteContext } from "../../Context/Context";
import React, { useContext, useState, useEffect } from "react";

const Alternate = () => {
  const { bg, setBg } = useContext(SiteContext);
  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  const data = [
    {
      title: "Cross Device",
      text: "With Librum, all of your books will be readily available for you, no matter which device you are on",
      image: devices,
    },
    {
      title: "Read on any OS",
      text: "You can always count on a great reading experience with Librum, on your phone, laptop, or tablet",
      image: reading,
    },
    {
      title: "Offline Available",
      text: "No need for a live connection, you can use Librum without the internet",
      image: offline,
    },
  ];

  return (
    <>
      {data.map((block, index) => {
        return (
          <div
            className={
              index % 2 === 0
                ? "features-blurb-container-even"
                : "features-blurb-container"
            }
          >
            <div className="features-blurb-text">
              <h2 style={{ color: "#2b2c5c" }}>{block.title}</h2>
              <p
                style={
                  bg === "light"
                    ? { color: "var(--color-primary0)" }
                    : {
                        color: "white",
                      }
                }
                className="features-blurb-p"
              >
                {block.text}
              </p>
            </div>
            <div className="features-blurb-image">
              <img src={block.image} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Alternate;
