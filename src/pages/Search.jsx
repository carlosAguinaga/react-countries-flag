import React, { useState } from "react";
import "../styles/Search.css";
import {useHistory} from 'react-router-dom';

const Search = () => {

  const [country, setCountry] = useState("");
  const history = useHistory()

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="country..."
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={() => {history.push(`/detail/${country}`)}}>Ver detalle</button>
    </div>
  );
};

export default Search;
