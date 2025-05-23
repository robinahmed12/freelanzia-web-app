import React from "react";
import { Link } from "react-router-dom";

const BrowseCard = ({ task }) => {
  const { category, title, deadline, budget, _id } = task;

  const formatDeadline = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="group relative flex flex-col h-full rounded-xl bg-primary shadow-sm hover:shadow-md transition-all duration-300 border border-primary overflow-hidden">
      {/* Category ribbon */}
      <div className="absolute top-3 right-3 z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/80 dark:text-orange-200">
          {category}
        </span>
      </div>
      
      {/* Main content */}
      <div className="p-5 mt-7 flex-grow">
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 min-h-[56px]">
          {title}
        </h3>
        
        <div className="space-y-4">
          {/* Deadline with icon */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-orange-500 dark:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-secondary">Deadline</p>
              <p className="font-medium text-primary">{formatDeadline(deadline)}</p>
            </div>
          </div>
          
          {/* Budget with icon */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-orange-500 dark:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-secondary">Budget</p>
              <p className="font-medium text-accent">${budget}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with button */}
      <div className="px-5 py-4 bg-secondary border-t border-primary">
        <Link
          to={`/details/${_id}`}
          className="btn-orange w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors duration-300"
        >
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/30 dark:group-hover:border-orange-600/30 pointer-events-none rounded-xl transition-all duration-300"></div>
    </div>
  );
};

export default BrowseCard;