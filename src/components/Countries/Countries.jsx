import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data));
        }, []);


        const handleVisitedCountry = (country) => {

            console.log('Add this to your visited Country')
            console.log(country);
        }

  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      <div>
        <h5>Visited Countries</h5>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
