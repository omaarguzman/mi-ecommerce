import React, { useContext, useState } from "react";
import "./Checkout.css";
import { CarritoContext } from "../context/CarritoContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../servicios/firebaseConfig";

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [order, setOrder] = useState({});
    
    const {carrito}= useContext(CarritoContext)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            nombre,
            mail,
            direccion,
            telefono
        };

        const data = {user, carrito};
        const orderRef = collection(db, "Órdenes de compras");
        const orderId = await addDoc(orderRef, data);

        setOrder(orderId.id);
        }

    console.log(order);

    return (
    <div>
      <div className="checkoutForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>Nombre</span>
        <input type="text" onChange={(e) => setNombre(e.target.value)}/>
        <span>E-mail</span>
        <input type="email" onChange={(e) => setMail(e.target.value)}/>
        <span>Dirección</span>
        <input type="text" onChange={(e) => setDireccion(e.target.value)}/>
        <span>Teléfono</span>
        <input type="number" onChange={(e) => setTelefono(e.target.value)}/>
        <button type="submit">Finalizar</button>
      </form>
    </div>
    </div>
  );
};

export default Checkout;
