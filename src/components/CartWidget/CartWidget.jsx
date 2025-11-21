import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ totalQuantity }) {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </div>
    );
}

export default CartWidget;