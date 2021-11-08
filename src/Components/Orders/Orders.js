import React, { useEffect, useState, } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import MenuBar from "../Header/MenuBar/MenuBar";

const Orders = () => {
  const { user } = useFirebase();
  const {id} = useParams();
  const [service, setService]= useState();
  const email = sessionStorage.getItem("email");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.Email = user?.email;
    // console.log(data); 

    fetch("http://localhost:5000/Orders", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };


  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // console.log(service);

  return (
    <div>
      <MenuBar></MenuBar>
      <h3 className="p-3">
        You are booking for :
        <span className="fw-bolder"> Paris and Bordeaux</span>{" "}
      </h3>
      <div className="row container">
        <div className="col-md-6">
      <div className="details-img">
        <img className="w-75" src={service?.image} alt="image" />
      </div>
      <h2> {service?.title}</h2>
      <h5>Price: {service?.price} </h5>



        </div>
        <div className="col-md-6">
           {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="my-3"
          placeholder="Your Full Name"
          type="text"
          {...register("Full Name")}
        />{" "}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="my-3"
          {...register("Package", { required: true })}
          placeholder="Name of Packages"
          defaultValue={service?.title}
          type="text"
        />{" "}
        <br />
        <input
          className="my-3"
          {...register("Number of Packages", { required: true })}
          placeholder="Number of Packages"
          type="number"
        />{" "}
        <br />
        <input
          className="my-3"
          {...register("Email", { required: true })}
          placeholder="Email"
          defaultValue={service?.email}
          type="email"
        /> <br />

<input
          className="my-3"
          {...register("Location", { required: true })}
          placeholder="Location"
          defaultValue={service?.location}
          type="text"
        />{" "}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>} 
        
        {/* <p>Departure Date</p><input
          className="mb-3"
          defaultValue="Departure Date"
          placeholder="Departure Date: D/M/Y"
          
          {...register("Departure Date", { required: true })}
        />{" "}
        <br /> */}
        {/* <input
          className="my-3"
          defaultValue="Arrival Date"
          placeholder="Arrival Date: D/M/Y"
         
          {...register("Arrival Date", { required: true })}
        />{" "}
        <br /> */}
        <select className="mb-3" {...register("Type Trip")}>
          <option value="adventure">adventure</option>
          <option value="cultural">cultural</option>
          <option value="family">family</option>
          <option value="honeymoon">honeymoon</option>
          <option value="shopping">shopping</option>
        </select>{" "}
        <br />
        <input className="bg-info rounded-1 px-2" type="submit"  value="Order Now" />
      </form>

        </div>
      </div>
    </div>
  );
};

export default Orders;
