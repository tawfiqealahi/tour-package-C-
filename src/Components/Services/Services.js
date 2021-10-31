import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./package-services.JSON")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
      <div className="service">
        <h3 className="threed"> PREVENTION</h3>
        <h2 className="prevent-heading">How to Prevent Yourself</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit.
          Aenean ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="service-cart container-fluid">
        <div className="row">
          {data?.map((e) => (
            <div key={e.id} className="col-md-3 services-size col-xl-3 col-sm-6">
                <Card className="m-2 card-body">
  <Card.Img className="img-size" src={e.image} alt="" variant="top" />
  <Card.Body>
    <Card.Title>{e.title}</Card.Title>
    
    <Button variant="primary"><Link to="/servicedetails">View Details</Link></Button>
    {/* <Link to="/servicedetails"><Button variant="primary">View Details</Button></Link> */}
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
