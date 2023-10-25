"use client";

import React from "react";
import one from "../assets/Process/1.png";
import Image from "next/image";

const OurProcess = () => {
  return (
    <>
      <div className="bg-black w-[100%] h-[800px]">
      <h1 className="flex justify-center">Our Process</h1>

      <div className="max-w-sm mt-16 p-6 bg-[#1F2833] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="w-[50px] h-auto text-white dark:text-white mb-3"
            src={one}
            alt="icon"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
            IDEA
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            See our guideline
          </a>
        </div>

       <div>

       </div>
      </div>
    </>
  );
};
export default OurProcess;
