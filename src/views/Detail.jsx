import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardCountry from "../components/CardCountry";
import CardWeather from "../components/CardWeather";
import "../styles/Detail.css";

const Detail = () => {
  const api_key = "8e6b203a8db4a4f17c1b80df7ceb19a7";
  const { id } = useParams();

  const [country, setCountry] = useState();
  const [dataWeather, setDataWeather] = useState();

  const getDataCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
      const dataCountry = await res.json();
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${dataCountry[0].capital}&appid=${api_key}&units=metric&lang=es`
      );
      const dataWeather = await resWeather.json();
      setCountry(dataCountry);
      setDataWeather(dataWeather);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="detail-container container">
      {!country && <h2>Espere...</h2>}
      {country && country.status === 404 && <h2>el país no existe</h2>}
      {country && country.status !== 404 && (
        <CardCountry country={country[0]} />
      )}
      {dataWeather && dataWeather.cod === 200 && (
        <CardWeather data={dataWeather} />
      )}
    </div>
  );
};

export default Detail;
