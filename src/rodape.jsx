import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './App.css'

function Myrodape() {
    return (
        <Navbar bg="dark" fixed="bottom" expand="lg">
        <Container>
          <Navbar.Brand className="color2">Point Da Tecnologia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="color2">Produtos</Nav.Link>
              <Nav.Link className="color2">Endereços</Nav.Link>
              <p className="color2 o" >© Todos os direitos reservados Point Da Tecnologia</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
      }

export default Myrodape;
