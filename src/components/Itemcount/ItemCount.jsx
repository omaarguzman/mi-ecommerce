import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "../NavBar/Button";
import "./ItemCount.css";

export const ItemCount = () => {
  // Hook de useState
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Se ejecutó el UseEffect");
  }, []);

  let valor = 1;

  const restar = () => {
    console.log("Se está ejecutando restar");
    setCount(count - 1);
  };

  const sumar = () => {
    console.log("Se está ejecutando sumar");
    setCount(count + 1);
  };

  return (
    <div className="contenedorIC">
      <Button nombre="botonIC" texto="-" funcion={restar} />
      <p className="pIC"> {count} </p>
      <Button nombre="botonIC" texto="+" funcion={sumar} />
    </div>
  );
};
