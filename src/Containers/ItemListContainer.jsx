import React, {useState, useEffect} from "react";
import ItemList from "../Components/ItemList/ItemList";
import { getProds } from "../mocks/fakeApi.jsx"

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);   
    

    useEffect(() => {
         getProds
         .then((response)=>setProductList(response))
         .catch((error) => <h1>Ha ocurrido un error</h1>)
         .finally(() => setLoading(false))
    },[])  

    console.log(productList);

    return(
        <>
        <div className="greeting">{greeting}</div>
        {loading ? <p>Loading . . .</p> : <ItemList productList={productList}/>}
        </>
    )
}

export default ItemListContainer;