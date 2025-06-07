import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductoDetalle({ funcionCarrito }) {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    console.log(id)

    useEffect(() => {
                fetch("https://6834476e464b499636020d00.mockapi.io/productos")
                .then((res)=> res.json())
                .then((datos)=> {
                    const productoEncontrado = datos.find((item)=> item.id === id);
                    if (productoEncontrado) {
                        setProducto(productoEncontrado);
                    } else {
                        setError("Producto no encontrado");
                    }
                    setCargando(false);
                })
                .catch((err)=> {
                    console.log("Error:", err);
                    setError("Hubo un error al obtener el producto");
                    setCargando(false);
                });
            }, [id]);

    function agregarAlCarrito() {
        if (cantidad < 1) return;
        funcionCarrito({ ...producto, cantidad });
    }

    function sumarContador() {
        setCantidad(cantidad + 1);
    }

    function restarContador() {
        if (cantidad > 1) setCantidad(cantidad - 1);
    }

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return null;

    return (
        <div className="detalle-container">
            <img className="detalle-imagen" src={producto.imagen} alt={producto.nombre} />
            <div className="detalle-info">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.precio} $</p>
                <div className="detalle-contador">
                    <button onClick={restarContador}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumarContador}>+</button>
                </div>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}