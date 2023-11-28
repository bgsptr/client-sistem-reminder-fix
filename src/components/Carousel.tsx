import React, { useState } from "react";

import chevronLeft from "../assets/chevron/chevron-left.svg";
import chevronRight from "../assets/chevron/chevron-right.svg";

import Background from "./Background";

const Carousel = ({ slides }) => {
  console.log(slides);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    console.log("prev");
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="mx-20 mt-4 border-2 rounded-xl border-[#E5E5E5] h-[407px] leading-10">
      <div className="overflow-hidden relative">
        <div
          className="flex items-center transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((el, index) => {
            return <Background el={el} />;
          })}
        </div>
        <div className="absolute bottom-0 py-4 flex justify-between items-center gap-3 w-full">
          <button onClick={prev}>
            <img src={chevronLeft} alt="Previous" />
          </button>
          <button onClick={next}>
            <img src={chevronRight} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
