import React from "react";

const FeatureCard = ({ task }) => {
  // Safe data access with defaults
  const title = task?.title || "Untitled Task";
  const description = task?.description || "No description available";
  const budget = task?.budget || "0";
  const category = task?.category || "General";

  // Format deadline safely
  const formatDeadline = (date) => {
    if (!date) return "No deadline";
    try {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      console.warn("Invalid date format", date);
      return "Invalid deadline";
    }
  };

  return (
    <div className="w-full p-2  sm:p-3">
      <div className="group bg-primary rounded-xl  overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-primary hover:border-accent relative">
        {/* Category badge with animation */}
        <span
          className="absolute top-3  left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 
                        group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-md"
        >
          {category}
        </span>

        {/* Content area with gradient hover effect */}
        <div className="p-5 mt-5 sm:p-6 space-y-3 relative overflow-hidden">
          {/* Subtle hover effect background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-50/20 to-transparent 
                         opacity-0 group-hover:opacity-100 dark:via-orange-900/10 transition-opacity duration-500"
          />

          <h3
            className="text-lg md:text-xl font-bold text-primary relative z-10 
                        group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
          >
            {title}
          </h3>

          <p
            className="text-secondary line-clamp-3 relative z-10 
                       group-hover:text-gray-800 dark:group-hover:text-orange-100 transition-colors duration-300"
          >
            {description}
          </p>

          {/* Budget and deadline with animated icons */}
          <div className="mt-5 pt-4 flex items-center justify-between border-t border-primary relative z-10">
            <span
              className="font-medium text-accent flex items-center 
                            group-hover:scale-105 transition-transform duration-300"
            >
              <svg
                className="w-4 h-4 mr-1.5 group-hover:rotate-[20deg] transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:font-semibold transition-all duration-300">
                ${budget}
              </span>
            </span>

            <span
              className="text-secondary flex items-center 
                            group-hover:scale-105 transition-transform duration-300"
            >
              <svg
                className="w-4 h-4 mr-1.5 group-hover:animate-bounce transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:font-medium transition-all duration-300">
                {formatDeadline(task?.deadline)}
              </span>
            </span>
          </div>
        </div>

        {/* Animated hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/30 rounded-xl pointer-events-none transition-all duration-500" />
      </div>
    </div>
  );
};

export default FeatureCard;
