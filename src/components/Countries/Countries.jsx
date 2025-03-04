import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => console.log(data));
        }, []);

  return (
    <div>
      <h3>Countries</h3>
    </div>
  );
};

export default Countries;
