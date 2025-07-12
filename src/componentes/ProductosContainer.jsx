import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import { useProductosContext } from "../contexts/ProductosContext";
import { Helmet } from "react-helmet-async";

export default function ProductosContainer({ }) {

    const { productos, obtenerProductos, filtrarProductos } = useProductosContext();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")

        useEffect(() => {
            obtenerProductos().then((productos) => {
                setCargando(false);
            }).catch((error) => {
                setError("Hubo un error al obtener los productos.");
                setCargando(false);
            });
        }, []);

        useEffect(() => {
        filtrarProductos(filtro)
    },[filtro]);   

    if (cargando) {
        return <p>Cargando Productos....</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <>
            <div>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="form-control mb-3"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
            </div>
            <div className="producto-container">
                <Helmet>
                    <title>Productos | Mi Tienda</title>
                    <meta name="description" content="Explora nuestra variedad de productos." />
                </Helmet>
                {productos.map((producto) => (
                    <Card
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
            </>
        )
    }
}