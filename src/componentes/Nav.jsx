import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';

function Nav({}) {

    const {productosCarrito} = useContext(CarritoContext)
    const {user, admin} = useAuthContext();

    return (
        <nav style={{
            backgroundColor: "#f1f1f1", color: "red", padding:
                "12px"
        }}>
            <ul style={{
                listStyle: "none", display: "flex",
                justifyContent: "space-around", margin: 0
            }}>
                <li><Link to="/" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Inicio</Link></li>
                <li><Link to="/productos" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Productos</Link></li>
                <li><Link to="/carrito" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Carrito<span>{productosCarrito.lenght > 0 ? productosCarrito.lenght : ""}</span></Link></li>
                <li><Link to="/login" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Login/Registrarse</Link></li>
                {admin ? <li><Link to="/admin" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Admin</Link></li> : <></>}
            </ul>
        </nav>
    );
}
export default Nav;