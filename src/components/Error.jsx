import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <img src='https://i.postimg.cc/G3grHRxq/grumpy-cat-404-bandana.jpg' alt='error'/>
        <Link className='boton' to='/'>Volver al Inicio</Link>
    </div>
  )
}

export default Error