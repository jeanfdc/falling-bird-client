import React from "react";
import Lottie from "lottie-react";
import WelcomeLottie from "./Welcome.json"

const myLottie = () => {
  return <Lottie animationData={WelcomeLottie} className="h-[230px] absolute right-5 bottom-9"/>;
};

export default myLottie