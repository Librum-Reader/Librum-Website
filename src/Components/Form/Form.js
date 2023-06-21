import React, { useContext, useRef } from "react";
import { SiteContext } from "../../Context/Context";
import useFormSubmit from "../../hooks/useFormSubmit";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";

import pic4 from "../../Pages/Support/pic4.svg";
import pic from "./message.svg";
import "./Form.css";
import { useState } from "react";

export const Form = () => {
  const { bg } = useContext(SiteContext);
  const { submitForm, isLoading } = useFormSubmit();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const captchaRef = useRef();

  const [validToken, setValidToken] = useState({});

  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          reCAPTCHA_TOKEN: token,
          Secret_Key: process.env.REACT_APP_reCAPTCHA_SITE_KEY,
        }
      );

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*  const values = {
      name: name.current.value,
      email: email.current.value,
      details: message.current.value,
      captcha: captchaRef.current.getValue(),
    };
    await submitForm(values);

    name.current.value = "";
    email.current.value = "";
    message.current.value = ""; */

    let token = captchaRef.current.getValue();
    captchaRef.current.reset();
    console.log(token);

    if (token) {
      let tokenValid = await verifyToken(token);
      console.log(tokenValid);
      setValidToken(tokenValid);

      if (tokenValid === true) {
        console.log("verified");
        const values = {
          name: name.current.value,
          email: email.current.value,
          details: message.current.value,
        };
        await submitForm(values);

        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
      } else {
        console.log("not verified");
      }
    }
  };

  return (
    <div
      style={{ margin: "100px auto 0", paddingBottom: "100px" }}
      className="support-page-contact"
    >
      <div className="support-page-contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                    color: "white",
                  }
            }
          >
            Send us a message today
          </p>
          <div className="form-div">
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
              Name
            </p>
            <input
              style={bg === "light" ? { color: "black" } : { color: "white" }}
              type="text"
              placeholder="Enter your Name"
              ref={name}
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
              Email
            </p>
            <input
              style={bg === "light" ? { color: "black" } : { color: "white" }}
              type="text"
              placeholder="Enter your email address"
              ref={email}
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
              ref={message}
            />
          </div>
          <div>
            <button
              className="btn btn-secondary"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Submit{" "}
            </button>
          </div>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey="6LfgqrUmAAAAALgjv0VBnNKNbCQ5H64gMYKtGRwz"
          />
        </form>
      </div>
      <div className="support-page-contact-image">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};
