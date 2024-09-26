import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const NavBar = () => {
  return (
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
      <i className="bi bi-list fs-1"></i>
    </Navbar.Toggle>
  );
};

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img src="/img/logo-icono.png" alt="logo-icono" className="img-fluid" style={{ width: '120px' }} />
        </Navbar.Brand>
        
        <NavBar />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
