"use client";
import React from "react";
import { TfiCheckBox } from "react-icons/tfi";
import { DataService } from "../data/data";
import Slider from "react-slick";
import Image from "next/image";
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings} className=" my-[20px] ">
        {DataService?.map((item: any, index: number) => {
          return (
            <div className="service_cards  h-[250px] " key={index}>
              <div className="container">
                <div className="card">
                  <Image
                    src={item.logo}
                    className=" border border-white rounded-[100%] p-1 w-[50px] m-auto z-1"
                    alt="image"
                  />
                  <h4 className=" text-center text-[#5ddad1]">{item.title}</h4>
                  <div className="Card_list leading-[44px] p-2.5">
                    <ul>
                      {item.service.map((service: string[], index: number) => {
                        return (
                          <li
                            className=" inline-flex items-center  gap-[16px] w-[100%] text-[12px]"
                            key={index}
                          >
                            {" "}
                            <span className="check_icon">
                              <TfiCheckBox />
                            </span>{" "}
                            <span className="text-white"> {service}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="shine"></div>
                  <div className="background">
                    <div className="tiles">
                      <div className="tile tile-1"></div>
                      <div className="tile tile-2"></div>
                      <div className="tile tile-3"></div>
                      <div className="tile tile-4"></div>

                      <div className="tile tile-5"></div>
                      <div className="tile tile-6"></div>
                      <div className="tile tile-7"></div>
                      <div className="tile tile-8"></div>

                      <div className="tile tile-9"></div>
                      <div className="tile tile-10"></div>
                    </div>

                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default Services;
