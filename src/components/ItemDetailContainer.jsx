import React from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})

  const { id } = useParams()

  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetail(res))
  }, [])

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer

//las rutas devuelven strings, por lo que los datos en mi array tienen q estar como string