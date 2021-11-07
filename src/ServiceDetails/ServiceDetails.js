import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState([]);
  // const [package, setPackage] = useState([]);

  useEffect(() => {
    fetch("./package-services.JSON")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
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
      <div className="service-cart container-fluid">
        <div className="row">
          {data?.map((e) => (
            <div
              key={e.id}
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

                  <Link to={`/servicedetails/${e.id}`}>
                    <Button variant="primary">View Details</Button>
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






// import React, { useEffect, useState } from 'react';
// import {  Button, Card } from 'react-bootstrap';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import Footer from '../Components/Footer/Footer';
// import MenuBar from '../Components/Header/MenuBar/MenuBar';

// const ServiceDetails = () => {
//   const {serviceId} = useParams();
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       fetch(`/package-services.JSON/singlePackage/${serviceId}`)
//         .then((res) => res.json())
//         .then((result) => setData(result));
//     });

//     const ExactPackage = data.filter(ep => ep?.id === serviceId);
//      console.log(ExactPackage);

//     return (
//         <div>
//           <MenuBar></MenuBar>
//           <h1> title{ExactPackage.title} </h1>
        
//             <div className="mx-auto">
//                 <div className="row">
//                 <div
//               className="col-md-4 mx-auto services-size col-xl-3 col-sm-6"
//             >
//               <Card className="m-2 card-body">
//               <img className="img-size" src={ExactPackage.image} alt="images" />
//                 <Card.Body>
//                   <Card.Title>{ExactPackage.title}</Card.Title>

                   
//                      <Link to={`/orders/${ExactPackage.id}`}>
//                      <Button variant="primary">View Details</Button>
//                    </Link>
                  
//                 </Card.Body>
//               </Card>
//             </div>
//                 </div>
//             </div>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default ServiceDetails;