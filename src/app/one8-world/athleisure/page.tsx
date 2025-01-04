import React from "react";
import ElevateSection from "./ElevateSection";
import Navbar from "@/components/Navbar/Navbar";
import VideoSection from "./VideoSection";


const page = () => {
  return (
    <>
      <Navbar />
      <ElevateSection />
      <VideoSection />
    </>
  );
};

export default page;
