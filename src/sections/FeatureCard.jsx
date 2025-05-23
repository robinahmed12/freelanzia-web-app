import React from "react";

const FeatureCard = ({ task }) => {
  return (
    <div className="w-full p-2">
      <div className="bg-primary rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary">
        {/* Image container with gradient overlay */}
        <div className="h-40 sm:h-48 md:h-56 w-full relative group">
          <img
            src={task.image}
            alt={task.taskTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {task.category}
          </span>
        </div>

        {/* Card content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-primary">
            {task.taskTitle}
          </h3>
          <p className="text-secondary line-clamp-3 flex-grow">
            {task.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-medium text-accent flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              ${task.budget}
            </span>
            <span className="text-secondary flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {task.deadline}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
