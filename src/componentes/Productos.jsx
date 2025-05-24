import "../styles/Equipo.css"

function Productos({productos}){
    return(
        <div className="producto-conteiner">
            {productos.map((producto) => (
            <div className="producto-card">  
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <img className="producto-image" src={producto.imagen}></img>
            </div>   
            ))}
        </div>
    )
}
export default Productos