import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="item-count">
            <div className="item-count-controls">
                <button className="btn-count" onClick={decrease}>-</button>
                <span className="item-count-number">{count}</span>
                <button className="btn-count" onClick={increase}>+</button>
            </div>

            <button 
                className="btn-add-cart"
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;