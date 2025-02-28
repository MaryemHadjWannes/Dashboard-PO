import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarValue = Date | null | [Date, Date]; // Define the expected value type

const CustomCalendar: React.FC = () => {
  const [date, setDate] = useState<CalendarValue>(new Date()); // Correct type

  return (
    <div>
      <h3 className="font-semibold mb-4">Calendar</h3>
      <Calendar
        onChange={(value) => setDate(value as Date)} // Force it to be Date
        value={date}
        className="border border-gray-200 rounded-lg"
      />

    </div>
  );
};

export default CustomCalendar;
