import './NavBar.css'
import CartWidget from '../CartWidgets/CartWidgets'

const NavBar = () =>{
    return(
        <nav className='NavBar'>
          <div>
            Logo/Nombre
          </div>
        <div className='Enlaces'>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        </div>
        <CartWidget/>
      </nav>
    )
}

export default NavBar