import { createContext, useState } from "react";
 const CartContext = createContext()

 export const CartContextProvider = ({children}) =>{
     const [cart,setCart] = useState([])

     const addItem = (productToAddd) =>{
        setCart([...cart,productToAddd])
      }
    
      const getQuantity = ( )=>{
        let accu =0
        cart.forEach(prod=> {accu += prod.quantity})
    
        return accu
      }

     return(
         <CartContext.Provider value={{cart,addItem,getQuantity}}>
             {children}
         </CartContext.Provider>
     )
 }
 export default CartContext