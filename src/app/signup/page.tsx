"use client";
import Link from "next/link";
import FormComponent from "@/components/Form";
import SocialButton from "@/components/SocialSignIn";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const SignupPage = () => {
  const session = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

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
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        {/* Navbar */}
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
                <ul className="flex   space-x-8 text-white">
                  <li>
                    <div className="flex items-center justify-end gap-2 pr-16 lg:pr-0">
                      {!session.data ? (
                        <>
                          <Link
                            href="/signin"
                            className={`ease-in-up ${
                              pathname === "/signin"
                                ? "bg-black text-white font-bold"
                                : "bg-white text-black "
                            } hidden rounded-sm bg-primary px-8 py-3 text-base shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9`}
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/signup"
                            className={`ease-in-up ${
                              pathname === "/signup"
                                ? "bg-black text-white font-bold"
                                : "bg-white text-black "
                            } hidden rounded-sm bg-primary px-8 py-3 text-base shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9`}
                          >
                            Sign Up
                          </Link>
                        </>
                      ) : (
                        <>
                          <span className="hidden px-7 py-3 text-base font-medium text-dark dark:text-white md:block">
                            {session?.data?.user?.name}
                          </span>
                          <button
                            onClick={() => signOut()}
                            className="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                          >
                            Log Out
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                </ul>
              )}

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
                    <div className="flex items-center justify-end gap-2 pr-16 lg:pr-0">
                      {!session.data ? (
                        <>
                          <Link
                            href="/signin"
                            className={`ease-in-up ${
                              pathname === "/signin"
                                ? "bg-black text-white font-bold"
                                : "bg-white text-black "
                            } hidden rounded-sm bg-primary px-8 py-3 text-base shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9`}
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/signup"
                            className={`ease-in-up ${
                              pathname === "/signup"
                                ? "bg-black text-white font-bold"
                                : "bg-white text-black "
                            } hidden rounded-sm bg-primary px-8 py-3 text-base shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9`}
                          >
                            Sign Up
                          </Link>
                        </>
                      ) : (
                        <>
                          <span className="hidden px-7 py-3 text-base font-medium text-dark dark:text-white md:block">
                            {session?.data?.user?.name}
                          </span>
                          <button
                            onClick={() => signOut()}
                            className="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                          >
                            Log Out
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Sign up today For and start your journey with us.
                </p>
                <SocialButton></SocialButton>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                </div>
                <FormComponent />
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
