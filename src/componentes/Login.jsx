import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../autenticacion/firebase';

function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true)
    const { login, usuarioLogeado, logout } = useAuthContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de autenticación
        if (usuario === 'admin' && password === '1234') {
            login(usuario);
            navigate('/dashboard');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    function registrarUsuario(e) {
        e.preventDefault();
        crearUsuario(usuario, password).then((user) => {
            login(usuario)
            dispararSweetBasico("Registro exitoso", "", "success", "Confirmar")
        }).catch((error) => {
            if (error.code == 'auth/invalid-credential') {
                dispararSweetBasico("Credencial erronea", "", "error", "Cerrar")
            }if (error.code == 'auth/weak-password'){
                dispararSweetBasico("Contraseña debil", "La contraseña debe tener 6 caracteres", "error", "Cerrar")
            }
        })
    }

    const handleSubmit2 = (e) => {
        logout()
    }

    function iniciarEmail(e) {
        e.preventDefault();
        loginEmailPass(usuario, password).then((user) => {
            login(usuario)
            dispararSweetBasico("Inicio exitoso", "", "success", "Confirmar")
        }).catch((error) => {
            dispararSweetBasico("Error", "Verifique email o contraseña", "error", "Cerrar")
        })
    }

    function handleShow(e) {
        e.preventDefault();
        setShow(!show)
    }

    if (usuarioLogeado == "admin") {
        return (
            <form onSubmit={handleSubmit2}>
                <button type="submit">Cerrar sesión</button>
            </form>
        )
    }

    if (!usuarioLogeado && show) {
        return (
            <div>
                <form onSubmit={iniciarEmail}>
                    <h2>Iniciar sesión con Email y Contraseña</h2>
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
                    <button type="submit">Iniciar sesión</button>
                </form>
                <button style={{ marginTop: "2px" }} onClick={handleShow}>Registrate</button>
            </div>
        )
    }

    if (!usuarioLogeado && !show) {
        return (
            <div>
                <form onSubmit={registrarUsuario}>
                    <h2>Registrarse</h2>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
                <button style={{ marginTop: "2px" }} onClick={handleShow}>Iniciar Sesion</button>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <div>
                    <label>Usuario:</label>
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
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}

export default Login;