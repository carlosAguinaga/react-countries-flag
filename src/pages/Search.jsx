import React, { useState } from "react";
import "../styles/Search.css";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [country, setCountry] = useState("");
  const history = useHistory();

  return (
    <div className="search-container">
      <form className="search-elements-container">
        <input
          type="text"
          placeholder="Country..."
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit"
          onClick={() => {
            history.push(`/detail/${country}`);
          }}
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
