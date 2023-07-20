import "./HomePageModal.css";
import { useEffect, useContext } from "react";
import { SiteContext } from "../../Context/Context";

export default function HomePageModal(props) {
  const { bg } = useContext(SiteContext);

  return (
    <div className="modal-background">
      <div
        className="modal-container"
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
            <a
              style={
                bg === "light"
                  ? {
                      color: "#a6413d",
                    }
                  : {
                      color: "#946bde",
                    }
              }
              href="/termsofservice"
            >
              Terms of Service
            </a>
            ,{" "}
            <a
              style={
                bg === "light"
                  ? {
                      color: "#a6413d",
                    }
                  : {
                      color: "#946bde",
                    }
              }
              href="/cookies"
            >
              Cookies Policy
            </a>{" "}
            and{" "}
            <a
              style={
                bg === "light"
                  ? {
                      color: "#a6413d",
                    }
                  : {
                      color: "#946bde",
                    }
              }
              href="/privacypolicy"
            >
              Privacy Policy
            </a>
          </p>
          <button
            onClick={() => props.setOpen(false)}
            style={
              bg === "light"
                ? {
                    backgroundColor: "#946bde",
                    color: "white",
                  }
                : {
                    backgroundColor: "#946bde",
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
