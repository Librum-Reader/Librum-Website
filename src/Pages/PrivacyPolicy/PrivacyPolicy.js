import { useContext } from "react";
import "./PrivacyPolicy.css";
import Template from "./Template";
import { SiteContext } from "../../Context/Context";

const PrivacyPolicy = (props) => {
  const { bg } = useContext(SiteContext)

  return (
    <div className="container" style={
      bg === "light"
        ? {
          backgroundColor: "white",
          color: "var(--color-primary0)",
          paddingBottom: "100px",
        }
        : {
          backgroundColor: "#282c34",
          color: "white",
          paddingBottom: "100px",
        }
    }>
      
      <Template meta={props} />
    </div>
  );
}



export { PrivacyPolicy };
