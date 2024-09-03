import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const getLocalTime = (timezoneOffset) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezoneOffset * 1000);
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getGMTTime = () => {
    const gmtTime = new Date();
    return gmtTime.toUTCString().split(' ')[4]; // Extracting time part from the UTC string
  };

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Local Time</span>
            <span className="parameter-value">{getLocalTime(data.timezone)}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">GMT Time</span>
            <span className="parameter-value">{getGMTTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
