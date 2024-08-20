import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  return (
    <>
      <div>{day}</div>

      <div className="d-flex justify-content-between">
        {" "}
        <p>
          {date} {month}
        </p>
        <p>Time</p>
      </div>
    </>
  );
}
