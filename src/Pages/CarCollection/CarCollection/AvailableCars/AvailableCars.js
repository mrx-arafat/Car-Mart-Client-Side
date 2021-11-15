import { Alert, Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

const AvailableCars = ({ date }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  useEffect(() => {
    fetch("https://radiant-shelf-17408.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Cars In Showroom
      </Typography>

      {bookingSuccess?.email && (
        <Alert severity="success">Pre Ordered Successfully!</Alert>
      )}

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableCars;
