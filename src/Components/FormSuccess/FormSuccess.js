import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../Context/Context";
import { BsCheckCircle } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import "./FormSuccess.css";

const FormSuccess = ({ data, error, captchaError }) => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { bg } = useContext(SiteContext);

  useEffect(() => {
    const handleModalOpening = () => {
      if (data.success === "true") {
        setOpen(true);
        setFormSubmitted(true);
      } else if (
        typeof error === "object" ||
        typeof captchaError === "object"
      ) {
        setFormSubmitted(true);
      }
    };
    return handleModalOpening();
  }, [data, error, captchaError]);

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("success-container");
    modalContainer?.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        setFormSubmitted(false);
      }
    });
  };

  const handleModalButton = (e) => {
    e.stopPropagation();
    setFormSubmitted(false);
  };

  const bgColor = open ? "#946bde" : "#CD4D34";

  return (
    <div
      className={`${"success-container"} ${formSubmitted && "is-active"}`}
      id="success-container"
      onClick={handleModalContainerClick}
    >
      <div
        className={`message-box ${
          bg === "light" ? "light-mode-background" : "dark-mode-background"
        }`}
      >
        {open ? (
          <BsCheckCircle className="xmark checkmark" />
        ) : (
          <GiCancel className="xmark" />
        )}

        <h2>{open ? "Thank you!" : "Sorry!"}</h2>
        <p>
          {open
            ? `Your message had been sent successfully. We will get back to you as soon as possible.`
            : "Something went wrong. Please try again"}
        </p>
        <button
          style={{ backgroundColor: `${bgColor}` }}
          onClick={handleModalButton}
          className="form-success-btn"
          type="button"
        >
          {open ? "Ok!" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default FormSuccess;
