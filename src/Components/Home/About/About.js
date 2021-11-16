import React from 'react';
import img from '../../../images/bikess.jpg'

const About = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center my-5"><strong>WHAT</strong> WE DO</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-5">
                        <h5> Service</h5>
                        <p>What We Do</p>
                        <p>Maximise the lifespan and value of your car with regular car servicing. Our expert technicians are trained to service any make and model of car using the latest techniques and diagnostic equipment.</p>
                    </div>
                    <div className="mt-5">
                        <h5>Auto Detailing</h5>
                        <p>What We Do</p>
                        <p>Auto detailing goes considerably beyond a typical car wash service to make a vehicle look immaculately clean, inside and out. It can also increase an automobile’s resale value.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="mt-5">
                        <h5>Warranty Information</h5>
                        <p>What We Do</p>
                        <p>A good car warranty is essential to provide you with peace of mind. Our company gives you an aditional guarantee or service contract for all cars. A used-car warranty typically lasts for three, six or 12 months.</p>
                    </div>
                    <div className="mt-5">
                        <h5>Service Specials</h5>
                        <p>What We Do</p>
                        <p>At BudgetCars, we’re dedicated to your savings, and strive to keep your car repair costs as minimal as possible. For maximum savings, our service specials change often to fit the needs of our drivers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;