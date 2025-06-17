import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((cat) => setCategorias(cat))
      .catch((err) => console.error('Error al obtener categorías:', err));
  }, []);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pixel & Moda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categorias.map(categoria => ( <NavDropdown.Item to= {`/categories/${categoria}`} as={NavLink}> {categoria} </NavDropdown.Item> 
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
    
    
    /*
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
    */
  );
}

export default NavBar; 

