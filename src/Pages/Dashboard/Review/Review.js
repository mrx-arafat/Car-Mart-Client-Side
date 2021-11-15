import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

import ShowReview from "../ShowReview/ShowReview";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://radiant-shelf-17408.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <Typography
        style={{ color: "#DD0148", margin: "20px auto" }}
        variant="h6"
        noWrap
        component="div"
      >
        Clients Reviews
      </Typography>
      <Grid container spacing={2} sx={{ pb: 4 }}>
        {reviews.map((rv) => (
          <ShowReview key={rv._id} rv={rv}></ShowReview>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
