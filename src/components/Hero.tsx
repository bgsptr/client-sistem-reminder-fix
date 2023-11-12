import heroCar from "../assets/images/about 1.png";
import LiveDemo from "./home/LiveDemo";

const Hero = () => {
  return (
    <div
      className="flex justify-around mx-20 my-[40px] items-center font-poppins
      max-sm:flex-col max-sm:text-center"
    >
      <div className="flex flex-col w-6/12 gap-y-4">
        <div className="font-semibold text-[64px] text-grey">
          AutoDeals One of the Best
        </div>
        <div className="text-[18px] w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla
          etiam turpis quam diam et.
        </div>
        <LiveDemo />
      </div>
      <img src={heroCar} className="w-5/12" />
    </div>
  );
};

export default Hero;
