import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState,useEffect } from 'react';
import { getProducts } from '../../asyncmock';


const ItemListContainer =({greeting}) =>{

    const[products,setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response => {
            setProducts(response)
            
        })
    },[])
   
    return (
    <div className='listContainer'>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
        
    </div>
    )
}
export default ItemListContainer