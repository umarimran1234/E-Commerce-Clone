import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SecondPageBanner from "./secondPageBanner";
import One8WithIcon from "./one8WithIcon";
import LegendComponent from "./legendComponent";
import SliderBanner from "./slider";

const WhoAreWe = () => {
  return (
    <>
      <Navbar></Navbar>
      <SecondPageBanner></SecondPageBanner>
      <One8WithIcon></One8WithIcon>
      <LegendComponent></LegendComponent>
      <SliderBanner></SliderBanner>
    </>
  );
};

export default WhoAreWe;
