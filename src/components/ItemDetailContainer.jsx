import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

import "../assets/css/ItemList.css"

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})

  const { id } = useParams()
console.log("ID de la URL", id)
  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetail(res))
  }, [id])

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer

//las rutas devuelven strings, por lo que los datos en mi array tienen q estar como string