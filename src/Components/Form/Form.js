import React, { useContext, useRef } from "react";
import { SiteContext } from "../../Context/Context";
import useFormSubmit from "../../hooks/useFormSubmit";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import pic4 from "../../Pages/Support/pic4.svg";
import pic from "./message.svg";
import "./Form.css";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export const Form = () => {
  const { bg } = useContext(SiteContext);
  const { submitForm, isLoading } = useFormSubmit();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  //const captchaRef = useRef();

  const [validToken, setValidToken] = useState({});
  const [recaptcha, setRecaptcha] = useState("");

  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      /*  let response = await Axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          reCAPTCHA_TOKEN: token,
          Secret_Key: process.env.REACT_APP_reCAPTCHA_SITE_KEY,
        }
      ); */
      let response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_reCAPTCHA_SECRET_KEY}&response=${token}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            /*
            "Access-Control-Request-Headers": "x-custom-header",
            */
          },
        }
      );
      console.log(response);
      //APIResponse.push(response);
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

    /* let token = captchaRef.current.getValue();
    captchaRef.current.reset(); */
    //console.log(token);

    if (recaptcha) {
      let tokenValid = await verifyToken(recaptcha);
      console.log("Valid token=>", tokenValid);
      setValidToken(tokenValid);

      if (tokenValid === true) {
        /* console.log("verified");
        const values = {
          name: name.current.value,
          email: email.current.value,
          details: message.current.value,
        };
        await submitForm(values); */

        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
      } else {
        console.log("not verified");
      }
    }
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("SupportPage");
    console.log("Token", token);
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setRecaptcha(value);
  };

  return (
    <div
      style={{ margin: "100px auto 0", paddingBottom: "100px" }}
      className="support-page-contact"
    >
      <div className="support-page-contact-form">
        <h2>Contact Us</h2>

        <form onSubmit={handleReCaptchaVerify}>
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
        </form>
      </div>
      <div className="support-page-contact-image">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};
