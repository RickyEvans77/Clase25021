import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"

export default function Admin() {

    const { admin } = useAuthContext();

    if (!admin) {
        return (
            <Navigate to={'/login'} replace />
        )
    }

    return (
        <>
            <div>
                <p>Componente Administrador</p>
            </div>
            <div>
                <li><Link to="/admin/agregarProductos" style={{
                    color: "red",
                    textDecoration: "none"
                }}>Agregar Producto</Link></li>
            </div>
        </>
    )
}