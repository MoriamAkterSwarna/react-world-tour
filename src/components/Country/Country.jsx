import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  //   console.log(country);

  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(true);
    setVisited(!visited);
  };

  //   console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />

      {/* For Video 40-3 */}
      <p>Population: {population} </p>
      <p>area: {area} </p>
      <p>
        <small>Code: {cca3} </small>
      </p>

      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>

      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />

      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>

      {visited ? "I have visited this country" : "I want to visit this country"}

      <hr />

      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
