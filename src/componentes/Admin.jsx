import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"

export default function Admin() {

    const {usuarioLogeado} = useAuthContext();

    if(!usuarioLogeado){
    return(
        <Navigate to={'/login'} replace/>
    )
}

    return(
        <div>
            <p>Componente Administrador</p>
        </div>
    )
}