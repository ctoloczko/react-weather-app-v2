import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <>
      <div className="Weather">
        <div className="col d-flex ">
          <form className="d-flex">
            <input
              className="me-1 search-input "
              type="search"
              placeholder="Enter a city"
            />
            <input className="search-button" type="submit" value="🔎" />
          </form>
        </div>
        <div className="Column-header">
          <p>August 18</p>

          <div className="d-flex justify-content-between">
            {" "}
            <p>Sunday</p>
            <p>10:29 AM</p>
          </div>
        </div>

        <div className="Column-body">
          <div>
            <h3>Stockholm</h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>16°C|F</h2>
                <p>Feels like: 17° </p>
                <p>Humidity: 42%</p>
                <p>Wind: 23km/h</p>
                <p>Pressure: 1200 MB</p>
              </div>
              <div className="col-md-6">
                <h3>
                  {" "}
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                    alt="weather-icon"
                  ></img>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <footer>
          This project was coded by Celina Toloczko-Mastalerz and is
          open-sourced on GitHub and hosted on Netlify.{" "}
        </footer>
      </div>
    </>
  );
}
