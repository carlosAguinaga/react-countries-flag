import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const CountryDetail = () => {
  const { id } = useParams();

  const { data } = useFetchData(`https://restcountries.eu/rest/v2/name/${id}`);
  console.log(data);
  const country = data? data[0] : null;


  return (
    <div>
        {!data && <h2>Espere...</h2> }
        {data && data.status === 404 && <h2>el país no existe</h2>}

        {data && data.status !== 404 && (
        <div>
            <img src={country.flag} alt={country.name} />
            <h2>{country.name}</h2>
            <h3>capital {country.capital}</h3>
            <h3>continente {country.region}</h3>

        </div>
        )}


    </div>
  );
};

export default CountryDetail;
