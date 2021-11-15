import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  return (
    <div className="my-5">
      <h1 className="my-5 text-center">Send Review</h1>
      <form style={{ marginLeft: "200px" }} onSubmit={handleSubmit(onSubmit)}>
        <input className="w-75 p-3" {...register("name")} placeholder="Name" />{" "}
        <br />
        <input
          className="w-75 p-3 my-3"
          {...register("describtion")}
          placeholder="Describtion"
        />{" "}
        <br />
        <input className="w-75 p-3" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
