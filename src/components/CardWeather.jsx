import React from "react";
import "../styles/CardWeather.css";

const CardWeather = ({ data }) => {
  console.log(data);
  return (
    <div className="card-weather-container">
          <h2 className="wheather-title">{data.name}</h2>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.name} />
          <h2>{`${data.main.temp}ºC`}</h2>
          <div>
          <h3>{`Minima: ${data.main.temp_max}ºC`}</h3>
          <h3>{`Maxima: ${data.main.temp_min}ºC`}</h3>
          </div>
          <h2>{`Humidity: ${data.main.humidity}%`}</h2>
          <h2>{`Wind: ${data.wind.speed}`}</h2>
    </div>
  );
};

export default CardWeather;
