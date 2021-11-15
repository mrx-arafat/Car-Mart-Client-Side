import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import Orders from "../Orders/Orders";
import img from "../../../images/car-cartoon.jpg";
import { NavLink } from "react-router-dom";

const DashboardHome = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 3,
      }}
    >
      <Grid item xs={12} md={4}>
        <Typography variant="button" display="block" gutterBottom>
          Welcome To Dashboard
        </Typography>
        <Avatar
          variant={"rounded"}
          alt="The image"
          src={img}
          style={{
            width: 300,
            height: 200,
            display: "block",
            margin: "10px auto",
          }}
        />

        <NavLink to="/carcollection">
          <Button variant="contained" endIcon={<SendIcon />}>
            Cars Collection
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={12} md={8}>
        <Orders></Orders>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
