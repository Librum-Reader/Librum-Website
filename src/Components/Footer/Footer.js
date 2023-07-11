import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SiteContext } from "../../Context/Context";
import useFormSubmit from "../../Hooks/useFormSubmit";
import FormSuccess from "../FormSuccess/FormSuccess";
import image1 from "../Navbar/ereader1.png";
import { LoadingAnimation } from "../SvgIcons/SvgIcons";
import "./Footer.css";

export const Footer = ({ image }) => {
  const { bg, setBg, setSelected } = useContext(SiteContext);
  const {
    isLoading,
    res,
    error,
    captchaError,
    handleReCaptchaVerify,
    resetStates,
  } = useFormSubmit();
  const emailRef = useRef();
  const messageRef = useRef();
  let url = document?.location.pathname.slice(1);
  let pathName = url.length > 0 ? url : "home";

  const handleSubmit = async (e) => {
    resetStates();
    const values = {
      Origin: pathName,
      Email: emailRef.current.value,
      Message: messageRef.current.value,
    };

    const captchaActionName = pathName;

    await handleReCaptchaVerify(e, values, captchaActionName);
  };

  useEffect(() => {
    const resetForm = () => {
      if (res === "true") {
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    };
    resetForm();
  }, [res]);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  if (
    window.location.href === "http://localhost:3000/profile" ||
    window.location.href === "https://librum-reader/profile"
  ) {
    return null;
  }

  return (
    <div
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
              borderTop: "2px dotted grey",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="footer"
      id="footer"
    >
      <div>
        <div className="footer-container">
          <form onSubmit={handleSubmit} className="footer-upper footer-light">
            <h2
              style={
                !bg === "light" ? { color: "white" } : { color: "crimson" }
              }
            >
              Have any questions or concerns?
            </h2>

            <input
              placeholder="Enter your email address"
              type="text"
              required
              ref={emailRef}
            />
            <textarea
              className="footer-light"
              placeholder="Message"
              type="text"
              required
              ref={messageRef}
            />
            <button
              className="btn btn-secondary"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Send
            </button>
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
      </div>

      <div className="footer-lower">
        <div className="footer-left">
          <div className="footer-lower-label">
            <img src={image1} alt="" />
            <h3
              style={bg === "light" ? { color: "crimson" } : { color: "white" }}
            >
              Librum
            </h3>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
          <p 
            style={{paddingTop: "22px", fontSize: "15px"}}
          >
            © 2023 Librum-Reader, All rights reserved
          </p>
        </div>
        
        <div className="footer-right">
        </div>
      </div>
    </div>
  );
};
