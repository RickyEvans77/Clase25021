import { useState } from "react"
import "../styles/Productos.css"
import { Link } from "react-router-dom"

function Card({ producto}) {
    

    return (
        <div className="producto-card">
            <h1>{producto.nombre}</h1>
            <Link to= {"/productos/" + producto.id}><img className="producto-image" src={producto.imagen}></img></Link>
            <p>$ {producto.precio}</p>
            <Link to= {"/productos/" + producto.id}><button style={{color:"black"}}>Ver detalles del producto</button></Link>
        </div>
    )
}

export default Card