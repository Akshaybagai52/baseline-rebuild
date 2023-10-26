"use client";

import React from "react";
import one from "../assets/Process/1.png";
import two from "../assets/Process/2.png";

import Image from "next/image";

const OurProcess = () => {
  return (
    <>
      <div className="bg-black w-[100%] h-[800px] mt-[50px] ">
        <div className="">
          <h1 className="text-center text-[#66fcf1] text-[50px]">
            Our <span className="text-white"> Process</span>
          </h1>

          <div className="mt-16 container mx-auto sm:px-4">
            <div className="flex flex-wrap">
              <div className="md:w-2/5 pr-4 pl-4 max-w-sm p-6 bg-[#1F2833] border border-gray-200 rounded-lg shadow dark:bg-gray-800">
                <div className="flex justify-between">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                      IDEA
                    </h5>
                  </a>
                  <Image
                    className="w-[50px] h-auto text-white dark:text-white8"
                    src={one}
                    alt="icon"
                  />
                </div>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
              </div>
              <div className="md:w-1/5 pr-4 pl-4"></div>
              <div className="md:w-2/5 pr-4 pl-4"></div>
            </div>

            <div className="flex flex-wrap">
              <div className="md:w-2/5 pr-4 pl-4"></div>
              <div className="md:w-1/5 pr-4 pl-4"></div>
              <div className="md:w-2/5 pr-4 pl-4 max-w-sm p-6 bg-[#1F2833] border border-gray-200 rounded-lg shadow dark:bg-gray-800">
                <div className="flex justify-between">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                      RESEARCH
                    </h5>
                  </a>
                  <Image
                    className="w-[50px] h-auto text-white dark:text-white8"
                    src={two}
                    alt="icon"
                  />
                </div>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  We conduct extensive research on your project, competitors,
                  current strategies, and what we can do differently to turn the
                  tide.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurProcess;
