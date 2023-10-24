"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Getstarted } from "../Buttons/Buttons";
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="https://baselineitdevelopment.com/"
            className="flex items-center"
          >
            <img
              src="https://i.ibb.co/MSzCKQk/baseline-high-resolution-logo-1-transformed-fotor-2023102416319.png"
              className="h-8 mr-3"
              alt="Baseline Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className=" bg-white text-black font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:red-gradient dark:focus:ring-blue-800"
            >
              {Getstarted}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={toggle ? "true" : "false"}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col py-0 md:px-4 mt-4 font-medium   md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/services"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
                <ul className="hidden absolute left-[-30px] rounded text-sm mt-0 space-y-4 bg-black text-[#689775] group-hover:block">
                  <li>
                    <a
                      href="/web-devlopment"
                      className="text-white w-auto block px-5 py-0.5 space-y-2 hover:bg-[#689775]"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/web-designing"
                      className="text-white block px-5 py-0.5 space-y-2 hover:bg-[#689775]"
                    >
                      Web Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digital-marketing"
                      className="text-white block px-5 py-0.5 space-y-2 hover:bg-[#689775]"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/seo"
                      className="text-white block px-5 py-0.5 space-y-2 hover:bg-[#689775]"
                    >
                      Seo
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="contact"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/carrier"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Carrier
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover-underline-animation block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;

// import react from "react"

// const Nav=()=>{

//   return(
//     <>
//     <div className="header bg-[#19222E]">

//     </div>
//     </>
//   )
// }
// export default
