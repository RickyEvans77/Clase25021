import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import { useProductosContext } from "../contexts/ProductosContext";
import { HelmetProvider } from "react-helmet-async";

export default function ProductosContainer({ }) {
    const { productos, obtenerProductos, filtrarProductos } = useProductosContext();

    const productosPorPagina = 9;
    const [paginaActual, setPaginaActual] = useState(1);

    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

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
    }, [filtro]);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina); 
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

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
                        onChange={(e) => setFiltro(e.target.value)}/>
                </div>
                <div className="producto-container">
                    <HelmetProvider>
                        <title>Productos | Mi Tienda</title>
                        <meta name="description" content="Explora nuestra variedad de productos." />
                    </HelmetProvider>
                    {productosActuales.map((producto) => (
                        <Card
                            key={producto.id}
                            producto={producto}/>
                    ))}
                </div>
                <div className="d-flex justify-content-center my-4">
                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`btn mx-1 ${paginaActual === index + 1 ?
                                "btn-secondary" : "btn-outline-secondary"}`}
                            onClick={() => cambiarPagina(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </>
        )
    }
}