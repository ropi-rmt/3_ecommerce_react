import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaShoppingCart } from "react-icons/fa";

import Item from './components/Item.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error from './components/Error.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom' //se usa una sola vez en toda la aplicacion

//para este proyecto, Navbar tiene que estar visible en todas las paginas de la app

function App() {

  return (
    <BrowserRouter> //no es estilable, es un componente de logica

      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:type' element={<ItemDetailContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>

        //componente comodin - si no se encuentra una ruta, se lleva ahi
        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App 
