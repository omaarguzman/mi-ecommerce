import React, { useEffect, useState } from "react";
import { getProductsById } from "../asyncmock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { db } from "../servicios/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState({});
  // const [id, setId] = useState(1);
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    // Fetch de la fakestoriapp
    // fetch(`https://fakestoreapi.com/products/${id}`)
    // .then(res => res.json())
    // .then(json => setProd(json))
    // getProductsById(id).then((res) => {
    //   setProd(res), setCargando(false);
    // });

    const productRef = doc(db, "Productos", id);
    getDoc(productRef).then((snapshot) => {
      setProd(snapshot.data());
    }).finally(setCargando(false));
  }, [id]);

  console.log(id);

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <>
      {prod &&
        <ItemDetail prod={prod} />
      }
    </>
  );
};

export default ItemDetailContainer;
