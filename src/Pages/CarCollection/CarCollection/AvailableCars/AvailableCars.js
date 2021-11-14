import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
  },
  {
    name: "TOYOTA PRIUS SPECS",
    description:
      "Without a doubt, the Valley of flowers is one of the most colourful places in India and the world. A popular meadow for endemic alpine flowers and dazzling natural beauty, it is home to rare and vivid flowers such as orchids, poppies, primulas, marigold, daisies",
    price: "$20000",
    img: "https://i.ibb.co/hYs1SHj/car-1.jpg",
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    space: 10,
  },
];

const AvailableCars = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Cars on
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableCars;
