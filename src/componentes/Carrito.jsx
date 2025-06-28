import CarritoCard from "./CarritoCard.jsx"
import "../styles/Carrito.css"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext.jsx";
import { useAuthContext } from "../contexts/AuthContext.jsx";

export default function Carrito() {

    const { usuarioLogeado } = useAuthContext();
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext)

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.precio * producto.cantidad, 0
    )

    function funcionDisparadora(id) {
        borrarProductoCarrito(id)
    }
    function DisparadorVaciar() {
        vaciarCarrito()
    }
    if (!usuarioLogeado) {
        return (
            <Navigate to={'/login'} replace />
        )
    }

    return (
        <>
            <div className="carrito-container">
                {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                    <CarritoCard
                        key={producto.id}
                        producto={producto}
                        funcionDisparadora={funcionDisparadora}
                    />
                ))
                    : <p>Carrito vacio</p>}
            </div>
            <div>
                {total > 0 ? <span>Total a pagar: $ {total} </span> : null}
            </div>
            <div>
                <button onClick={DisparadorVaciar}>Vaciar Carrito</button>
            </div>
        </>
    )
}
