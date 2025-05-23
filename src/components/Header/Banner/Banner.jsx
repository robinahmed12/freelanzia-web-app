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
    <div className="relative overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={5000}
        swipeable
        emulateTouch
        renderIndicator={(onClickHandler, isSelected, index) => (
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
          <div key={index} className="relative h-[70vh] md:h-[90vh] w-full">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-gray-900/20 z-10" />

            {/* Parallax effect container */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full  transform scale-100 hover:scale-105 transition-transform duration-7000 ease-out"
              />
            </div>

            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-left">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <TypewriterText words={slide.titles} />
                </h1>
                <p className="text-white text-lg md:text-xl opacity-90 max-w-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="relative px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-500/30 hover:-translate-y-1 group overflow-hidden">
                    <span className="relative z-10">{slide.buttonText}</span>
                    <span className="absolute inset-0 bg-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 group relative overflow-hidden">
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom wave divider with animation */}
      <div className="absolute -bottom-1 left-0 right-0 z-30 h-24 md:h-32 w-full overflow-hidden">
        <svg
          className="absolute top-0 w-full h-full text-white dark:text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
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
    <span className="inline-block">
      {text}
      <Cursor cursorColor="#FF6F00" cursorStyle="|" cursorBlinking={true} />
    </span>
  );
};

export default Banner;
