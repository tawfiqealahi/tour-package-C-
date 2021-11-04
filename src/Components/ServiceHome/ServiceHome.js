import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceHome.css";

const Services = () => {
  const [data, setData] = useState([]);
  // const [package, setPackage] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchValue?search=${search}`)
      .then((res) => res.json())
      .then((result) => setSearch(result));

    // console.log('search ok');
  };

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
        <input onChange={handleInput} type="text" className="p-2 m-3" />
        <button onClick={handleSearch} className="btn btn-primary m-1">
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
