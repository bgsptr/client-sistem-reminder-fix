import React from "react";
import ComponentCompany from "./home/ComponentCompany";

import githubLogo from "../assets/footer/github.svg";
import youtubeLogo from "../assets/footer/youtube.svg";
import instagramLogo from "../assets/footer/instagram.svg";
import linkedinLogo from "../assets/footer/linkedin.svg";

const Footer = () => {
  return (
    <div className="h-[73vh] bg-main flex-col justify-between">
      <div className="mx-20 my-10 py-6 flex justify-between">
        <div className="w-1/3">
          <ComponentCompany />
          <div className="text-footer text-base font-poppins">
            AutoDeals is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters.
          </div>
        </div>
        <div className="text-footer text-medium font-poppins font-semibold my-10 flex flex-col gap-y-3">
          <div>Home</div>
          <div>Product</div>
          <div>Services</div>
          <div>About Me</div>
        </div>
        <div className="text-footer text-medium font-poppins font-semibold my-10 flex flex-col gap-y-3">
          <div>Terms of Use</div>
          <div>FAQ</div>
          <div>Call Center</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="mx-20 my-10 py-6 flex justify-between">
        <div className="flex flex-col gap-y-3">
          <div className="font-poppins font-medium text-lg">Follow Us On</div>
          <div className="flex gap-x-2">
            <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
              <img src={youtubeLogo} alt="youtube" />
            </div>
            <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
              <img src={linkedinLogo} alt="linkedin" />
            </div>
            <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
              <img src={instagramLogo} alt="instagram" />
            </div>
            <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
              <img src={githubLogo} alt="github" />
            </div>
          </div>
        </div>
        <div className="font-poppins font-medium text-md text-footer my-9">Copyright @2023 - present AutoDeals</div>
      </div>
    </div>
  );
};

export default Footer;
