import './NavBar.css'
import CartWidget from '../CartWidgets/CartWidgets'
import { NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className='NavBar'>
          <div>
            <NavLink to ='/'>
              FakE-commerce
            </NavLink>
          </div>
        <div className='Enlaces'>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/category/remera'>Remera</NavLink>
        <NavLink to='/category/buzo'>Buzo</NavLink>
        <NavLink to='/category/pantalon'>Pantalon</NavLink>
        <NavLink to='/category/medias'>Medias</NavLink>
        </div>
        <NavLink to='/cart'><CartWidget/> </NavLink>
      </nav>
    )
}

export default NavBar