import React from 'react';
import Brands from '../../Brands/Brands';
import About from '../About/About';
import Products from '../Products/Products';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Brands></Brands>
            <Products></Products>
            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;