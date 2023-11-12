import Hero from "./Hero.tsx";
import Rectangle from "./RectangleHome";

import { Login, Register } from "./home/home.js";
import CompanyLogo from "../assets/images/Logo 1.png";

const Nav = () => {
  return (
    <div className="bg-[#9EBBF1] w-full min-h-screen bg-cover">
      <div className="flex justify-between mx-20 px-6 py-4 items-center">
        <div className="flex items-center gap-x-2">
          <img src={CompanyLogo} />
          <div className="text-primary italic text-[30px] font-bold py-7">
            AutoDeals
          </div>
        </div>
        <div className="flex gap-x-10 items-center max-sm:hidden">
          <div className="text-primary">Home</div>
          <div>Product</div>
          <div>Services</div>
          <div>About Me</div>
          <div>FAQ</div>
          <Login bgColor="red" />
          <Register bgColor="primary" />
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Nav;
