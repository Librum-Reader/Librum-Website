import React, { useContext, useEffect, useRef } from "react";
import { SiteContext } from "../../Context/Context";

import pic4 from "../../Pages/Contact/pic4.svg";
import pic from "./message.svg";
import "./Form.css";
import { LoadingAnimation } from "../SvgIcons/SvgIcons";
import FormSuccess from "../FormSuccess/FormSuccess";
import useFormSubmit from "../../Hooks/useFormSubmit";
import { createPortal } from "react-dom";

export const Form = () => {
  const { bg } = useContext(SiteContext);
  const {
    isLoading,
    res,
    error,
    captchaError,
    handleReCaptchaVerify,
    resetStates,
  } = useFormSubmit();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleSubmit = async (e) => {
    const pathName = document?.location.pathname.slice(1);
    resetStates();
    const values = {
      Origin: pathName,
      Name: name.current.value,
      Email: email.current.value,
      Message: message.current.value,
    };

    const captchaActionName = pathName;

    await handleReCaptchaVerify(e, values, captchaActionName);
  };

  useEffect(() => {
    const resetForm = () => {
      if (res === "true") {
        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
      }
    };
    resetForm();
  }, [res]);

  return (
    <div
      // style={{ margin: "100px auto 0", paddingBottom: "100px" }}
      className="support-page-contact"
    >
      <div className="support-page-contact-form">
        <h2>Need help?</h2>

        <form onSubmit={handleSubmit} id="form">
          <div className="form-subtitle">
            <p
              style={{
                color: `${bg === "light" ? "var(--color-primary0)" : "white"}`,
                width: "100%",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "500",
                marginBottom: "2rem",
              }}
            >
              Reach out through our email{" "}
              <a
                href="mailto:help@librumreader.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                help@librumreader.com
              </a>{" "}
              if you have any questions, <br/>we are 100% responsive and reply
              quickly!
            </p>
          </div>
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
              type="text"
              placeholder="Your Name"
              ref={name}
              className={`${
                bg === "dark" ? "field-focus-dark" : "field-focus-light"
              }`}
              style={{
                color: `${bg === "dark" ? "aliceblue" : "#393E48"}`,
                backgroundColor: `${bg === "dark" ? "#393E48" : "aliceblue"}`,
              }}
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
              <span>*</span>
            </p>
            <input
              type="text"
              placeholder="Your Email"
              ref={email}
              className={`${
                bg === "dark" ? "field-focus-dark" : "field-focus-light"
              }`}
              style={{
                color: `${bg === "dark" ? "aliceblue" : "#393E48"}`,
                backgroundColor: `${bg === "dark" ? "#393E48" : "aliceblue"}`,
              }}
              required
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
              <span>*</span>
            </p>
            <textarea
              type="text"
              placeholder="I need help with..."
              ref={message}
              className={`${
                bg === "dark" ? "field-focus-dark" : "field-focus-light"
              }`}
              style={{
                color: `${bg === "dark" ? "aliceblue" : "#393E48"}`,
                backgroundColor: `${bg === "dark" ? "#393E48" : "aliceblue"}`,
              }}
              required
            />
          </div>
          <div className="btn-container">
            <button
              className="btn btn-secondary"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Submit
            </button>
          </div>
          {isLoading && <LoadingAnimation />}
          {createPortal(
            <FormSuccess
              data={res}
              error={error}
              captchaError={captchaError}
            />,
            document.body
          )}
        </form>
      </div>
      {/* <div className="support-page-contact-image">
        <img src={pic} alt="" />
      </div> */}
    </div>
  );
};
