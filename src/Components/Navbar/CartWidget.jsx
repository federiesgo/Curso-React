import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ItemContext } from '../../CartContext/CartContext'


const CartWidget = () => {

    const { productQty } = useContext(ItemContext);

    return (
        <>
            <ShoppingCartIcon color="primary" fontSize="small" />
            <p>{productQty}</p>
        </>

    )
}

export default CartWidget;