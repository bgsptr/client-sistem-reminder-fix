import React, { useState, useEffect } from "react";
import qs from "qs";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [qsParam, setQsParam] = useSearchParams();
  const [queryString, setQueryString] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [price, setPrice] = useState({
    minimum: 0,
    maximum: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    let queryObj = {};

    if (price.minimum === 0 && price.maximum === 0) {
      queryObj = {};
    } else if (price.maximum === 0) {
      queryObj = { price_from: price.minimum };
    } else if (price.minimum === 0) {
      queryObj = { price_to: price.maximum };
    } else {
      queryObj = {
        price_from: price.minimum,
        price_to: price.maximum,
      };
    }

    const newQueryString = qs.stringify(queryObj);
    setQueryString(newQueryString);
    navigate(`?${newQueryString}`);
    setPrice({
      minimum: 0,
      maximum: 0,
    });
    window.addEventListener("mouseenter", submitHandler)
  };

  const formHandler = (e) => {

  };

  const inputHandler = (e) => {
    if (e.target.name === "minPrice") {
      setPrice({
        ...price,
        minimum: parseInt(e.target.value.replace(/^[A-Za-z]/, ""), 10),
      });
    } else if (e.target.name === "maxPrice") {
      setPrice({
        ...price,
        maximum: parseInt(e.target.value.replace(/^[A-Za-z]/, ""), 10),
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Harga Minimum"
          name="minPrice"
          onChange={inputHandler}
          value={price.minimum === 0 || isNaN(price.minimum) ? "" : price.minimum}
        />
        <input
          type="text"
          placeholder="Harga Maksimum"
          name="maxPrice"
          onChange={inputHandler}
          value={price.maximum === 0 || isNaN(price.maximum) ? "" : price.maximum}
        />
        <button onClick={formHandler} type="submit">Cari</button>
      </form>
    </div>
  );
};

export default Sidebar;