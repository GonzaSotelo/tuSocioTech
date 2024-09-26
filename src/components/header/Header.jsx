import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 



export const Header = () => {
  return (
    <>
 <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container className='d-flex justify-content-between'>
        
        <Navbar.Brand href="#inicio"><img src="/img/logo-icono.png" alt="logo-icono"  className='icono-nav'/></Navbar.Brand>
        
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 bg-transparent">
          <i className="bi bi-list" ></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#sobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      
    </>
  )
}
