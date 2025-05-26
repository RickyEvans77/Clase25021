import { useState } from "react"
import "../styles/Productos.css"

function Card({ producto, funcionCarrito }) {
    const [cantidad, setCantidad] = useState (1);

    function agregarAlCarrito() {
        if (cantidad < 1) return;
        funcionCarrito({...producto, cantidad})
    }

    function sumarContador() {
        setCantidad(cantidad + 1)
    }

    function restarContador() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="producto-card">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <img className="producto-image" src={producto.imagen}></img>
            <p>$ {producto.precio}</p>
            <div>        
                <button onClick={restarContador}> - </button>
                <span style={{margin: "0 10px", color: "black"}}>{cantidad}</span>
                <button onClick={sumarContador}> + </button>
            </div>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Card