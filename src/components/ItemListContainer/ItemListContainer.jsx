import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import './ItemListContainer.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    const productsRef = collection(db, "products");

    const getProducts = async() => {
        setLoading(true);
        try {
            const dataDb = await getDocs(productsRef);
            const data = dataDb.docs.map( (productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProducts(data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const getProductsByCategory = async() => {
        setLoading(true);
        try {
            const q = query(productsRef, where("category", "==", category));
            const dataDb = await getDocs(q);
            const data = dataDb.docs.map( (productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProducts(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(category){
            getProductsByCategory();
        } else {
            getProducts();
        }
    }, [category]);

    if(loading) return <p>Cargando productos...</p>;

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