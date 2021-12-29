import React from 'react';
import Banner from '../Banner/Banner';
import BannerImg from '../BannerImg/BannerImg';
import PercentBanner from './../PercentBanner/PercentBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <PercentBanner />
            <BannerImg />
        </div>
    );
};

export default Home;