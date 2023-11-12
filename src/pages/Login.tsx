import carLogin from "../assets/images/Rectangle 5.png";
import fbLogo from "../assets/images/fb-logo.png";

import GoogleLogo from "../components/GoogleLogo.tsx";

const Login = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-b from-[#9EBBF1] to-white">
      <div className="rounded-xl relative z-10 w-2/3 h-[76%] shadow-md bg-white">
        <div className="flex justify-between h-full">
          <div className="flex flex-col my-7 mx-14">
            <div className="w-full flex flex-col gap-y-5">
              <div className="font-semibold text-[24px] mt-2 font-rokkitt">
                Log In
              </div>
              <div className="text-[16px] font-mulish">
                Log in to your account to make a services and payment.
              </div>
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-11/12 h-[10%] p-6 text-[18px] rounded-sm text-[#717A90] border-1 font-mulish"
              />
              <div className="flex justify-between w-11/12 items-center mb-5 mt-2">
                <div className="text-[#0C6787] text-[16px] font-mulish">
                  Forgot password?
                </div>
                <div className="bg-[#046586] text-white font-semibold w-2/5 p-4 font-mulish flex items-center justify-center gap-x-3 shadow-xl rounded-md">
                  <span>Next</span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_78_2096)">
                      <path
                        d="M6.66675 16H25.3334"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.3333 24L25.3333 16"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.3333 8L25.3333 16"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_2096">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="border-b-1 border-[#CAD6E4] w-11/12" />
              <div className="text-center text-[#838A9E] text-[14px] font-mulish">
                Or log in with
              </div>
              <div className="flex justify-between w-11/12">
                <div className="border-[#CAD6E4] border-1 p-3 w-[47.5%] flex items-center justify-center rounded-md">
                  <img src={fbLogo} />
                  <span className="font-mulish text-[16px] ml-2">Facebook</span>
                </div>
                <div className="border-[#CAD6E4] border-1 p-3 flex items-center w-[47.5%] justify-center rounded-md">
                  <GoogleLogo />
                  <span className="ml-2">Google</span>
                </div>
              </div>
              <div className="text-center font-mulish text-[14px]">
                Don’t have an account yet?
                <span className="text-[#046586] ml-1 underline">Sign up</span>
              </div>
            </div>
          </div>

          <img src={carLogin} className="w-[42%]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
