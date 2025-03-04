import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("Add this to your visited Country");
    // console.log(country);

    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log("Adding Flags");
    
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags );
  };

//   remove  item from an array in a state 
// use filter to select all the elements except the one you want to remove

  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      {/* Visited countries */}
      <div>
        <h5>Visited Countries: {visitedCountries.length} </h5>

        <ul>
          {visitedCountries.map((visitedCountry) => (
            <li key={visitedCountry.cca3}>{visitedCountry.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">

          {
            visitedFlags.map((flag,idx) => (
              <img src={flag} key={idx} alt=""  />
            ))
          }
      </div>

      {/* Display Countries. */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
