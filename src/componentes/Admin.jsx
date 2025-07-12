import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Admin() {
    const { admin, logout } = useAuthContext();
    const navigate = useNavigate();

    if (!admin) {
        return <Navigate to={'/login'} replace />;
    }

    function handleAgregarProducto() {
        navigate("/admin/agregarProductos");
    }

    function handleCerrarSesion(e) {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <>
            <div>
                <p>Componente Administrador</p>
            </div>
            <div>
                <button onClick={handleAgregarProducto}>Agregar producto</button>
            </div>
            <div>
                <button type="button" onClick={handleCerrarSesion}>Cerrar sesión</button>
            </div>
        </>
    );
}