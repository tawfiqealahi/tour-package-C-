import React from 'react';
import './MenuBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,  Nav, Navbar, } from 'react-bootstrap';
import logo from '../../../image/logo (1).png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MenuBar = () => {
  // const { user } = useFirebase();
  const { user, logOut } = useAuth();
    return (
        <div>
           
  <Navbar expand="sm" className="nav-bar"  >
  <Container>
     <NavLink to="/home"><img className="w-50" href="#home" src={logo} alt="logo" /></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto navlink">
        <Link className="mx-2  navlinks " to="/home">home</Link>
        <Link className="mx-2  navlinks " to="/service">Service</Link>
        <Link className="mx-2  navlinks " to="/orders"> orders</Link>
        <Link className="mx-2  navlinks " to="/allorders"> All Orders</Link>
        <Link className="items" to="/admin">
              <li>{user?.email}</li>
            </Link>
        {
          user.email ? (
            <Link to="/">
              <button
                onClick={logOut}
                className="items btn btn-info p-1 "
              >
                Logout
              </button>
            </Link>
            ) : (
              <Link to="/login">
                <button className="items btn btn-info p-1 ">
                  Register
                </button>
              </Link>
            )}
           


           {/* <Link className="mx-2  navlinks " to="/login" > Log In </Link> */}
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default MenuBar;