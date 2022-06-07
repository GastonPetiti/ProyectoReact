import React from 'react'
import { Link } from 'react-router-dom'

const Item =({id,name,price,img,stock})=>{
    
    return(
        <div className="card">
            <div className='imgContainer'>
                <img src={img} alt={name}/>
            </div>
            <h2>{name}</h2>
            <p>{price}</p>            
            <Link to={`detail/${id}`}>Ver en detalle</Link>
        </div>
    )
}
export default Item