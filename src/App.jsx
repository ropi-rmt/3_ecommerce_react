import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaShoppingCart } from "react-icons/fa";

import Item from './components/Item.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>

      <ItemListContainer />

      <Footer/>
      
    </>
  )
}

export default App
