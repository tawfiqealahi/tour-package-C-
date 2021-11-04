import React from "react";
import "./Footer.css";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        
        <div className="container">
          
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1> <span className="text-danger fw-bolder"> TOUR PACKAGE </span> </h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                   
                  </div>
                  <div className="icon">
                    
                  </div>
                  <div className="icon">
                    
                  </div>
                  <div className="icon">
                 
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
                  </small>
                </p>

                
              </div>
            </div>
            <div className="col-md-1">
              <div className="footer-menu container">
              <Nav className="ms-auto ">
              <NavLink className="menu-item p-2" to="/home">Home</NavLink>
          <NavLink className="menu-item p-2" to="/service" >Services</NavLink>
          <NavLink className="menu-item p-2" to="/order" >Orders</NavLink>
          <NavLink className="menu-item p-2" to="/allorder" >All Orders</NavLink>
    </Nav>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                   
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center ">
                  <small>Tawfiq © . All rights reserved.</small>
                </p>
      </div>
    </div>
  );
};

export default Footer;