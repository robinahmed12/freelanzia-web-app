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
    slidesPerView: 3,
    spacing: 20,
    loop: true,
  });

  return (
    <div className="max-w-7xl mx-auto px-6 mt-20 py-12 bg-white">
      <h2 className="text-3xl font-bold text-[#FF6F00] mb-8 text-center">
        What Our Freelancers Say
      </h2>
      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map(({ id, name, role, img, text }) => (
            <div
              key={id}
              className="keen-slider__slide bg-[#FFFFFF] border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={img}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#FF6F00]"
              />
              <p className="text-[#333333] mb-4 italic">"{text}"</p>
              <h3 className="text-[#333333] font-semibold">{name}</h3>
              <p className="text-[#666666] text-sm">{role}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <ArrowLeft onClick={() => instanceRef.current?.prev()} />
        <ArrowRight onClick={() => instanceRef.current?.next()} />
      </div>
    </div>
  );
}

function ArrowLeft(props) {
  return (
    <button
      {...props}
      className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#FF6F00] text-white p-2 rounded-full shadow hover:bg-orange-700 transition"
      aria-label="Previous"
      style={{ zIndex: 10 }}
    >
      <svg
        className="w-5 h-5"
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

function ArrowRight(props) {
  return (
    <button
      {...props}
      className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#FF6F00] text-white p-2 rounded-full shadow hover:bg-orange-700 transition"
      aria-label="Next"
      style={{ zIndex: 10 }}
    >
      <svg
        className="w-5 h-5"
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
