import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto al carrito
    const addToCart = (item, quantity) => {
        const existing = cart.find((p) => p.id === item.id);

        if (existing) {
            setCart(
                cart.map((p) =>
                    p.id === item.id
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Remover 1 producto
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Cantidad total (para CartWidget)
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Total en $
    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeItem, 
            clearCart, 
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};