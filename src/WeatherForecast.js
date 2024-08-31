import React from "react";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
  let longitude = props.data.coordinates.longitude;
  let latitude = props.data.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
          alt="image-weather"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        />
      </div>
    </div>
  );
}
