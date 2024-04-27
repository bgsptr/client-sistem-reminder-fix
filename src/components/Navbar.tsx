import popup from "/public/dashboarddd/atas.svg"
import leftChev from "/public/dashboarddd/left-chev.svg"
import rightChev from "/public/dashboarddd/right-chev.svg"

const Navbar = () => {
  return (
    <div className="w-full border-b-gray border-b-2 text-md">
      <div className="w-full flex items-center gap-x-12">
        <img className="my-5 ml-[4.5rem]" src={popup} />
        <p>Dashboard/calendar</p>
        <div className="flex items-center gap-x-6">
            <img src={leftChev} alt="" />
            <img src={rightChev} alt="" />
            <p className="ml-5">April 2024</p>
        </div>
        <div className="border-slate-300 border-2 h-7 w-1/5"></div>
        <img className="my-5 mr-7" src={popup} />
      </div>
    </div>
  );
};

export default Navbar;
