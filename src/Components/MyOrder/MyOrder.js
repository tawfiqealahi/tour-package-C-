import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

  const handleDeleteOrder = (id) => {
    const sure = window.confirm("Are you sure, you want to order remove");
    if (sure) {
      fetch(`http://localhost:5000/myOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("order remove successfully");
          }
        });
    }
  };

  return (
    <div>
      <h1>My Order</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image url</th>
            <th>Action</th>
          </tr>
        </thead>
        {myOrder?.map((order, index) => (
          <tbody key={myOrder._id}>
            <tr>
              <td>{index}</td>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.image}</td>
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="btn bg-danger p-2"
              >
                Remove
              </button>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyOrder;
