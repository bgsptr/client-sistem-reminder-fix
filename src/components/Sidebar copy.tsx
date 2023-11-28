import React, { useState, useEffect } from "react";
import qs from "qs";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [qsParam, setQsParam] = useSearchParams();
  const [queryString, setQueryString] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading
  const [error, setError] = useState(null); // New state for error
  const navigate = useNavigate();
  const location = useLocation();
  const [price, setPrice] = useState({
    minimum: 0,
    maximum: 0,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    let queryObj = {};

    if (price.minimum === 0 && price.maximum === 0) {
      queryObj = {};
    } else if (price.maximum === 0) {
      queryObj = { price_from: price.minimum };
    } else if (price.minimum === 0) {
      queryObj = { price_until: price.maximum };
    } else {
      queryObj = {
        price_from: price.minimum,
        price_until: price.maximum,
      };
    }

    const newQueryString = qs.stringify(queryObj);
    setQueryString(newQueryString);
    navigate({
      search: newQueryString
    });
    setPrice({
      minimum: 0,
      maximum: 0,
    });

    // Set loading state to true before making the API call
    setLoading(true);
    setError(null); // Reset error state

    try {
      const url = `http://localhost:8000/car?${newQueryString}`;
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
      setError(error.message); // Set error state
    } finally {
      // Set loading state to false after API call completes
      setLoading(false);
    }
  };

  const formHandler = (e) => {
    // console.log(url);
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
        <button type="submit">Cari</button>
      </form>
  );
};

export default Sidebar;