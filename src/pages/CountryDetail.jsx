import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import "../styles/CountryDetail.css";

const CountryDetail = () => {

  const { id } = useParams();
  const history = useHistory();

  const { data } = useFetchData(`https://restcountries.eu/rest/v2/name/${id}`);
  console.log(data);
  const country = data ? data[0] : null;

  return (
    <div className="detail-container container">
      {!data && <h2>Espere...</h2>}
      {data && data.status === 404 && <h2>el país no existe</h2>}

      {data && data.status !== 404 && (
        <>
        <div className="card-detail">
          <img src={country.flag} alt={country.name} />
          <div className="deatail-description">
            <h2 className="title">{country.name}</h2>
            <h3>capital: <span>{country.capital}</span></h3>
            <h3>continente: <span>{country.region}</span></h3>
          </div>
        </div>
        <h2 className="go-back" onClick={()=>history.goBack()}> ⬅️ Go back</h2>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
