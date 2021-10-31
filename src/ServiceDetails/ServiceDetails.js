import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';

const ServiceDetails = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("./package-services.JSON")
        .then((res) => res.json())
        .then((result) => setData(result));
    }, []);

    return (
        <div>
            <div className="text-center">
                {data?.map((e) => (
            <div key={e.id} className="col-md-3 services-size col-xl-3 col-sm-6">
                <Card className="m-2 card-body">
  <Card.Img className="img-size" src={e.image} alt="" variant="top" />
  <Card.Body>
    <Card.Title>{e.title}</Card.Title>
    <p>{e.location}</p>
    
    {/* <Button variant="primary">View Details</Button> */}
  </Card.Body>
</Card>
             
            </div>
          ))}
            </div>
        </div>
    );
};

export default ServiceDetails;