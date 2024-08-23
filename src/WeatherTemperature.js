import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <>
        <h2>
          {Math.round(props.celsius)}
          <span className="Unit">
            {" "}
            <strong>°C </strong> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
            ↩{" "}
          </span>
        </h2>
      </>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <>
        <h2>
          {Math.round(fahrenheit)}
          <span className="Unit">
            ↪
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>{" "}
            | <strong>°F</strong>
          </span>
        </h2>
      </>
    );
  }
}
