import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
const Item =({id,name,price,img,stock})=>{
    
    return(
        <div className="card">
            <div className='imgContainer'>
                <img src={img} alt={name}/>
            </div>
            <h2>{name}</h2>
            <p>{price}</p>            
            <ItemCount stock={stock}/>
        </div>
    )
}
export default Item