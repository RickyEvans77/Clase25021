import { useEffect } from 'react'
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
import { useAuthContext } from './contexts/AuthContext'
import FormularioEdicion from './componentes/FormularioEdicion'
import { HelmetProvider } from 'react-helmet-async'

function App() {

  const { verificarLog } = useAuthContext();

  useEffect(() => {
    verificarLog()
  }, [])

  return (
    <HelmetProvider>
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
          <Route path='/Admin/editarProducto/:id' element={<FormularioEdicion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App