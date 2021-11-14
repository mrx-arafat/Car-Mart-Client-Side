import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";

import HomeServices from "../HomeServices/HomeServices";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
