"use client";
import React from "react";
import { TfiCheckBox } from "react-icons/tfi";
import { DataService } from "../data/Data";
import Slider from "react-slick";
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className=" grid grid-cols-3  my-[20px] ">
        {DataService.map((item: any, index: number) => {
          return (
            <div className="service_cards  h-[250px] " key={index}>
              <div className="container">
                <div className="Cards_service w-[400px] bg-[#1F2833] p-5 rounded-[15px] h-[450px]">
                  <div className="card text-white  border-[3px] border-[#66fcf1] p-[10px] ">
                    <div className="card_logo text-center">
                      <p className="service_logo">{item.heading}</p>
                      <h2 className="my-2">{item.title}</h2>
                    </div>
                    <div className="Card_list leading-[44px] p-2.5">
                      <ul>
                        {item.service.map(
                          (service: string[], index: number) => {
                            return (
                              <li
                                className=" inline-flex items-center  gap-[16px] w-[100%] text-[12px]"
                                key={index}
                              >
                                {" "}
                                <span className="check_icon">
                                  <TfiCheckBox />
                                </span>{" "}
                                {service}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
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
