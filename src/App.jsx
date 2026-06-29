import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>

      <Footer/>
      
    </>
  )
}

export default App
