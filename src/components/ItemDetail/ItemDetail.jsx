import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img src={`/image/${product.image}`} alt={product.title} />
            <div className="item-detail-img">
                <h2 className="item-detail-title">{product.title}</h2>
                <p className="item-detail-description">Categoría: {product.category}</p>
                <p className="item-detail-price">Precio: ${product.price}</p>
                <ItemCount 
                    stock={10} 
                    initial={1} 
                    onAdd={(count) => console.log(`Agregaste ${count} unidades`)} 
                />
            </div>
        </div>
    );
};

export default ItemDetail;