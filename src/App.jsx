import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaShoppingCart } from "react-icons/fa";

import Item from './components/Item.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error from './components/Error.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/item' element={<ItemDetailContainer />}></Route>

        //componente comodin
        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App 
