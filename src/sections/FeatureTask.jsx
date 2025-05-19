import React, { useEffect } from "react";
import { useState } from "react";
import FeatureCard from "./FeatureCard";

const FeatureTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/task.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <section className=" py-12 mt-20  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] mb-3">
            Popular Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our featured services designed to elevate your experience
          </p>
          <div className="mt-4 w-20 h-1 bg-[#FF6F00] mx-auto"></div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FeatureCard task={task} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTask;
