import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import Logo from '../../assets/img/Logo.jpeg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const NavBar = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Logo de la marca" />
                </Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/category/ceniceros">Ceniceros</Link></li>
                <li><Link to="/category/cuencos">Cuencos</Link></li>
                <li><Link to="/category/deco">Deco</Link></li>
                <li><Link to="/category/macetas">Macetas</Link></li>
                <li><Link to="/category/mates">Mates</Link></li>
                <li><Link to="/category/portasahumerios">Portasahumerios</Link></li>
                <li><Link to="/category/tazas">Tazas</Link></li>
                <li><Link to="/category/teteras">Teteras</Link></li>
            </ul>

            <Link to="/cart">
                <CartWidget totalQuantity={totalQuantity} />
            </Link>
        </nav>
    );
};

export default NavBar;