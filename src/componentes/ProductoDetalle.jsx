import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductosDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";
import BotonEstilo from "./BotonCompra";

export default function ProductoDetalle({}) {

    const navegar = useNavigate();

    const {admin} = useAuthContext();

    const {agregarAlCarrito} = useContext(CarritoContext);
    const {productoEncontrado, obtenerProductoPorId, eliminarProducto} = useProductosContext();

    const { id } = useParams();
    //const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerProductoPorId(id).then(() => {
            setCargando(false);
        }).catch((error) => {
            if (error == "Producto no encontrado") {
                setError("Producto no encontrado");
            }
            if (error == "Hubo un error al obtener el producto.") {
                setError("Hubo un error al obtener el producto.");
            }
            setCargando(false);
        });
    }, [id]);

    function funcionCarrito() {
        if (cantidad < 1) return;

        agregarAlCarrito({ ...productoEncontrado, cantidad });
        dispararSweetBasico("Producto agregado", `Agregaste ${cantidad} ${productoEncontrado.nombre} al carrito`, "success", "Aceptar");
        
    }

    function dispararEliminar(){
        eliminarProducto(id).then(() => {
            navegar("/productos")
        }).catch((error) => {
            dispararSweetBasico('Hubo un problema al eliminar el producto.',error,"error", "cerrar")
        })
    }

    function sumarContador() {
        setCantidad(cantidad + 1);
    }

    function restarContador() {
        if (cantidad > 1) setCantidad(cantidad - 1);
    }

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!productoEncontrado) return null;

    return (
        <div className="detalle-container">
            <img className="detalle-imagen" src={productoEncontrado.imagen} alt={productoEncontrado.nombre} />
            <div className="detalle-info">
                <h2>{productoEncontrado.nombre}</h2>
                <p>{productoEncontrado.descripcion}</p>
                <p>$ {productoEncontrado.precio}</p>
                <div className="detalle-contador">
                    <button onClick={restarContador}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumarContador}>+</button>
                </div>
                {admin ? <Link to={"/admin/editarProducto/" + id}><BotonEstilo text="Editar producto"></BotonEstilo></Link> : <button onClick={funcionCarrito}>Agregar al carrito</button>}
                {admin ? <button onClick={dispararEliminar}>Eliminar producto</button> : <></>}
            </div>
        </div>
    )
}