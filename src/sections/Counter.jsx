import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Freelancers", value: 12000, suffix: "+" },
  { label: "Projects Completed", value: 58000, suffix: "+" },
  { label: "Clients", value: 9500, suffix: "+" },
  { label: "Countries", value: 85, suffix: "+" },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-primary mt-20 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
            Trusted by Thousands Worldwide
          </h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto text-lg sm:text-xl">
            Join our growing community of professionals and clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-secondary rounded-xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.03] hover:shadow-lg overflow-hidden"
            >
              {/* Animated background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Counter number with animation */}
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-3">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      delay={index * 0.2}
                    />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </h3>
                <p className="text-secondary text-lg sm:text-xl font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 text-orange-400/20 dark:text-orange-600/10 text-6xl sm:text-7xl font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
