import React from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import FlagSection from "../FlagSection/FlagSection";
import Footer from "../Footer/Footer";
import LookBook from "../LookBook/LookBook";
import Lorem from "../Lorem/Lorem";
import OurStyle from "../OurStyle/OurStyle";
import Testominal from "../Testominal/Testominal";
import PercentBanner from "./../PercentBanner/PercentBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PercentBanner />
      <BannerImg />
      <FlagSection />
      <OurStyle />
      <Testominal />
      <Lorem />
      <Footer />
    </div>
  );
};

export default Home;
