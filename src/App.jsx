import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './componentes/Nav'
import ProductosContainer from './componentes/ProductosContainer'
import Carrito from './componentes/Carrito'
import Acercade from './componentes/Acercade'
import Contacto from './componentes/Contacto'

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])

  function funcionCarrito(producto) {
    const existe = productosCarrito.find(p => p.id === producto.id);
    if (existe) {
      const carritoActualizado = productosCarrito.map((p) => {
        if (p.id === producto.id) {
          const productoActualizado = { ...p, cantidad: p.cantidad + producto.cantidad }
          return productoActualizado
        } else {
          return p
        }
      })

      setProductosCarrito(carritoActualizado)
    } else {
      const nuevoCarrito = [...productosCarrito, producto]
      setProductosCarrito(nuevoCarrito)
    }
    var totalActualizado = 0
    productosCarrito.map((p => {
      totalActualizado = totalActualizado + p.precio * p.cantidad
    }))
    setTotal(totalActualizado)
  }

  function borrarProductoCarrito(id){
    console.log(id)
    const nuevoCarrito = productosCarrito.filter((p)=> p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<ProductosContainer funcionCarrito={funcionCarrito}/>} />
          <Route path='/carrito' element={<Carrito productosCarrito={productosCarrito} funcionBorrar={borrarProductoCarrito}/>} />
          <Route path='/acercade' element={<Acercade />} />
          <Route path='/contacto' element={<Contacto />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
