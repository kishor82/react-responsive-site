import React from "react";
import { HeroSection } from "../../components/HeroSection";
import { homeObjOne } from "../../common";
import { Pricing } from "../../components/Pricing";
interface Props {}

const Services = (props: Props) => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Services;
