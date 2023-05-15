import React, { useContext } from "react";
import "./CountUp.css";
import CountUp from "react-countup";
import { SiteContext } from "../../Context/Context";

export const CountUP = () => {
  const { mode, bg, setBg } = useContext(SiteContext);
  return (
    <div className="count-up">
      <div className="count-up-container">
        <div className="count">
          <div className="count-number">
            <CountUp delay={0} start={1350} end={1500} duration={1.75}>
              {({ countUpRef, start }) => <h1 ref={countUpRef}>180</h1>}
            </CountUp>

            <i className="fa fa-plus"></i>
          </div>
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            Hours of Work{" "}
          </p>
        </div>

        <div className="count">
          <div className="count-number">
            <CountUp delay={0} start={220} end={38} duration={1.75}>
              {({ countUpRef, start }) => <h1 ref={countUpRef}>180</h1>}
            </CountUp>
            <i className="fa fa-calendar"></i>
          </div>
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            Days left
          </p>
        </div>
      </div>
    </div>
  );
};
