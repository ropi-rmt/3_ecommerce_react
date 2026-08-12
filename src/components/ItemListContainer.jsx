import { useState, useEffect } from "react"
import { getProducts } from "../mock/data.js"
import Item from "./Item.jsx"
import ItemList from "./ItemList"
import "../assets/css/ItemList.css"
import {useParams} from "react-router-dom"


const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { type } = useParams()

    useEffect(() => {

        setLoading(true)

        getProducts()
            .then((res) => {

                if (type) {
                    setData(res.filter((prod) => prod.category === type))
                } else {
                    setData(res)
                }

            })
            .finally(() => {
                setLoading(false)
            })

    }, [type])

    if (loading) {
        return <h2>Cargando productos...</h2>
    }

    return (
        <div className="itemCard">

            <h1 className="saludo">
                Bienvenidos a la Tienda Online de Refugio Lunar
            </h1>

            {
                type && data.length === 0 ? (
                    <div className="mensajeCategoria">
                        <h2>🚧 Categoría en construcción</h2>
                        <p>
                            Todavía no tenemos productos disponibles en esta categoría.
                        </p>
                    </div>
                ) : (
                    <ItemList data={data} />
                )
            }

        </div>
    )
}

export default ItemListContainer

