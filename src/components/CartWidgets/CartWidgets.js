import "./CardWidgets.css"
import { useContext } from 'react'
import CartContext from "../../context/CartContext"


const CartWidget =()=>{
    const {getQuantity} = useContext(CartContext)
    const quantity = getQuantity()
    return (
        <div className="LogoCarrito">
            <img className="Carrito" src="https://img.icons8.com/wired/64/000000/shopping-cart.png" alt="Logo Carrito"/> {quantity}
        </div>
    )
}

export default CartWidget