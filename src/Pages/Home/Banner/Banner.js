import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner.jpg";
import banner2 from "../../../images/banner2.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>SEE CAR DETAILS</h3>
            <p>Car is not my dream, it is my reality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>PRE ORDER LATEST</h3>
            <p>Car is not my dream, it is my reality.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
