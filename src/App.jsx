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
import FormularioProducto from './componentes/FormularioProducto'

function App() {

  return (
    <Router>
      <div className='carrito-container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Productos' element={<ProductosContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/Productos/:id' element={<ProductoDetalle />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Acercade' element={<Acercade />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Admin/agregarProductos' element={<FormularioProducto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App