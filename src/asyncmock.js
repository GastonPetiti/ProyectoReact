const productos = [
    {id:1,
     name:'buzo',
     category:'buzo',
     stock:20,
     price:5000,
     img:'https://saborstore.com/wp-content/uploads/2022/04/Hoodie-Drop-Negro-Verde.jpg',
     description :'Buzo hecho con el algodón de mejor calidad y el mejor diseño'},
    {id:2,
     name:'remera',
     category:'remera',
     stock:10, price:2000,
     img:'https://saborstore.com/wp-content/uploads/2022/04/Remera-Drop-Negro-Violeta-Frente.jpg'},
    {id:3,
     name:'pantalon',
     category:'pantalon',
     stock:15,
     price:3500,
     img:'https://saborstore.com/wp-content/uploads/2021/11/Recto-Work-221-600x600.jpg'},
    {id:4,
     name:'medias',
     category:'medias',
     stock:10,
     price:800,
     img:'https://saborstore.com/wp-content/uploads/2022/05/Medias-Square-Rojas-2.jpg'}
]

export const getProducts = () =>{
    return new Promise ((prendas)=> {
        setTimeout(()=>{
            prendas(productos)
        },500)
    })
}

export const getProductById = (id) =>{
    return new Promise (resolve=> {
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory=(categoryId) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.category === categoryId))
        })
    })
}