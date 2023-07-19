import "./RegistrationModal.css";
import { useEffect, useContext } from "react";
import axios from "axios";
import { BsCheckCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export default function RegistrationModal(props) {
  const navigate = useNavigate();
  const { bg } = useContext(SiteContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden"; //prevent scrolling (y axis) when modal mounts
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
          console.log("Email not confirmed");
        }
      } catch (error) {
        console.error(error);
      }
    }
    const intervalId = setInterval(confirmEmail, 4000);

    return () => {
      clearInterval(intervalId);
      //enable scrolling when modal unmounts
      document.body.style.scrollBehavior = "smooth";
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="modalBackground">
      <div
        className="modalContainer"
        style={
          bg === "light"
            ? {
                backgroundColor: "white",
                color: "var(--color-primary)",
              }
            : {
                backgroundColor: "#282c34",
                color: "white",
              }
        }
      >
        <div className="header">
          <BsCheckCircle className="checkMark"></BsCheckCircle>
          <br />
          <h2
            style={
              bg === "light"
                ? {
                    color: "black",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Confirm Your Email
          </h2>
        </div>
        <div className="body">
          <p
            style={
              bg === "light"
                ? {
                    color: "black",
                  }
                : {
                    color: "white",
                  }
            }
          >
            You're almost ready to go!
            <br />
            Confirm the email we sent you.
          </p>
        </div>
      </div>
    </div>
  );
}
