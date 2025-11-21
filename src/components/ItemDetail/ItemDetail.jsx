import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const handleAdd = (count) => {
        addToCart(product, count);
        setAdded(true);
    };

    return (
        <div className="item-detail">
            <img src={`/image/${product.image}`} alt={product.title} />
            <div className="item-detail-img">
                <h2 className="item-detail-title">{product.title}</h2>
                <p className="item-detail-description">Categoría: {product.category}</p>
                <p className="item-detail-price">Precio: ${product.price}</p>

                {product.stock === 0 ? (
                    <p className="no-stock">Producto sin stock</p>
                ) : !added ? (
                    <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
                ) : (
                    <p>Producto agregado al carrito</p>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;