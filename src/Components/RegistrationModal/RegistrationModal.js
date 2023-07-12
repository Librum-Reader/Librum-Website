import "./RegistrationModal.css";
import { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function RegistrationModal(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const confirmEmailRes = await axios.get(
          `https://librum-dev.azurewebsites.net/api/checkIfEmailConfirmed/${props.email}`
        );
        //handle if email is confirmed
        if (confirmEmailRes.data === "true") {
          props.setOpen(false);
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    confirmEmail();
  }, []);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalBody">
          <div className="title">
            <h2>Thank you!</h2>
          </div>
          <div className="body">
            <p>
              Your message has been sent successfully! We will get back to you
              as soon as possible.
            </p>
          </div>
          <div className="footer">
            <button onClick={() => navigate("/login")}>Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
