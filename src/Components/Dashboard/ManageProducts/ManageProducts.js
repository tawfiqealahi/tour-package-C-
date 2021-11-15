import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure, you want to delete");
    if (sure) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("delete successfully");
          }
        });
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        <strong>Manage</strong> Products
      </h1>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mt-5">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6>{product.price}</h6>
                <p className="card-text">{product.describtion}</p>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
