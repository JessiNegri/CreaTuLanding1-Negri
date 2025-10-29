import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
    return (
        <div className="item-card">
            <img src={`/image/${product.image}`} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/item/${product.id}`} className="item-link-detail">Ver detalle</Link>
        </div>
    );
};

export default Item;