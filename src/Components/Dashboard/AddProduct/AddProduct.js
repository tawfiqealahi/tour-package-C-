import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product added successfully");
        }
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-center my-5">Add A Product</h1>
      <form style={{ marginLeft: "200px" }} onSubmit={handleSubmit(onSubmit)}>
        <input className="w-75 p-3" {...register("name")} placeholder="Name" />{" "}
        <br />
        <input
          className="w-75 p-3 my-3"
          {...register("img")}
          placeholder="Image url"
        />{" "}
        <br />
        <input
          className="w-75 p-3"
          {...register("describtion")}
          placeholder="Describtion"
        />{" "}
        <br />
        <input
          className="w-75 p-3 my-3"
          type="number"
          {...register("price")}
          placeholder="Price"
        />{" "}
        <br />
        <input className="w-75 p-3" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
