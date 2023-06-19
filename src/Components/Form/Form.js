import React, { useContext } from "react";
import { SiteContext } from "../../Context/Context";

import pic4 from "../../Pages/Support/pic4.svg";
import pic from "./message.svg";
import "./Form.css";
export const Form = () => {
  const { bg } = useContext(SiteContext);

  return (
    <div
      // style={{ margin: "100px auto 0", paddingBottom: "100px" }}
      className="support-page-contact"
    >
      <div className="support-page-contact-form">
        <p
          className="title"
        >
          Send us a message
        </p>
        <div className="form-div">
        </div>
        <div className="form-div">
          {" "}
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                  color: "white",
                }
            }
            className="p-form"
          >
            Email
          </p>
          <input
            style={bg === "light" ? { color: "black" } : { color: "white" }}
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-div">
          {" "}
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                  color: "white",
                }
            }
            className="p-form"
          >
            Message
          </p>
          <textarea
            style={bg === "light" ? { color: "black" } : { color: "white" }}
            type="text"
            placeholder="Enter Message"
          />
        </div>

        <div className="btn-container">
          <button
            className="submit btn btn-secondary"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <div className="support-page-contact-image">
        <img src={pic} alt="" />
      </div> */}
    </div>
  );
};
