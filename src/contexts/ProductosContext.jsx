import React, { createContext, useState, useContext } from 'react';

const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [productosOriginales, setProductosOriginales] = useState([]);
    const [productoEncontrado, setProductoEncontrado] = useState(null);

    function obtenerProductos() {
        return (
            new Promise((resu, rech) => {
                fetch('https://6834476e464b499636020d00.mockapi.io/productos')
                //fetch('/productos.json')
                    .then((respuesta) => respuesta.json())
                    .then((datos) => {
                        setProductos(datos)
                        setProductosOriginales(datos)
                        resu(datos)
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        rech(error);
                    });
            })
        )
    }

    function obtenerProductoPorId(id) {
        return (
            new Promise((resu, rech) => {
            fetch(`https://6834476e464b499636020d00.mockapi.io/productos`)
            //fetch(`/productos.json`)
                .then((res) => res.json())
                .then((datos) => {
                    const productoEncontrado = datos.find((item) => item.id === id);
                        if (productoEncontrado) {
                            setProductoEncontrado(productoEncontrado);
                            resu(datos)
                    }   else {
                            rech("Producto no encontrado")
                    }
                })
                .catch((error) => {
                    console.log("Error:", error);
                    rech("Hubo un error al obtener el producto.");
                });
        })
    )
    }

    const agregarProducto = (producto) => {
        return (
            new Promise(async (resu, rech) => {
                try {
                    const respuesta = await fetch('https://6834476e464b499636020d00.mockapi.io/productos', {                    
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    if (!respuesta.ok) {
                        throw new Error('Error al agregar el producto.');
                    }
                    const data = await respuesta.json();
                        console.log('Producto agregado:', data);
                        setProductos(prev => [...prev, data]);
                        setProductosOriginales(prev => [...prev, data]);
                        resu(data)
                    } catch (error) {
                        console.error(error.message);
                        rech(error.message)
                }
            })
        )
    };

    function editarProducto(producto) {
        return (
            new Promise(async (resu, rech) => {
                try {
                    const respuesta = await fetch(`https://6834476e464b499636020d00.mockapi.io/productos/${producto.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });
                    if (!respuesta.ok) {
                        throw new Error('Error al actualizar el producto.');
                    }
                    const data = await respuesta.json();
                    resu(data)
                } catch (error) {
                    console.error(error.message);
                    rech(error)
                }
            })
        )
    }

    function eliminarProducto(id) {
        const confirmar = window.confirm('¿Estás seguro de eliminar?');
        if (confirmar) {
            return (
                new Promise(async (resu, rech) => {
                    try {
                        const respuesta = await fetch(`https://6834476e464b499636020d00.mockapi.io/productos/${id}`, {
                        method: 'DELETE',
                        });
                        if (!respuesta.ok) throw new Error('Error al eliminar');
                        alert('Producto eliminado correctamente.');
                        resu();
                    } catch (error) {
                        console.error(error.message);
                        alert('Hubo un problema al eliminar el producto.');
                        rech(error);
                    }
                })
            );
        }
    }

    function filtrarProductos(filtro) {
        if (filtro.length < 0) {
            setProductos(productosOriginales)
            return;
        }

        const productosFiltrados = productosOriginales.filter((producto) =>
            producto.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
        setProductos(productosFiltrados)
    }

    return (
        <ProductosContext.Provider value={{
            filtrarProductos,
            obtenerProductos,
            obtenerProductoPorId,
            productos,
            agregarProducto,
            productoEncontrado,
            editarProducto,
            eliminarProducto
        }}>
            {children}
        </ProductosContext.Provider>
    );
}
export const useProductosContext = () => useContext(ProductosContext);