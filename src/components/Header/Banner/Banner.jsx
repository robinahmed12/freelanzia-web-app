import React from "react";
import "keen-slider/keen-slider.min.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image:
      "https://img.freepik.com/free-photo/young-smiling-man-working-with-laptop-office_1268-21465.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
    titles: [
      "Hire Top Freelancers",
      "Get Work Done Fast",
      "Scale Your Team On Demand",
    ],
    subtitle: "Connect with skilled professionals across the globe.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/male-sitting-cafe-with-laptop_23-2147826928.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
    titles: ["Build Your Dream Team", "Freelance. Fast.", "Reliable Talent"],
    subtitle: "Discover expert freelancers for every project.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/girl-student-with-laptop-standing-by-window-corridor_1303-20641.jpg",
    titles: [
      "Post Projects Instantly",
      "Find Work Quickly",
      "Grow Your Career",
    ],
    subtitle: "Join a thriving freelance community.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-content-creator-blonde-girl-with-headphones-working-her-laptop-table-with-camera_1268-17267.jpg?semt=ais_hybrid&w=740",
    titles: [
      "Trusted by Businesses",
      "Easy Hiring Experience",
      "Deliver Excellence",
    ],
    subtitle: "We match you with the right freelancer.",
  },
  {
    image: "https://img.freepik.com/premium-photo/positive-caucasian-man-sitting-desk-evening-time-talking-with-coworkers-via-video-call_161094-9409.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
    titles: [
      "Your Freelance Marketplace",
      "Simple. Safe. Fast.",
      "All Skill Levels",
    ],
    subtitle: "Hire, manage, and pay freelancers with ease.",
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      swipeable
      emulateTouch
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[70vh] md:h-[80vh] w-full">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
              <TypewriterText words={slide.titles} />
            </h1>
            <p className="text-white text-base md:text-lg mt-4 max-w-2xl">
              {slide.subtitle}
            </p>
            <button className="mt-6 px-6 py-2 bg-[#FF6F00] text-white font-semibold rounded hover:bg-orange-700 transition">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const TypewriterText = ({ words }) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <span>
      {text}
      <Cursor />
    </span>
  );
};

export default Banner;
