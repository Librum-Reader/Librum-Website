import "./HomePageModal.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export default function HomePageModal(props) {
  const navigate = useNavigate();
  const { bg } = useContext(SiteContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden"; //prevent scrolling (y axis) when modal mounts

    return () => {
      //enable scrolling when modal unmounts
      document.body.style.scrollBehavior = "smooth";
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="modal-background">
      <div
        className="modal-container"
        style={
          bg === "light"
            ? {
                backgroundColor: "darkgray",
                color: "var(--color-primary)",
              }
            : {
                backgroundColor: "#282c34",
                color: "white",
              }
        }
      >
        <div className="modal-head">
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
            In Development
          </h2>
        </div>
        <div className="modal-body">
          <p
            className="developText"
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
            This website is still being developed, some things might not work as
            expected.
          </p>
          <br />
          <br />
          <p
            className="agreeText"
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
            By continuing you agree to our{" "}
            <a href="/termsofservice">Terms of Service</a>,{" "}
            <a href="/cookies">Cookies Policy</a> and{" "}
            <a href="/privacypolicy">Privacy Policy</a>
          </p>
          <button
            onClick={() => props.setOpen(false)}
            style={
              bg === "light"
                ? {
                    backgroundColor: "black",
                    color: "white",
                  }
                : {
                    backgroundColor: "",
                    color: "black",
                  }
            }
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
