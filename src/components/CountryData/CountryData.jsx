

const CountryData = ({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
} ) => {

    console.log('Inside country data', country);
    
  return <div>
    <h3>Country Data: {country.name.common}</h3>
  </div>;
};

export default CountryData;