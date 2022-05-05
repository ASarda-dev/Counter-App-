import React from "react";
// import React, { Fragment } from "react";

const PrimeraApp = () => {
  const saludo = {
    nombre: "Albert",
    edad: 32,
    ciudad: "Barcelona",
  };
  return (
    <div>
      <h1>
        Hola {saludo.nombre} tu edad es de {saludo.edad} vives en{" "}
        {saludo.ciudad}
      </h1>
      <p>Mi primera App</p>
    </div>
  );
};

export default PrimeraApp;
