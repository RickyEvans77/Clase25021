import React, { createContext, useState } from 'react';
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        //function funcionCarrito(producto) {
        const existe = productosCarrito.find(p => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === producto.id) {
                    const productoActualizado = { ...p, cantidad: p.cantidad + producto.cantidad }
                    return productoActualizado
                } else {
                    return p
                }
            })

            setProductosCarrito(carritoActualizado)
        } else {
            const nuevoCarrito = [...productosCarrito, producto]
            setProductosCarrito(nuevoCarrito)
        }
        /*var totalActualizado = 0
        productosCarrito.map((p => {
            totalActualizado = totalActualizado + p.precio * p.cantidad
        }))
        setTotal(totalActualizado)*/
    }

    const vaciarCarrito = () => {
        setProductosCarrito([]);
    };

    function borrarProductoCarrito(id) {
        console.log(id)
        const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
        setProductosCarrito(nuevoCarrito);
    }

    return (
        <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
}