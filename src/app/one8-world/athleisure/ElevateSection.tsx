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
        <div className="lg:w-1/2 text-center lg:text-left absolute top-0">
          <h5 className="text-gray-600 uppercase tracking-widest text-sm">
            Athleisure
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            ELEVATE <span className="text-yellow-500">YOUR GAME</span>
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Be it a casual outing or a championship game, rise to the occasion
            in style.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start items-center gap-4">
            {/* Placeholder for Icons */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <p className="text-gray-500 text-xs">Icon</p>
              </div>
              <p className="text-sm text-gray-700">Shop Now On</p>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <p className="text-gray-500 text-xs">Icon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevateSection;
