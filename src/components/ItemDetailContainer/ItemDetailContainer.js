import ItemDetail from '../ItemDetail/ItemDetail';
import { useState,useEffect} from 'react'
import { getProduct } from '../../asyncmock';

 
const ItemDetailContainer= () =>{

    const [product, setProduct] = useState([])



    useEffect (() => {
        getProduct('1').then(response => {
            setProduct(response)
        })
    },[])

    return(

        <div className='itemDetailContainer'>
            <ItemDetail title={product?.name}/>
        </div>
    )
}
export default ItemDetailContainer