import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import Carrito from "./Carrito"

export default function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const [productosCarrito, setProductosCarrito] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0)
    

    {
        useEffect(() => {
            fetch("https://6834476e464b499636020d00.mockapi.io/productos")
                .then((respuesta) => respuesta.json())
                .then((datos) => {
                    console.log(datos)
                    setProductos(datos)
                    setCargando(false);
                })
                .catch((error) => {
                    console.log(error)
                    setError('Hubo un problema al cargar los productos');
                    setCargando(false);
                });
        }, []);
    }

    function funcionCarrito(producto) {
        const existe = productosCarrito.find(p => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === producto.id){
                    const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                    return productoActualizado
                }else{
                    return p
                }
            })

            setProductosCarrito(carritoActualizado)
        }else{        
        const nuevoCarrito = [...productosCarrito, producto]
        setProductosCarrito(nuevoCarrito)
        }
        var totalActualizado = 0
        productosCarrito.map((p => {
            totalActualizado = totalActualizado + p.precio * p.cantidad
        }))
        setTotal(totalActualizado)
    }

    if (cargando) {
        return <p>Cargando Productos....</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <div>
                <div className="producto-container">
                    {productos.map((producto) => (
                        <Card
                            producto={producto}
                        />
                    ))}
                </div>
                <Carrito
                    productosCarrito={productosCarrito}
                    total={total}
                />
            </div>
        )
    }
}
