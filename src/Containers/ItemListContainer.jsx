import React, { useState, useEffect } from "react";
import ItemList from "../Components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {

        const q = categoryId
            ? query(collection(db, 'productos'), where("category", "==", categoryId))
            : collection(db, 'productos');

        getDocs(q)
            .then(result => {
                const lista = result.docs.map(product => {
                    return {
                        id: product.id,
                        ...product.data(),
                    }
                })
                setProductList(lista)
            })
            .catch((error) => <h1>Ha ocurrido un error</h1>)
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <>
            <div className="greeting">{greeting}</div>
            {loading ? <p>Loading . . .</p> : <ItemList productList={productList} />}
        </>
    )
}

export default ItemListContainer;