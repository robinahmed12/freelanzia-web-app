import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Freelancers", value: 12000 },
  { label: "Projects Completed", value: 58000 },
  { label: "Clients", value: 9500 },
  { label: "Countries", value: 85 },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 mt-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Thousands Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2 sm:mb-3">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  0
                )}
                {index === stats.length - 1 && "+"}{" "}
                {/* Add plus sign for countries */}
              </h3>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
