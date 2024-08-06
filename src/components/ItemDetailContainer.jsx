import React, { useEffect, useState } from "react";
import { getProductsById } from "../asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  // const [id, setId] = useState(1);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    console.log("Se ejecuta el componente");
    // Fetch de la fakestoriapp
    // fetch(`https://fakestoreapi.com/products/${id}`)
    // .then(res => res.json())
    // .then(json => setProd(json))
    getProductsById(id).then((res) => {
      setProd(res), setCargando(false);
    });
  }, [id]);

  const mostrarSiguiete = () => {
    setId(id + 1);
  };

  const mostrarAnterior = () => {
    setId(id - 1);
  };

  console.log(id);

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="cardIDC">
      <h3>{prod.nombre}</h3>
      <p>{prod.precio}</p>
      <p id="pDesc">{prod.descripcion}</p>
      {/* Imagen de la fakestoriapp <img src={prod.image} alt="Imagen del producto" /> */}
      <div className="botonesIDC">
        <button onClick={mostrarAnterior}>Ver anterior</button>
        <button onClick={mostrarSiguiete}>Ver siguiente</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
