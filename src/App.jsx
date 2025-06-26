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

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Productos' element={<ProductosContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/Productos/:id' element={<ProductoDetalle/>} />
          <Route path='/Admin' element={<Admin />} />
        </Routes>
        <Footer />
        <Routes>
          <Route path='/Acercade' element={<Acercade />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
