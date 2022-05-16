import './NavBar.css'
import CartWidget from '../CartWidgets/CartWidgets'

const NavBar = () =>{
    return(
        <nav className='NavBar'>
        <div className='Enlaces'>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
        </div>
        <CartWidget/>
      </nav>
    )
}

export default NavBar