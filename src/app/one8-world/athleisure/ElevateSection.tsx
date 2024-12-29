import Image from "next/image";
import React from "react";

const ElevateSection = () => {
  return (
    <div className="py-6 md:py-10 lg:py-16">
      <div className="">
        {/* Image */}
        <Image
          src={"/images/ElevateSectionImg.jpg"}
          height={1000}
          width={1000}
          alt="Elevate Section Image"
          className="relative w-full"
        ></Image>

        {/* Right Section - Content */}
        <div className="px-4 absolute text-right bottom-1/4 right-0">
          <h5 className="uppercase tracking-widest text-[26px]">Athleisure</h5>
          <h1 className="font-bold flex flex-col">
            <span className="text-8xl font-bold outline-black2">ELEVATE</span>
            <p>
              <span className="text-6xl">YOUR</span>{" "}
              <span className="text-yellow-500 text-8xl"> GAME</span>
            </p>
          </h1>
          <p className="mt-4 text-gray-700 text-[26px] text-left border flex flex-col">
            Be it a casual outing or a championship game,
            <span>rise to the occasion in style.</span>
          </p>
          <div className="mt-6 flex justify-end items-center gap-4">
            {/* Placeholder for Icons */}
            <div className="flex items-center gap-2">
              <p className="uppercase">Shop Now On</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={"/icons/web-bw.png"}
                height={50}
                width={50}
                alt="Web Icon"
              ></Image>
              <Image
                src={"/icons/myntra.png"}
                height={56}
                width={38}
                alt="Mintra Icon"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevateSection;
