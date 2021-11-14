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
    id: 1,
    name: "TOYOTA PRIUS SPECS",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$21500",
    img: "https://i.ibb.co/hYs1SHj/car-1.jpg",
  },
  {
    id: 2,
    name: "Kia Seltos",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$25500",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-right-front-three-quarter-3.jpeg?q=85",
  },
  {
    id: 3,
    name: "Hyundai Santa",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$31500",
    img: "https://i.ibb.co/hYs1SHj/car-1.jpghttps://i.ibb.co/2KV0p0V/2021-hyundai-santa-fe-100764926-h.jpg",
  },
  {
    id: 4,
    name: "Jaguar XF",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$55500",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/19826/xf-exterior-right-front-three-quarter.jpeg",
  },
  {
    id: 5,
    name: "2021 Ford Mustang",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$49500",
    img: "https://cdn.carbuzz.com/gallery-images/2018-ford-mustang-convertible-rear-view-driving-carbuzz-630767.jpg",
  },
  {
    id: 6,
    name: "2022 Porsche 911 Turbo",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$69000",
    img: "https://cdn.carbuzz.com/gallery-images/1600/702000/900/702934.jpg",
  },
  {
    id: 7,
    name: "2021 Mercedes-AMG CLA 45",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$55000",
    img: "https://cdn.carbuzz.com/gallery-images/1600/807000/400/807466.jpg",
  },
  {
    id: 8,
    name: "BMW 8 Series",
    description:
      "The Petrol engine is 1798 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Prius has a mileage of 26.27 kmpl & Ground clearance of Prius is 135mm. The Prius is a 5 seater 4 cylinder car and has length of 4540mm, width of 1760mm and a wheelbase of 2700m",
    price: "$90000",
    img: "https://imgd.aeplcdn.com/664x374/cw/ec/41406/BMW-8-Series-Front-view-164822.jpg",
  },
];

const AvailableCars = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Cars In Showroom
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
