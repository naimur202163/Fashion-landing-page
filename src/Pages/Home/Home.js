import React from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import FlagSection from "../FlagSection/FlagSection";
import Footer from "../Footer/Footer";
import LookBook from "../LookBook/LookBook";
import Lorem from "../Lorem/Lorem";
import PercentBanner from "./../PercentBanner/PercentBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PercentBanner />
      <BannerImg />
      <FlagSection />
      <LookBook />
      <Lorem />
      <Footer />
    </div>
  );
};

export default Home;
