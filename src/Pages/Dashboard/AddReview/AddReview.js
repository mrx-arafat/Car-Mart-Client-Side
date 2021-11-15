import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review Added successfully");
        reset();
      }
    });
  };

  return (
    <div>
      <h1>Add Your Valueable Review</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="Your Name" /> <br />
        <input
          {...register("description")}
          placeholder="Send Your Thought"
        />{" "}
        <br />
        <input
          {...register("rating", { pattern: /\d+/ })}
          placeholder="Rate in 5"
        />
        {errors.rating && <p>Please Rate in 5</p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
