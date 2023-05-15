import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { SiteContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { bg, setBg, user } = useContext(SiteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      console.log(theme);

      setBg(theme);

      return;
    }
  }, []);

  if (user) {
    navigate("/profile");
  }

  return (
    <div
      style={
        bg === "light"
          ? {
              backgroundColor: "white",
              color: "var(--color-primary)",
            }
          : {
              backgroundColor: "#282c34",
              color: "var(--color-primary)",
            }
      }
      className="container"
    >
      <LoginForm />
    </div>
  );
};
