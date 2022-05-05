import React from "react";
// import React, { Fragment } from "react";

const PrimeraApp = ({ saludo = "Hola Mundo" }) => {
  return (
    <div>
      <h1>{saludo}</h1>

      <p>Mi primera App</p>
    </div>
  );
};

export default PrimeraApp;
