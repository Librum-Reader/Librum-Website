import "./TermsOfService.css";
import { Template } from "./Template";
import { useContext } from "react";
import { SiteContext } from "../../Context/Context";


const TermsOfService = (props) => {
  const { bg } = useContext(SiteContext)
  
  return (
    < div className="container" style={
      bg === "light"
        ? {
          backgroundColor: "white",
          color: "var(--color-primary)",
          paddingBottom: "100px;",
        }
        : {
          backgroundColor: "#282c34",
          color: "var(--color-primary)",
          paddingBottom: "100px",
        }
    }
       >
      <Template meta={props} />
    </div >
  );

}

export { TermsOfService };
