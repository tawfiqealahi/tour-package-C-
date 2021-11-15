import React from 'react';
import img1 from '../../images/ourAbout.jpg';
import img2 from '../../images/teem1.jpg';
import img3 from '../../images/teem2.jpg';
import img4 from '../../images/teem3.jpg';

const OurAbout = () => {
    return (
        <>
        <div className="container my-5">
            <h1 className="text-center my-5"><strong>WHO</strong> WE ARE</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={img1} alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <p className="text-info">Welcome!</p>
                    <h3>FIND THE RIGHT VEHICLE FOR YOU</h3>
                    <p>We have one of the largest inventory of quality used cars, trucks and SUV’s. We buy and sell all makes and models, and if there is a particular vehicle you are looking for, we can definitely do our best to find it for you! Also our private certified inspector can run the emissions tests and provide you with a test report.</p>
                    <h5><strong>Mark Priston</strong> , director</h5>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <h1 className="text-center my-5">WHY CHOOSE US</h1>
            <div className="row">
                <div className="col-md-4 text-center p-5">
                    <h3>Safe to Buy</h3>
                    <p>Why Choose Us</p>
                    <p>Our business has processed thousands of deals with absolutely no security issues for any of our clients. We use SSL technology that makes it impossible for malicious people to intercept your information.</p>
                </div>
                <div className="col-md-4 text-center p-5 shadow">
                    <h3>Better Business Bureau</h3>
                    <p>Why Choose Us</p>
                    <p>The Better Business Bureau membership means that our business meets accreditation standards, which include a commitment to make a good faith effort to resolve any consumer complaints.</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <h3>Secured Payments</h3>
                    <p>Why Choose Us</p>
                    <p>The technology we use at BudgetCars makes your personal and credit card information unreadable as it travels to our server. Your information is secured behind our internal security systems.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <h1 className="text-center"><strong>MEET</strong> THE TEAM</h1>
            <div className="row p-5">
                <div className="col-md-4 mt-5">
                    <div className="card h-100">
                      <img src={img2} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Anne Haynes</h5>
                        <h6>Director</h6>
                        <p className="card-text">She develops effective mission of the company, motivates the sales staff and cultivates good customer relations.</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="card h-100">
                      <img src={img3} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Linda Brooks</h5>
                        <h6>Sales Manager</h6>
                        <p className="card-text">She effectively manages sales personnel and has a strong knowledge of the departments’ financial data.</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="card h-100">
                      <img src={img4} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">James Wilson</h5>
                        <h6>HR</h6>
                        <p className="card-text">He develops, advises on and implements policies relating to the effective use of staff in our organisation.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default OurAbout;