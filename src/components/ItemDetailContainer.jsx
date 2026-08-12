import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

import "../assets/css/ItemList.css"

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [loader, setLoader] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    setLoader(true)

    const docRef = doc(db, "products", id)
    
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() })
        } else {
          navigate('/producto-inexistente')
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }, [id])


  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer

//las rutas devuelven strings, por lo que los datos en mi array tienen q estar como string