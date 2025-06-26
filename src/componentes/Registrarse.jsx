import { crearUsuario } from '../autenticacion/firebase';
import {setPassword, setUsuario, login} from "/login";


function Registrarse() {

    function registrarUsuario(e) {
        e.preventDefault();
        crearUsuario(usuario, password);
        login(usuario);
    }

        return (
        <div>
            <form onSubmit={registrarUsuario}>
                <h2>Registrarse</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registrarse