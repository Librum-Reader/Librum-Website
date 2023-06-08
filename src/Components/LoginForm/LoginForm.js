import React, { useContext, useState } from "react";
import "./LoginForm.css";
import logo from "../Navbar/ereader1.png";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { SiteContext } from "../../Context/Context";
export const LoginForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regLogState, setRegLogState] = useState(true);
  const [remember, setRemember] = useState(true);
  const { user, setUser, bg } = useContext(SiteContext);

  const register = async () => {
    if (displayName === "") {
      setErrorMessage("Please Enter your name");
      return;
    }
    if (registerEmail === "") {
      setErrorMessage("Please Enter a valid Email Address");
      return;
    }

    if (registerPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        displayName
      );

      console.log("successful login");
    } catch (error) {
      console.log(error.message, auth, registerEmail, registerPassword);
      setErrorMessage("Password should be at least 6 characters");
    }
    setRegisterEmail("");
    setRegisterPassword("");
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setloginEmail("");
    setLoginPassword("");
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="container">
      {regLogState ? (
        <div className="form-container login-form-container">
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
            <div className="login-form-logo">
              <div className="login-form-logo-square"></div>
            </div>
            <div className="log-form-header">
              <h2>Welcome back!</h2>
              <small>Log into your account</small>
            </div>
            <div className="form-input">
              <div>Email</div>
              <div className="form-input-input">
                <input
                  type="text"
                  name="name"
                  value={loginEmail ? loginEmail : ""}
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setloginEmail(e.target.value);
                  }}
                  className="form-input-title"
                />
              </div>
            </div>

            <div className="form-input">
              <div>Password</div>
              <div className="form-input-input">
                <input
                  type="password"
                  name="password"
                  value={loginPassword ? loginPassword : ""}
                  placeholder="Enter Your Password"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                  className="form-input-title"
                />
              </div>
            </div>

            <div className="form-checkbox">
              <div className="checkbox-unit">
                {" "}
                <input type="checkbox" /> Remember me
              </div>
            </div>
            <button
              onClick={() => {
                login();
              }}
              className="btn btn-login"
            >
              Log in
            </button>
          </div>

          <div className="login-register-cta">
            {" "}
            Not a member? Click{" "}
            <span
              className="login-cta-text"
              onClick={() => {
                setRegLogState(false);
              }}
              style={{ textDecoration: "underline" }}
            >
              here{" "}
            </span>
            to register
          </div>
        </div>
      ) : (
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
                    value={displayName ? displayName : ""}
                    placeholder="First Name"
                    onChange={(e) => {
                      setdisplayName(e.target.value);
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

              <div className="form-error">{errorMessage}</div>
            </div>

            <div className="form-checkbox">
              <div className="checkbox-unit">
                {" "}
                <input type="checkbox" /> Keep updated about improved features
                and upcoming improvements.
              </div>
              <div className="checkbox-unit">
                {" "}
                <input type="checkbox" /> I accept the terms and conditions and
                the privacy policy
              </div>

              <div className="checkbox-unit">
                {" "}
                Already a member? Click{" "}
                <span
                  onClick={() => {
                    setRegLogState(true);
                  }}
                  style={{ textDecoration: "underline" }}
                >
                  here{" "}
                </span>
                to login
              </div>
            </div>

            <button
              className="btn btn-login"
              onClick={() => {
                register();
              }}
            >
              Lets get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
