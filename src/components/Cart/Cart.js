import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart =()=>{

    const {cart} = useContext(CartContext)

    return(
        <div className="carrito">
            <h1>Carrito</h1>
            <div>
                {cart.map(prod => <div key={prod.id}>{prod.name}
                <div>{prod.name}</div>
                <div>Cantidad:{prod.quantity}</div>
                <div>Precio: {prod.price}</div>
                <div>Total:{prod.price * prod.quantity}</div>
                <div>SUbtotal:</div>
            </div>)}
            </div>
        </div>
    )
}
export default Cart