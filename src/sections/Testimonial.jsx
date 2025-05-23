import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This platform helped me find amazing freelance projects quickly!",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Easy to use and great client communication. Highly recommend.",
  },
  {
    id: 3,
    name: "Sara Williams",
    role: "Content Writer",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Got steady work through this site and excellent support.",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Clean interface and great projects to choose from.",
  },
  {
    id: 5,
    name: "Nina Brown",
    role: "SEO Expert",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Boosted my freelance career with amazing clients.",
  },
  {
    id: 6,
    name: "David Lee",
    role: "Mobile Developer",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Responsive platform with excellent freelance opportunities.",
  },
];

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 10 },
    loop: true,
  });

  return (
    <div className="w-full  bg-primary px-4 py-12  md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold text-accent md:text-4xl">
          What Our Freelancers Say
        </h2>
        <div className="relative">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map(({ id, name, role, img, text }) => (
              <div
                key={id}
                className="keen-slider__slide flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md"
              >
                <img
                  src={img}
                  alt={name}
                  className="mb-4 h-16 w-16 rounded-full border-4 border-[#FF6F00] object-cover sm:h-20 sm:w-20"
                />
                <p className="mb-4 text-[#333333] italic">"{text}"</p>
                <h3 className="font-semibold text-[#333333]">{name}</h3>
                <p className="text-sm text-[#666666]">{role}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on tablets and up */}
          <ArrowLeft
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            className="hidden md:block"
          />
          <ArrowRight
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="hidden md:block"
          />

          {/* Dots Navigation - Visible only on mobile */}
          <div className="mt-6 flex justify-center md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`mx-1 h-2 w-2 rounded-full ${
                  idx === (instanceRef.current?.track.details.rel || 0)
                    ? "bg-[#FF6F00]"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#FF6F00] p-2 text-white shadow transition hover:bg-orange-700 ${className}`}
      aria-label="Previous"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function ArrowRight({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#FF6F00] p-2 text-white shadow transition hover:bg-orange-700 ${className}`}
      aria-label="Next"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
