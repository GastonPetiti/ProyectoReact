import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, description, img, stock}) => {
  
  const [quantity,setQuantity] = useState(0)

  const addToCart = (count) => {
    setQuantity(count)

  }
  return (
    <div className="itemDetail">
      <div className="imgDetailContainer">
        <img src={img} alt={name} />
      </div>
      <div className="descriptionContainer">
        <h1>{name}</h1>
        <p>{description}</p>
        { quantity > 0 ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCount stock={stock} onConfirm={addToCart}/>}
      </div>
    </div>
  );
};
export default ItemDetail;
