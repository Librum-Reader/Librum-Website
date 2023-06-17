import "./NotFound.css";
import { useContext } from "react";
import { SiteContext } from "../../Context/Context";
import notFoundImage from "./not_found.png"

const NotFound = () => {
  const { bg } = useContext(SiteContext);

  return (
    <div
      className="not-found-container"
      style={
        bg === "light" ?
          { backgroundColor: "white" } : { backgroundColor: "#282C34" }
      }
    >
      <h1>404</h1>
      <h3
        className="title"
        style={
          bg === "light" ?
            { color: "#282C34" } : { color: "white" }
        }
      >
        Whoops! Page not found
      </h3>
      <div className="not-found-image-container">
        <img
          src={notFoundImage}
          className="not-found-image"
          alt="not-found"
        />
      </div>
    </div >
  );
};

export { NotFound };
