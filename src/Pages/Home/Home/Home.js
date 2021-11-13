import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
