import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Services from "../../Home/Services/Services";
import AvailableCars from "./AvailableCars/AvailableCars";

const CarCollection = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default CarCollection;
