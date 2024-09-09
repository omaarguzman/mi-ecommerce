import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ItemCount } from "./Itemcount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ prod }) => {
  const { carrito, addToCart } = useContext(CarritoContext);

  const [id, setId] = useState(0);

  console.log(carrito);

  const mostrarSiguiete = () => {
    setId(carrito.id + 1);
  };

  const mostrarAnterior = () => {
    setId(carrito.id - 1);
  };

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
          <button onClick={mostrarAnterior}>Ver anterior</button>
          <ItemCount handleAddToCart={handleAddToCart} />
          <button onClick={mostrarSiguiete}>Ver siguiente</button>
        </div>
      </div>
    </div>
  );
};
