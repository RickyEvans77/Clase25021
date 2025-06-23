import CarritoCard from "./CarritoCard.jsx"
import "../styles/Carrito.css"
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Carrito({productosCarrito, funcionBorrar, usuarioLogeado}) {

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.precio * producto.cantidad, 0
    )

function funcionDisparadora(id){
    funcionBorrar(id)
}

if(!usuarioLogeado){
    return(
        <Navigate to={'/login'} replace/>
    )
}

    return (
        <div className="carrito-container">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard 
                    key={producto.id}
                    producto={producto} 
                    funcionDisparadora={funcionDisparadora}
                />
            ))
            : <p>Carrito vacio</p>}
            {total > 0 ? <span>Total a pagar: $ {total} </span> : <></>}
        </div>
    )
}