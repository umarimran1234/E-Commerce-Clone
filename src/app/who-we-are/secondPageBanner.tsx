import React from 'react';

function SecondPageBanner() {
    return (
        <div className="relative container mx-auto text-white flex">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>

            {/* Text Container */}
            <div className="relative z-10 w-full top-40">
                {/* "BE READY" Text */}
                <h1 className="text-yellow-500 font-bold text-8xl lg:text-[10rem] md:text-6xl sm:text-4xl">BE READY</h1>

                {/* "BE BETTER" Text with Outline */}
                <h1 className="text-transparent text-right font-bold text-8xl lg:text-[10rem] md:text-6xl sm:text-4xl outline-white2" style={{ WebkitTextStroke: '2px white' }}>
                    BE BETTER
                </h1>

                {/* Paragraph Section */}
                <p className="lg:text-xl mt-8 max-w-2xl sm:text-sm">
                    What started as a shirt number on the back of a young talent, became a phenomenon in the sporting world and an inspiration for billions in a global community that dares to express its unique sense of style.
                </p>
            </div>
        </div>
    )
}

export default SecondPageBanner;