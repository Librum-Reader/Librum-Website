import devices from "./devices.png";
import reading from "./reading.png";
import offline from "./offline.png";
import books from "./books.png";
import { Fade } from "react-reveal";

import { SiteContext } from "../../Context/Context";
import React, { useContext, useEffect } from "react";

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
      title: "Available Everywhere",
      text: "Read on any device, anytime, anywhere. Librum is designed to run on any device and operating system, no matter if its your phone, tablet, PC, or laptop",
      image: devices,
    },
    {
      title: "Simple",
      text: "Your books are automatically synced to the cloud, so you can access them at any time through a simple and modern interface",
      image: reading,
    },
    {
      title: "Powerful",
      text: "Librum offers lightning-fast performance, the ability to customize the application to make it look and feel as you want, and many tools to boost your productivity",
      image: offline,
    },
    {
      title: "Free Books",
      text: "Explore our free online store, download books in just 2 clicks and start enjoying your reading journey right away",
      image: books,
    },
  ];

  return (
    <>
      {data.map((block, index) => {
        return (
          <Fade>
            <div
              className={
                index % 2 === 0
                  ? "features-blurb-container shadow-even"
                  : "features-blurb-container-odd shadow"
              }
            >
              <div className="features-blurb-text">
                <h2>{block.title}</h2>
                <p
                  style={
                    bg === "light"
                      ? { color: "var(--color-primary0)" }
                      : {
                          color: "white",
                        }
                  }
                >
                  {block.text}
                </p>
              </div>
              <div className="features-blurb-image">
                <img src={block.image} />
              </div>
            </div>
          </Fade>
        );
      })}
    </>
  );
};

export default Alternate;
