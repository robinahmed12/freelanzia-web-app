import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image:
      "https://img.freepik.com/free-photo/young-smiling-man-working-with-laptop-office_1268-21465.jpg",
    titles: [
      "Hire Top Freelancers",
      "Get Work Done Fast",
      "Scale Your Team On Demand",
    ],
    subtitle: "Connect with skilled professionals across the globe.",
    buttonText: "Find Talent",
  },
  {
    image:
      "https://img.freepik.com/free-photo/male-sitting-cafe-with-laptop_23-2147826928.jpg",
    titles: ["Build Your Dream Team", "Freelance. Fast.", "Reliable Talent"],
    subtitle: "Discover expert freelancers for every project.",
    buttonText: "Post a Job",
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
    buttonText: "Start Freelancing",
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
     buttonText: "Get Payment",
  },

  {
    image:
      "https://img.freepik.com/premium-photo/young-man-with-curly-brown-hair-plaid-shirt-using-laptop-desk_653449-26665.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
    titles: [
      "Your Freelance Marketplace",
      "Simple. Safe. Fast.",
      "All Skill Levels",
    ],
    subtitle: "Hire, manage, and pay freelancers with ease.",
     buttonText: "Start Earning",
  },
];

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={5000}
        swappable
        emulateTouch
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`mx-1 h-2 w-8 rounded-full transition-all duration-300 ${
              isSelected ? "bg-orange-600" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        )}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[60vh] md:h-[80vh] w-full">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10" />

            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full lg:h-[600px] h-full"
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-left">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <TypewriterText words={slide.titles} />
                </h1>
                <p className="text-white text-lg md:text-xl opacity-90">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-800  hover:bg-opacity-10 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom shape divider */}
      <div className="absolute -bottom-1 left-0 right-0 z-30 h-16 md:h-24 bg-white w-full">
        <svg
          className="absolute top-0 w-full h-full text-gray-900"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V100H1000V0C750,50 500,100 250,50C166.7,33.3 83.3,16.7 0,0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

const TypewriterText = ({ words }) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
  });

  return (
    <span>
      {text}
      <Cursor cursorColor="#FF6F00" />
    </span>
  );
};

export default Banner;
