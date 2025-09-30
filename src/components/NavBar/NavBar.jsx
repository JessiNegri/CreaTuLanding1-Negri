import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import Logo from '../../assets/img/Logo.jpeg';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo de la marca" />
            </div>
        
            <ul className="nav-links">
                <li><a href="#">Ceniceros</a></li>
                <li><a href="#">Cuencos</a></li>
                <li><a href="#">Deco</a></li>
                <li><a href="#">Macetas</a></li>
                <li><a href="#">Mates</a></li>
                <li><a href="#">Portasahumerios</a></li>
                <li><a href="#">Tazas</a></li>
                <li><a href="#">Teteras</a></li>
            </ul>
        
            <CartWidget />
            
        </nav>
    );
}

export default NavBar;