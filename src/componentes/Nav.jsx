import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav style={{ backgroundColor: "white", color: "red", padding:
        "12px" }}>
            <ul style={{ listStyle: "none", display: "flex",
            justifyContent: "space-around", margin: 0 }}>
            <li><Link to="/" style={{ color: "red",
            textDecoration: "none" }}>Inicio</Link></li>
            <li><Link to="/productos" style={{ color: "red",
            textDecoration: "none" }}>Productos</Link></li>
            <li><Link to="/carrito" style={{ color: "red",
            textDecoration: "none" }}>Carrito</Link></li>
            <li><Link to="/acercade" style={{ color: "red",
            textDecoration: "none" }}>Acerca de</Link></li>
            <li><Link to="/contacto" style={{ color: "red",
            textDecoration: "none" }}>Contacto</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;