import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{
    return (
        <button className="cartBtn">
            <ShoppingCartIcon color="primary" fontSize="small"/> 
        </button>
    )
}

export default CartWidget;