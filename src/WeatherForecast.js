import React from "react";
import "./Weather.css";

export default function WeatherForecast() {
  return (
    <div className="col-2">
      {" "}
      <div className="Column-header text-uppercase">
        <p>Tue</p>
        <p>27.08</p>
      </div>
      <div className="Column-body">
        <div>
          <span>10</span> | <span>6</span>
        </div>
        <img
          className="img-fluid"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        />
      </div>
    </div>
  );
}
