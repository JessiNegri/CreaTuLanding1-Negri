import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import FormCheckout from "../FormCheckout/FormCheckout.jsx";
import './Checkout.css';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    if (cart.length === 0 && !orderId) {
        return <h2 style={{ padding: 40 }}>Tu carrito está vacío</h2>;
    }

    return (
        <div style={{ padding: "40px" }}>
            {!orderId ? (
                <>
                    <h2>Finalizar compra</h2>

                    <h3>Resumen:</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} x {item.quantity} = ${item.price * item.quantity}
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${totalPrice}</h3>
                    <hr />

                    <FormCheckout
                        cart={cart}
                        totalPrice={totalPrice}
                        setOrderId={setOrderId}
                        clearCart={clearCart}
                    />
                </>
            ) : (
                <div>
                    <h3>¡Gracias por tu compra!</h3>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            )}
        </div>
    );
};

export default Checkout;

