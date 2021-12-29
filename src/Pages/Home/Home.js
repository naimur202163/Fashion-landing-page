import React from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import FlagSection from "../FlagSection/FlagSection";
import PercentBanner from "./../PercentBanner/PercentBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PercentBanner />
      <BannerImg />
      <FlagSection />
    </div>
  );
};

export default Home;
