import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  return (
    <div>
      <h1>{saludo}</h1>

      <p>Mi primera App</p>
    </div>
  );
};

PrimeraApp.propType = {
  saludo: PropTypes.string.isRequired,
  otra: PropTypes.number,
};
export default PrimeraApp;
