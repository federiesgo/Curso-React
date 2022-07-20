import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();
const { Provider } = ItemContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [productQty, setProductQty] = useState(0)

    let getProductQty = () => {
        let quantity = 0;
        products.forEach(product => quantity += product.quantity)
        setProductQty(quantity)
    }

    const getFinalPrice = () => {
        return products.reduce(
            (acum, actual) => acum + actual.price * actual.quantity,
            0
        );
    };

    useEffect(() => {
        getProductQty();
    }, [products])


    let addItem = (product) => {
        if (isInCart(product.id)) {
            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].quantity += product.quantity;
            setProducts(aux);
        } else {
            setProducts([...products, product])
        }
    }

    let removeItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
        getProductQty();
    }

    let isInCart = (id) => {
        const found = products.find(product => product.id === id);
        return found ? true : false;
    }

    let clear = () => {
        setProducts([]);
        setProductQty(0);
    }

    return (
        <Provider value={{ products, addItem, removeItem, isInCart, clear, productQty, getFinalPrice }}>
            {children}
        </Provider>

    );

}

export default CartCustomProvider;