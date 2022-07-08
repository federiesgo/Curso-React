import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { getProd } from "../mocks/fakeApi.jsx"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();   
    

    useEffect(() => {
         setLoading(true)
         getProd(id)
         .then((response)=>setProduct(response))
         .catch((error) => <h1>Ha ocurrido un error</h1>)
         .finally(() => setLoading(false))
    },[]) 


    return(
        <>        
        {loading ? <p>Loading . . .</p> : <ItemDetail product={product}/>}
        </>
    )
}

export default ItemDetailContainer;