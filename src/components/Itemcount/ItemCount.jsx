import React from "react";
import { useEffect } from "react";
import { Button } from '../NavBar/Button'
import "./ItemCount.css";

export const ItemCount = () => {
  let valor = 0;

  const restar = () => {
    console.log("Se está ejecutando restar");
    valor -= 1;
  };

  const sumar = () => {
    console.log("Se está ejecutando sumar");
    valor += 1;
  };
  
  return (
    <div className="contenedorIC">
      <Button nombre="botonIC" texto="-" funcion={restar}/>
      <p> {valor} </p>
      <Button nombre="botonIC" texto="+" funcion={sumar}/>
    </div>
  );
};

