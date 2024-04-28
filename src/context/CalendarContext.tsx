import React, { createContext, useState } from "react";

export const CalendarContext = createContext({});

export const CalendarProvider = ({ children }) => {
  const [monthToString] = useState([
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
  ]);

  const [getYear, setYear] = useState(2024);
  const [getMonth, setMonth] = useState(4);

  const calendarContextValue = {
    monthToString,
    getYear,
    getMonth,
    setYear,
    setMonth,
  };

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
