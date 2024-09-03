import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import { ItemList } from "../ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../servicios/firebaseConfig";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    // console.log("FETCH", fetch("http://fakestoreapi.com/products?limit=20")
    // .then(res => res.json())
    // .then(data => setItems(data))
    // .finally(setCargando(false)))
    //Pedido de los datos
    //Esperar que lleguen
    //Guardarlos en el estado 'items'
    //Pasar pro 'props' a ItemList
    setCargando(true);
    // if (categoria) {
    //   getProducts()
    //     .then((prods) => setItems(prods.filter((e) => e.categoria === categoria)))
    //     .catch((err) => err)
    //     .finally(() => setCargando(false));
    // }
    // else {
    //     getProducts()
    //       .then((prods) => setItems(prods))
    //       .catch((err) => err)
    //       .finally(() => setCargando(false));
    // }

    if (categoria) {
      const productosPorCategoria = query(collection(db, "Productos"), where("categoria", "==", categoria))
      getDocs(productosPorCategoria).then(snapshot => {
        const prods = snapshot.docs.map(doc => { 
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))

    } else {

    getDocs(collection(db, "Productos")).then(snapshot => {
      const prods = snapshot.docs.map(doc => { 
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setItems(prods)
    }).finally(setCargando(false))
  }
  }, [categoria]);

  if (cargando) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="contenedorILC">
      <ItemList items={items} />
    </div>
  );
};
