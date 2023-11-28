import carouselCar from "../assets/carousel-car.svg";
import Carousel from "../components/carousel.js";
import CarCard from "../assets/images/Rectangle 72.png";
import CarCard2 from "../assets/Rectangle 73.svg";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import chevronLeft from "../assets/chevron/chevron-left.svg";
import chevronRight from "../assets/chevron/chevron-right.svg";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const start = 0;
  const range = 4;
  const [startIndex, setStartIndex] = useState(start);
  const [endIndex, setEndIndex] = useState(range);
  const [isClick, setIsClick] = useState(false);
  // const [category, setCategory] = useState([]);

  const slides = [
    {
      img: carouselCar,
      name: "Belgian Balloon Throphy",
      date: "Sat, 20 May 2020",
    },
    {
      img: carouselCar,
      name: "Belgian Balloon Throphy",
      date: "Sat, 20 May 2020",
    },
    {
      img: carouselCar,
      name: "Belgian Balloon Throphy",
      date: "Sat, 20 May 2020",
    },
  ];

  const trendingCard = [
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard2,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard2,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
    {
      images: CarCard2,
      name: "Lambo",
      desc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum...",
      price: "Rp125.000",
      rating: 4.5,
    },
  ];

  const prev = () => {
    setStartIndex((startIndex) =>
      Math.min(startIndex - range, trendingCard.length)
    );
    setEndIndex((endIndex) => Math.min(endIndex - range, trendingCard.length));
    setIsClick(true);
  };

  const next = () => {
    setStartIndex((startIndex) => Math.max(startIndex + range, 0));
    setEndIndex((endIndex) => Math.max(endIndex + range, 0));
    setIsClick(true);
  };

  useEffect(() => {
    console.log(startIndex);
    console.log(endIndex);
  }, [startIndex, endIndex]);

  useEffect(() => {
    const pulseTimeout = setTimeout(() => {
      setIsClick(false);
    }, 75);
    console.log(isClick);
    return () => clearTimeout(pulseTimeout);
  }, [isClick]);
  

  return (
    <div className="max-h-screen overflow-y-auto">
      <Header />
      <div className="w-full absolute top-28">
        <Carousel slides={slides} />
        <div className="mx-20 my-10">
          <div className="italic font-poppins font-semibold text-3xl">
            Sedang Trending
          </div>
          <div
            className={`flex gap-x-9 my-6 transition-opacity ease-in-out ${
              isClick ? "opacity-0" : "opacity-100"
            }`}
          >
            {trendingCard.slice(startIndex, endIndex).map((el) => {
              return (
                <Card
                  images={el.images}
                  name={el.name}
                  desc={el.desc}
                  price={el.price}
                  rating={el.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="relative top-[-12rem] mx-9">
          <div
            className={`flex ${
              startIndex === 0
                ? "justify-end"
                : endIndex === trendingCard.length
                ? "justify-start"
                : "justify-between"
            }`}
          >
            <button
              className={`flex rounded-full w-10 h-10 shadow-xl items-center justify-center ${
                startIndex === 0 ? "hidden" : "block"
              }`}
              onClick={prev}
            >
              <img src={chevronLeft} />
            </button>
            <button
              className={`flex rounded-full w-10 h-10 shadow-xl items-center justify-center ${
                endIndex === trendingCard.length ? "hidden" : "block"
              }`}
              onClick={next}
            >
              <img src={chevronRight} />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
