"use client";
import { useEffect, useState } from "react";
import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import OneWorld from "@/components/OneWorld";
import SmokeCanvas from "../components/Smockanimation";
import GetIntouchSection from "@/components/GetIntouchSection";
import MediaVaultSec from "@/components/mediaVaultSec";
import Loadinganimation from "@/components/Loadinganimation";
export default function Home() {
  const [ShowContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty("--scroll", scrollPosition.toString());

      const showOn100 = document.querySelectorAll(".showOn100");

      if (scrollPosition >= 0.99) {
        showOn100.forEach((elemnt) => {
          elemnt.classList.remove("hidden");
          elemnt.classList.add("block");
        });
      } else {
        // Remove class to hide the element
        showOn100.forEach((element) => {
          element.classList.remove("block");
          element.classList.add("hidden");
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!ShowContent && <Loadinganimation />}
      {ShowContent && (
        <>
          <Navbar />
          <SmokeCanvas />

          <div className="h-screen w-full ">
            <div
              className="h-screen w-[400vw] flex"
              style={{ scrollbarWidth: "none" }}
            >
              <section className="fixed h-screen w-screen flex-shrink-0 text-white flex justify-center items-center">
                <BannerSection />
              </section>
            </div>
            <section
              style={{ zIndex: "1" }}
              id="ParentTarget"
              className={` progress `}
            >
              <div className="relative  flex justify-center items-center h-screen">
                <div className="video_area" style={{ visibility: "visible" }}>
                  <iframe
                    id="brbb_video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0GnL-niUM2E"
                    title="YouTube video player"
                    style={{ display: "none" }}
                  ></iframe>
                </div>

                <div className="absolute inset-0 opacity-40 z-10"></div>

                <div className="relative z-20 text-center text-white">
                  <p
                    className={` showOn100 hidden scaling lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white `}
                  >
                    BE READY
                  </p>
                  <p className="  scaling lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
                    BE READY
                  </p>
                  <p className=" scaling lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
                    BE BETTER
                  </p>
                  <p className=" showOn100 hidden scaling lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white">
                    BE BETTER
                  </p>
                  <p className="   hidden scaling lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white">
                    BE BETTER
                  </p>
                </div>

                <div className="absolute bottom-10 right-10 z-20">
                  <button className="bg-yellow-400 text-black p-4 rounded-full font-bold">
                    PLAY VIDEO
                  </button>
                </div>
              </div>
            </section>
            <div
              className="absolute"
              style={{ width: "100%", marginTop: "90%", zIndex: "99999999" }}
            >
              <OneWorld />
              <MediaVaultSec />
              <GetIntouchSection />{" "}
            </div>
          </div>
        </>
      )
      }
    </>
  )
}
