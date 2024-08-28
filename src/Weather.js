import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
  function search() {
    const apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather">
          <form onSubmit={handleSubmit} className="d-flex Weather-search">
            <input
              onChange={handleCityChange}
              className="me-1 Search-input "
              type="search"
              placeholder="Enter a city"
              value={city}
            />
            <input className="Search-button" type="submit" value="🔎" />
          </form>
          <div>
            <div className="row g-1">
              <div className="col-5">
                <CurrentWeather data={weatherData} />
              </div>
              <div className="col-7">
                <WeatherForecast />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    search();
    return (
      <Hearts
        height="400"
        width="400"
        color="#3E5573"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
