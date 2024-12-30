import Image from "next/image";
import React from "react";

const LegendComponent: React.FC = () => {
    return (
        <div className="container mx-auto bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:px-12 lg:py-20">
                {/* Text Section */}
                <div className="text-black text-center lg:text-left mb-6 lg:mb-0">
                    <h1 className="text-4xl lg:text-8xl font-bold leading-snug lg:leading-tight">
                        THE MAN.<br />
                        THE INSPIRATION.<br />
                        THE LEGEND.
                    </h1>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src=""
                        alt="The Legend"
                        width={500}
                        height={500}
                        className="w-full h-auto max-w-xs lg:max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default LegendComponent;
