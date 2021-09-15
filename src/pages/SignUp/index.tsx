import React from "react";
import { HeroSection } from "../../components/HeroSection";
import { homeObjThree } from "../../common";
interface Props {}

const SignUp = (props: Props) => {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default SignUp;
