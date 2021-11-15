import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("admin make successfull");
        }
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-center my-5">Make Admin</h1>
      <form style={{ marginLeft: "200px" }} onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-75 p-3"
          type="email"
          {...register("email")}
          placeholder="Your Email"
        />{" "}
        <br />
        <input
          className="w-75 p-3 my-3"
          type="password"
          {...register("password")}
          placeholder="Password"
        />{" "}
        <br />
        <input className="w-75 p-3" type="submit" value="Add Admin" />
      </form>
    </div>
  );
};

export default MakeAdmin;
