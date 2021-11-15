import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ManageAllOrders = () => {
  const [allOrders, setAllorder] = useState([]);
  const [orderId, setOrderId] = useState("");

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("http://localhost:5000/allOrder")
      .then((res) => res.json())
      .then((data) => setAllorder(data));
  }, []);

  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure, you want to order delete");
    if (sure) {
      fetch(`http://localhost:5000/allOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("order delete successfully");
          }
        });
    }
  };

  const handleOrderId = (id) => {
    setOrderId(id);
  };

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/status/${orderId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div>
      <h1>Manage All Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image url</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {allOrders?.map((order, index) => (
          <tbody key={order._id}>
            <tr>
              <td>{index}</td>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.image}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(order?._id)}
                    {...register("status")}
                  >
                    <option placeholder={order.status} value={order?.status}>
                      {order?.status}
                    </option>
                    <option value="approve">approve</option>
                  </select>
                  <button type="submit">Done</button>
                </form>
              </td>
              <button
                onClick={() => handleDelete(order._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageAllOrders;
