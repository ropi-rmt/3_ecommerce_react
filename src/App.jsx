import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaShoppingCart } from "react-icons/fa";
//import 'bootstrap/dist/css/bootstrap.min.css';

import Item from './components/Item.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error from './components/Error.jsx';

import Nosotros from './components/Nosotros.jsx'
import Contacto from './components/Contacto.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom' //se usa una sola vez en toda la aplicacion

import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'

// BrowserRoouter no es estilable, es un componente de lógica //
function App() {

  return (
    <BrowserRouter>

      <CartProvider>

        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:type' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path="/catalogo" element={<ItemListContainer />}></Route>

          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<CartView />} />

        //componente comodin - si no se encuentra una ruta, te lleva ahi
          <Route path='*' element={<Error />}></Route>

        </Routes>

        <Footer />

      </CartProvider>
    </BrowserRouter>
  )
}

export default App 
