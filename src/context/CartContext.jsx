import React, {useState} from 'react';
export const CartContext = React.createContext ([]);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart push({ ...item, quantity: newQuantity });
        setCart(newCart)
}