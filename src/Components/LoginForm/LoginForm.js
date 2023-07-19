import React, { useContext, useState, useEffect } from "react";
import "./LoginForm.css";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { SiteContext } from "../../Context/Context";

export const LoginForm = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const { bg } = useContext(SiteContext);

  const login = async () => {
    try {
      const data = {
        Email: loginEmail,
        Password: loginPassword,
      };
      const response = await axios.post(
        "https://librum-dev.azurewebsites.net/api/login",
        data
      );
      localStorage.setItem("token", response.data);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div
        className="form-container login-form-container"
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
            <div
              className="login-form-logo-square"
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
            ></div>
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
          <button onClick={login} className="btn btn-login">
            Log in
          </button>
        </div>

        <div className="login-register-cta">
          {" "}
          Not a member? Click{" "}
          <span
            className="login-cta-text"
            onClick={() => {
              navigate("/register");
            }}
            style={{ textDecoration: "underline" }}
          >
            here{" "}
          </span>
          to register
        </div>
      </div>
    </div>
  );
};
