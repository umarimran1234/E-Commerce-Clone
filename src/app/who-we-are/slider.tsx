"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const SliderBanner = () => {
  return (
    <div className="container mx-auto bg-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] bg-black bg-diagonal-lines text-white flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {/* Text Section */}
              <div className="flex flex-col space-y-4">
                <div className="outline-yellow">
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    ODI
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    TEST
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    T20
                  </p>
                </div>
                <div className="lg:text-8xl md:text-4xl text-3xl font-extrabold">
                  #1
                </div>
                <p className="text-yellow-500 lg:text-5xl md:text-4xl text-3xl font-medium">
                  CAREER BEST RANKINGS
                  <span className="text-white">
                    {" "}
                    ACROSS ALL FORMATS OF THE GAME
                  </span>
                </p>
              </div>

              {/* Image Section */}
              <div className="h-80 w-80">
                {/* Using Next.js Image Component */}
                <Image
                  src="/images/virat_kohli_slider4.jpg"
                  alt="Player"
                  layout="fill" // Allows the image to fill the parent container
                  objectFit="cover" // Makes the image cover the container area
                  className="rounded-lg"
                  style={{ borderRadius: "8px" }} // If further custom styling is needed
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px] bg-black bg-diagonal-lines text-white flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {/* Text Section */}
              <div className="flex flex-col space-y-4">
                <div className="outline-yellow">
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    ODI
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    TEST
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    T20
                  </p>
                </div>
                <div className="lg:text-8xl md:text-4xl text-3xl font-extrabold">
                  #1
                </div>
                <p className="text-yellow-500 lg:text-5xl md:text-4xl text-3xl font-medium">
                  CAREER BEST RANKINGS
                  <span className="text-white">
                    {" "}
                    ACROSS ALL FORMATS OF THE GAME
                  </span>
                </p>
              </div>

              {/* Image Section */}
              <div className="h-80 w-80">
                {/* Using Next.js Image Component */}
                <Image
                  src="/images/virat_kohli_slider4.jpg"
                  alt="Player"
                  layout="fill" // Allows the image to fill the parent container
                  objectFit="cover" // Makes the image cover the container area
                  className="rounded-lg"
                  style={{ borderRadius: "8px" }} // If further custom styling is needed
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px] bg-black bg-diagonal-lines text-white flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {/* Text Section */}
              <div className="flex flex-col space-y-4">
                <div className="outline-yellow">
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    ODI
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    TEST
                  </p>
                  <p className="lg:text-6xl md:text-4xl text-3xl font-bold">
                    T20
                  </p>
                </div>
                <div className="lg:text-8xl md:text-4xl text-3xl font-extrabold">
                  #1
                </div>
                <p className="text-yellow-500 lg:text-5xl md:text-4xl text-3xl font-medium">
                  CAREER BEST RANKINGS
                  <span className="text-white">
                    {" "}
                    ACROSS ALL FORMATS OF THE GAME
                  </span>
                </p>
              </div>

              {/* Image Section */}
              <div className="h-80 w-80">
                {/* Using Next.js Image Component */}
                <Image
                  src="/images/virat_kohli_slider4.jpg"
                  alt="Player"
                  layout="fill" // Allows the image to fill the parent container
                  objectFit="cover" // Makes the image cover the container area
                  className="rounded-lg"
                  style={{ borderRadius: "8px" }} // If further custom styling is needed
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
