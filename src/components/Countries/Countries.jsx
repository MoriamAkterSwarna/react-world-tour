import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data));
        }, []);

  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
