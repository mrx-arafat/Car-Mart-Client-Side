import { Avatar, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, price, img, description } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
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

          {/* <Typography variant="h6" gutterBottom component="div">
            {pain}
          </Typography> */}
          <Typography variant="h6" gutterBottom component="div">
            {price}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            STOCK AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Pre Order Now
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
