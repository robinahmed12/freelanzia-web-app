import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Freelancers", value: 12000 },
  { label: "Projects Completed", value: 58000 },
  { label: "Clients", value: 9500 },
  { label: "Countries", value: 85 },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section ref={ref} className="bg-white mt-20 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-10">
          Trusted by Thousands Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-[#FF6F00]">
                {inView ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  0
                )}
              </h3>
              <p className="text-[#333333] text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
