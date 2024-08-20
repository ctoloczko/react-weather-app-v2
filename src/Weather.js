import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      trueTemperature: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      ready: true,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather">
          <form className="d-flex Weather-search">
            <input
              className="me-1 Search-input "
              type="search"
              placeholder="Enter a city"
            />
            <input className="Search-button" type="submit" value="🔎" />
          </form>

          <div className="Column-header text-uppercase">
            <FormattedDate date={weatherData.date} />{" "}
          </div>

          <div className="Column-body">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 p-0">
                  <h3>{weatherData.city}</h3>
                  <h2>
                    {Math.round(weatherData.temperature)}°
                    <span className="Unit">C | F</span>
                  </h2>
                  <p>Feels like: {Math.round(weatherData.trueTemperature)}° </p>
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Wind: {Math.round(weatherData.wind)} km/h</p>
                  <p>Pressure: {weatherData.pressure} MB</p>
                </div>
                <div className="col-sm-5 Icon-description">
                  {" "}
                  <img src={weatherData.iconUrl} alt="weather-icon"></img>
                  <p className="text-capitalize">{weatherData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
