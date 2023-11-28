import { useEffect, useState } from "react";
import { useSearchParams, useParams, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

import chevronLeft from "../assets/chevron/chevron-left.svg";
import chevronRight from "../assets/chevron/chevron-right.svg";

const CategoryProduct = () => {
  const [qsParam, setQsParam] = useSearchParams();
  const [data, setData] = useState([]);
  const { CatCar } = useParams();
  const location = useLocation();
  

  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  useEffect(() => {
    // console.log(CatCar);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const queryParamsObject = {};
      qsParam.forEach((value, key) => {
        if (value !== null) {
          queryParamsObject[key] = value;
        }
      });

      const searchParams = new URLSearchParams(queryParamsObject);
      const newSearch = searchParams.toString();
      try {
        let url = "http://localhost:8000/car";

        if (searchParams.size !== 0) {
          url = `http://localhost:8000/car?${newSearch}`;
        }

        // console.log(searchParams.size);
        // console.log("Fetching data from:", url);

        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [qsParam, CatCar]);

  return (
    <div className="max-h-screen overflow-y-auto">
      <Header />
      <div className="w-full absolute top-48">
        <div className="mx-20">
          <div className="flex items-center">
            Home
            <span>
              <img src={chevronRight} />
            </span>
            {CatCar}
          </div>
          <Sidebar />
          <div className="flex">
            {data.map((el) => {
              return (
                <Card
                  images={el["images"]}
                  name={el["name"]}
                  desc={"el"}
                  price={el["price"]}
                  rating={4.5}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
