import Login from "./home/Login";
import ComponentCompany from "./home/ComponentCompany";
import SearchLogo from "./SearchLogo";
import wishlistLogo from "../assets/images/heart-solid 1.png";

import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const [lastPoint, setLastPoint] = useState({ x: 0, y: 0 });
  const [delayHandler, setDelayHandler] = useState(0);
  const [category, setCategory] = useState([]);

  const showCategory = () => {
    setDelayHandler(
      setTimeout(() => {
        setShow(true);
        window.addEventListener("mousemove", handleMouseEvent);
      }, 200)
    );
  };

  const handleMouseEvent = ( e : MouseEvent ) => {
    console.log(e.clientX);
    if (
      (e.clientX < lastPoint.x + 300 || e.clientX > lastPoint.x + 700) ||
      e.clientY < lastPoint.y - 100 &&
      e.clientY > lastPoint.y + 500
    ) {
      setShow(false);
      setLastPoint({ x: e.clientX, y: e.clientY });
      window.removeEventListener("mousemove", handleMouseEvent);
      setLastPoint({ x: 0, y: 0 });
      clearTimeout(delayHandler);
    } else {
      setShow(true);
    }
  };

  const popCategory = () => {
    window.removeEventListener("mousemove", handleMouseEvent);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/category", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="w-full fixed h-1/6 z-10">
      <div className="bg-main block w-full h-1/4">
        <div className="mx-20 flex justify-end gap-x-8">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Product</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">About Me</div>
          <div className="cursor-pointer">FAQ</div>
        </div>
      </div>
      <div className="h-full bg-white w-full">
        <div className="flex justify-between mx-20">
          <ComponentCompany />
          <div className="flex items-center gap-x-7 w-3/4">
            <button
              className=""
              onMouseEnter={showCategory.bind(this)}
              onMouseLeave={popCategory.bind(this)}
            >
              Kategori
            </button>
            <div className="rounded-lg border-[#C6CCE0] border-2 w-3/5 h-1/2 flex items-center">
              <SearchLogo />
              <input
                className="ml-3 focus:outline-none w-full"
                placeholder="Search"
              />
            </div>
            <img src={wishlistLogo} className="cursor-pointer" />
            <Login />
          </div>
        </div>
      </div>
      <div
        className={`bg-white shadow-md my-3 w-1/4 h-[200px] absolute left-[30%] z-50 top-24 rounded-lg ${
          show ? "block" : "hidden"
        }`}
        ref={dropdownRef}
      >
        <div className="py-3 px-7">
          <div className="text-xs font-poppins font-semibold">
            ALL CATEGORIES
          </div>
          <div className="flex justify-around">
            {category.map((el) => {
              return <div key={el['id']}>{el['name']}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
