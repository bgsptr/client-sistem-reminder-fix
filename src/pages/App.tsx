import React from "react";

import Nav from "../components/Nav";
import Card from "../components/Card";
import CarCard from "../assets/images/Rectangle 72.png";


const App = () => {
  return (
    <div className="">
      <Nav />
      <div className="min-h-screen mx-20 my-20 flex flex-col text-5xl items-center">
        <div className="mb-20 text-[#051114] font-semibold italic">
          Product Best
          <span className="relative left-4 text-center text-[#2788E2]">
            Seller
          </span>
        </div>
        <div className="flex gap-x-4">
          <Card
            images={CarCard}
            name="Lambo"
            desc="Lorem ipsum dolor sit amet ecte adipiscing elitIpsum..."
            price="Rp125.000"
            rating={4.5}
          />
          <Card
            images={CarCard}
            name="Lambo"
            desc="Lorem ipsum dolor sit amet ecte adipiscing elitIpsum..."
            price="Rp125.000"
            rating={4.5}
          />
          <Card
            images={CarCard}
            name="Lambo"
            desc="Lorem ipsum dolor sit amet ecte adipiscing elitIpsum..."
            price="Rp125.000"
            rating={4.5}
          />
          <Card
            images={CarCard}
            name="Lambo"
            desc="Lorem ipsum dolor sit amet ecte adipiscing elitIpsum..."
            price="Rp125.000"
            rating={4.5}
          />
        </div>
      </div>
      <div className=" bg-[#9EBBF1] w-full min-h-screen flex flex-col text-5xl items-center">

      </div>
    </div>
  );
};

export default App;
