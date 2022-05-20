import {useState} from 'react'



const ItemCount = () =>{

    const[count,setCount] = useState(0)

    const decrement = () =>{
        if(count > 0){
        setCount((count) =>count -1)
        }
    }
    const increment =()=>{
        if (count < 10){
            setCount(count + 1)
        }
    }
    const addToCart = ()=>{
        console.log('producto agregado al carrito')
    }
    return(
        <div className='Count'>
            <button onClick={decrement} className="btnQuantity"> - </button>
            <p>{count}</p>
            <button onClick={increment} className="btnQuantity"> + </button>
            <button onClick={addToCart} className="btnAdd">Agregar al carrito</button>
        </div>
    )
}
export default ItemCount