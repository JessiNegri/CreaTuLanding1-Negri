import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

    const formatPrice = (num) => num.toLocaleString("es-AR");

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="cart-btn">Ver productos</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Tu Carrito</h2>

            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img 
                        src={item.image.startsWith("http") ? item.image : `/image/${item.image}`} 
                        alt={item.title} 
                    />
                    <div className="cart-info">
                        <h3>{item.title}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${formatPrice(item.price)}</p>
                        <p>Subtotal: ${formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <button className="cart-remove" onClick={() => removeItem(item.id)}>
                        Eliminar
                    </button>
                </div>
            ))}

            <h3 className="cart-total">Total: ${formatPrice(totalPrice)}</h3>

            <div className="cart-actions">
                <button className="cart-clear" onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout" className="cart-checkout">Finalizar compra</Link>
            </div>
        </div>
    );
};

export default Cart;