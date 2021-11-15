import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";

import HomeServices from "../HomeServices/HomeServices";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../../Shared/Footer/Footer";
import ShowReview from "../../Dashboard/ShowReview/ShowReview";
import Review from "../../Dashboard/Review/Review";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <Review></Review>
      <Newsletter></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default Home;
