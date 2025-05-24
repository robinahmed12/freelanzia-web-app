// pages/Home.jsx
import React, { useEffect } from "react";
import Banner from "../../components/Header/Banner/Banner";
import FeatureTask from "../../sections/FeatureTask";
import Counter from "../../sections/Counter";
import Testimonial from "../../sections/Testimonial";
import Animation from "../../components/Animation";
import AboutSection from "../About/AboutSection";
import FreelancerPlatform from "../../sections/FreelancerPlatform";
import TaskSpotlight from "../../sections/TaskSpotlight";
import SkillsMarquee from "../../sections/SkillsMarquee";

const Home = () => {
  return (
    useEffect(() => {
      document.title = "Home";
    }),
    (
      <>
        <Animation delay={0.3}>
          <Banner />
        </Animation>

        <Animation delay={0.4}>
          <SkillsMarquee/>
        </Animation>

        <Animation delay={0.5}>
          <FeatureTask />
        </Animation>

        <Animation delay={0.6}>
          <Counter />
        </Animation>

        <Animation delay={0.7}>
          <AboutSection />
        </Animation>

         <Animation delay={0.8}>
          <TaskSpotlight/>
        </Animation>

        <Animation delay={0.9}>
          <FreelancerPlatform/>
        </Animation>

        

        <Animation delay={0.3}>
          <Testimonial />
        </Animation>

      </>
    )
  );
};

export default Home;
