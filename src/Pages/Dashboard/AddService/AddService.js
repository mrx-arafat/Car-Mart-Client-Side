import { ButtonBase } from "@mui/material";
import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://radiant-shelf-17408.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Service Added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1>Add A Service</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Service Name" /> <br />
        <input {...register("description")} placeholder="Description" /> <br />
        <input {...register("price")} placeholder="$50000" />
        <input {...register("img")} placeholder="image URL" />
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <NavLink to="/carcollection">
        <Button variant="contained" endIcon={<SendIcon />}>
          Cars Collection
        </Button>
      </NavLink>
    </div>
  );
};

export default AddService;
