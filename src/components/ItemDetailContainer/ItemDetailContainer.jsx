import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getProduct = async () => {
        setLoading (true);
        try {
            const productRef = doc(db, "products", id);
            const dataDb = await getDoc(productRef);
            if (dataDb.exists()) {
                setProduct({ id: dataDb.id, ...dataDb.data() });
            } else {
                setProduct(null);
            }
        } catch (error) {
            console.log("Error cargando producto:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;