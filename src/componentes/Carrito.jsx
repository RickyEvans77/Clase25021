import CarritoCard from "./CarritoCard.jsx"
import "../styles/Carrito.css"
import { useState } from "react";

export default function Carrito({productosCarrito}) {

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.precio * producto.cantidad, 0
    )

    return (
        <div className="carrito-container">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard producto={producto} />
            ))
            : <p>Carrito vacio</p>}
            {total > 0 ? <span>Total: $ {total} </span> : <></>}
        </div>
    )
}