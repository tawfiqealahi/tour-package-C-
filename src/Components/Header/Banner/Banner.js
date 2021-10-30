import React from 'react';
import './Banner.css';
import { Button } from "react-bootstrap";
import MenuBar from '../MenuBar/MenuBar';

const Banner = () => {
    return (
        <div className="banner ">
                  <div>           <MenuBar></MenuBar>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
                
            </div>
            <div className="col-md-6">
            {/* <div className="hero-writting-part"> */}
              <h1 className="hero-heading">
                Take care of your <br /> Health Now!
              </h1>
              <h3>Sale up to 30% all products</h3>
              <Button className=" m-3  " variant="danger">
                Shop Now
              </Button>
            {/* </div> */}
            </div>
            
            <div className="col-md-4">
                
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;