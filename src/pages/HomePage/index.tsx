import React from "react";
import { HeroSection } from "../../components/HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../../common";
import { Pricing } from "../../components/Pricing";
interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Home;
