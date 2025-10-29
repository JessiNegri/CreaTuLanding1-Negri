import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import { getProducts } from '../../data/products.js';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        getProducts().then((res) => {
            if (categoryId) {
                setProducts(res.filter((p) => p.category === categoryId));
            } else {
                setProducts(res);
            }
        });
    }, [categoryId]);

    return (
        <section className="item-list-container">
            <h2 className="item-list-title">{greeting}</h2>
            <div className="cards-container">
                <ItemList products={products} />
            </div>
        </section>
    );
};

export default ItemListContainer;