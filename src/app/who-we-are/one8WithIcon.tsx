import React from 'react';

function One8WithIcon() {
    return (
        <div className='container bg-white mt-60 mx-auto'>
            <section className="flex flex-col py-10">
                <div className="my-10">
                    <h1 className="text-3xl lg:text-6xl md:text-4xl font-medium mb-4">This is one8!</h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        A platform that celebrates the legacy of a champion – <span className="font-medium">Virat Kohli</span>.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Our core values are the cornerstones we depend on while constantly evolving to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🔍</div>
                        <p className="font-medium lg:text-2xl">INNOVATION</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">💪</div>
                        <p className="font-medium lg:text-2xl">DEDICATION</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🔑</div>
                        <p className="font-medium lg:text-2xl">AUTHENTICITY</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace the placeholder below with your icon */}
                        <div className="text-yellow-500 text-5xl mb-4">🤝</div>
                        <p className="font-medium lg:text-2xl">COMMUNITY-ORIENTED</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default One8WithIcon;