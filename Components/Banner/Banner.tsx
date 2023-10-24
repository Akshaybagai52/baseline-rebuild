"use client";
import React from "react";
import ParticlesBackground from "../particles/particlesBackground";
import { Getstarted } from "../Buttons/Buttons";
// import digitalimg from "../assets/digital.png";
// import Image from "next/image";
const Banner = () => {
  return (
    <div className="banner ">
      <ParticlesBackground />

      <div className="container">
        <div className="banner_content mt-[100px] flex  font-sans items-center">
          <div className="banner_info w-[50%] ">
            <div className="banner_heading w-[50%] m-auto">
              <h1 className="mai_heading leading-[80px] text-[84px] text-[#66FCF1] ">
                <span className="digital">Digital</span>
                <br /> <span className="marketing">Marketing</span>
              </h1>
              <p className="w-[400px] my-[10px] text-[#C5C6C7]">
                Web Designidfng fdgCompany can help you to attract customers.
                Commonly it is the design of the website which can draw in
                people but it also has the power to drive them away. Having a
                one among a type web composition is a vital piece of the marking
                and promoting the process of your commercial enterprise.
              </p>
              <div className="buttons_getStarted">
                <button className="border p-2 rounded bg-white text-black font-bold">
                  {Getstarted}
                </button>
              </div>
            </div>
          </div>
          <div className="banner_svg w-[50%]">
            <div className="lottie_animation w-[100%] max-w-[500px]">
              {/* <Image src={digitalimg} alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
