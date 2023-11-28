import React from "react";

import carouselCar from "../assets/carousel-car.svg";
import chevronLeft from "../assets/chevron/chevron-left.svg";
import chevronRight from "../assets/chevron/chevron-right.svg";

import Carousel from "../components/carousel"

import "./dashboard.css";

const CarouselDashboard = () => {

  return (
    <div className="mt-4 mx-20 border-2 rounded-xl border-[#E5E5E5] h-[407px] leading-10">
      <img src={carouselCar} />
        <div className="flex justify-between mt-4">
          <img src={chevronLeft} className="filter-chevron" />
          <div className="font-mulish font-bold text-[24px]">
            Belgian Balloon Throphy
          </div>
          <img src={chevronRight} className="filter-chevron" />
        </div>
        <div className="text-center text-[#747069] font-mulish text-[12px]">
          Sat, 20 May 2020
        </div>
    </div>
  );
};

export default CarouselDashboard;
