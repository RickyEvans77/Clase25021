function Contacto() {

    return (
        <div className="p-4 my-3 border rounded shadow">
            <h3 className="mb-3">Formulario de Contacto</h3>
            <input type="text" className="form-control mb-3" placeholder="Nombre" />
            <input type="email" className="form-control mb-3" placeholder="Correo Electrónico" />
            <button className="btn btn-danger w-50">Enviar</button>
        </div>
    )
}

export default Contacto;