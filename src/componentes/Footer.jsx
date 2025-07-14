import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li>&copy; 2025 - Mi Tienda</li>
                <li><Link to="/acercade">Acerca de Mi Tienda</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </footer>
    );
}
export default Footer;