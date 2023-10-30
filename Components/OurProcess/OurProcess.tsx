"use client";

import React from "react";
import { ProcessItem } from "../ProcessData/Process";
import { ProcessItem2 } from "../ProcessData/Process";
import { motion } from "framer-motion";
import "./Process.css";
import Image from "next/image";

const OurProcess = () => {
  return (
    <>
      <div className="bg-black w-[100%] h-[1200px] mt-[50px] ">
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-center text-[#66fcf1] text-[50px] font-extrabold">
              Our <span className="text-white"> Process</span>
            </h1>
          </motion.div>
          <div
            className="container flex w-[800px] mt-[60px]"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {ProcessItem?.map((card, index) => (
              <div key={index} className="card1">
                <h3 className="title">{card.title}</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <h2 className="text-white "> {card.desc} </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="container flex w-[800px] mt-[60px]">
            {ProcessItem2?.map((card, index) => (
              <div key={index} className="card1">
                <h3 className="title">{card.title}</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle1">
                  <h2 className="text-white "> {card.desc} </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurProcess;
