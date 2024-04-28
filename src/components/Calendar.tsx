import React, { useEffect, useState } from "react";
import useDateDay from "../hooks/useDateDay";

const Calendar = () => {

  const { getYear, getMonth, setMonth, setYear } = useDateDay();

  const [dateDays, setDateDays] = useState([]);

  const [daysAWeek] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])

  useEffect(() => {
    const daysInMonth = new Date(getYear, getMonth, 0).getDate();
    const firstDayOfMonth = new Date(getYear, getMonth - 1, 1).getDay();

    const days = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push("");
        } else {
          week.push(dayCounter++);
        }
      }
      days.push(week);
      if (dayCounter > daysInMonth) break;
    }

    setDateDays(days);
  }, [getYear, getMonth]);

  useEffect(() => {
    console.log('aa: ', dateDays)
    console.log()
  }, [dateDays])

  return (
    <div>
      <div className="grid grid-cols-7 items-center border-b-2 w-full">
        {daysAWeek.map((day, index) => (
          <div key={index} className="ml-[2.75rem]">
            {day}
          </div>
        ))}
      </div>
      {dateDays.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7 items-center border-b-2 w-full">
          {week.map((day, dayIndex) => (
            <div key={dayIndex} className={`ml-[3rem] h-full relative border-r-2 ${(dateDays[0].indexOf(1) >= 5) ? `mb-[3.7rem] top-7` : `mb-[4.75rem] top-9`}`}>
              {day}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
