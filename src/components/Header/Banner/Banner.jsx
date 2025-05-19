import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 8000, easing: (t) => t };

const slides = [
  {
    title: "Find Freelancers Instantly",
    subtitle: "Post a task and get instant offers",
    image: "https://img.freepik.com/premium-photo/deadline-technology-people-concept-happy-creative-man-with-tablet-pc-computer-working-night-office_380164-205349.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
  },
  {
    title: "Work Anywhere, Anytime",
    subtitle: "Flexible freelance opportunities",
    image: "https://img.freepik.com/free-photo/young-male-designer-using-graphics-tablet-while-working-with-com_158595-1129.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
  },
  {
    title: "Secure Task Payments",
    subtitle: "Payments held until work is done",
    image: "https://img.freepik.com/free-photo/handsome-young-latin-editor-retouching-photo-while-making-eye-contact_662251-1052.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
  },
  {
    title: "Browse Talent by Skill",
    subtitle: "Match with the right freelancer",
    image: "https://img.freepik.com/free-photo/brunette-boy-listening-music-earphones-working-outdoors_651396-3004.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
  },
  {
    title: "Grow Your Freelance Career",
    subtitle: "Join, work, earn, repeat",
    image: "https://img.freepik.com/free-photo/bearded-freelancer-working-laptop-living-room-girlfriend-relaxing-sofa-background-using-her-phone-chips_482257-31206.jpg?uid=R138453286&ga=GA1.1.2049865628.1746344725&semt=ais_hybrid&w=740",
  },
];

const Banner = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    slides: { perView: 1 },
  });

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/60 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
              <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-2 sm:mb-4 animate-fade-in-down">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up">
                  {slide.subtitle}
                </p>
                <button className="mt-4 sm:mt-6 md:mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
            onClick={() => sliderRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
