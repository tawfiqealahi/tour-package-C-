import React, { useEffect, useState } from 'react';
import './AllOrders.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from '../Header/MenuBar/MenuBar';
import { Table } from 'react-bootstrap';


const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    

    const [control, setConrol] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:5000/allorders")
        .then(res=>res.json())
        .then(data=> setOrders(data));
    },[]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteEvent/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setConrol(!control);
            } else {
              setConrol(false);
            }
          });
        console.log(id);
      };

    return (
        <div>
            <MenuBar></MenuBar>
            <h1>Total Orders:   {orders?.length}</h1>
            {/* table */}

            <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Package</th>
            <th>Total Package</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        {
        orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default AllOrders;