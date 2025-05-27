import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="Almacen"><img src={logo} alt="Logo Supermercado" className="navbar-logo-img" /></a> 
      </div>
      <div className='navbar-list'>
      <ul className="navbar-links">
        <li><a href="Almacen">Almacen</a></li>
        <li><a href="Almacen">Verduleria</a></li>
        <li><a href="Almacen">Pescaderia</a></li>
      </ul>
      </div>
          <CartWidget />
    </nav>
  );
}

export default NavBar;
