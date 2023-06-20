import { SiteContext } from "../../Context/Context";
import "./WhyTiers.css"
import { useContext } from "react";
import { MdConstruction } from "react-icons/md"

const WhyTiers = () => {
  const { bg } = useContext(SiteContext);

  return (
    <div
      className="main-container"
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
    >
      <h1 className="title">
        Why Tiers?
      </h1>

      <div className="under-construction-container">
        <h2>Under construction...</h2>
        <MdConstruction size={100} />
      </div>
    </div>
  );
};

export { WhyTiers };
