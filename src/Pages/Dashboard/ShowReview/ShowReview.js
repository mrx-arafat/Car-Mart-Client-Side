import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Review from "../Review/Review";
import StarIcon from "@mui/icons-material/Star";
const ShowReview = (props) => {
  const { description, firstName, rating } = props.rv;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ py: 5 }}>
        <Typography
          sx={{ color: "info.main", fontWeight: 600 }}
          variant="h5"
          gutterBottom
          component="div"
        >
          {firstName}
        </Typography>

        <Typography variant="h6" gutterBottom component="div">
          {description}
        </Typography>

        <Typography
          sx={{ color: "golden", fontWeight: 600 }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {rating} <StarIcon style={{ color: "gold" }}></StarIcon>
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Clients Review
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ShowReview;
