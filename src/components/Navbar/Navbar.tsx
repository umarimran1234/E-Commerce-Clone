"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [showList, setShowList] = useState(false);

  // Detect screen size to toggle hamburger
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menuElement = document.querySelector(".mobile-menu");
      if (
        isMenuOpen &&
        menuElement &&
        !menuElement.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className="navbar fixed  w-full bg-black "
      style={{ zIndex: "  9999999" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href={"/"}>
            <Image
              width={200}
              height={200}
              src="/images/logoFornavbar2.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Shop Now Button */}
        <div className="flex items-center">
          {!isScreenSmall && (
            <ul className="flex space-x-8 text-white">
              <li>
                {" "}
                <Link href={"/who-we-are"}>WHO WE ARE</Link>{" "}
              </li>
              <li>
                <div
                  className="relative"
                  onMouseEnter={() => setShowList(true)}
                  onMouseLeave={() => setShowList(false)}
                >
                  <button>one8 World</button>

                  <ul
                    className={`absolute top-full left-0 bg-white text-black shadow-lg rounded p-2 transition-all duration-300 ease-in-out ${
                      showList ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <li>
                      <Link href={"/one8-world/athleisure"}>Athleisure</Link>
                    </li>
                    <li>
                      <Link href={"/one8-world/fragrances"}>Fragrances</Link>
                    </li>
                    <li>
                      <Link href={"/one8-world/innerwear"}>Innerwear</Link>
                    </li>
                    <li>
                      <Link href={"/one8-world/cafes"}>Cafes</Link>
                    </li>
                    <li>
                      <Link href={"/one8-world/footwear"}>Footwear</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {" "}
                <Link href={"#"}>one8 RUN</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>one8 FITNESS</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>ASSOCIATION</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>PRESS & MEDIA</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>GET IN TOUCH</Link>{" "}
              </li>
            </ul>
          )}

          {/* Shop Now Button */}
          <button className="bg-yellow-500 text-white px-4 py-2 ml-6">
            Shop Now
          </button>

          {/* Hamburger Icon for Mobile */}
          {isScreenSmall && (
            <button
              className={`ml-4 ${isMenuOpen ? "hidden" : "block"}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="w-6 h-0.5 bg-yellow-500 mb-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500 mb-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500"></div>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-0 right-0 w-64 h-screen bg-black bg-opacity-90 flex flex-col justify-center items-start p-8 space-y-6 text-white transform transition-transform duration-300">
            <button
              className={`ml-4 ${!isMenuOpen ? "hidden" : "block"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBars color="white" />
            </button>
            <ul className="text-left text-lg space-y-4">
              <li>
                {" "}
                <Link href={"#"}>WHO WE ARE</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>one8 WORLD</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>one8 RUN</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>one8 FITNESS</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>ASSOCIATION</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>PRESS & MEDIA</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}>GET IN TOUCH</Link>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
