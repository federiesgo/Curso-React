import { textAlign } from "@mui/system";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../CartContext/CartContext";


const Cart = () => {
    const { products, removeItem, clear, productQty, getFinalPrice } = useContext(ItemContext);
    return (
        <>
            <div>
                {products.map((product) => (
                    <div className="carrito-estilo" key={product.id}>
                        <div>
                            <img src={product.img} alt="Foto del producto" width="100px" height="100px" />
                        </div>
                        <h2>Producto: {product.name}</h2>
                        <h2>${product.price}</h2>
                        <h2>Cantidad: {product.quantity}</h2>
                        <button onClick={() => removeItem(product.id)}>Quitar producto</button>
                    </div>
                ))}
                {productQty > 0
                    ?
                    <div style={{textAlign: 'center'}}>
                        <button onClick={() => clear()}>Vaciar carrito</button>
                    </div>
                    :
                    <div style={{textAlign: 'center'}}>
                        <h1>El carrito esta vacio</h1>
                        <Link to={"/"}> <button>Volver al home</button> </Link>
                    </div>
                }
            </div>
            <h2 style={{textAlign: 'center'}}>Precio final: ${getFinalPrice()}</h2>
        </>
    )
}

export default Cart;