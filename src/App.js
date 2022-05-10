import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='NavBar'>
        <div className='Enlaces'>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
        </div>
        <div className='LogoCarrito'>
        <a className='Logo' href="">
                <img src="https://img.icons8.com/wired/64/000000/shopping-cart.png" alt="logo Carrito"/>
            </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
