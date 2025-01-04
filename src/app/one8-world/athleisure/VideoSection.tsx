import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoSection = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="video_inner fadeInUp" data-scroll="in">
          <Link
            href="https://www.youtube.com/watch?v=w-XXWu7lGkc"
            className="popup-youtube rem_link_style cursor-pointer relative"
          >
            <div>
              <Image
                data-lazy-src="https://one8.com/uploads/image/Laravel-6150a805b255e7.8159701561(2ucot.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full"
                src="https://one8.com/uploads/image/Laravel-6150a805b255e7.8159701561(2ucot.png"
              />
            </div>

            <div className="absolute -bottom-8 right-4">
              <div className="flex">
                <Image
                  data-lazy-src="https://one8.com/img/play-button.png"
                  className="img-responsive play_button md:w-[100px] w-[70px] md:h-[100px] h-[70px]"
                  alt=""
                  width={100}
                  height={100}
                  src="https://one8.com/img/play-button.png"
                />

                <Image
                  data-lazy-src="https://one8.com/img/play-icon.png"
                  className="img-responsive play_icon md:-ml-10 -ml-7 md:h-[40px] md:mt-6 mt-4 md:w-[20px] w-[10px] h-[40px]"
                  alt=""
                  width={1000}
                  height={1000}
                  src="https://one8.com/img/play-icon.png"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
