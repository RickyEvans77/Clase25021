import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{
            backgroundColor: "#f1f1f1", padding: "10px", color: "red"
        }}>
            <ul style={{
                listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0, alignItems: "center"
                }}>
                <li><p>&copy; 2025 - Mi Tienda </p></li>
                <li><Link to="/acercade" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Acerca de Mi Tienda</Link></li>
                <li><Link to="/contacto" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Contacto</Link></li>
            </ul>
        </footer>
    );
} export default Footer;