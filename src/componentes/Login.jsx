import React, { useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../autenticacion/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';

function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true)
    const { login, usuarioLogeado, logout, admin } = useAuthContext();

    function registrarUsuario(e) {
        e.preventDefault();
        crearUsuario(usuario, password).then((usuarioLogeado) => {
            login(usuario)
            dispararSweetBasico("Registro exitoso", "", "success", "Confirmar")
        }).catch((error) => {
            if (error.code == 'auth/invalid-credential') {
                dispararSweetBasico("Credencial erronea", "", "error", "Cerrar")
            } if (error.code == 'auth/weak-password') {
                dispararSweetBasico("Contraseña debil", "La contraseña debe tener 6 caracteres", "error", "Cerrar")
            }
        })
    }

    function iniciarEmail(e) {
        e.preventDefault();
        loginEmailPass(usuario, password)
            .then((usuarioLogeado) => {
                login(usuario)
                dispararSweetBasico("Inicio exitoso", "", "success", "Confirmar")
            })
            .catch((error) => {
                console.log("Error de login:", error); // <-- Agrega este log
                dispararSweetBasico("Error", "Verifique email o contraseña", "error", "Cerrar")
            })
    }

    function handleShow(e) {
        e.preventDefault();
        setShow(!show)
    }

    if (usuarioLogeado || admin) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button type="button" className="btn btn-danger w-50" onClick={logout}>
                    Cerrar sesión
                </button>
            </div>
        );
    }

    if (!usuarioLogeado && show) {
        return (
            <div className='d-flex flex-column  justify-content-center  align-items-center min-vh-50'>
                <form onSubmit={iniciarEmail} className="p-4 border rounded shadow">
                    <h2>Iniciar sesión con Email y pass</h2>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-danger w-75">Iniciar Sesión</button>
                    <button style={{ marginTop: "2px" }} className="btn btn-secondary w-75" onClick={handleShow}>Registrate</button>
                </form>
            </div>
        )
    }

    if (!usuarioLogeado && !show) {
        return (
            <div className='d-flex flex-column  justify-content-center  align-items-center min-vh-50'>
                <form onSubmit={registrarUsuario} className="p-4 border rounded shadow">
                    <h2>Registrate</h2>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-danger w-75">Registrar</button>
                    <button style={{ marginTop: "2px" }} className="btn btn-secondary w-75" onClick={handleShow}>Iniciar Sesion</button>
                </form>
            </div>
        )
    }
}

export default Login;