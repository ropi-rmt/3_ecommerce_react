import { useState, useEffect } from "react"
import { getProducts } from "../mock/data.js"
import Item from "./Item.jsx"
import ItemList from "./ItemList"
import "../assets/css/ItemList.css"
import useParams from "react-router-dom"


const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([])

    const { type } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (type) {

                    setData(res.filter((prod) => prod.category === type))

                } else { setData(res) }

            })


    }, [type])

    //uso el array de dependencias para que el filtro sea dinamico
    
    console.log(data)
    return (
        <div className="itemCard">
            <h1 className="saludo">Bienvenidos a la Tienda Online de Refugio Lunar</h1>
            <ItemList data={data} />
        </div>
    )
}
export default ItemListContainer

//la dif con main al 11/8/26 es q agregué un msj de "pagina en construccion" en caso de q no haya productos en una categoria determinada