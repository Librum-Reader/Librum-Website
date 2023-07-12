import "./RegistrationModal.css";
import { useEffect } from "react";
import axios from "axios";
import { BsCheckCircle } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

export default function RegistrationModal(props) {
  const navigate = useNavigate();

  useEffect(() => {
    async function confirmEmail() {
      try {
        const confirmEmailRes = await axios.get(
          `https://librum-dev.azurewebsites.net/api/checkIfEmailConfirmed/${props.email}`
        );
        //handle if email is confirmed
        if (confirmEmailRes.data) {
          //makes this component unmount which then clears interval from the return
          props.setOpen(false);
          navigate("/login");
        } else {
          console.log("not confirmed");
        }
      } catch (error) {
        console.error(error);
      }
    }
    const intervalId = setInterval(confirmEmail, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const cancelModal = () => {
    props.setOpen(false);
    navigate("/login");
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="header">
          <BsCheckCircle className="checkMark"></BsCheckCircle>
          <h2>Thank you!</h2>
        </div>
        <div className="body">
          <p>
            Your message has been sent successfully! We will get back to you as
            soon as possible.
          </p>
          <button onClick={cancelModal}>Ok!</button>
        </div>
      </div>
    </div>
  );
}
