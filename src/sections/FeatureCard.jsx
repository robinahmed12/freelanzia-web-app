import React from "react";

const FeatureCard = ({ task }) => {
  return (
    <div className="w-full p-2">
      <div className="bg-red rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <div className="h-40 sm:h-48 md:h-56 w-full">
          <img
            src={task.image}
            alt={task.taskTitle}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg md:text-xl font-bold text-[#333333]">
            {task.taskTitle}
          </h3>
          <p className="text-sm md:text-base text-gray-500 mb-2">
            {task.category}
          </p>
          <p className="text-sm md:text-base text-[#333333] line-clamp-3 flex-grow">
            {task.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm md:text-base text-[#333333]">
            <span className="font-medium text-[#FF6F00]">
              💰 ${task.budget}
            </span>
            <span className="text-gray-500">📅 {task.deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
