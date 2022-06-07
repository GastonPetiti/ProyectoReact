import React from 'react'
import {useState} from 'react'


const ItemCount = ({stock,onConfirm}) =>{

    const[count,setCount] = useState(1)
    
    const decrement = () =>{
        if(count > 1){
        setCount((count) =>count -1)
        }
    }
    const increment =()=>{
        if (count < stock){
            setCount(count + 1)
        }
    }
    return(
        <div className='Count'>
            <div className='countQuantity'>
                <button onClick={decrement} className="btnQuantity"> - </button>
                <p>{count}</p>
                <button onClick={increment} className="btnQuantity"> + </button>
            </div>
            <div>
                <button onClick={()=>onConfirm(count)} className="btnAdd">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount