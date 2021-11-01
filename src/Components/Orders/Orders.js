import React from 'react';
import { useForm } from 'react-hook-form';

const Orders = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = (data) => {
       fetch("http://localhost:5000/order", {
           method:"POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(data)
       })
       .then((res)=>res.json())
       .then((result)=> console.log(result))
       console.log(data);

};
    return (
        <div>
            <h1>add order</h1>
             {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="name" type="text" {...register("Name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("Price", { required: true })} placeholder="price" type="number" />
      <input {...register("Description", { required: true })} placeholder="description" type="text" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>} <br /> <br />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Orders;