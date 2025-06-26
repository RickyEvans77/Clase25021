import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import ProductosContainer from './componentes/ProductosContainer'
import Carrito from './componentes/Carrito'
import Acercade from './componentes/Acercade'
import Contacto from './componentes/Contacto'
import ProductoDetalle from './componentes/ProductoDetalle'
import Admin from './componentes/Admin'
import Login from './componentes/Login'

function App() {

  const [productosCarrito, setProductosCarrito] = useState([])
  const [usuarioLogeado, setUserLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)

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
  }

  function borrarProductoCarrito(id) {
    console.log(id)
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser() {
    setUserLogeado(!usuarioLogeado)
  }

  return (
    <Router>
      <div className='carrito-container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Productos' element={<ProductosContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/Productos/:id' element={<ProductoDetalle/>} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Acercade' element={<Acercade />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App