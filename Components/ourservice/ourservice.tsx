"use client";
import React from "react";
// import { Servicvedata } from "../Ts_model/services";
import Slider from "react-slick";
import Services from "./services";
import "./ourservice.css";
const Ourservice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="ourservice_main">
        <div className="container">
          <div className="Our_service_heading my-[100px]">
            <h2 className="our_services_headline text-center">
              <span>Our</span> <span>Services</span>
            </h2>
            <p className="service_info m-auto">
              Despite being the most trusted website development &amp;{" "}
              <a
                className="underline text-blue-500"
                href="https://baselineitdevelopment.com/web-designing-company-in-mohali"
              >
                web designing company in Mohali
              </a>
              , we also offer result-driven digital marketing solutions. We do
              everything for your impeccable growth, from providing you with the{" "}
              <a
                className="underline text-blue-500"
                href="https://baselineitdevelopment.com/seo-company-mohali"
              >
                best SEO services in Mohali
              </a>{" "}
              to other digital solutions.
            </p>
          </div>

          <div>
            <Slider {...settings} className=" grid grid-cols-3  my-[20px] ">
              <Services />

              <Services />

              <Services />

              <Services />

              <Services />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ourservice;
