import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div className='main-container'>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda de cerámica!" />
    </div>
  );
}

export default App;