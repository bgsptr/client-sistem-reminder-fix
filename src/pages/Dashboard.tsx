import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col basis-[70%] flex-auto">
        <Navbar />
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
