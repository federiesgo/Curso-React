import React, { useState, useEffect } from "react";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            }
            )
        })
            .catch((error) => <h1>Ha ocurrido un error</h1>)
            .finally(() => setLoading(false))
    }, [id])


    return (
        <>
            {loading ? <p>Loading . . .</p> : <ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailContainer;