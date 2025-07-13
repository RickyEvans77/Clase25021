import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import BotonEstilo from "./Boton";

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
                <h3>Componente Administrador</h3>
            </div>
            <div>
                <BotonEstilo text= "Agregar producto" onClick={handleAgregarProducto}></BotonEstilo>
            </div>
            <div>
                <BotonEstilo text= "Cerrar sesión" onClick={handleCerrarSesion}></BotonEstilo>
            </div>
        </>
    );
}