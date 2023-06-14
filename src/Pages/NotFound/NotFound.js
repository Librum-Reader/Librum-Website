import "./NotFound.css";
import notFoundImage from "./404.png"

const NotFound = () => (
  <div className="not-found-container">
    <img
      src={notFoundImage}
      className="not-found-image"
      alt="not-found" />
  </div>
);

export { NotFound };
