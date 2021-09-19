import React from 'react'
import '../styles/CardCountry.css';

const CardCountry = ({country}) => {
    return (
        <div className="card-country-container">
          <img className="flag-img" src={country.flag} alt={country.name} />
          <div className="deatail-description">
            <h2 className="title">{country.name}</h2>
            <h3>capital: <span>{country.capital}</span></h3>
            <h3>continente: <span>{country.region}</span></h3>
          </div>
        </div>
    )
}

export default CardCountry;
