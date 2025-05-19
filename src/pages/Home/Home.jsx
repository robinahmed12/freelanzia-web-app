import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import FeatureTask from '../../sections/FeatureTask';
import Counter from '../../sections/Counter';
import Testimonial from '../../sections/Testimonial';

const Home = () => {
    return (
        <>
        <Banner/>
        <FeatureTask/>
        <Counter/>
        <Testimonial/>
        </>
    );
};

export default Home;