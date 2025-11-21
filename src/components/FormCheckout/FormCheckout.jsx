import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import "./FormCheckout.css";

const FormCheckout = ({ setOrderId, clearCart, cart, totalPrice }) => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer,
            items: cart,
            total: totalPrice,
            date: Timestamp.fromDate(new Date()),
        };

        try {
            const ordersRef = collection(db, "orders");
            const docRef = await addDoc(ordersRef, order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.log("Error creando la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form-checkout" onSubmit={handleSubmit}>
            <h3>Datos del comprador</h3>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={buyer.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={buyer.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={buyer.phone}
                onChange={handleChange}
                required
            />
            <h3>Resumen de la compra</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.title} x {item.quantity} = ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
            <button type="submit" disabled={loading}>
                {loading ? "Procesando..." : "Finalizar compra"}
            </button>

            {loading && <p className="loading">Procesando orden...</p>}
        </form>
    );
};

export default FormCheckout;