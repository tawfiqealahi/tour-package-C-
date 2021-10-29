import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Nav, Navbar, } from 'react-bootstrap';
import logo from '../../../image/logo (1).png'

const MenuBar = () => {
    return (
        <div>
           
  <Navbar expand="sm" >
  <Container>
     <img className="w-50" href="#home" src={logo} alt="logo" />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link"> Login</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default MenuBar;