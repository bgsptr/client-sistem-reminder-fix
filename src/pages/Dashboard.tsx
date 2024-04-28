import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
import { CalendarProvider } from "../context/CalendarContext";
import NavbarCalendar from "../components/NavbarCalendar";
import MyProfile from "../components/MyProfile";

const Dashboard = () => {
  const year = Number(localStorage.getItem("year"));
  const month = Number(localStorage.getItem("month"));

  const [getYear, setYear] = useState(year);
  const [getMonth, setMonth] = useState(month);

  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col basis-[70%] flex-auto">
        <CalendarProvider>
          <NavbarCalendar />
          {/* <Calendar /> */}
          <MyProfile />
        </CalendarProvider>
      </div>
    </div>
  );
};

export default Dashboard;
