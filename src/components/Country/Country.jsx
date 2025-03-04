import "./Country.css";

const Country = ({ country }) => {
  console.log(country);

  const { name, flags, population, area } = country;
  return (
    <div className="country">
      <h3>Name: {name?.common} </h3>
      <img src={flags.png} alt="" />

      {/* For Video 40-3 */}
      <p>Population: {population} </p>
      <p>area: {area} </p>
    </div>
  );
};

export default Country;
