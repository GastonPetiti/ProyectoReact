import ItemCount from '../ItemCount/ItemCount'
const Item =({id,name,price,img,stock})=>{
    
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{price}</p>
            <div containerBtn>
            <ItemCount stock={stock}/>
            </div>
        </div>
    )
}
export default Item