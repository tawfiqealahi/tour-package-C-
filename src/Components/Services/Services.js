import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuBar from "../Header/MenuBar/MenuBar";
import "./Services.css";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="service">
        <h3 className="threed"> OUR PACKAGES</h3>
        <h2 className="prevent-heading">How to Prevent Yourself</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit.
          Aenean ligula eget dolor. Aenean massa.
        </p>
        <input  type="text" className="p-2 m-3" />
        <button  className="btn btn-primary m-1">
          Search
        </button>
      </div>
      <div className="service-cart container">
        <div className="row">
          {data?.map((e) => (
            <div
              key={e._id}
              className="col-md-3 services-size col-xl-3 col-sm-6"
            >
              <Card className="m-2 card-body">
                <Card.Img
                  className="img-size"
                  src={e.image}
                  alt=""
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>

                   
                     <Link to={`/orders/${e._id}`}>
                     <Button variant="primary">Booking</Button>
                   </Link>
                  
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <br />
      </div>

      {/* cart end */}
    </div>
  );
};

export default Services;
