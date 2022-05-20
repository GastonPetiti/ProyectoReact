import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({products}) =>{
    return (
        <div className="card2">
           {products.map(prod => <Item key={prod.id} {...prod}{...ItemCount}/>)}
        </div>
    )
}
export default ItemList