const productos = [
    {
        id:'01',
        name:'Combo Pieles Sensibles',
        description: 'si tenes piel sensible, este combo es para vos!',
                stock:15,
        price:5000,
        category:'Combo',
        img:'https://d22fxaf9t8d39k.cloudfront.net/69e22140a30f02d5f5488aadc67689f8e02696af1b7cf385bed9f2500a426b0c269319.png'
    },
    {
        id:'02',
        name:'Crema Pieles Grasas',
        description: 'una formula pensada especialmente para pieles grasas',
        stock:35,
        price:25000,
        category:'cuidadoFacial',
        img:'https://d22fxaf9t8d39k.cloudfront.net/b658955f138f984ef1badaf5c07d5c9289b939d08e012f56db5e854593554c40269319.png'
    },

     {
        id:'03',
        name:'Leche de Limpieza',
        description: 'una forma suave de limpiar tu piel',
        stock:55,
        price:75000,
        category:'limpiezaFacial',
        img:'https://d22fxaf9t8d39k.cloudfront.net/b74b96def81ff735f633a822a3936d250cc23e4fb84eafaea7dbe7cbabe60a25269319.png'
    },
    {
        id:'04',
        name:'Serum para Pieles Acneicas',
        description: 'todo lo que necesitas para calmar tu piel',
        stock:5,
        price:51000,
        category:'serums',
        img:'https://d22fxaf9t8d39k.cloudfront.net/374b4d00d55ee9f6219404671bdee57d73845e0a877b469ec52a2ffff596455c269319.png'
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