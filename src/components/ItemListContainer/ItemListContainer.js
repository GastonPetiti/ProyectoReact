import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState,useEffect } from 'react';
import { getProducts } from '../../asyncmock';
/*import Cards from '../Cards/Cards';*/

const ItemListContainer =(props) =>{

    const[products,setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response => {
            setProducts(response)
            
        })
    },[])
   
    return (
    <div>
        <h1>{props.greeting}</h1>
        <ItemList products={products}/>
        
    </div>
    )
}
export default ItemListContainer