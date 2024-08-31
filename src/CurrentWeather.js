import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <>
      <div className="Column-header text-uppercase">
        <FormattedDate date={props.data.date} />{" "}
      </div>
      <div className="Column-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 p-0">
              <h3>{props.data.city}</h3>
              <WeatherTemperature celsius={props.data.temperature} />

              <p>Feels like: {Math.round(props.data.trueTemperature)}° </p>
              <p>Humidity: {props.data.humidity}%</p>
              <p>Wind: {Math.round(props.data.wind)} m/s</p>
              <p>Pressure: {props.data.pressure} MB</p>
            </div>
            <div className="col-sm-5 Icon-description">
              {" "}
              <img src={props.data.iconUrl} alt="weather-icon"></img>
              <p className="text-capitalize">{props.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
