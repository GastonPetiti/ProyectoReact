const productos = [
    {id:1,name:'buzo', stock:20, price:5000,img:'https://saborstore.com/wp-content/uploads/2022/04/Hoodie-Drop-Negro-Verde.jpg'},
    {id:2,name:'remera', stock:10, price:2000,img:'https://saborstore.com/wp-content/uploads/2022/04/Remera-Drop-Negro-Violeta-Frente.jpg'},
    {id:3,name:'pantalon', stock:15, price:3500,img:'https://saborstore.com/wp-content/uploads/2021/11/Recto-Work-221-600x600.jpg'},
    {id:4,name:'medias', stock:10, price:800,img:'https://saborstore.com/wp-content/uploads/2022/05/Medias-Square-Rojas-2.jpg'}
]

export const getProducts = () =>{
    return new Promise ((prendas)=> {
        setTimeout(()=>{
            prendas(productos)
        },2000)
    })
}