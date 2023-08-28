import React from "react";
import animationData from "../sections/reading.json";
import Lottie from "lottie-react";

const ShowcaseAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie animationData={animationData} height="700px" />;
};

export default ShowcaseAnimation;
