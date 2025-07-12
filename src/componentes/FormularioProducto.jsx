import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useProductosContext } from '../contexts/ProductosContext';

function FormularioProducto() {
    const { agregarProducto } = useProductosContext();
    const { admin } = useAuthContext();

    const [producto, setProducto] = useState({
        nombre: '',
        imagen: '',
        precio: '',
        descripcion: ''
    });

    const validarFormulario = () => {
        if (!producto.nombre.trim()) {
            return ('El nombre es obligatorio.' )
        }
        if (!producto.precio || producto.precio <= 0) {
            return ('El precio debe ser mayor a 0.')
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            return ('La descripción debe tener al menos 10 caracteres.')
        }
        if (!producto.imagen.trim()){
            return ("La url de la imagen no debe estar vacía")
        }
        return true
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const validarForm = validarFormulario()
        if (validarForm === true) {
            agregarProducto(producto).then((data)=> {
                setProducto({ nombre: '', imagen: '', precio: '', descripcion: ''})
                dispararSweetBasico('Producto agregado', '', "success", "cerrar")
            }).catch((error)=> {
                dispararSweetBasico('Hubo un problema al agregar el producto.', error, "error", "cerrar")
            })
        } else {
            dispararSweetBasico("Error en la carga de productos", validarForm, "error", "cerrar")
        }
    }

    if (!admin) {
        return (
            <Navigate to={'/login'} replace />
        )
    }

    return (
        <form onSubmit={handleSubmit2}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Url de la Imagen:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange} required
                    min="0"
                />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
}
export default FormularioProducto;