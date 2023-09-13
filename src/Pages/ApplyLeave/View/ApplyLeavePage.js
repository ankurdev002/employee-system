import Layout from "../../../Components/Layout/Layout";
import React, { useState } from "react";
import moment from "moment";
import leftarrowimg from "../../../Assets/Images/leftarrow.png";
import rightarrowimg from "../../../Assets/Images/rightarrow.png";

const ApplyLeavePage = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  // Function to determine the status of a date (green, red, blue, orange)
  const getStatusColor = (date) => {
    // Add other conditions for different status (e.g., unpaid leave, paid leave, etc.) if needed
    // ...

    return "white"; // Default status color (no special status for this date)
  };

  const renderCalendar = () => {
    const startDate = currentMonth.clone().startOf("month").startOf("week");
    const endDate = currentMonth.clone().endOf("month").endOf("week");
    const calendar = [];

    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
      const isSunday = currentDate.day() === 0;
      const statusColor = getStatusColor(currentDate); // Get the status color for the current date

      calendar.push(
        <div
          key={currentDate.format("YYYY-MM-DD")}
          className={`day ${
            currentDate.month() !== currentMonth.month() ? "other-month" : ""
          } ${isSunday ? "sunday" : ""} ${statusColor}`}
        >
          {currentDate.format("D")}
        </div>
      );
      currentDate.add(1, "day");
    }

    return calendar;
  };

  const renderWeekdays = () => {
    const weekdays = moment.weekdaysShort();

    return weekdays.map((weekday) => (
      <div key={weekday} className="weekday">
        {weekday}
      </div>
    ));
  };
  return (
    <Layout>
      <div className="date-journal-container">
        <div className="date-journal-content">
          <div className="main-calender-container-datejournal">
            <div className="calendar-journal-container-2">
              <div className="month-nav">
                <button onClick={goToPrevMonth}>
                  <img src={leftarrowimg} alt="leftarrow" />
                </button>
                <h1>{currentMonth.format("MMMM YYYY")}</h1>
                <button onClick={goToNextMonth}>
                  <img src={rightarrowimg} alt="rightarrow" />
                </button>
              </div>
              <div className="weekdays">{renderWeekdays()}</div>
              <div className="calendar-journal">{renderCalendar()}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyLeavePage;
