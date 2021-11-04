import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import MenuBar from "../Header/MenuBar/MenuBar";

const Orders = () => {
  const { user } = useFirebase();
  const [events, setEvents] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    // console.log(data); 
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [user.email]);

  return (
    <div>
      <MenuBar></MenuBar>
      <h3 className="p-3">
        You are booking for :
        <span className="fw-bolder"> Paris and Bordeaux</span>{" "}
      </h3>
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
          type="email"
        /> <br />

<input
          className="my-3"
          {...register("Location", { required: true })}
          placeholder="Location"
          type="text"
        />{" "}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>} 
        
        <p>Departure Date</p><input
          className="mb-3"
          defaultValue="Departure Date"
          placeholder="Departure Date: D/M/Y"
          
          {...register("Departure Date", { required: true })}
        />{" "}
        <br />
        <input
          className="my-3"
          defaultValue="Arrival Date"
          placeholder="Arrival Date: D/M/Y"
         
          {...register("Arrival Date", { required: true })}
        />{" "}
        <br />
        <select className="mb-3" {...register("Type Trip")}>
          <option value="adventure">adventure</option>
          <option value="cultural">cultural</option>
          <option value="family">family</option>
          <option value="honeymoon">honeymoon</option>
          <option value="shopping">shopping</option>
        </select>{" "}
        <br />
        <input className="bg-info rounded-1 px-2" type="submit" placeholder="Confirm" />
      </form>
    </div>
  );
};

export default Orders;
