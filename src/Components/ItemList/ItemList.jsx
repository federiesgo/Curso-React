import React from "react";
import Item from '../Item/Item.jsx'
import '../../Styles/style.scss';

const ItemList = ({ productList }) => {
    return (
        <div className="container">
            <div className="row">
                {productList.map((product) => <Item key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default ItemList;