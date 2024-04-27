import React, { useEffect, useState } from "react";

const Calendar = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");

  const [yearSaved, setYearSaved] = useState(year);
  const [monthSaved, setMonthSaved] = useState(month);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [getDateDay, setDateDay] = useState([]);

  const [getAllDay, setAllDay] = useState([]);

  useEffect(() => {
    const date = new Date();
    const setMonth = date.getMonth() + 1;
    const setYear = date.getFullYear();
    localStorage.setItem("month", String(setMonth));
    localStorage.setItem("year", String(setYear));
  }, []);

  useEffect(() => {
    const allDays = [];
    const daysInMonth = new Date(Number(year), Number(month), 0);
    const lenDaysInMonth = daysInMonth.getDate();

    for (let i = 1; i <= lenDaysInMonth; i++) {
      allDays.push(i);
    }

    console.log(allDays);
    setAllDay(allDays);
  }, [year, month]);

  useEffect(() => {
    const newDateDay = getAllDay.map((day) => {
      const dayInMonth = new Date(Number(year), Number(month) - 1, day);
      const key = dayInMonth.getDay();
      switch (key) {
        case 0:
          return "Sun";
        case 1:
          return "Mon";
        case 2:
          return "Tue";
        case 3:
          return "Wed";
        case 4:
          return "Thu";
        case 5:
          return "Fri";
        case 6:
          return "Sat";
        default:
          return "";
      }
    });

    // setDateDay(date => ({
    //   ...date,
    //   newDateDay
    // }))
    setDateDay(newDateDay)
  }, [getAllDay, year, month]);

  useEffect(() => {
    console.log(getDateDay.filter(day => day === "Sun").length);
    console.log(getDateDay);
  }, [getDateDay]);

  return (
    <div>
      <div className="grid grid-cols-7 items-center border-b-2 w-full">
        {days.map((data) => (
          <div className="ml-[2.75rem]">{data}</div>
        ))}
      </div>
      {/* {getAllDay.map((i, data) =>
        i % 7 != 0 ? (
          <div className="flex justify-around items-center border-b-2 w-full">
            <div className="">{data + 1}</div>
          </div>
        ) : (
          <div>{data + 1}</div>
        )
      )}
      <div className="flex justify-around items-center border-b-2 w-full">
        {getAllDay.map((i, data) =>
          i % 7 != 0 ? (
            <div className="">{data + 1}</div>
          ) : (
            <div className="flex flex-wrap">
              <div className="">1</div>
            </div>
          )
        )}
      </div> */}

      {getDateDay.map((date, day) => {
        if (day == "sat") {
          return (
            <div className="grid grid-cols-7 items-center border-b-2 w-full">
              {getDateDay.slice(date, date + 7).map((idx, datas) => (
                <div className="ml-[3rem] mb-[4.75rem]">{idx}</div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Calendar;
