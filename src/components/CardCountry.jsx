import React from 'react'
import '../styles/CardCountry.css';

const CardCountry = ({country}) => {
    return (
        <div className="card-country">
          <img className="flag-img" src={country[0].flag} alt={country[0].name} />
          <div className="deatail-description">
            <h2 className="title">{country[0].name}</h2>
            <h3>capital: <span>{country[0].capital}</span></h3>
            <h3>continente: <span>{country[0].region}</span></h3>
          </div>
        </div>
    )
}

export default CardCountry;
