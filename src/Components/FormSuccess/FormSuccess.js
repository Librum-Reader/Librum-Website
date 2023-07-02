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

  useEffect(() => {
    function handleModalKeyPress(e) {
      if (e.key === "Escape" || e.key === "Enter") {
        handleCloseModal(e);
      }
    }

    if (formSubmitted || open) {
      document.addEventListener("keydown", handleModalKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleModalKeyPress);
    };
  }, [formSubmitted, open]);

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("success-container");
    modalContainer?.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        setFormSubmitted(false);
      }
    });
  };

  const handleCloseModal = (e) => {
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
          bg === "dark" ? "dark-mode-background" : "light-mode-background"
        }`}
      >
        {open ? (
          <BsCheckCircle className="xmark checkmark" />
        ) : (
          <GiCancel className="xmark" />
        )}

        <h2>{open ? "Thank you!" : "We're Sorry!"}</h2>
        <pre>
          {open
            ? `Your message had been sent successfully!\nWe will get back to you as soon as possible.`
            : "Something went wrong. Please try again"}
        </pre>
        <button
          style={{ backgroundColor: `${bgColor}` }}
          onClick={handleCloseModal}
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
