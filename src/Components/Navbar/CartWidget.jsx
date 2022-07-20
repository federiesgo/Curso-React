import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ItemContext } from '../../CartContext/CartContext'


const CartWidget = () => {

    const { productQty } = useContext(ItemContext);

    return (
        <>
            <ShoppingCartIcon color="primary" fontSize="small" />
            {productQty>0 ? <p>{productQty}</p> : <p></p>}
        </>

    )
}

export default CartWidget;