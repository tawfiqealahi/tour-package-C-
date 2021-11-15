import React from 'react';
import banner from '../../../images/topBanner.jpg';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <div className="card bg-dark text-white banner">
                <img src={banner} className="card-img" alt="..."/>
                <div className="card-img-overlay text-left mt-2">
                    <h5 className="card-title me-5">Packags for Sales </h5>
                    <h1 className="card-title ms-5">Find <span className="text-warning">Yours!</span> </h1>
                    <p className="card-text">This is a wider card with supporting text below as a natural <br /> <span className="ms-5">lead-in to additional content. This content is a little bit longer.</span></p>
                    <p className="card-text">The best pice to find <br />
                     Great <span className="text-warning">package tour</span></p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;