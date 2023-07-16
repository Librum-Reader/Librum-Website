import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteContext } from "../../Context/Context";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import axios from "axios";

export default function RegistrationForm() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { bg } = useContext(SiteContext);

  const register = async () => {
    if (registerPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    const url = "https://librum-dev.azurewebsites.net/api/register";
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: registerEmail,
      Password: registerPassword,
    };
    try {
      await axios.post(url, data);
      //registration successful, show modal
      setShowModal(true);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="form-container">
      <div
        className="log-form"
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
        <div className="log-form-header">
          <div className="login-form-logo">
            <div className="login-form-logo-square"></div>
          </div>
          <h2>Welcome</h2>
          <p>
            Your credentials are only used to authenticate yourself Your
            credentials will be stored in a secure database
          </p>
        </div>
        <div className="form-input reg">
          <div className="reg-form-name">
            {" "}
            <div className="form-input-title">First Name</div>
            <div className="form-input-input">
              <input
                style={
                  errorMessage === "Please Enter your name"
                    ? {
                        border: "2px solid crimson",
                      }
                    : { border: "none" }
                }
                type="text"
                name="first-name"
                value={firstName ? firstName : ""}
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="reg-form-name">
            {" "}
            <div className="form-input-title">Last name</div>
            <div className="form-input-input">
              <input
                type="text"
                name="last-name"
                value={lastName ? lastName : ""}
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-input">
          <div className="form-input-title">Email</div>
          <div className="form-input-input">
            <input
              style={
                errorMessage === "Please Enter a valid Email Address"
                  ? {
                      border: "2px solid crimson",
                    }
                  : { border: "none" }
              }
              type="text"
              name="name"
              value={registerEmail ? registerEmail : ""}
              placeholder="Enter an Email"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-input-title">Password </div>
          <div className="form-input-input">
            <input
              style={
                errorMessage === "Passwords don't match"
                  ? {
                      border: "2px solid crimson",
                    }
                  : { border: "none" }
              }
              type="password"
              name="password"
              value={registerPassword ? registerPassword : ""}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              className="form-input-title"
            />
          </div>
        </div>
        <div className="form-input">
          <div className="form-input-title">Confirm Password</div>
          <div className="form-input-input">
            <input
              style={
                errorMessage === "Passwords don't match"
                  ? {
                      border: "2px solid crimson",
                    }
                  : { border: "none" }
              }
              type="password"
              name="password"
              value={confirmPassword ? confirmPassword : ""}
              placeholder="Re-Enter Your Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-checkbox">
          <div className="checkbox-unit">
            {" "}
            <input type="checkbox" /> Keep updated about improved features and
            upcoming improvements.
          </div>
          <div className="checkbox-unit">
            {" "}
            <input type="checkbox" /> I accept the terms and conditions and the
            privacy policy
          </div>

          <div className="checkbox-unit">
            {" "}
            Already a member? Click{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
              style={{ textDecoration: "underline" }}
            >
              here{" "}
            </span>
            to login
          </div>
        </div>
        <button className="btn btn-login" onClick={register}>
          Lets get started
        </button>
        {showModal && (
          <RegistrationModal
            setOpen={setShowModal}
            email={registerEmail}
          ></RegistrationModal>
        )}
      </div>
    </div>
  );
}
