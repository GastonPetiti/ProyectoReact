import ItemCount from "../ItemCount/ItemCount";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, name, description, img, stock, price}) => {
  const [quantity, setQuantity] = useState(0);

  const {addItem}= useContext(CartContext)

  const addToCart = (quantity) => {
    setQuantity(quantity);
    addItem({id,name,price,quantity})
  };
  return (
    <div className="itemDetail">
      <div className="imgDetailContainer">
        <img src={img} alt={name} />
      </div>
      <div className="descriptionContainer">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>${price}</p>
        {quantity > 0 ? 
          <Link to="/cart">Finalizar Compra</Link>
         : 
          <ItemCount stock={stock} onConfirm={addToCart} />
        }
      </div>
    </div>
  );
};
export default ItemDetail;
