import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenida a mi tienda de cerámica!" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="¡Bienvenida a mi tienda de cerámica!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;