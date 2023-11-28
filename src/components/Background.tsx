import React from "react";

const Background = ({ el }) => {
  return (
    // <div className="flex flex-wrap justify-center">
      <img src={el.img} alt={el.name} className="w-full" />
      /* <div className="flex flex-col items-center">
        <div className="font-mulish font-bold text-[24px]">{el.name}</div>
        <div className="text-[#747069] font-mulish text-[12px]">{el.date}</div>
      </div> */
    // </div>
  );
};

export default Background;
