import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-4">
                        <h1 className="text-white">Hours</h1>
                        <p className="text-secondary">Weekdays <span className="text-white  ms-3">9:30am – 7:00pm</span></p>
                        <p className="text-secondary">Saturday  <span className="text-white ms-3">10:00am – 6:00pm</span></p>
                        <p className="text-secondary">Sunday <span className="text-white ms-3">Closed</span></p>
                    </div>
                    <div className="col-md-4 text-secondary">
                        <h1 className="text-white">Link</h1>
                        <p>About Us</p>
                        <p>Find a Used Car</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-white">Newsletter</h1>
                        <p className="text-secondary">By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                        <input className="p-3" type="text" placeholder="Email" />
                        <button className="btn btn-primary p-2 mt-2">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;