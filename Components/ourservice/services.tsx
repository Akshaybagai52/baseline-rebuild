"use client";
import React from "react";
import { TfiCheckBox } from "react-icons/tfi";

const Services = () => {
  return (
    <>
      <div className="service_cards  h-[250px] ">
        <div className="container">
          <div className="Cards_service w-[400px] bg-[#1F2833] p-5 rounded-[15px]">
            <div className="card text-white  border-[3px] border-[#66fcf1] p-[10px] ">
              <div className="card_logo text-center">
                <p className="service_logo">Logo</p>
              </div>
              <div className="Card_list leading-[44px] p-2.5">
                <ul>
                  <li className=" inline-flex items-center  gap-[16px]">
                    {" "}
                    <span className="check_icon">
                      <TfiCheckBox />
                    </span>{" "}
                    Web Portal Development
                  </li>
                  <li className=" inline-flex items-center  gap-[16px]">
                    <span className="check_icon">
                      <TfiCheckBox />
                    </span>{" "}
                    Web Services &amp; API Integration
                  </li>
                  <li className=" inline-flex items-center  gap-[16px]">
                    <span className="check_icon">
                      <TfiCheckBox />
                    </span>{" "}
                    CMS Development
                  </li>
                  <li className=" inline-flex items-center  gap-[16px]">
                    {" "}
                    <span className="check_icon">
                      <TfiCheckBox />
                    </span>{" "}
                    Integrating Payment gateways
                  </li>
                  <li className=" inline-flex items-center  gap-[16px]">
                    <span className="check_icon mb-[46px]">
                      <TfiCheckBox />
                    </span>{" "}
                    Building Ecommerce Website Open Source Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
