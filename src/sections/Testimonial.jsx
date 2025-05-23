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
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Easy to use and great client communication. Highly recommend.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Williams",
    role: "Content Writer",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Got steady work through this site and excellent support.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Smith",
    role: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Clean interface and great projects to choose from.",
    rating: 4,
  },
  {
    id: 5,
    name: "Nina Brown",
    role: "SEO Expert",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Boosted my freelance career with amazing clients.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    role: "Mobile Developer",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Responsive platform with excellent freelance opportunities.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-orange-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 16 },
    loop: true,
    dragSpeed: 0.8,
  });

  return (
    <div className="w-full bg-primary px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            What Our Freelancers Say
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-orange-500"></div>
        </div>

        <div className="relative mt-12">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map(({ id, name, role, img, text, rating }) => (
              <div key={id} className="keen-slider__slide">
                <div className="group relative flex h-full flex-col items-center rounded-xl border border-primary bg-secondary p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 transform bg-secondary"></div>
                  <div className="absolute -bottom-4 right-1/2 h-8 w-8 translate-x-1/2 rotate-45 transform bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-orange-500 bg-white p-1 shadow-md">
                    <img
                      src={img}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <StarRating rating={rating} />

                  <p className="mb-4 mt-4 text-secondary text-lg italic transition-all duration-300 group-hover:text-primary">
                    "{text}"
                  </p>

                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold text-primary">
                      {name}
                    </h3>
                    <p className="text-secondary text-sm">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
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

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`mx-1 h-3 w-3 rounded-full transition-all ${
                  idx === (instanceRef.current?.track.details.rel || 0)
                    ? "bg-orange-500 w-6"
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
      className={`absolute left-0 top-1/2 z-10 -ml-4 -translate-y-1/2 rounded-full bg-orange-500 p-3 text-white shadow-lg transition-all hover:scale-110 hover:bg-orange-600 focus:outline-none md:-ml-8 ${className}`}
      aria-label="Previous"
    >
      <svg
        className="h-6 w-6"
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
      className={`absolute right-0 top-1/2 z-10 -mr-4 -translate-y-1/2 rounded-full bg-orange-500 p-3 text-white shadow-lg transition-all hover:scale-110 hover:bg-orange-600 focus:outline-none md:-mr-8 ${className}`}
      aria-label="Next"
    >
      <svg
        className="h-6 w-6"
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
