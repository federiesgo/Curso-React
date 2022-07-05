import React, {useState, useEffect} from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { getProd } from "../mocks/fakeApi.jsx"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);   
    

    useEffect(() => {
         getProd
         .then((response)=>setProduct(response))
         .catch((error) => <h1>Ha ocurrido un error</h1>)
         .finally(() => setLoading(false))
    },[])  

    console.log(product);

    return(
        <>        
        {loading ? <p>Loading . . .</p> : <ItemDetail product={product}/>}
        </>
    )
}

export default ItemDetailContainer;