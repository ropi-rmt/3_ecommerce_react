const productos = [
    {
        id:'01',
        name:'Combo Pieles Sensibles',
        description: 'si tenes piel sensible, este combo es para vos!',
                stock:15,
        price:5000,
        category:'Combo',
        img:'./assets/imgs/prodImgs/Combo-1.png'
    },
    {
        id:'02',
        name:'Crema Pieles Grasas',
        description: 'una formula pensada especialmente para pieles grasas',
        stock:35,
        price:25000,
        category:'cuidadoFacial',
        img:'./assets/imgs/prodImgs/CremaFacial-1.png'
    },

     {
        id:'03',
        name:'Leche de Limpieza',
        description: 'una forma suave de limpiar tu piel',
        stock:55,
        price:75000,
        category:'limpiezaFacial',
        img:'./assets/imgs/prodImgs/LimpiezaFacial-1.png'
    },
    {
        id:'04',
        name:'Serum para Pieles Acneicas',
        description: 'todo lo que necesitas para calmar tu piel',
        stock:5,
        price:51000,
        category:'serums',
        img:'./assets/imgs/prodImgs/Serum-1.png'
    },
]

export const getProducts = ()=> {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}

export const getOneProduct = (id)=> {
    return new Promise((resolve)=> {
        let item = productos.find((prod)=> prod.id === id)
        setTimeout(()=>{
            resolve(item)
        },3000)
    })
}