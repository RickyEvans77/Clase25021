import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"

export default function ProductosContainer({ funcionCarrito }) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {
        useEffect(() => {
            // fetch("https://6834476e464b499636020d00.mockapi.io/productos")
            fetch ("/productos.json")
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

    if (cargando) {
        return <p>Cargando Productos....</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <div className="producto-container">
                {productos.map((producto) => (
                    <Card
<<<<<<< HEAD
                        key={producto.id} //sugerencia de ChatGPT para evitar errores de key
=======
                        key={producto.id}
>>>>>>> 3ccf93f231924433bf8a94e6beca0d86739bd69d
                        producto={producto}
                    />
                ))}
            </div>
        )
    }
}