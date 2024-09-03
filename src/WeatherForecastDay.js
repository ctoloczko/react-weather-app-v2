import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let nextDay = (day + 1) % 7;

    return days[nextDay];
  }
  function formatDate() {
    let today = new Date(); // Get today's date
    let tomorrow = new Date(today); // Create a new Date object for tomorrow
    tomorrow.setDate(today.getDate() + 1); // Increment the day by 1 to get tomorrow

    let day = tomorrow.getDate(); // Get the day of the month
    let month = tomorrow.getMonth() + 1; // Get the month (0-based, so add 1)

    // Format the date as "day.month" with leading zero for day and month if needed
    return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}`;
  }

  return (
    <div className="col-2">
      {" "}
      <div className="Column-header text-uppercase">
        <p>{day()}</p>
        <p>{formatDate()}</p>
      </div>
      <div className="Column-body">
        <div>
          <span>{maxTemp()}</span> | <span>{minTemp()}</span>
        </div>
        <img
          className="img-fluid"
          alt="image-weather"
          src={props.data.condition.icon_url}
        />
      </div>
    </div>
  );
}
