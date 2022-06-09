import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
