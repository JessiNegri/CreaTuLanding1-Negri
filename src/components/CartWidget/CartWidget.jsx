import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" /> <span>0</span>
        </div>
    );
}

export default CartWidget;