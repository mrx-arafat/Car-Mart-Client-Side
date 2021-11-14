import { Grid } from "@mui/material";
import React from "react";
import Orders from "../Orders/Orders";

const DashboardHome = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 3,
      }}
    >
      <Grid item xs={4}>
        <h2>left side</h2>
      </Grid>
      <Grid item xs={8}>
        <Orders></Orders>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
