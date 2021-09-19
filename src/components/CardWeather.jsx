import React from "react";
import "../styles/CardWeather.css";

const CardWeather = ({ data }) => {
  console.log(data);
  return (
    <div className="card-weather-container">
      <h2 className="wheather-title">Current Weather</h2>
      <div className="weather-description">
        <h2>{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.name}
        />
        <div className="temp-container">
          <h2>{`${data.main.temp}ºC`}</h2>
          <h3>{`Min: ${data.main.temp_min}ºC`}</h3>
          <h3>{`Max: ${data.main.temp_max}ºC`}</h3>
        </div>
        <h3>{`Humidity: ${data.main.humidity}%`}</h3>
        <h3>{`Wind: ${data.wind.speed}`}</h3>
      </div>
    </div>
  );
};

export default CardWeather;
