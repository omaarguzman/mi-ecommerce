import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ItemCount } from "./Itemcount/ItemCount";
import "./ItemDetail.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../servicios/firebaseConfig";

export const ItemDetail = ({ prod }) => {
  const { carrito, addToCart } = useContext(CarritoContext);

  // const mostrarSiguiete = () => {
  //   setProds(prods + 1);
  // };

  // const mostrarAnterior = () => {
  //   setProds(prods - 1);
  // };

  const handleAddToCart = (cantidad) => {
    const prodConCantidad = { ...prod, cantidad: cantidad };
    addToCart(prodConCantidad);
  };

  return (
    <div className="detalleIDC">
      <div className="cardDetalleIDC">
        <h3>{prod.nombre}</h3>
        <p>$ {prod.precio}.00</p>
        <div className="imagenIDC">
          <img src={prod.imagen} alt="Imagen_Producto" />
          <p className="pDesc">{prod.descripcion}</p>
        </div>
        <div className="botonesIDC">
          {/* <button onClick={mostrarAnterior}>Ver anterior</button> */}
          <ItemCount handleAddToCart={handleAddToCart} />
          {/* <button onClick={mostrarSiguiete}>Ver siguiente</button> */}
        </div>
      </div>
    </div>
  );
};
