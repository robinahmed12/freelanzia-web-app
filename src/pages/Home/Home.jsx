// pages/Home.jsx
import React from "react";
import Banner from "../../components/Header/Banner/Banner";
import FeatureTask from "../../sections/FeatureTask";
import Counter from "../../sections/Counter";
import Testimonial from "../../sections/Testimonial";
import Animation from "../../components/Animation";
import AboutSection from "../About/AboutSection";

const Home = () => {
  return (
    <>
      <Animation>
        <Banner />
      </Animation>

      <Animation delay={0.2}>
        <FeatureTask />
      </Animation>

      <Animation delay={0.3}>
        <Counter />
      </Animation>

      <Animation>
        <AboutSection/>
      </Animation>

      <Animation delay={0.4}>
        <Testimonial />
      </Animation>

    </>
  );
};

export default Home;